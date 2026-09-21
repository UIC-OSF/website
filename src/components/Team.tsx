import React, { useState } from 'react';
import { ChevronDown, Linkedin, Globe } from 'lucide-react';
import blakeImg from '../assets/blake.jpeg';
import stefinImg from '../assets/stefin.jpeg';
import jemmaImg from '../assets/jemma.jpg';
import maryImg from '../assets/mary.jpg';
import jasonImg from '../assets/jason.jpg';
import michelleImg from '../assets/michelle.jpg';

interface TeamMemberProps {
    name: string;
    bio: string;
    imageUrl: string;
    linkedinUrl: string;
    websiteUrl?: string;
}

const TEAM: TeamMemberProps[] = [
    {
        name: 'Blake Bertuccelli-Booth',
        bio: 'Setting the fund vision and building the sustainer network.',
        imageUrl: blakeImg,
        linkedinUrl: 'https://www.linkedin.com/in/blake1111/',
        websiteUrl: 'http://blake.bertuccelli-booth.org/',
    },
    {
        name: 'Stefin Pasternak',
        bio: 'Ensuring equity and sustainability through fund initiatives.',
        imageUrl: stefinImg,
        linkedinUrl: 'https://www.linkedin.com/in/stephen-pasternak-11979b155/',
        websiteUrl: 'https://www.stefinpasternak.com/',
    },
    {
        name: 'Jason Maslanka',
        bio: 'Sets accountability measures to drive and determine success.',
        imageUrl: jasonImg,
        linkedinUrl: 'https://www.linkedin.com/in/jasonmaslanka/',
    },
    {
        name: 'JaEun Jemma Ku',
        bio: 'Managing UIC relationships to ensure maximum impact.',
        imageUrl: jemmaImg,
        linkedinUrl: 'https://www.linkedin.com/in/jemmaku/',
        websiteUrl: 'https://it.uic.edu/profiles/jaeun-jemma-ku/',
    },
    {
        name: 'Michelle Mitchell',
        bio: 'Elevating relevant work and solving problems before they exist. Making the fund work.',
        imageUrl: michelleImg,
        linkedinUrl: 'https://www.linkedin.com/in/michelle-mitchell-3a6a5017b/',
    },
    {
        name: 'Mary Hubbard',
        bio: 'Overseeing project integration and qualification standards within the Open Source ecosystem.',
        imageUrl: maryImg,
        linkedinUrl: 'https://www.linkedin.com/in/maryfhubbard/',
        websiteUrl: 'https://mary.blog/',
    },
];

const GRID_CLASS = 'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center';

const TeamMember: React.FC<TeamMemberProps> = ({ name, bio, imageUrl, linkedinUrl, websiteUrl }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            {bio}
        </p>
        <div className="flex space-x-4 mt-auto">
            <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-uic-blue hover:bg-blue-50 rounded-full transition-colors"
                aria-label={`${name}'s LinkedIn`}
            >
                <Linkedin className="w-5 h-5" />
            </a>
            {websiteUrl && (
                <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-uic-blue hover:bg-blue-50 rounded-full transition-colors"
                    aria-label={`${name}'s Website`}
                >
                    <Globe className="w-5 h-5" />
                </a>
            )}
        </div>
    </div>
);

export const Team: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">Meet the Team</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The people your designee will work with every month.
                    </p>
                </div>

                <div id="team-members">
                    {showAll ? (
                        <div className={GRID_CLASS}>
                            {TEAM.map((member) => (
                                <TeamMember key={member.name} {...member} />
                            ))}
                        </div>
                    ) : (
                        /*
                         * Collapsed: the grid is clipped partway through the first row and faded
                         * into the section background. It is inert while collapsed so nobody tabs
                         * into a card they cannot see — the expand button is the only control.
                         */
                        <div className="relative" aria-hidden="true" inert>
                            <div className={`${GRID_CLASS} max-h-60 overflow-hidden`}>
                                {TEAM.map((member) => (
                                    <TeamMember key={member.name} {...member} />
                                ))}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-gray-50/85 to-gray-50" />
                        </div>
                    )}
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        aria-expanded={showAll}
                        aria-controls="team-members"
                        className="inline-flex items-center px-6 py-3 bg-white text-uic-blue font-bold rounded-full border border-gray-300 hover:bg-gray-100 transition-colors shadow-sm"
                    >
                        {showAll ? 'Show less' : `View the entire team (${TEAM.length})`}
                        <ChevronDown
                            className={`ml-2 w-5 h-5 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};
