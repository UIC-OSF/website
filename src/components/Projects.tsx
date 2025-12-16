import React, { useState } from 'react';
import { ArrowRight, Brain, Accessibility, GraduationCap } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    logoUrl?: string;
    bountyId: string;
    onBountyClick: (id: string) => void;
    isActive: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, logoUrl, bountyId, onBountyClick, isActive }) => (
    <div className={`bg-white rounded-xl shadow-lg p-8 border transition-all duration-300 flex flex-col h-full ${isActive ? 'ring-2 ring-uic-blue border-uic-blue' : 'border-gray-100 hover:shadow-xl'}`}>
        <div className="mb-6 h-16 flex items-center justify-start">
            {logoUrl ? (
                <img src={logoUrl} alt={`${title} Logo`} className="h-full object-contain max-w-[200px]" />
            ) : (
                <div className="flex items-center space-x-3">
                    <div className="p-3 bg-uic-blue/10 rounded-lg text-uic-blue">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                </div>
            )}
        </div>

        <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
            {description}
        </p>

        <button
            onClick={() => onBountyClick(bountyId)}
            className={`w-full py-3 px-6 font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center group ${isActive
                ? 'bg-uic-blue text-white shadow-md'
                : 'bg-gray-50 text-uic-blue hover:bg-uic-blue hover:text-white'}`}
            aria-pressed={isActive}
        >
            {isActive ? 'Viewing Bounties' : `${title} Bounties`}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
    </div>
);

export const Projects: React.FC<{ onScrollToBounties: (projectId: string) => void }> = ({ onScrollToBounties }) => {
    const [activeProject, setActiveProject] = useState<string>('all');

    const handleProjectClick = (projectId: string) => {
        setActiveProject(projectId);
        onScrollToBounties(projectId);
    };

    return (
        <section id="projects-section" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">Supported Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are proud to support Open Source initiatives that drive innovation in education, AI literacy, and accessibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <ProjectCard
                        title="WordPress IBC"
                        description="An Industry Backed Course and credential designed to bridge the workforce employment gap using high-demand WordPress skills."
                        icon={<GraduationCap className="w-8 h-8" />}
                        bountyId="wordpress-ibc" // Placeholder ID, need to map to actual repo or label if exists, or use 'all' for now
                        onBountyClick={handleProjectClick}
                        isActive={activeProject === 'wordpress-ibc'}
                    />

                    <ProjectCard
                        title="AI Leaders"
                        description="An Industry-backed AI Literacy curriculum empowering the next generation of tech leaders with essential AI skills and ethics."
                        icon={<Brain className="w-8 h-8" />}
                        bountyId="ai-leaders"
                        onBountyClick={handleProjectClick}
                        isActive={activeProject === 'ai-leaders'}
                    />

                    <ProjectCard
                        title="Equalify"
                        description="An Open Source accessibility ecosystem ensuring the web is inclusive for everyone through automated testing and remediation tools."
                        icon={<Accessibility className="w-8 h-8" />}
                        logoUrl="https://equalify.app/wp-content/uploads/2024/04/Equalify-Logo-768x237.png"
                        bountyId="equalify"
                        onBountyClick={handleProjectClick}
                        isActive={activeProject === 'equalify'}
                    />


                </div>

                <div className="text-center">
                    <button
                        onClick={() => handleProjectClick('all')}
                        className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold transition-colors ${activeProject === 'all' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'}`}
                    >
                        View All Bounties
                    </button>
                </div>

            </div>
        </section>
    );
};
