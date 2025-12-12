import React from 'react';
import { Menu, X, Search } from 'lucide-react';
import uicLogo from '../assets/uic-logo.svg';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[60] bg-uic-blue text-white p-4 rounded shadow-lg font-bold">
                Skip to main content
            </a>

            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                {/* Top Bar (Red) */}
                <div className="bg-uic-red h-2 w-full"></div>

                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <a href="https://uic.edu" className="flex-shrink-0">
                                <img
                                    src={uicLogo}
                                    alt="UIC Logo"
                                    className="h-12"
                                />
                            </a>
                            <div className="hidden md:block w-px h-10 bg-gray-300"></div>
                            <div className="hidden md:block">
                                <a href="/" className="text-xl font-bold text-uic-blue hover:underline">
                                    Technology Solutions
                                </a>
                            </div>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-6" aria-label="Desktop navigation">
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-uic-red">Services</a>
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-uic-red">Support</a>
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-uic-red">About</a>
                            <button className="text-gray-600 hover:text-uic-red">
                                <Search className="w-5 h-5" />
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <nav className="md:hidden bg-gray-50 border-t border-gray-200" aria-label="Mobile navigation">
                        <div className="px-4 py-2 space-y-2">
                            <a href="#" className="block py-2 text-gray-700 hover:text-uic-red">Services</a>
                            <a href="#" className="block py-2 text-gray-700 hover:text-uic-red">Support</a>
                            <a href="#" className="block py-2 text-gray-700 hover:text-uic-red">Security</a>
                            <a href="#" className="block py-2 text-gray-700 hover:text-uic-red">About</a>
                        </div>
                    </nav>
                )}
            </header>

            {/* Main Content */}
            <main id="main-content" className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 border-t border-gray-200 pt-12 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <img
                                src={uicLogo}
                                alt="UIC Logo"
                                className="h-8 mb-4 opacity-80"
                            />
                            <p className="text-sm text-gray-600">
                                1200 West Harrison St.<br />
                                Chicago, IL 60607<br />
                                (312) 996-7000
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-uic-blue mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:underline">Academic Calendar</a></li>
                                <li><a href="#" className="hover:underline">Library</a></li>
                                <li><a href="#" className="hover:underline">Maps</a></li>
                                <li><a href="#" className="hover:underline">Directory</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-uic-blue mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:underline">Apply</a></li>
                                <li><a href="#" className="hover:underline">Visit</a></li>
                                <li><a href="#" className="hover:underline">Give</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-uic-blue mb-4">Connect</h3>
                            <div className="flex space-x-4" aria-hidden="true">
                                {/* Social icons placeholders */}
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} The Board of Trustees of the University of Illinois  |  Privacy Statement
                    </div>
                </div>
                <div className="bg-uic-blue h-2 w-full mt-8"></div>
            </footer>
        </div>
    );
};
