import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import uicLogo from '../assets/uic-logo.svg';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `https://it.uic.edu/search/?q=${encodeURIComponent(searchQuery)}&search=Submit`;
        }
    };

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
                        <nav className="hidden lg:flex items-center space-x-6" aria-label="Desktop navigation">
                            <a href="https://it.uic.edu/services/" className="text-sm font-medium text-gray-700 hover:text-uic-red">Services</a>
                            <a href="https://it.uic.edu/support/" className="text-sm font-medium text-gray-700 hover:text-uic-red">Support</a>
                            <a href="https://it.uic.edu/researchers/" className="text-sm font-medium text-gray-700 hover:text-uic-red">Research</a>
                            <a href="https://it.uic.edu/learning/" className="text-sm font-medium text-gray-700 hover:text-uic-red">Learning</a>
                            <a href="https://it.uic.edu/security/" className="text-sm font-medium text-gray-700 hover:text-uic-red">Security</a>
                            <a href="https://it.uic.edu/accessibility/" className="text-sm font-medium text-gray-700 hover:text-uic-red">Digital Accessibility</a>
                            <a href="https://it.uic.edu/about/" className="text-sm font-medium text-gray-700 hover:text-uic-red">About</a>

                            <div className="relative">
                                <button
                                    className="text-gray-600 hover:text-uic-red focus:outline-none"
                                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                                    aria-label="Toggle search"
                                    aria-expanded={isSearchOpen}
                                >
                                    <Search className="w-5 h-5" />
                                </button>
                                {isSearchOpen && (
                                    <form
                                        onSubmit={handleSearch}
                                        className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2"
                                    >
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-uic-red focus:border-transparent"
                                            autoFocus
                                            aria-label="Search"
                                        />
                                    </form>
                                )}
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-gray-600"
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
                    <nav className="lg:hidden bg-gray-50 border-t border-gray-200" aria-label="Mobile navigation">
                        <div className="px-4 py-2 space-y-2">
                            <a href="https://it.uic.edu/services/" className="block py-2 text-gray-700 hover:text-uic-red">Services</a>
                            <a href="https://it.uic.edu/support/" className="block py-2 text-gray-700 hover:text-uic-red">Support</a>
                            <a href="https://it.uic.edu/researchers/" className="block py-2 text-gray-700 hover:text-uic-red">Research</a>
                            <a href="https://it.uic.edu/learning/" className="block py-2 text-gray-700 hover:text-uic-red">Learning</a>
                            <a href="https://it.uic.edu/security/" className="block py-2 text-gray-700 hover:text-uic-red">Security</a>
                            <a href="https://it.uic.edu/accessibility/" className="block py-2 text-gray-700 hover:text-uic-red">Digital Accessibility</a>
                            <a href="https://it.uic.edu/about/" className="block py-2 text-gray-700 hover:text-uic-red">About</a>
                            <form onSubmit={handleSearch} className="py-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-uic-red"
                                        aria-label="Search"
                                    />
                                    <button type="submit" className="absolute right-3 top-2.5 text-gray-400">
                                        <Search className="w-5 h-5" />
                                    </button>
                                </div>
                            </form>
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
                                <li><a href="https://catalog.uic.edu/ucat/academic-calendar/" className="hover:underline">Academic Calendar</a></li>
                                <li><a href="https://library.uic.edu/" className="hover:underline">Library</a></li>
                                <li><a href="https://maps.uic.edu/" className="hover:underline">Maps</a></li>
                                <li><a href="https://www.uic.edu/apps/departments-az/search" className="hover:underline">Directory</a></li>
                                <li><a href="https://today.uic.edu/events" className="hover:underline">Event Calendar</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-uic-blue mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="https://it.uic.edu/support/" className="hover:underline">Get Support</a></li>
                                <li><a href="https://uic.edu/about/job-opportunities" className="hover:underline">Job Openings</a></li>
                                <li><a href="https://emergency.uic.edu/" className="hover:underline">Emergency Information</a></li>
                                <li><a href="https://reportaconcern.uic.edu/" className="hover:underline">Report a Concern</a></li>
                                <li><a href="https://uihealth.uic.edu/" className="hover:underline">UI Health</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-uic-blue mb-4">University</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="https://www.uillinois.edu/" className="hover:underline">University of Illinois System</a></li>
                                <li><a href="https://illinois.edu/" className="hover:underline">Urbana-Champaign</a></li>
                                <li><a href="https://www.uis.edu/" className="hover:underline">Springfield</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} The Board of Trustees of the University of Illinois  |  <a href="https://www.vpaa.uillinois.edu/resources/web_privacy" className="hover:underline">Privacy Statement</a>
                    </div>
                </div>
                <div className="bg-uic-blue h-2 w-full mt-8"></div>
            </footer>
        </div>
    );
};
