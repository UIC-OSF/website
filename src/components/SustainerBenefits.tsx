import React from 'react';
import { PiggyBank, Wrench, Users, type LucideIcon } from 'lucide-react';

interface Benefit {
    title: string;
    icon: LucideIcon;
    points: React.ReactNode[];
}

const BENEFITS: Benefit[] = [
    {
        title: 'Reduced Costs',
        icon: PiggyBank,
        points: [
            <>Your staff hours replace vendor invoices, and the work stays yours.</>,
            <>Equalify remediates PDFs for as little as <span className="font-semibold text-uic-blue">$0.02 per document</span>.</>,
        ],
    },
    {
        title: 'Direct Support',
        icon: Wrench,
        points: [
            <>Monthly roadmap meetings and direct access to the engineers — not a ticket queue.</>,
            <>Elevate roadmap items to accelerate the features your campus needs.</>,
        ],
    },
    {
        title: 'Increased Collaboration',
        icon: Users,
        points: [
            <>Share maintenance with peer universities instead of carrying it alone.</>,
            <>Fixes built for one institution land for everyone.</>,
        ],
    },
];

export const SustainerBenefits: React.FC = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">What You Get</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {BENEFITS.map((benefit) => (
                        <div key={benefit.title} className="bg-gray-50 border border-gray-100 rounded-xl p-8 h-full">
                            <div className="p-3 bg-uic-blue/10 rounded-lg text-uic-blue inline-flex mb-5">
                                <benefit.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                            <ul className="space-y-3 text-gray-600 leading-relaxed">
                                {benefit.points.map((point, i) => (
                                    <li key={i} className="flex">
                                        <span className="text-uic-red font-bold mr-3" aria-hidden="true">&bull;</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
