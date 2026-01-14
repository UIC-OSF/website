
import React, { useEffect, useState, useRef } from 'react';

interface SectionLink {
    label: string;
    href: string;
}

const SECTION_LINKS: SectionLink[] = [
    { label: 'About', href: '#about-section' },
    { label: 'Projects', href: '#projects-section' },
    { label: 'Micro-Grants', href: '#micro-grants-section' },
    { label: 'Partners', href: '#partners-section' },
    { label: 'Team', href: '#team-section' },
];

export const StickyNav: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                const rect = navRef.current.getBoundingClientRect();
                setIsSticky(rect.top <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                // Trigger when the section is roughly in the middle-top of the viewport
                rootMargin: '-100px 0px -50% 0px',
                threshold: 0.1
            }
        );

        SECTION_LINKS.forEach((link) => {
            const id = link.href.replace('#', '');
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            // Update active section immediately for better UX
            setActiveSection(id);
            element.focus();

            // Shift focus to the section for keyboard users
        }
    };

    return (
        <nav
            ref={navRef}
            className={`sticky top-0 z-40 transition-all duration-300 w-full bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 ${isSticky ? 'shadow-lg' : ''
                }`}
            aria-label="Section navigation"
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center h-16">
                    <div className="flex items-center space-x-1 md:space-x-8 overflow-x-auto">
                        {SECTION_LINKS.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className={`text-sm md:text-base font-medium whitespace-nowrap transition-colors px-3 py-2 rounded-md ${isActive
                                        ? 'text-uic-red bg-red-50'
                                        : 'text-gray-700 hover:text-uic-red hover:bg-gray-50/50'
                                        }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};
