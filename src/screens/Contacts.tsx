import { motion } from 'framer-motion';

const EmailIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const GitHubIcon = () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
);

const LinkedInIcon = () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const WaveIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
);

function Contacts() {
    const contactLinks = [
        {
            name: "Email",
            value: "edelcortes3@gmail.com",
            href: "mailto:edelcortes3@gmail.com",
            icon: <EmailIcon />,
        },
        {
            name: "GitHub",
            value: "github.com/clandy07",
            href: "https://github.com/clandy07",
            icon: <GitHubIcon />,
        },
        {
            name: "LinkedIn",
            value: "linkedin.com/in/eduardo-cortes-68b86b386/",
            href: "https://www.linkedin.com/in/eduardo-cortes-68b86b386/",
            icon: <LinkedInIcon />,
        },
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900" />
            
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="relative z-10 px-8 md:px-16 lg:px-24 py-20 min-h-screen flex flex-col justify-center">
                {/* Header Section */}
                <motion.div 
                    className="max-w-4xl mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span 
                        className="text-sm font-mono text-green-500 tracking-widest uppercase mb-4 block"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Get In Touch
                    </motion.span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl pb-2 font-bold mb-8 bg-gradient-to-r from-gray-200 via-slate-300 to-slate-500 bg-clip-text text-transparent">
                        Let's Build<br />Something Great
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the platforms below.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
                    {contactLinks.map((contact, index) => (
                        <motion.a
                            key={contact.name}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-500 cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Glow effect */}
                            <div className="absolute -inset-px bg-gradient-to-br from-green-500/50 to-blue-500/50 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                            
                            <div className="relative">
                                <span className="text-slate-400 group-hover:text-green-400 transition-colors duration-300 mb-4 block">{contact.icon}</span>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-green-400 transition-colors duration-300">
                                    {contact.name}
                                </h3>
                                <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                                    {contact.value}
                                </p>
                                
                                {/* Arrow indicator */}
                                <div className="absolute top-6 right-0 text-slate-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300">
                                    →
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-slate-500 mb-6">Or send me a message directly</p>
                    <motion.a
                        href="mailto:edelcortes3@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Say Hello</span>
                        <WaveIcon />
                    </motion.a>
                </motion.div>

                {/* Bottom decorative element */}
                <motion.div 
                    className="mt-20 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contacts;