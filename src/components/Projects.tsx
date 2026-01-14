import React from 'react';
import { ArrowRight, Brain, Accessibility } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    subtitle?: string;
    description: string;
    icon: React.ReactNode;
    logoUrl?: string;
    microGrantId: string;
    onMicroGrantClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, description, icon, logoUrl, microGrantId, onMicroGrantClick }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        <div className="mb-6 h-16 flex items-center justify-start">
            {logoUrl ? (
                <img src={logoUrl} alt={`${title} Logo`} className="h-full object-contain max-w-[200px]" />
            ) : (
                <div className="flex items-center space-x-3">
                    <div className="p-3 bg-uic-blue/10 rounded-lg text-uic-blue">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                        {subtitle && <p className="text-sm font-semibold text-uic-red uppercase tracking-wide">{subtitle}</p>}
                    </div>
                </div>
            )}
        </div>

        <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
            {description}
        </p>

        <button
            onClick={() => onMicroGrantClick(microGrantId)}
            className="w-full py-3 px-6 font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center group bg-gray-50 text-uic-blue hover:bg-uic-blue hover:text-white"
        >
            {`${title} Micro-Grants`}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
    </div>
);

export const Projects: React.FC<{ onScrollToMicroGrants: (projectId: string) => void }> = ({ onScrollToMicroGrants }) => {

    const handleProjectClick = (projectId: string) => {
        onScrollToMicroGrants(projectId);
    };

    return (
        <section id="projects-section" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">Supported Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We support Open Source initiatives that produce measurable benefit for UIC and our society.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">


                    <ProjectCard
                        title="1111 AI Leaders"
                        subtitle="WordPress Edition"
                        description="Generative AI course material empowering learners to get jobs that require AI skills. Our first course, available in June, will focus on preparing learners for living wage careers within the WordPress ecosystem."
                        icon={<Brain className="w-8 h-8" />}
                        microGrantId="ai-leaders"
                        onMicroGrantClick={handleProjectClick}
                    />

                    <ProjectCard
                        title="Equalify"
                        description="An Open Source digital accessibility ecosystem, focused on making high quality accessibility tools available to everyone."
                        icon={<Accessibility className="w-8 h-8" />}
                        logoUrl="https://equalify.app/wp-content/uploads/2024/04/Equalify-Logo-768x237.png"
                        microGrantId="equalify"
                        onMicroGrantClick={handleProjectClick}
                    />


                </div>

                <div className="text-center">
                    <button
                        onClick={() => handleProjectClick('all')}
                        className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold transition-colors bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
                    >
                        View All Micro-Grants
                    </button>
                </div>

            </div>
        </section>
    );
};
