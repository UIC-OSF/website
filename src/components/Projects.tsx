import React from 'react';
import { ArrowRight, Brain, Github } from 'lucide-react';
import equalifyLogo from '../assets/equalify-square.png';

interface Repo {
    name: string;
    href: string;
}

interface ProjectCardProps {
    title: string;
    description: React.ReactNode;
    icon: React.ReactNode;
    href: string;
    ctaLabel: string;
    repos: Repo[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, href, ctaLabel, repos }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        <div className="mb-6 h-16 flex items-center justify-start">
            <div className="flex items-center space-x-3">
                <div className="p-3 bg-uic-blue/10 rounded-lg text-uic-blue">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
        </p>

        <div className="mb-8 flex-grow">
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-3">
                Repositories it manages
            </h4>
            <ul className="space-y-2">
                {repos.map((repo) => (
                    <li key={repo.href}>
                        <a
                            href={repo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-uic-blue hover:text-uic-red hover:underline break-all"
                        >
                            <Github className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-6 font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center group bg-gray-50 text-uic-blue hover:bg-uic-blue hover:text-white"
        >
            {ctaLabel}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
    </div>
);

export const Projects: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">Current Project Committees</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        OSF manages a Project Committee for each set of code repositories. Sustainers join a Committee,
                        discuss shared priorities, and can vote on collective action.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    <ProjectCard
                        title="Equalify"
                        description={<>Scans your sites for WCAG issues, tracks remediation, and converts PDFs to accessible HTML for as little as <span className="font-bold text-gray-900">$0.02 per document</span>.</>}
                        icon={<img src={equalifyLogo} alt="" className="w-8 h-8 object-contain rounded" />}
                        href="https://equalify.uic.edu/"
                        ctaLabel="Visit Equalify"
                        repos={[
                            { name: 'equalify-iris', href: 'https://github.com/EqualifyEverything/equalify-iris' },
                            { name: 'equalify-iris-wp', href: 'https://github.com/EqualifyEverything/equalify-iris-wp' },
                            { name: 'equalify-iris-pdf', href: 'https://github.com/EqualifyEverything/equalify-iris-pdf' },
                            { name: 'equalify', href: 'https://github.com/EqualifyEverything/equalify' },
                        ]}
                    />

                    <ProjectCard
                        title="AI Leaders"
                        description={<>Generative AI course material that prepares learners for jobs requiring AI skills, plus <span className="font-bold text-gray-900">Plato</span>, an adaptive learning platform with an AI coach that evaluates work and tracks mastery. Run and adapt both without a licensing agreement.</>}
                        icon={<Brain className="w-8 h-8" />}
                        href="https://ai-leaders.org/"
                        ctaLabel="Visit AI Leaders"
                        repos={[
                            { name: 'plato', href: 'https://github.com/1111philo/plato' },
                            { name: 'ai-leaders', href: 'https://github.com/1111philo/ai-leaders' },
                        ]}
                    />

                </div>

                <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto leading-relaxed">
                    Every repository OSF supports stays publicly available under an{' '}
                    <a
                        href="https://opensource.org/licenses"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-uic-blue hover:text-uic-red hover:underline"
                    >
                        OSI-approved open-source license
                    </a>
                    , so anyone can use, study, modify, and distribute the software.
                </p>

            </div>
        </section>
    );
};
