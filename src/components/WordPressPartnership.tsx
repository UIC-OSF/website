import React from 'react';

export const WordPressPartnership: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    <div className="w-32 md:w-48 flex-shrink-0">
                        <img
                            src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
                            alt="WordPress Logo"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership with WordPress</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            WordPress is a powerful force for democratizing publishing and Open Source development.
                        </p>
                        <p className="text-gray-600">
                            We are incorporating WordPress into our work while also encouraging the fund team to contribute back to the WordPress project, fostering a cycle of innovation and community support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
