import React, { useRef, useState } from 'react';
import { CircleCheckBig, Copy, Mail, Send, TriangleAlert } from 'lucide-react';

/*
 * Applications POST to the osf-sustainer-form Lambda (source in
 * backend/sustainer-form/), which emails them to the fund leads via SES.
 * If the request fails, the form falls back to a mailto: draft.
 */
const SUSTAINER_FORM_ENDPOINT = 'https://aclezaiz3jtumwwg4b2f4f6inm0rdvmk.lambda-url.us-east-2.on.aws/';
const CONTACT_EMAIL = 'osf@uic.edu';

const PROJECTS = [
    { value: 'Equalify', hint: 'Digital accessibility platform' },
    { value: 'AI Leaders', hint: 'Generative AI course material' },
    { value: 'Plato', hint: 'Adaptive learning platform' },
];

const COMMITMENTS = [
    {
        value: '100 staff hours toward feature development and monthly planning meetings',
        label: '100 staff hours toward feature development and monthly planning meetings',
        hint: 'About one workday per month.',
    },
    {
        value: '$10,000 to the UIC Technology Solutions Open Source Fund',
        label: '$10,000 to the UIC Technology Solutions Open Source Fund',
        hint: 'We send an invoice and remittance details after you submit.',
    },
];

const FIELD_CLASS =
    'w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-uic-blue focus:border-uic-blue transition-colors bg-gray-50 focus:bg-white';
const LABEL_CLASS = 'block text-sm font-semibold text-gray-700 mb-2';

interface FormState {
    institution: string;
    projects: string[];
    commitment: string;
    officialName: string;
    officialTitle: string;
    officialEmail: string;
    designeeName: string;
    designeeTitle: string;
    designeeEmail: string;
    designeeDepartment: string;
    notes: string;
    agreeNameUse: boolean;
    attest: boolean;
}

const EMPTY_FORM: FormState = {
    institution: '',
    projects: [],
    commitment: '',
    officialName: '',
    officialTitle: '',
    officialEmail: '',
    designeeName: '',
    designeeTitle: '',
    designeeEmail: '',
    designeeDepartment: '',
    notes: '',
    agreeNameUse: false,
    attest: false,
};

const buildApplicationText = (form: FormState): string =>
    [
        `Institution: ${form.institution}`,
        `Projects to sustain: ${form.projects.join(', ')}`,
        `Annual commitment: ${form.commitment}`,
        '',
        'Approving official',
        `  Name: ${form.officialName}`,
        `  Title: ${form.officialTitle}`,
        `  Email: ${form.officialEmail}`,
        '',
        'Designee',
        `  Name: ${form.designeeName}`,
        `  Title: ${form.designeeTitle || '—'}`,
        `  Email: ${form.designeeEmail}`,
        `  Department: ${form.designeeDepartment || '—'}`,
        '',
        `Notes: ${form.notes || '—'}`,
        '',
        'Agreements',
        '  Agrees to the use of the institution name as described on the application: yes',
        '  Confirms the approving official is authorized to commit resources and that this submission serves as their signature: yes',
    ].join('\n');

type Status = 'idle' | 'submitting' | 'success' | 'error';

export const SustainerForm: React.FC = () => {
    const [form, setForm] = useState<FormState>(EMPTY_FORM);
    const [projectError, setProjectError] = useState(false);
    const [status, setStatus] = useState<Status>('idle');
    const [errors, setErrors] = useState<string[]>([]);
    const [copied, setCopied] = useState(false);
    const projectGroupRef = useRef<HTMLFieldSetElement>(null);

    const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
        setForm((prev) => ({ ...prev, [key]: value }));

    const toggleProject = (project: string) => {
        setProjectError(false);
        setForm((prev) => ({
            ...prev,
            projects: prev.projects.includes(project)
                ? prev.projects.filter((p) => p !== project)
                : [...prev.projects, project],
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.projects.length === 0) {
            setProjectError(true);
            projectGroupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        setStatus('submitting');
        setErrors([]);

        try {
            const response = await fetch(SUSTAINER_FORM_ENDPOINT, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(form),
            });
            const result = await response.json().catch(() => ({}));

            if (!response.ok || !result.ok) {
                setErrors(result.errors?.length ? result.errors : ['Something went wrong on our end.']);
                setStatus('error');
                return;
            }

            setStatus('success');
        } catch {
            setErrors(['We could not reach the server.']);
            setStatus('error');
        }
    };

    const mailtoFallback = () =>
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            `Sustainer Application — ${form.institution}`,
        )}&body=${encodeURIComponent(buildApplicationText(form))}`;

    const copyApplication = async () => {
        await navigator.clipboard.writeText(buildApplicationText(form));
        setCopied(true);
    };

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">Become a Sustainer</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Sign below. We'll invite your designee to the next roadmap meeting.
                        </p>
                    </div>

                    {status === 'success' ? (
                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 md:p-10 text-center">
                            <CircleCheckBig className="w-12 h-12 text-uic-blue mx-auto mb-5" aria-hidden="true" />
                            <h3 className="text-2xl font-bold text-uic-blue mb-3">Application received</h3>
                            <p className="text-gray-700 leading-relaxed max-w-xl mx-auto mb-6">
                                Thank you. We've sent your application to the fund leads and will follow up with{' '}
                                <span className="font-semibold">{form.designeeName || 'your designee'}</span> within two
                                business days.
                            </p>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="inline-flex items-center text-uic-red font-bold hover:underline"
                            >
                                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                                {CONTACT_EMAIL}
                            </a>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 space-y-10">
                            {/* Honeypot */}
                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="website">Website</label>
                                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-uic-blue mb-2">Institution</h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    One-year term from submission, renewable by mutual agreement.
                                </p>
                                <label htmlFor="institution" className={LABEL_CLASS}>
                                    Institution name <span className="text-uic-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="institution"
                                    name="institution"
                                    required
                                    maxLength={200}
                                    placeholder="University of ..."
                                    value={form.institution}
                                    onChange={(e) => update('institution', e.target.value)}
                                    className={FIELD_CLASS}
                                />
                            </div>

                            <fieldset ref={projectGroupRef}>
                                <legend className="text-xl font-bold text-uic-blue mb-2">
                                    Projects to Sustain <span className="text-uic-red">*</span>
                                </legend>
                                <p className="text-sm text-gray-600 mb-4">Select one or more. One commitment covers all of them.</p>

                                {projectError && (
                                    <p className="flex items-center text-sm font-semibold text-uic-red mb-4" role="alert">
                                        <TriangleAlert className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
                                        Select at least one project to sustain.
                                    </p>
                                )}

                                <div className="space-y-3">
                                    {PROJECTS.map((project) => (
                                        <label
                                            key={project.value}
                                            className="flex items-start p-4 bg-white border border-gray-300 rounded-lg cursor-pointer hover:border-uic-blue transition-colors has-[:checked]:border-uic-blue has-[:checked]:ring-1 has-[:checked]:ring-uic-blue"
                                        >
                                            <input
                                                type="checkbox"
                                                name="projects"
                                                value={project.value}
                                                checked={form.projects.includes(project.value)}
                                                onChange={() => toggleProject(project.value)}
                                                className="mt-1 mr-4 w-4 h-4 accent-uic-blue flex-shrink-0"
                                            />
                                            <span>
                                                <span className="block font-semibold text-gray-900">{project.value}</span>
                                                <span className="block text-sm text-gray-600">{project.hint}</span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend className="text-xl font-bold text-uic-blue mb-2">
                                    Annual Commitment <span className="text-uic-red">*</span>
                                </legend>
                                <p className="text-sm text-gray-600 mb-4">Select one.</p>
                                <div className="space-y-3">
                                    {COMMITMENTS.map((commitment) => (
                                        <label
                                            key={commitment.value}
                                            className="flex items-start p-4 bg-white border border-gray-300 rounded-lg cursor-pointer hover:border-uic-blue transition-colors has-[:checked]:border-uic-blue has-[:checked]:ring-1 has-[:checked]:ring-uic-blue"
                                        >
                                            <input
                                                type="radio"
                                                name="commitment"
                                                value={commitment.value}
                                                required
                                                checked={form.commitment === commitment.value}
                                                onChange={() => update('commitment', commitment.value)}
                                                className="mt-1 mr-4 w-4 h-4 accent-uic-blue flex-shrink-0"
                                            />
                                            <span>
                                                <span className="block font-semibold text-gray-900">{commitment.label}</span>
                                                <span className="block text-sm text-gray-600">{commitment.hint}</span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend className="text-xl font-bold text-uic-blue mb-2">Approving Official</legend>
                                <p className="text-sm text-gray-600 mb-4">Whoever can commit institutional resources.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label htmlFor="official_name" className={LABEL_CLASS}>
                                            Name <span className="text-uic-red">*</span>
                                        </label>
                                        <input type="text" id="official_name" name="official_name" required maxLength={100}
                                            value={form.officialName} onChange={(e) => update('officialName', e.target.value)} className={FIELD_CLASS} />
                                    </div>
                                    <div>
                                        <label htmlFor="official_title" className={LABEL_CLASS}>
                                            Title <span className="text-uic-red">*</span>
                                        </label>
                                        <input type="text" id="official_title" name="official_title" required maxLength={100}
                                            value={form.officialTitle} onChange={(e) => update('officialTitle', e.target.value)} className={FIELD_CLASS} />
                                    </div>
                                    <div>
                                        <label htmlFor="official_email" className={LABEL_CLASS}>
                                            Email <span className="text-uic-red">*</span>
                                        </label>
                                        <input type="email" id="official_email" name="official_email" required maxLength={200}
                                            value={form.officialEmail} onChange={(e) => update('officialEmail', e.target.value)} className={FIELD_CLASS} />
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend className="text-xl font-bold text-uic-blue mb-2">Designee</legend>
                                <p className="text-sm text-gray-600 mb-4">
                                    Who attends the monthly roadmap meetings.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="designee_name" className={LABEL_CLASS}>
                                            Name <span className="text-uic-red">*</span>
                                        </label>
                                        <input type="text" id="designee_name" name="designee_name" required maxLength={100}
                                            value={form.designeeName} onChange={(e) => update('designeeName', e.target.value)} className={FIELD_CLASS} />
                                    </div>
                                    <div>
                                        <label htmlFor="designee_title" className={LABEL_CLASS}>Title</label>
                                        <input type="text" id="designee_title" name="designee_title" maxLength={100}
                                            value={form.designeeTitle} onChange={(e) => update('designeeTitle', e.target.value)} className={FIELD_CLASS} />
                                    </div>
                                    <div>
                                        <label htmlFor="designee_email" className={LABEL_CLASS}>
                                            Email <span className="text-uic-red">*</span>
                                        </label>
                                        <input type="email" id="designee_email" name="designee_email" required maxLength={200}
                                            value={form.designeeEmail} onChange={(e) => update('designeeEmail', e.target.value)} className={FIELD_CLASS} />
                                    </div>
                                    <div>
                                        <label htmlFor="designee_department" className={LABEL_CLASS}>Department</label>
                                        <input type="text" id="designee_department" name="designee_department" maxLength={100}
                                            value={form.designeeDepartment} onChange={(e) => update('designeeDepartment', e.target.value)} className={FIELD_CLASS} />
                                    </div>
                                </div>
                            </fieldset>

                            <div>
                                <label htmlFor="notes" className="text-xl font-bold text-uic-blue mb-2 block">
                                    Anything else? <span className="font-normal text-base text-gray-500">(optional)</span>
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    maxLength={1000}
                                    rows={4}
                                    value={form.notes}
                                    onChange={(e) => update('notes', e.target.value)}
                                    className={FIELD_CLASS}
                                />
                            </div>

                            <fieldset>
                                <legend className="text-xl font-bold text-uic-blue mb-2">Use of Institution Name</legend>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    UIC will name your institution in project press releases, on project websites, and in project
                                    emails. You review press releases at the monthly roadmap meeting before they publish.
                                </p>
                                <div className="space-y-3">
                                    <label className="flex items-start text-gray-700 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="agree_name_use"
                                            required
                                            checked={form.agreeNameUse}
                                            onChange={(e) => update('agreeNameUse', e.target.checked)}
                                            className="mt-1 mr-3 w-4 h-4 accent-uic-blue flex-shrink-0"
                                        />
                                        <span>The institution agrees to this use of its name. <span className="text-uic-red">*</span></span>
                                    </label>
                                    <label className="flex items-start text-gray-700 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="attest"
                                            required
                                            checked={form.attest}
                                            onChange={(e) => update('attest', e.target.checked)}
                                            className="mt-1 mr-3 w-4 h-4 accent-uic-blue flex-shrink-0"
                                        />
                                        <span>
                                            The approving official above is authorized to commit these resources, and this
                                            submission serves as their signature. <span className="text-uic-red">*</span>
                                        </span>
                                    </label>
                                </div>
                            </fieldset>

                            <div>
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-5" role="alert">
                                        <p className="flex items-center font-bold text-uic-red mb-2">
                                            <TriangleAlert className="w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                                            We couldn't submit your application
                                        </p>
                                        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
                                            {errors.map((error) => (
                                                <li key={error}>{error}</li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a
                                                href={mailtoFallback()}
                                                className="inline-flex items-center justify-center px-5 py-2.5 bg-uic-blue text-white text-sm font-bold rounded-lg hover:bg-blue-900 transition-colors"
                                            >
                                                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                                                Email it instead
                                            </a>
                                            <button
                                                type="button"
                                                onClick={copyApplication}
                                                className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-uic-blue text-sm font-bold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                                            >
                                                <Copy className="w-4 h-4 mr-2" aria-hidden="true" />
                                                {copied ? 'Copied' : 'Copy application'}
                                            </button>
                                        </div>
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full inline-flex items-center justify-center bg-uic-red hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                                    {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
                                </button>
                                <p className="text-sm text-gray-600 mt-4 text-center">
                                    Have questions, or prefer a signed letter? Email{' '}
                                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-uic-red hover:underline">
                                        {CONTACT_EMAIL}
                                    </a>
                                    .
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
