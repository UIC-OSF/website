import React from 'react';
import { Linkedin, Globe } from 'lucide-react';
import blakeImg from '../assets/blake.jpeg';
import stefinImg from '../assets/stefin.jpeg';
import jemmaImg from '../assets/jemma.jpg';

interface TeamMemberProps {
    name: string;
    bio: string;
    imageUrl: string;
    linkedinUrl: string;
    websiteUrl: string;
}

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
            <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-uic-blue hover:bg-blue-50 rounded-full transition-colors"
                aria-label={`${name}'s Website`}
            >
                <Globe className="w-5 h-5" />
            </a>
        </div>
    </div>
);

export const Team: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">Meet the Team</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Dedicated individuals driving the Open Source mission forward.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <TeamMember
                        name="Blake Bertuccelli-Booth"
                        bio="Setting the fund vision and fostering new partnerships."
                        imageUrl={blakeImg}
                        linkedinUrl="https://www.linkedin.com/in/blake1111/"
                        websiteUrl="http://blake.bertuccelli-booth.org/"
                    />

                    <TeamMember
                        name="Stefin Pasternak"
                        bio="Ensuring equity and sustainability through fund initiatives."
                        imageUrl={stefinImg}
                        linkedinUrl="https://www.linkedin.com/in/stephen-pasternak-11979b155/"
                        websiteUrl="https://www.stefinpasternak.com/"
                    />

                    <TeamMember
                        name="Jaeun Jemma Ku"
                        bio="Managing UIC relationships to ensure maximum impact."
                        imageUrl={jemmaImg}
                        linkedinUrl="https://www.linkedin.com/in/jemmaku/"
                        websiteUrl="https://it.uic.edu/profiles/jaeun-jemma-ku/"
                    />
                </div>
            </div>
        </section>
    );
};
