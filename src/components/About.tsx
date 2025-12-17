import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import infoImage from '../assets/info.jpg';


export const About: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-50/50 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl md:text-5xl font-bold text-uic-blue mb-8 leading-tight">
                                Innovation with a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-uic-red to-orange-600">Double Bottom Line</span>
                            </h2>
                            <div className="prose prose-lg prose-blue text-gray-600 mb-8 leading-relaxed">
                                <p className="text-xl font-light text-gray-800 mb-6">
                                    The UIC Tech Solutions Open Source Fund explores a bold idea: that IT infrastructure can directly serve the greater mission of an academic institution.
                                </p>
                                <p>
                                    Our goal is simple yet ambitious. We support projects that deliver <span className="font-semibold text-uic-blue">measurable benefit for UIC</span> while simultaneously providing <span className="font-semibold text-uic-blue">measurable benefit for the public</span>. By partnering with outside funders who share this vision, we are proving that Open Source technology is a bridge between the university and the world. Our future goal is to become an endowed part of UIC, ensuring Open Source technology benefits the universe for many generations to come.
                                </p>
                            </div>

                            <a href="https://chancellor.uic.edu/about/mission/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-uic-red font-semibold hover:text-red-700 transition-colors">
                                Read about UIC's Mission
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center">
                            <button className="cursor-pointer appearance-none border-none bg-transparent p-0" onClick={() => setIsModalOpen(true)} aria-label="Open diagram: UIC Benefit, Public Benefit, and Donor Benefit">
                                <img
                                    src={infoImage}
                                    alt="Diagram illustrating with three circles: UIC Benefit, Public Benefit, and Donor Benefit. Circles intersect to form a hexagon where funded project is written."
                                    className="w-full max-w-md object-contain h-auto rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                                />
                            </button>
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
                                    alt="Diagram Full Screen"
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        </div>
                    )}

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-uic-blue mb-4">What is Open Source?</h3>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                Open Source means the code is publicly available under a license that lets anyone run, study, modify, and redistribute it.
                            </p>
                            <a
                                href="https://ma.tt/2014/01/four-freedoms/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-uic-red font-bold hover:text-red-700 transition-colors"
                            >
                                Related Post by Matt Mullenweg
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
