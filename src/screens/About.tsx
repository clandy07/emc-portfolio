'use client';
import { motion } from 'framer-motion';
import Hobbies from '../components/Hobbies';
import pp from '../assets/me.jpg';

function About() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900" />
            
            {/* Animated gradient orbs */}
            <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="relative z-10 px-8 md:px-16 lg:px-24 py-20">
                <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto items-center">
                    {/* Profile Image with Flip Effect */}
                    <motion.div 
                        className="group [perspective:1000px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80 duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Side */}
                            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 [backface-visibility:hidden]">
                                <img src={pp} alt="Profile Picture" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                            </div>
                            {/* Back Side */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-green-500/90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center p-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border-4 border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-3">Hello!</h3>
                                <p className="text-white/90 text-sm">Nice to meet you!</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col gap-8 min-w-[250px] max-w-2xl">
                        <motion.span 
                            className="text-sm font-mono text-blue-500 tracking-widest uppercase"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            About Me
                        </motion.span>
                        
                        <motion.h1 
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-200 via-slate-300 to-slate-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Hello, I'm Eduardo.
                        </motion.h1>

                        <motion.div 
                            className="flex flex-col gap-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                                I am currently a Computer Science undergraduate at the University of San Carlos.
                            </p>
                            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                                I craft digital experiences with code and creativity.
                            </p>
                            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                                Full-stack developer focused on building elegant solutions to complex problems.
                            </p>
                        </motion.div>

                        {/* Stats or highlights */}
                        <motion.div 
                            className="flex flex-wrap gap-6 mt-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {[
                                { label: "Years Coding", value: "3+" },
                                { label: "Projects Built", value: "10+" },
                                { label: "Technologies", value: "15+" },
                            ].map((stat) => (
                                <div 
                                    key={stat.label}
                                    className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl px-6 py-4 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <p className="text-2xl md:text-3xl font-bold text-gray-200">{stat.value}</p>
                                        <p className="text-sm text-slate-500">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Decorative divider */}
                <motion.div 
                    className="mt-20 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                </motion.div>
            </div>
            
            <Hobbies />
        </section>
    );
}

export default About;