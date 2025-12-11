import React from 'react';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
    const scrollToPartnership = () => {
        const element = document.getElementById('partnership-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-blue mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">UIC TS Open Source Fund</h2>
                        <p className="text-2xl font-light text-gray-800 leading-relaxed mb-8">
                            The Open Source Fund exists to support technology projects that deliver measurable public benefit.
                            We support open tools and curricula that improve access, equity, and real-world outcomes for learners and institutions.
                        </p>

                        <p className="text-lg text-gray-600 mb-8">
                            Launched by <a href="https://it.uic.edu/" className="font-semibold">UIC Technology Solutions</a> in partnership with the <a href="https://wordpress.org/" className="font-semibold">WordPress Foundation</a>,
                            the fund’s initial investments center on digital accessibility and AI literacy.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-uic-blue mb-4">Early Projects Include:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2.5 bg-uic-red rounded-full mr-3 flex-shrink-0"></span>
                                        <span>
                                            <a href="https://github.com/equalifyeverything/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-uic-blue underline decoration-gray-300 hover:decoration-uic-blue transition-all">Equalify</a>,
                                            an Open Source accessibility ecosystem.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2.5 bg-uic-red rounded-full mr-3 flex-shrink-0"></span>
                                        <span>
                                            <a href="https://github.com/1111philo/school" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-uic-blue underline decoration-gray-300 hover:decoration-uic-blue transition-all">1111</a>,
                                            an AI-first learning management system.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2.5 bg-uic-red rounded-full mr-3 flex-shrink-0"></span>
                                        <span>
                                            <span className="font-bold text-gray-900">AI Leaders</span>,
                                            a workforce-focused AI literacy course that helps students build practical, portfolio-ready skills.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                                <h3 className="text-xl font-bold text-uic-blue mb-4">What is Open Source?</h3>
                                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                    Open Source software is code that anyone can inspect, modify, and enhance. It's built on collaboration and transparency.
                                </p>
                                <div className="bg-white/50 p-4 rounded-lg border border-blue-100 mb-4">
                                    <p className="italic text-gray-600 text-sm">
                                        "The freedom to run the program, to study how it works, to redistribute copies, and to improve the program."
                                    </p>
                                </div>
                                <a
                                    href="https://ma.tt/2014/01/four-freedoms/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-uic-red hover:underline font-medium text-sm"
                                >
                                    Read Matt Mullenweg on The Four Freedoms
                                    <ArrowRight className="ml-1 w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={scrollToPartnership}
                                className="inline-flex items-center text-uic-blue font-bold hover:text-uic-red transition-colors text-lg group"
                            >
                                Partner with us to build the future
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
