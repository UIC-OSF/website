# UIC Tech Solutions Open Source Fund Website

This repository contains the source code for the UIC Tech Solutions Open Source Fund (OSF) website. The website serves to inform visitors about the fund, aggregate open bounties from supported projects, and solicit partnerships.

**Live Site:** [https://uic-osf.github.io/website/](https://uic-osf.github.io/website/)

## 🚀 Overview

The UIC OSF website is a modern, responsive React application designed to highlight the fund's mission: supporting technology projects that work toward measurable public benefit.

**Key Features:**
*   **Dynamic Bounty Aggregation:** Fetches and displays open issues tagged with "bountied" from GitHub repositories (1111, AI Leaders, Equalify).
*   **Project Showcase:** Highlights supported Open Source projects.
*   **Team Section:** Introduces key team members.
*   **Partnership Solicitation:** Encourages organizations to partner with the fund.
*   **Accessibility:** Built with accessibility in mind, using semantic HTML and high-contrast colors.

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
│   ├── components/      # Reusable UI components (Hero, Bounties, etc.)
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
