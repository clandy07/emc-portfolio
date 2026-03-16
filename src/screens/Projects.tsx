import { motion } from 'framer-motion';
import uscVT from '../assets/uscVT.jpeg';
import RD from '../assets/RD.jpeg';
import mup from '../assets/mUp.jpeg';
import sl from '../assets/sl2.png';
import pikol from '../assets/pikol.png';


function Projects() {
    const projects = [
         {
            title: "PikolPal",
            description: "A mobile map-first app that siimplifies the process of finding and renting pickleball courts in Cebu City, built with React Native and Expo.",
            tech: ["React Native", "Expo", "Supabase"],
            image: pikol,
            view: "https://beta.pikolpal.com/",
        },
        {
            title: "USC Virtual Tour and Events Map",
            description: "An interactive web application that allows users to explore the University of San Carlos - Talamban Campus through a virtual map while viewing important campus locations and upcoming events using Google Maps APIs.",
            tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind", "Drizzle ORM", "Google Maps APIs"],
            image: uscVT,
            github: "https://github.com/clandy07/uscVirtualTour",
        },
        {
            title: "MoneyUP",
            description: "A personal finance tracking application that allows users to manage income, expenses, and financial goals through an intuitive interface and backend API integration.",
            tech: ["React", "Prisma", "Express", "MySQL"],
            image: mup,
            github: "https://github.com/graysonLL/MoneyUP",
        },
        {
            title: "RacistDetect",
            description: "A machine learning project for our undergraduate thesis that detects racist or harmful text using an ensemble model combining BERT-based feature extraction with traditional classifiers.",
            tech: ["Python"],
            image: RD,
            github: "https://github.com/clandy07/RacistDetect",
        },
        {
            title: "SneakyLink",
            description: "A mobile StockX-Clone app built with React Native and Expo, featuring user authentication, product listings, and more.",
            tech: ["React Native", "Expo"],
            image: sl,
            github: "https://github.com/graysonLL/MobDev-Final-Project",
        },
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900" />

            {/* Animated gradient orbs */}
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="relative z-10 px-8 md:px-16 lg:px-24 py-20">
                {/* Header Section */}
                <motion.div
                    className="max-w-4xl mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="text-sm font-mono text-amber-500 tracking-widest uppercase mb-4 block"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Featured Work
                    </motion.span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl pb-2 font-bold mb-8 bg-gradient-to-r from-gray-200 via-slate-300 to-slate-500 bg-clip-text text-transparent">
                        Things I've<br />Built
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                        A collection of projects that showcase my journey as a developer. Each project represents unique challenges and learning experiences.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/5 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glow effect */}
                            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/50 to-green-500/50 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                            {/* Project Image/Icon */}
                            <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700/50 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative p-6">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-mono bg-slate-900/80 text-slate-400 rounded-full border border-slate-700/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors duration-300"
                                        >
                                            <span>GitHub</span>
                                            <span>↗</span>
                                        </a>
                                    )}
                                    {project.view && (
                                        <a
                                            href={project.view}
                                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300"
                                        >
                                            <span>View Project</span>
                                            <span>↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.a
                        href="https://github.com/clandy07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-gray-200 font-medium hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>See More on GitHub</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
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

export default Projects;