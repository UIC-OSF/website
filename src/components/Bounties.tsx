import React, { useEffect, useState } from 'react';
import { ExternalLink, Loader2, AlertCircle, Tag } from 'lucide-react';

interface Bounty {
    id: number;
    title: string;
    html_url: string;
    repository_url: string;
    labels: { name: string; color: string }[];
    created_at: string;
    user: { login: string; avatar_url: string };
    body: string;
}

interface RepoConfig {
    id: string;
    owner: string;
    name: string;
    displayName: string;
}

const REPOS: RepoConfig[] = [
    { id: 'ai-leaders', owner: '1111philo', name: 'ai-leaders', displayName: 'AI Leaders' },
    { id: 'equalify', owner: 'EqualifyEverything', name: 'equalify', displayName: 'Equalify' },
    { id: 'wordpress-ibc', owner: 'automattic', name: 'wordpress-ibc', displayName: 'WordPress IBC' },
];

interface BountiesProps {
    selectedProject?: string;
    onSelectProject?: (projectId: string) => void;
}

export const Bounties: React.FC<BountiesProps> = ({ selectedProject = 'all', onSelectProject }) => {
    const [bounties, setBounties] = useState<(Bounty & { projectId: string })[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // Use prop for selectedProject, local state removed
    // const [selectedProject, setSelectedProject] = useState<string>('all');  

    // Helper to handle selection change
    const handleSelectProject = (projectId: string) => {
        if (onSelectProject) {
            onSelectProject(projectId);
        }
    };

    useEffect(() => {
        const fetchBounties = async () => {
            try {
                setLoading(true);
                const allBounties: (Bounty & { projectId: string })[] = [];

                await Promise.all(REPOS.map(async (repo) => {
                    const response = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.name}/issues?labels=bountied&state=open`);
                    if (!response.ok) {
                        console.warn(`Failed to fetch bounties for ${repo.displayName}`);
                        return;
                    }
                    const data = await response.json();
                    const taggedData = data.map((issue: Bounty) => ({ ...issue, projectId: repo.id }));
                    allBounties.push(...taggedData);
                }));

                setBounties(allBounties);
            } catch (err) {
                setError('Failed to load bounties. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBounties();
    }, []);

    const filteredBounties = selectedProject === 'all'
        ? bounties
        : bounties.filter(b => b.projectId === selectedProject);

    const getProjectName = (id: string) => REPOS.find(r => r.id === id)?.displayName || id;

    return (
        <section id="bounties-section" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">Open Bounties</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        The fund manages bounties for projects that work toward the public good.
                    </p>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 max-w-2xl mx-auto text-left">
                        <h3 className="font-bold text-uic-blue mb-2 flex items-center">
                            <AlertCircle className="w-5 h-5 mr-2" />
                            What is a Bounty?
                        </h3>
                        <p className="text-gray-700 text-sm">
                            A bounty is a monetary reward offered for completing a specific task or solving a problem in an Open Source project.
                            It's a way to incentivize contributions and support developers who dedicate their time to public benefit technology.
                        </p>
                    </div>
                </div>

                {/* Filter */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => handleSelectProject('all')}
                            aria-pressed={selectedProject === 'all'}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedProject === 'all'
                                ? 'bg-white text-uic-blue shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            All Projects
                        </button>
                        {REPOS.map(repo => (
                            <button
                                key={repo.id}
                                onClick={() => handleSelectProject(repo.id)}
                                aria-pressed={selectedProject === repo.id}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedProject === repo.id
                                    ? 'bg-white text-uic-blue shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {repo.displayName}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                {loading ? (
                    <div className="flex justify-center py-12" role="status" aria-label="Loading bounties">
                        <Loader2 className="w-8 h-8 animate-spin text-uic-blue" />
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 py-12">
                        {error}
                    </div>
                ) : filteredBounties.length === 0 ? (
                    <div className="text-center text-gray-500 py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        No open bounties found at the moment. Check back soon!
                    </div>
                ) : (
                    <div className="grid gap-4" role="region" aria-live="polite" aria-label="Bounties list">
                        {filteredBounties.map((bounty) => (
                            <div
                                key={bounty.id}
                                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
                            >
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded uppercase tracking-wider">
                                            {getProjectName(bounty.projectId)}
                                        </span>
                                        <span className="text-gray-400 text-sm flex items-center">
                                            #{bounty.id}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-uic-blue">
                                        <a href={bounty.html_url} target="_blank" rel="noopener noreferrer">
                                            {bounty.title}
                                            <span className="sr-only">(opens in new tab)</span>
                                        </a>
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {bounty.labels.map(label => (
                                            <span
                                                key={label.name}
                                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
                                                style={{ backgroundColor: `#${label.color}20`, color: `#${label.color}` }}
                                            >
                                                <Tag className="w-3 h-3 mr-1" />
                                                {label.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-shrink-0">
                                    <a
                                        href={bounty.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-uic-blue hover:bg-blue-800 transition-colors"
                                    >
                                        View Bounty
                                        <span className="sr-only">(opens in new tab)</span>
                                        <ExternalLink className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
