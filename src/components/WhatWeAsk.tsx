import React from 'react';
import { ArrowRight, Clock, Signature } from 'lucide-react';

export const WhatWeAsk: React.FC = () => {
    const scrollToForm = () => {
        const element = document.getElementById('sustainer-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            element.focus();
        }
    };

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">What's Asked</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Two commitments, renewed annually. Nothing else.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm h-full">
                        <div className="p-3 bg-uic-red/10 rounded-lg text-uic-red inline-flex mb-5">
                            <Clock className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">100 Staff Hours or $10,000 Annually</h3>
                        <ul className="space-y-3 text-gray-600 leading-relaxed">
                            <li>
                                <span className="font-semibold text-uic-blue">100 staff hours a year</span> — about one workday
                                a month — toward development and planning meetings.
                            </li>
                            <li>
                                Can't commit staff? Donate <span className="font-semibold text-uic-blue">$10,000</span> to the fund instead.
                            </li>
                            <li>One commitment covers every project you select.</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm h-full">
                        <div className="p-3 bg-uic-red/10 rounded-lg text-uic-red inline-flex mb-5">
                            <Signature className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Rights to Use Your Institution's Name</h3>
                        <ul className="space-y-3 text-gray-600 leading-relaxed">
                            <li>
                                Your <span className="font-semibold text-uic-blue">name and logo</span> appear on the projects
                                you sustain, in press releases, and in project emails.
                            </li>
                            <li>
                                You review every press release at the monthly roadmap meeting before it publishes.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={scrollToForm}
                        className="inline-flex items-center px-8 py-4 bg-uic-red text-white text-lg font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Become a Sustainer
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};
