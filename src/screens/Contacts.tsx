import { motion } from 'framer-motion';

function Contacts() {
    const contactLinks = [
        {
            name: "Email",
            value: "eduardo@example.com",
            href: "mailto:eduardo@example.com",
            icon: "✉️",
        },
        {
            name: "GitHub",
            value: "github.com/eduardo",
            href: "https://github.com/eduardo",
            icon: "🐙",
        },
        {
            name: "LinkedIn",
            value: "linkedin.com/in/eduardo",
            href: "https://linkedin.com/in/eduardo",
            icon: "💼",
        },
        {
            name: "Twitter",
            value: "@eduardo",
            href: "https://twitter.com/eduardo",
            icon: "🐦",
        },
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
            
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            
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
                        className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-4 block"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Get In Touch
                    </motion.span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                        Let's Build<br />Something Great
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
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
                            className="group relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Glow effect */}
                            <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/50 to-indigo-500/50 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                            
                            <div className="relative">
                                <span className="text-4xl mb-4 block">{contact.icon}</span>
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                    {contact.name}
                                </h3>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                                    {contact.value}
                                </p>
                                
                                {/* Arrow indicator */}
                                <div className="absolute top-6 right-0 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
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
                    <p className="text-zinc-500 mb-6">Or send me a message directly</p>
                    <motion.a
                        href="mailto:eduardo@example.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Say Hello</span>
                        <span>👋</span>
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
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contacts;