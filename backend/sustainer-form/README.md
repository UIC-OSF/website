# osf-sustainer-form

Lambda behind the sustainer application form on [osf.it.uic.edu](https://osf.it.uic.edu).
It validates the submission and emails it to the fund leads through SES.

| | |
|---|---|
| **Function** | `osf-sustainer-form` (us-east-2, nodejs22.x) |
| **Endpoint** | `https://aclezaiz3jtumwwg4b2f4f6inm0rdvmk.lambda-url.us-east-2.on.aws/` |
| **Role** | `osf-sustainer-form-role` — basic execution + `ses:SendEmail` restricted to the `noreply@equalify.uic.edu` sender |
| **Sends from** | `UIC Open Source Fund <noreply@equalify.uic.edu>` (`EMAIL_FROM`) |
| **Sends to** | `b3b@uic.edu`, `stefinp@uic.edu` (`SUSTAINER_NOTIFY_EMAIL`, comma separated) |
| **Reply-To** | the approving official's address, so replying reaches the applicant |
| **Logs** | `/aws/lambda/osf-sustainer-form` |

The endpoint is a public Lambda Function URL (`AuthType: NONE`) with CORS limited to
`osf.it.uic.edu`, `uic-osf.github.io`, and `localhost:5173`. Reserved concurrency is capped at 5,
and the handler rejects bodies over 20 KB plus anything that fills the hidden `website` honeypot.

## Changing the recipients

No redeploy needed — just update the environment variable:

```bash
aws lambda update-function-configuration --region us-east-2 \
  --function-name osf-sustainer-form \
  --environment 'Variables={EMAIL_FROM=UIC Open Source Fund <noreply@equalify.uic.edu>,SUSTAINER_NOTIFY_EMAIL=b3b@uic.edu\,stefinp@uic.edu}'
```

## Deploying code changes

```bash
cd backend/sustainer-form
npm run deploy      # bundles index.mjs + the SES SDK, then updates the function
```

## Smoke test

```bash
curl -X POST https://aclezaiz3jtumwwg4b2f4f6inm0rdvmk.lambda-url.us-east-2.on.aws/ \
  -H 'content-type: application/json' \
  -d '{"institution":"TEST - ignore","projects":["Plato"],
       "commitment":"100 staff hours toward feature development and monthly planning meetings",
       "officialName":"T","officialTitle":"CIO","officialEmail":"you@uic.edu",
       "designeeName":"T","designeeEmail":"you@uic.edu","agreeNameUse":true,"attest":true}'
# => {"ok":true}
```

A missing or invalid field returns `400` with `{"ok":false,"errors":[...]}`, which the form
renders inline. If the request fails outright, the form falls back to a `mailto:osf@uic.edu` draft
so an application is never lost.

## Note on the sender domain

`uic.edu` is not a verified SES identity, so mail cannot be sent *from* `osf@uic.edu`.
The verified domains on this account are `equalify.uic.edu`, `equalifyapp.com`, and `ai-leaders.org`.
To send as `osf@it.uic.edu` or similar, verify that domain in SES first, then update `EMAIL_FROM`
and the `ses:FromAddress` condition on the role policy.
