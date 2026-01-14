import React, { useEffect } from 'react';
import { Mail } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://js.createsend1.com/javascript/copypastesubscribeformlogic.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="py-20 bg-uic-blue/5 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-uic-blue p-10 md:w-2/5 text-white flex flex-col justify-center">
                            <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                Get the latest news about micro-grants, project updates, and opportunities to contribute to public good technology.
                            </p>
                        </div>

                        <div className="p-10 md:w-3/5 relative">
                            <form
                                className="js-cm-form"
                                id="subForm"
                                action="https://www.createsend.com/t/subscribeerror?description="
                                method="post"
                                data-id="5B5E7037DA78A748374AD499497E309EEC18F3849B3EC67861FD5D44558F78B0F4193232B7154B53A7E9DAF19702436151E2CDD49CE766073CB20D3F71344C10"
                            >
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="fieldName" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Name
                                        </label>
                                        <input
                                            id="fieldName"
                                            maxLength={200}
                                            name="cm-name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-uic-blue focus:border-uic-blue transition-colors bg-gray-50 focus:bg-white"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="fieldEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            autoComplete="Email"
                                            className="js-cm-email-input qa-input-email w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-uic-blue focus:border-uic-blue transition-colors bg-gray-50 focus:bg-white"
                                            id="fieldEmail"
                                            maxLength={200}
                                            name="cm-ntyuhuu-ntyuhuu"
                                            required
                                            type="email"
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-uic-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                    >
                                        Subscribe for Updates
                                    </button>
                                </div>
                            </form>

                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-400 rounded-full opacity-10 blur-xl pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-uic-red rounded-full opacity-5 blur-xl pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
