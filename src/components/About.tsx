import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import infoImage from '../assets/info.jpg';


export const About: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToProjects = () => {
        const element = document.getElementById('projects-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            element.focus();
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-50/50 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-8 leading-tight">
                                Benefit from{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-uic-red to-orange-600">UIC Maintained</span>{' '}
                                Tech
                            </h2>
                            <div className="prose prose-lg prose-blue text-gray-600 mb-8 leading-relaxed">
                                <p className="text-xl font-light text-gray-800">
                                    The fund is staffed by UIC, with full-time engineers maintaining every project we back.
                                    Each one has to deliver measurable benefit for the{' '}
                                    <span className="font-semibold text-uic-blue">institutions that run it</span> and for the{' '}
                                    <span className="font-semibold text-uic-blue">public</span> — or the fund stops backing it.
                                </p>
                            </div>

                            <button
                                onClick={scrollToProjects}
                                className="inline-flex items-center text-uic-red font-semibold hover:text-red-700 transition-colors"
                            >
                                See what the fund supports
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center">
                            <button className="cursor-pointer appearance-none border-none bg-transparent p-0" onClick={() => setIsModalOpen(true)} aria-label="Open diagram: UIC Benefit, Public Benefit, and Sustainer Benefit">
                                <img
                                    src={infoImage}
                                    alt="Venn diagram of three overlapping circles labeled UIC Benefit, Public Benefit, and Sustainer Benefit. They intersect at the center, labeled OSF Project."
                                    className="w-full max-w-md object-contain h-auto rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center flex flex-col justify-center h-full">
                                <h3 className="text-2xl font-bold text-uic-blue mb-4">What is Open Source?</h3>
                                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                    The code is public, under a license that lets anyone run, study, modify, and redistribute it.
                                    No vendor can revoke your access.
                                </p>
                                <div>
                                    <a
                                        href="https://opensource.org/osd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-uic-red font-bold hover:text-red-700 transition-colors"
                                    >
                                        The Open Source Definition
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center flex flex-col justify-center h-full">
                                <h3 className="text-2xl font-bold text-uic-blue mb-4">What Gets Maintained</h3>
                                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                    Projects that solve a problem more than one university actually has, ship to production, and
                                    stay free of per-seat licensing.
                                </p>
                                <div>
                                    <a
                                        href="mailto:osf@uic.edu?subject=Project%20idea%20for%20the%20UIC%20Open%20Source%20Fund"
                                        className="inline-flex items-center text-uic-red font-bold hover:text-red-700 transition-colors"
                                    >
                                        Propose a project
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Modal */}
                    {isModalOpen && (
                        <div
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-all duration-300"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
                                <button
                                    className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                                    onClick={() => setIsModalOpen(false)}
                                    aria-label="Close modal"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                                <img
                                    src={infoImage}
                                    alt="Venn diagram of UIC Benefit, Public Benefit, and Sustainer Benefit intersecting at OSF Project, shown full screen"
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </section>
    );
};
