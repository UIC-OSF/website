import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';
import platoLogo from '../assets/plato-square.png';
import equalifyLogo from '../assets/equalify-square.png';

interface ProjectCardProps {
    title: string;
    description: React.ReactNode;
    icon: React.ReactNode;
    href: string;
    ctaLabel: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, href, ctaLabel }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        <div className="mb-6 h-16 flex items-center justify-start">
            <div className="flex items-center space-x-3">
                <div className="p-3 bg-uic-blue/10 rounded-lg text-uic-blue">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            </div>
        </div>

        <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
            {description}
        </p>

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
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">Current Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Three platforms, in production today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    <ProjectCard
                        title="Equalify"
                        description={<>Scans your sites for WCAG issues, tracks remediation, and converts PDFs to accessible HTML for as little as <span className="font-bold text-gray-900">$0.02 per document</span>.</>}
                        icon={<img src={equalifyLogo} alt="" className="w-8 h-8 object-contain rounded" />}
                        href="https://equalify.uic.edu/"
                        ctaLabel="Visit Equalify"
                    />

                    <ProjectCard
                        title="AI Leaders"
                        description={<>Generative AI course material that prepares learners for jobs requiring AI skills. Run it and adapt it <span className="font-bold text-gray-900">without a licensing agreement</span>.</>}
                        icon={<Brain className="w-8 h-8" />}
                        href="https://ai-leaders.org/"
                        ctaLabel="Visit AI Leaders"
                    />

                    <ProjectCard
                        title="Plato"
                        description={<>An Adaptive Learning Platform — made for humans, responsibly using AI. 20-minute lessons with an AI coach that evaluates work and tracks <span className="font-bold text-gray-900">mastery</span>.</>}
                        icon={<img src={platoLogo} alt="" className="w-8 h-8 object-contain" />}
                        href="https://github.com/1111philo/plato"
                        ctaLabel="Plato on GitHub"
                    />

                </div>

            </div>
        </section>
    );
};
