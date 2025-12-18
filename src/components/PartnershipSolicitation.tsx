import React from 'react';
import { Mail } from 'lucide-react';

export const PartnershipSolicitation: React.FC = () => {
    return (
        <section className="py-20 bg-uic-blue text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Us</h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                    We are looking for organizations and individuals who want to advance the public good through technology that universities rely on.
                    Join us in building a more open and accessible digital future.
                </p>

                <a
                    href="mailto:sbf@uic.edu"
                    className="inline-flex items-center px-8 py-4 bg-white text-uic-blue font-bold text-lg rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                >
                    <Mail className="mr-3 w-5 h-5" />
                    sbf@uic.edu
                </a>
            </div>
        </section>
    );
};
