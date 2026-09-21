import React from 'react';

interface Stat {
    value: string;
    label: string;
    detail: string;
}

const STATS: Stat[] = [
    {
        value: '$0',
        label: 'License fees',
        detail: "It's Open Source. No per-seat pricing.",
    },
    {
        value: '3',
        label: 'Projects to sustain',
        detail: 'Equalify, AI Leaders, and Plato.',
    },
    {
        value: '100 hrs',
        label: 'Or $10,000 a year',
        detail: "About one workday a month. That's the whole ask.",
    },
];

export const Stats: React.FC = () => {
    return (
        <section className="bg-uic-blue text-white py-14">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-white/20 bg-white/5 p-6 text-center md:text-left"
                        >
                            <p className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{stat.value}</p>
                            <p className="font-semibold text-blue-50">{stat.label}</p>
                            <p className="text-sm text-blue-200 mt-1">{stat.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
