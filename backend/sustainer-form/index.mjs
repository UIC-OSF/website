/*
 * Sustainer application handler for osf.it.uic.edu.
 *
 * Receives the JSON payload from src/components/SustainerForm.tsx and emails it
 * to the fund leads via SES. Deployed as a Lambda Function URL — see README.md
 * in this directory for the deploy command.
 */
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const ses = new SESv2Client({ region: process.env.AWS_REGION || 'us-east-2' });

const EMAIL_FROM = process.env.EMAIL_FROM || 'UIC Open Source Fund <noreply@equalify.uic.edu>';
const NOTIFY = (process.env.SUSTAINER_NOTIFY_EMAIL || 'b3b@uic.edu,stefinp@uic.edu')
    .split(',')
    .map((address) => address.trim())
    .filter(Boolean);

// Publishes SEND/DELIVERY/BOUNCE events to CloudWatch metrics so a missing email
// can be traced to a real delivery status instead of a guess.
const CONFIG_SET = process.env.SES_CONFIGURATION_SET || 'osf-sustainer-form';

const ALLOWED_PROJECTS = ['Equalify', 'AI Leaders', 'Plato'];
const ALLOWED_COMMITMENTS = [
    '100 staff hours toward feature development and monthly planning meetings',
    '$10,000 to the UIC Technology Solutions Open Source Fund',
];

const MAX_BODY_BYTES = 20_000;
const EMAIL_RE = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/;

const json = (statusCode, payload) => ({
    statusCode,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
});

const str = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

function validate(input) {
    const errors = [];

    // Honeypot: real applicants never see this field.
    if (str(input.website, 200)) return { errors: ['rejected'] };

    const application = {
        institution: str(input.institution, 200),
        projects: Array.isArray(input.projects)
            ? input.projects.filter((p) => ALLOWED_PROJECTS.includes(p))
            : [],
        commitment: str(input.commitment, 200),
        officialName: str(input.officialName, 100),
        officialTitle: str(input.officialTitle, 100),
        officialEmail: str(input.officialEmail, 200),
        designeeName: str(input.designeeName, 100),
        designeeTitle: str(input.designeeTitle, 100),
        designeeEmail: str(input.designeeEmail, 200),
        designeeDepartment: str(input.designeeDepartment, 100),
        notes: str(input.notes, 1000),
        agreeNameUse: input.agreeNameUse === true,
        attest: input.attest === true,
    };

    if (!application.institution) errors.push('Institution is required.');
    if (application.projects.length === 0) errors.push('Select at least one project to sustain.');
    if (!ALLOWED_COMMITMENTS.includes(application.commitment)) errors.push('Select an annual commitment.');
    if (!application.officialName) errors.push("Approving official's name is required.");
    if (!application.officialTitle) errors.push("Approving official's title is required.");
    if (!EMAIL_RE.test(application.officialEmail)) errors.push("Approving official's email is invalid.");
    if (!application.designeeName) errors.push("Designee's name is required.");
    if (!EMAIL_RE.test(application.designeeEmail)) errors.push("Designee's email is invalid.");
    if (!application.agreeNameUse) errors.push('Agreement to the use of the institution name is required.');
    if (!application.attest) errors.push('Confirmation of signing authority is required.');

    return { errors, application };
}

const body = (a, meta) =>
    [
        'A new sustainer application was submitted at osf.it.uic.edu.',
        '',
        `Institution:          ${a.institution}`,
        `Projects to sustain:  ${a.projects.join(', ')}`,
        `Annual commitment:    ${a.commitment}`,
        '',
        'APPROVING OFFICIAL',
        `  Name:       ${a.officialName}`,
        `  Title:      ${a.officialTitle}`,
        `  Email:      ${a.officialEmail}`,
        '',
        'DESIGNEE',
        `  Name:       ${a.designeeName}`,
        `  Title:      ${a.designeeTitle || '—'}`,
        `  Email:      ${a.designeeEmail}`,
        `  Department: ${a.designeeDepartment || '—'}`,
        '',
        'NOTES',
        `  ${a.notes || '—'}`,
        '',
        'AGREEMENTS',
        '  [x] Agrees to the use of its name in press releases, on project websites, and in project emails.',
        '  [x] Confirms the approving official is authorized to commit institutional resources and that',
        '      this submission serves as their signature.',
        '',
        '—',
        `Submitted: ${meta.submittedAt}`,
        `Source IP: ${meta.sourceIp}`,
        `Term:      One year from submission, renewable by mutual agreement.`,
        '',
        'Reply to this email to reach the approving official directly.',
    ].join('\n');

export const handler = async (event) => {
    const method = event?.requestContext?.http?.method || event?.httpMethod || 'POST';
    if (method === 'OPTIONS') return { statusCode: 204 };
    if (method !== 'POST') return json(405, { ok: false, errors: ['Method not allowed.'] });

    let input;
    try {
        const raw = event.isBase64Encoded
            ? Buffer.from(event.body || '', 'base64').toString('utf8')
            : event.body || '';
        if (raw.length > MAX_BODY_BYTES) return json(413, { ok: false, errors: ['Submission too large.'] });
        input = JSON.parse(raw);
    } catch {
        return json(400, { ok: false, errors: ['Could not read the submission.'] });
    }

    const { errors, application } = validate(input);
    if (errors.length) return json(400, { ok: false, errors });

    const meta = {
        submittedAt: new Date().toISOString(),
        sourceIp: event?.requestContext?.http?.sourceIp || 'unknown',
    };

    let messageId;
    try {
        const sent = await ses.send(
            new SendEmailCommand({
                FromEmailAddress: EMAIL_FROM,
                Destination: { ToAddresses: NOTIFY },
                ReplyToAddresses: [application.officialEmail],
                ConfigurationSetName: CONFIG_SET,
                Content: {
                    Simple: {
                        Subject: {
                            Data: `Sustainer Application — ${application.institution} (${application.projects.join(', ')})`,
                            Charset: 'UTF-8',
                        },
                        Body: { Text: { Data: body(application, meta), Charset: 'UTF-8' } },
                    },
                },
            }),
        );
        messageId = sent.MessageId;
    } catch (error) {
        console.error('SES send failed:', error);
        return json(502, { ok: false, errors: ['We could not send your application. Please email osf@uic.edu.'] });
    }

    console.log(
        `Sustainer application emailed: ${application.institution} [${application.projects.join(', ')}] ` +
            `to ${NOTIFY.join(', ')} messageId=${messageId}`,
    );
    return json(200, { ok: true });
};
