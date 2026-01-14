import React, { useEffect, useState } from 'react';
import { ExternalLink, Loader2, AlertCircle, Tag } from 'lucide-react';

interface MicroGrant {
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
];
// const REPOS: RepoConfig[] = [];

interface MicroGrantsProps {
    selectedProject?: string;
    onSelectProject?: (projectId: string) => void;
}

export const MicroGrants: React.FC<MicroGrantsProps> = ({ selectedProject = 'all', onSelectProject }) => {
    const [microGrants, setMicroGrants] = useState<(MicroGrant & { projectId: string })[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Helper to handle selection change
    const handleSelectProject = (projectId: string) => {
        if (onSelectProject) {
            onSelectProject(projectId);
        }
    };

    useEffect(() => {
        const fetchMicroGrants = async () => {
            try {
                setLoading(true);
                const allMicroGrants: (MicroGrant & { projectId: string })[] = [];

                await Promise.all(REPOS.map(async (repo) => {
                    const response = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.name}/issues?labels=micro-grant&state=open`);
                    if (!response.ok) {
                        console.warn(`Failed to fetch micro-grants for ${repo.displayName}`);
                        return;
                    }
                    const data = await response.json();
                    const taggedData = data.map((issue: MicroGrant) => ({ ...issue, projectId: repo.id }));
                    allMicroGrants.push(...taggedData);
                }));

                setMicroGrants(allMicroGrants);
            } catch (err) {
                setError('Failed to load micro-grants. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMicroGrants();
    }, []);

    const [announcement, setAnnouncement] = useState('');

    const filteredMicroGrants = selectedProject === 'all'
        ? microGrants
        : microGrants.filter(b => b.projectId === selectedProject);

    const getProjectName = (id: string) => REPOS.find(r => r.id === id)?.displayName || id;

    useEffect(() => {
        if (loading) return;

        // Clear announcement first to force screen readers to register the change
        setAnnouncement('');

        const timer = setTimeout(() => {
            const count = filteredMicroGrants.length;
            const projectName = selectedProject === 'all' ? 'All Projects' : getProjectName(selectedProject);
            setAnnouncement(`Showing ${projectName}. ${count} ${count === 1 ? 'micro-grant' : 'micro-grants'} found.`);
        }, 100);

        return () => clearTimeout(timer);
    }, [selectedProject, filteredMicroGrants.length, loading]);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2
                        id="open-micro-grants-heading"
                        tabIndex={-1}
                        className="text-3xl md:text-4xl font-bold text-uic-blue mb-4 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-uic-blue rounded-sm"
                    >
                        Current Micro-Grants
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        The fund manages micro-grants for projects that work toward the public good.
                    </p>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 max-w-2xl mx-auto text-left">
                        <h3 className="font-bold text-uic-blue mb-2 flex items-center">
                            <AlertCircle className="w-5 h-5 mr-2" />
                            What is a Micro-Grant?
                        </h3>
                        <p className="text-gray-700 text-sm">
                            A micro-grant is a monetary reward offered for completing a specific task or solving a problem in an Open Source project.
                            It's a way to incentivize contributions and support developers who dedicate their time to public benefit technology.
                        </p>
                    </div>
                </div>

                {/* Filter */}
                <nav className="flex justify-center mb-8" aria-label="Micro-grant filters">
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
                </nav>

                {/* Content */}
                {loading ? (
                    <div className="flex justify-center py-12" role="status" aria-label="Loading micro-grants">
                        <Loader2 className="w-8 h-8 animate-spin text-uic-blue" />
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 py-12">
                        {error}
                    </div>
                ) : filteredMicroGrants.length === 0 ? (
                    <div className="text-center py-16 px-4 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <div className="max-w-md mx-auto">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No open micro-grants at the moment</h3>
                            <p className="text-gray-600 mb-6">
                                We're currently reviewing new opportunities. Sign up for our newsletter to be the first to know when new micro-grants are available.
                            </p>
                            <a
                                href="#newsletter-section"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-uic-blue hover:bg-blue-800 transition-colors shadow-sm hover:shadow"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('newsletter-section')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Get Notified of Future Grants
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-4" role="region" aria-live="polite" aria-label="Micro-grants list">
                        {filteredMicroGrants.map((microGrant) => (
                            <div
                                key={microGrant.id}
                                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
                            >
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded uppercase tracking-wider">
                                            {getProjectName(microGrant.projectId)}
                                        </span>
                                        <span className="text-gray-400 text-sm flex items-center">
                                            #{microGrant.id}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-uic-blue">
                                        <a href={microGrant.html_url} target="_blank" rel="noopener noreferrer">
                                            {microGrant.title}
                                            <span className="sr-only">(opens in new tab)</span>
                                        </a>
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {microGrant.labels.map(label => (
                                            <span
                                                key={label.name}
                                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
                                                style={{ backgroundColor: `#${label.color}20`, color: `#${label.color}` }}
                                            >
                                                <Tag className="w-3 h-3 mr-1" aria-hidden="true" />
                                                <span className="sr-only">Tag: </span>
                                                {label.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-shrink-0">
                                    <a
                                        href={microGrant.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-uic-blue hover:bg-blue-800 transition-colors"
                                    >
                                        View Micro-Grant
                                        <span className="sr-only">(opens in new tab)</span>
                                        <ExternalLink className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {/* Live region for status updates */}
                <div role="status" aria-live="assertive" aria-atomic="true" className="sr-only">
                    {announcement}
                </div>
            </div>
        </section>
    );
};
