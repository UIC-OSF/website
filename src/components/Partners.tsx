import React from 'react';
import { Handshake } from 'lucide-react';
import automatticLogo from '../assets/automattic.png';
import wordpressLogo from '../assets/wordpress-logotype.png';

export const Partners: React.FC = () => {
    const scrollToSolicitation = () => {
        const element = document.getElementById('partnership-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="partners-section" className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-6">Our Partners</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We partner with organizations that receive direct benefit from our work while simultaneously advancing the mission of UIC and the public good.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
                    {/* Automattic Partner Card */}
                    <a
                        href="https://automattic.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-8 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                        <div className="w-64 h-24 flex items-center justify-center mb-6 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all">
                            {/* Fallback text if image missing, but trying to use the svg */}
                            <img
                                src={automatticLogo}
                                alt="Automattic"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <span className="hidden text-2xl font-bold text-gray-800">Automattic</span>
                        </div>
                    </a>

                    {/* WordPress Partner Card */}
                    <a
                        href="https://wordpress.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-8 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                        <div className="w-64 h-24 flex items-center justify-center mb-6 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all">
                            <img
                                src={wordpressLogo}
                                alt="WordPress"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <span className="hidden text-2xl font-bold text-gray-800">WordPress</span>
                        </div>
                    </a>
                </div>

                <div className="text-center">
                    <button
                        onClick={scrollToSolicitation}
                        className="inline-flex items-center px-8 py-4 bg-uic-blue text-white text-lg font-bold rounded-full hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Become a Partner
                        <Handshake className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};
