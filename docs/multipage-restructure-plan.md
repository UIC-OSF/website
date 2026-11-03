# OSF website restructure plan

Status: Draft for review — planning only; implementation follows review.  
Planning branch: `plan/multipage-restructure`  
Baseline: `main` at `eb67ece1a68a23ee3616fc9818e62ad8be06b397` (reviewed November 3, 2026).

## Purpose and positioning

Expand the site from one sustainer recruitment page into three pages serving people who want to understand OSF, sustain an existing project, or request that their project be considered for listing.

The landing page must clearly state that OSF helps technology projects at UIC align with the University's mission and support its stakeholders, while growing a culture of collaboration with like-minded organizations. Name students, faculty, and administrators explicitly. Explain how partnerships with organizations that share these priorities help sustain that work through ongoing maintenance, shared priorities, staff contributions, and financial support.

Proposed Home hero copy for review:

> **Helping UIC technology projects advance our mission.**
>
> The UIC Technology Solutions Open Source Fund helps technology projects at UIC align with the University's mission and support our students, faculty, administrators, and other stakeholders. We grow a culture of collaboration with like-minded organizations, building partnerships that sustain this work over time.

Lead with mission and people, then explain the Open Source approach and partnership model. Use plain language for general stakeholders; explain “sustainer” and “Project Committee” when first introduced. Preserve the existing requirement for measurable UIC and public benefit and the University's governance boundaries.

## Site structure

| Page | Proposed URL | Main visitor goal | Main action |
| --- | --- | --- | --- |
| Home | `/` | Understand OSF and choose how to participate | Sustain a Project / Submit a Project |
| Sustain a Project | `/sustain-a-project/` | Explore existing projects, understand partnership commitments, and apply | Apply to Become a Sustainer |
| Submit a Project | `/submit-a-project/` | Understand project fit and request consideration for listing | Submit a Project for Review |

“About OSF” belongs on Home as an anchored section, keeping this release to three pages. The current single page becomes Sustain a Project, retaining its substantive content and application. Home provides a shorter, broader introduction rather than duplicating the entire sustainer journey.

## Content direction by page

### Home

Audience: University students, faculty, administrators, project owners, and prospective partner organizations.

Recommended section order:

1. **Mission hero.** State the purpose directly using the proposed positioning above: help UIC technology projects align with the University's mission, support its stakeholders, and grow a culture of collaboration with like-minded organizations. Show “Sustain a Project” and “Submit a Project” side by side, with equal prominence as visitor choices, using the existing primary/secondary button styles. Add an “About OSF” text link for visitors who first want context.
2. **About OSF: align, collaborate, sustain.** Explain three parts of the work in the existing card pattern: help existing projects and new ideas align with the University mission and stakeholder needs; grow collaboration across UIC and like-minded organizations; build partnerships that support maintenance and continued improvement. Describe OSF as the existing collaborative governance body, with Project Committees setting shared priorities within UIC's retained authority.
3. **Who this work serves.** Make students, faculty, and administrators explicit. Describe needs such as accessible services, learning tools, and effective University operations as areas of purpose, without implying that OSF already has a project in every area. Explain how organizations with similar needs can participate.
4. **Current work.** Feature concise examples from Equalify and AI Leaders, including Plato under AI Leaders. Describe the problem, beneficiaries, and shared value before technical capabilities. Link to the full current-project section on Sustain. Reuse existing project imagery and data; do not invent impact statistics.
5. **How participation works.** Offer two clear paths: contribute to sustaining an existing project, or request review of a project for listing. Explain shared staff effort, financial support, and ongoing collaboration at a high level; put detailed pledge terms on Sustain.
6. **People and contact.** Reuse a compact team introduction and link to the full team on Sustain. Keep `osf@uic.edu` and the existing newsletter option available for visitors who are still learning.

Content ownership: Home owns the broad OSF mission story. Sustain keeps the detailed partnership, governance, and application information.

### Sustain a Project

Audience: Prospective partner organizations and individuals considering an ongoing commitment.

Relocate the current single page to this URL, retaining its complete substantive journey: hero, stats, About, Projects, Benefits, What's Asked, Team, sustainer application, and newsletter. Reuse the existing components and order initially to keep the move easy to review.

Update the content as follows:

- **Hero:** Use the page title “Sustain a Project” and a short explanation of sustaining technology that serves shared mission priorities. Keep “Apply to Become a Sustainer” and “Explore Projects” actions.
- **About:** Keep the UIC/public/sustainer benefit explanation, Open Source definition, mission context, and governance boundaries. Add a link to Home's broader OSF introduction.
- **Projects:** Preserve Equalify and AI Leaders committees, Plato's relationship to AI Leaders, repository links, meeting details, and current sustainer list. Start descriptions with beneficiaries and purpose; retain useful technical detail.
- **Benefits:** Emphasize shared maintenance, collaboration, and participation in project direction. Keep the distinction between license costs and the actual costs of operating or maintaining software.
- **What's Asked:** Retain the current minimum annual pledge of 100 staff hours or $10,000, one pledge covering joined committees, and any committee-specific requirements. Replace the contradictory “Nothing else” summary with an accurate explanation of the minimum and possible additional obligations.
- **Team and application:** Preserve the existing institution/individual paths, committee selection, authorization, public-designee disclosure, submission handling, and email/copy fallback.
- **Cross-link:** Replace About's existing “Propose a project” email link with “Submit a Project,” linking to the new page.

Keep pledge-oriented statistics here. Review numerical and scheduling claims before release; do not use unverified outcomes to promote the new Home page.

### Submit a Project

Audience: People with University technology work that may benefit from OSF visibility, collaboration, and sustained support.

Proposed introduction:

> **Submit a Project**
>
> We support existing Open Source projects and new ideas. Whether your project has one contributor or one million, it must have a clear problem statement validated by University and external stakeholders. Tell us what problem you are solving, who has validated it, and what support could help the work move forward.

Recommended section order:

1. **Purpose and expectations.** Explain that submission requests consideration for listing and an OSF conversation. Receipt does not mean acceptance, public listing, funding, hosting, or a staffing commitment. No sustainer pledge is required to submit.
2. **What we support.** State that OSF supports both existing Open Source projects and new ideas, regardless of contributor count. Every project must have a clear problem statement validated by both University and external stakeholders. Explain that mission alignment, stakeholder support, and a validated need guide consideration. Production use, repository availability, and contributor count are not prerequisites for submitting a new idea. Retain the direction that OSF-supported code is public under an OSI-approved license, with guidance for ideas that do not yet have code.
3. **Resources to help your project.** Add a reusable resources component before the preparation checklist and intake, using the existing card style. Include a governance template, Ann's connections to internal and external stakeholders, and help connecting with internal and external resources. Use clear actions such as “View the governance template” and “Ask about stakeholder connections.” Supply the actual template link and agreed contact route before implementation; do not invent destinations or promise introductions to particular people. Explain that these resources can help teams develop governance, connect with stakeholders to validate their problem statement, and identify support for continued work.
4. **What to prepare.** Use a concise checklist that corresponds directly to the intake fields, including the problem statement and how University and external stakeholders validated it.
5. **Project intake.** Reuse the existing labeled form, fieldsets, helper text, validation, and button patterns. Keep a short required core, with optional details for fuller context.
6. **What happens next?** Proposed process for OSF review: receive submission → assess mission fit, problem statement, and validation by University and external stakeholders → discuss sustainability and potential partners → communicate the decision and any listing/onboarding steps. Confirm the responsible reviewer before launch; publish no response deadline until one is agreed.
7. **Contact alternative.** Offer `osf@uic.edu` for questions or help preparing a submission.

Proposed form fields:

| Required core | Optional context |
| --- | --- |
| Contact name, email, and University/organization affiliation or role | Website or repository URL |
| Project name and clear problem statement | License or current Open Source status; allow “not yet decided” for new ideas |
| Who benefits and how the work advances the University mission | Maintainers, existing users, and evidence of use |
| Validation by University stakeholders and external stakeholders: who or which groups, how they validated the problem, and what was learned | Supporting links or documents for the validation |
| Current stage: idea, pilot, or production | Potential partners and shared needs |
| Sustainability needs and what the submitter is requesting | Existing resources and other useful context |

Existing projects and new ideas are both supported. Use stage information to tailor the conversation and resources, rather than exclude early ideas. Require a clear problem statement and validation from both University and external stakeholders at every stage; do not require an existing repository or a minimum contributor count. Teams still developing that validation can use the resources component to prepare. Contributor count does not need to be a required form field.

Add clear helper text distinguishing private contact/review information from any project information proposed for public listing. A submission should not automatically publish anything.

On successful delivery, acknowledge receipt and explain review without promising acceptance. On failure, preserve entered information, explain the problem, and offer retry plus copy/email options. Opening an email draft is not a successful submission.

## UX changes and visual continuity

**Keep the same visual style and interaction patterns.** This is an information architecture and content restructure, with the new pages built from the existing design system.

Preserve UIC red `#D50032`, UIC blue `#001E62`, Inter/system typography, institutional branding, white/light-gray sections, soft hero gradients, generous spacing, rounded cards, Lucide icons, pill-shaped hero buttons, and the current form styling. Reuse the institutional header/footer and shared components across all three pages.

| Current experience | Proposed experience |
| --- | --- |
| Visitors enter a long page centered on becoming a sustainer | Visitors enter a mission-led Home and choose a relevant path |
| OSF section navigation appears after the hero | Persistent OSF page navigation appears before page content: Home · Sustain a Project · Submit a Project |
| “Apply” can refer only to one form | Use explicit action labels so submitting a project and applying as a sustainer stay distinct |
| Section links are the primary wayfinding | Global page links identify the current page; Sustain retains separate local section navigation |
| Proposing a project opens an email draft | Submit explains support for existing projects and new ideas, offers governance and stakeholder resources, then provides a distinct intake and contact alternative |

The OSF name links Home. Keep OSF navigation visibly separate from the existing Technology Solutions institutional links, so visitors can distinguish University-wide navigation from this site's pages. Provide the same three page choices on mobile with readable, keyboard-accessible controls. Keep the long Sustain page's local section menu, with “Apply to Become a Sustainer” replacing the ambiguous “Apply.”

Preserve skip navigation and semantic headings, with one H1 per page. Use normal links for navigation, visible focus indicators, correct active-page semantics, labeled form fields, accessible error/receipt messages, and reduced-motion support. Section jumps must account for sticky navigation so headings and focused controls remain visible.

## Implementation direction after review

1. **Keep all work on the feature branch.** Continue on `plan/multipage-restructure` or a separate implementation branch based on it. Do not merge, dispatch production deployment, or change the live site's deployment target during review. The current workflow deploys on pushes to `main` and also supports manual dispatch.
2. **Reuse the existing stack.** Keep React, TypeScript, Vite, and Tailwind. Extract the current page into a Sustain page component, retain the shared Layout, and compose Home and Submit from reused patterns.
3. **Make each URL directly accessible on GitHub Pages.** Recommended approach: a Vite multi-page build with real HTML entries at `index.html`, `sustain-a-project/index.html`, and `submit-a-project/index.html`, sharing React components. This supports direct loads and refreshes without depending on a server rewrite. Give each entry its own title, description, canonical URL, and social metadata. Confirm output/asset paths against the custom domain in `public/CNAME`: `osf.it.uic.edu`.
4. **Preserve old links.** Map the current root section fragments — `#about-section`, `#projects-section`, `#benefits-section`, `#ask-section`, `#team-section`, `#sustainer-section`, and `#newsletter-section` — to the matching anchors on Sustain. Keep those anchor IDs there. Use a new Home-specific anchor such as `#about-osf` for its introduction.
5. **Separate the two submission types.** Preserve the sustainer form's existing Lambda integration. Add a distinct project-intake payload and handler/endpoint with its own validation and notification routing; do not submit project nominations to the sustainer-specific pledge schema. Confirm the review inbox/owner. Permit the agreed preview origin in CORS if needed for testing.
6. **Update documentation.** Replace the README's single-audience/single-page description with the three audiences, routes, content ownership, local build instructions, and separate form behavior. Preserve the repository's “Open Source” capitalization convention.
7. **Review in isolation.** Use a local or isolated preview that does not publish through the production Pages workflow. Send preview/test submissions only to a designated test recipient; avoid triggering live application notifications during checks.

## Acceptance checks for implementation

- Home explicitly states that OSF helps UIC technology projects align with the University's mission and support its stakeholders while growing a culture of collaboration with like-minded organizations; both participation paths are visible on desktop and mobile.
- All current substantive content and the working sustainer application remain available under Sustain.
- Submit clearly distinguishes project review from sustainer commitments, with working delivery, receipt, validation, and failure recovery.
- Submit welcomes existing Open Source projects and new ideas at any contributor count, requires a clear problem statement validated by University and external stakeholders, and provides the governance template, Ann's stakeholder connections, and internal/external resource guidance in the existing visual pattern.
- Direct visits and refreshes work at all three URLs; old section links, cross-page links, assets, and browser Back/Forward work.
- Shared layout, style, forms, and motion remain consistent; keyboard use, focus, headings, labels, contrast, and mobile navigation are checked.
- Each page has appropriate metadata on the intended domain.
- Run `npm ci`, `npm run build`, and `npm run lint`; check generated nested pages and both form paths in an isolated preview.
- The feature branch remains separate and the production deployment is unchanged until the reviewed implementation is approved for release.

## Decisions for this review

- Approve or revise the proposed mission positioning and three-page content structure.
- Support for existing Open Source projects and new ideas at any contributor count is established by this review update. Every submission needs a clear problem statement validated by University and external stakeholders. Confirm the preferred evidence format and any additional requirements before public listing, including how projects originating outside UIC relate to UIC's mission.
- Supply the governance template URL and the contact route for Ann's stakeholder connections and resource guidance.
- Confirm the project-review owner/inbox, review process, and which information may be published after acceptance.
- Confirm any changes to existing sustainer terms or claims; this plan otherwise preserves the present program terms.

## Source notes

This plan combines the repository source at the baseline above with the user's review direction on landing-page purpose, resources, and support for existing projects and new ideas. That review direction supersedes earlier source wording that emphasized production use. The public site is a client-rendered application; the browser text fetch did not expose its rendered content. Source references:

- [Current page composition](https://github.com/UIC-OSF/website/blob/eb67ece1a68a23ee3616fc9818e62ad8be06b397/src/App.tsx)
- [Current mission, governance, project-fit text, and proposal email link](https://github.com/UIC-OSF/website/blob/eb67ece1a68a23ee3616fc9818e62ad8be06b397/src/components/About.tsx)
- [Project committees and sustainers](https://github.com/UIC-OSF/website/blob/eb67ece1a68a23ee3616fc9818e62ad8be06b397/src/components/Projects.tsx)
- [Current sustainer application](https://github.com/UIC-OSF/website/blob/eb67ece1a68a23ee3616fc9818e62ad8be06b397/src/components/SustainerForm.tsx)
- [Shared layout](https://github.com/UIC-OSF/website/blob/eb67ece1a68a23ee3616fc9818e62ad8be06b397/src/components/Layout.tsx), [section navigation](https://github.com/UIC-OSF/website/blob/eb67ece1a68a23ee3616fc9818e62ad8be06b397/src/components/StickyNav.tsx), and [design tokens](https://github.com/UIC-OSF/website/blob/eb67ece1a68a23ee3616fc9818e62ad8be06b397/tailwind.config.js)
- [Deployment workflow](https://github.com/UIC-OSF/website/blob/eb67ece1a68a23ee3616fc9818e62ad8be06b397/.github/workflows/deploy.yml) and [form backend documentation](https://github.com/UIC-OSF/website/blob/eb67ece1a68a23ee3616fc9818e62ad8be06b397/backend/sustainer-form/README.md)
