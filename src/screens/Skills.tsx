import { SkillCircle } from "../components/SkillCircle";
import { motion } from "framer-motion";

import reactLogo from "../assets/react.svg";
import expressLogo from "../assets/express.svg";
import nextLogo from "../assets/nextdotjs.svg";
import nodeLogo from "../assets/nodedotjs.svg";
import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript.svg";
import prismaLogo from "../assets/prisma.svg";
import mySqlLogo from "../assets/mysql.svg";
import postgresLogo from "../assets/postgresql.svg";
import cLogo from "../assets/c.svg";
import pythonLogo from "../assets/python.svg";
import dockerLogo from "../assets/docker.svg";
import gitLogo from "../assets/git.svg";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React & React Native", level: 90, logo: reactLogo },
        { name: "Next.js", level: 85, logo: nextLogo },
        { name: "TypeScript", level: 90, logo: tsLogo },
        { name: "JavaScript", level: 90, logo: jsLogo },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80, logo: nodeLogo },
        { name: "Express", level: 70, logo: expressLogo },
        { name: "Prisma", level: 85, logo: prismaLogo },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 95, logo: mySqlLogo },
        { name: "PostgreSQL", level: 95, logo: postgresLogo },
      ],
    },
    {
      title: "Languages & Tools",
      skills: [
        { name: "C", level: 95, logo: cLogo },
        { name: "Python", level: 70, logo: pythonLogo },
        { name: "Docker", level: 80, logo: dockerLogo },
        { name: "Git", level: 95, logo: gitLogo },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      
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
            className="text-sm font-mono text-sky-400 tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Expertise
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            What I Bring<br />to the Table
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Throughout my studies and projects, I've gained hands-on experience with various programming languages and frameworks. Each skill here represents a step in my journey to becoming a well-rounded developer.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-white">{category.title}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-zinc-700 to-transparent" />
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCircle
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    logo={skill.logo}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
