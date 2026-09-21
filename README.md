# UIC Tech Solutions Open Source Fund Website

This repository contains the source code for the UIC Tech Solutions Open Source Fund (OSF) website. The site has one job: recruit universities as **sustainers** of the fund's Open Source projects (Equalify, AI Leaders, and Plato).

**Live Site:** [https://uic-osf.github.io/website/](https://uic-osf.github.io/website/)

## 🚀 Overview

The UIC OSF website is a modern, responsive React application built to convert one audience — university CIOs — into sustainers. Its headline promise: supporting technology projects that work toward measurable benefit for UIC, University partners, and the public.

**Page flow (`src/App.tsx`):** Hero → Stats → Projects → Sustainer Benefits → What's Asked → About → Team → Sustainer Application → Get in Touch → Newsletter.

**Key Features:**
*   **Sustainer Application:** The conversion point. Modeled on [equalify.uic.edu/sustainers](https://equalify.uic.edu/sustainers), with an added checkbox group so an institution can sustain one, two, or all three projects.
*   **Project Showcase:** Equalify, AI Leaders, and Plato.
*   **Team Section:** Introduces the people a sustainer's designee will work with.
*   **Accessibility:** Built with accessibility in mind, using semantic HTML, fieldsets/legends, and high-contrast colors.

### Sustainer form submission

`SustainerForm.tsx` POSTs the application as JSON to an AWS Lambda Function URL, which validates it
and emails the fund leads via SES. The handler source, deploy command, and instructions for changing
the recipients live in [`backend/sustainer-form/`](backend/sustainer-form/README.md). If the request
fails, the form falls back to a `mailto:osf@uic.edu` draft so an application is never lost.

## 🛠️ Tech Stack

*   **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Deployment:** [GitHub Pages](https://pages.github.com/)

## 💻 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/UIC-OSF/website.git
    cd website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The app should now be running at `http://localhost:5173` (or similar).

## 📦 Building and Deploying

### Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the compiled assets.

### Deploy to GitHub Pages
 
This project is configured to deploy to GitHub Pages automatically via GitHub Actions whenever changes are pushed to the `main` branch.
 
The deployment workflow is defined in `.github/workflows/deploy.yml`.


## 📂 Project Structure

```
uic-osf/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Hero, MicroGrants, etc.)
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles and Tailwind directives
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

## 🤝 Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📝 Content Guidelines

**IMPORTANT:** "Open Source" is religion. It must ALWAYS be capitalized as "Open Source" (capital O, capital S, no hyphen). This rule applies to all content, documentation, and source code comments.

## 📄 License

[MIT License](LICENSE) (or appropriate license if defined)
