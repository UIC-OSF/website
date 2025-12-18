import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Handshake } from 'lucide-react';

export const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const y = useTransform(scrollY, [0, 300], [0, 100]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            element.focus();
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 min-h-[80vh] flex items-center overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold text-uic-blue mb-8 tracking-tight"
                    >
                        Open Source Fund
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-3xl text-gray-700 font-light leading-relaxed mb-10"
                    >
                        Support technology projects that work toward <span className="font-semibold text-uic-blue">measurable benefit for UIC and the public</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => scrollToSection('bounties-section')}
                            className="px-8 py-4 bg-uic-red text-white text-lg font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg flex items-center"
                        >
                            View Bounties
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scrollToSection('partnership-section')}
                            className="px-8 py-4 bg-white text-uic-blue text-lg font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg border border-gray-200 flex items-center"
                        >
                            Partner with Us
                            <Handshake className="ml-2 w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Abstract Fading Graphic */}
            <motion.div
                style={{ opacity, y }}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                aria-hidden="true"
            >
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-uic-blue/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-uic-red/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-uic-blue/5 rounded-full blur-2xl" />
                <div className="absolute bottom-[30%] right-[15%] w-48 h-48 bg-uic-red/5 rounded-full blur-2xl" />
            </motion.div>
        </section>
    );
};
