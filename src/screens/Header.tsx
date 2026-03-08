import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import EC from "../assets/ec.svg";


function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'contacts'];
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && element.getBoundingClientRect().top <= 100) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contacts', href: '#contacts' },
    ];

    return (
        <motion.header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'backdrop-blur-md bg-slate-900/80 border-b border-slate-700/30 py-4'
                    : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="px-8 md:px-16 lg:px-24 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#home"
                    className="group relative text-xl md:text-2xl font-bold text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:bg-clip-text transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img src={EC} alt="EC Logo" className="w-10 h-10 inline-block mr-2" />
                </motion.a>

                {/* Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-2">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <a
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.href.slice(1)
                                            ? 'text-gray-200'
                                            : 'text-slate-400 hover:text-gray-200'
                                        }`}
                                >
                                    {activeSection === item.href.slice(1) && (
                                        <motion.span
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-500/30"
                                            layoutId="activeSection"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </a>
                            </motion.li>
                        ))}

                        {/* CTA Button */}
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <a
                                href="#contacts"
                                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-sm font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                            >
                                Let's Talk
                            </a>
                        </motion.li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-gray-200"
                    whileTap={{ scale: 0.9 }}
                >
                    <span className="w-6 h-0.5 bg-gray-200 rounded-full" />
                    <span className="w-6 h-0.5 bg-gray-200 rounded-full" />
                    <span className="w-4 h-0.5 bg-gray-200 rounded-full self-end mr-2" />
                </motion.button>
            </div>
        </motion.header>
    );
}

export default Header;
