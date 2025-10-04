import { SkillCircle } from "../components/SkillCircle";

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
  const skills = [
    { name: "React & React Native", level: 90, logo: reactLogo },
    { name: "Express", level: 70, logo: expressLogo },
    { name: "Next.js", level: 85, logo: nextLogo },
    { name: "Node.js", level: 80, logo: nodeLogo },
    { name: "Prisma", level: 85, logo: prismaLogo },
    { name: "JavaScript", level: 90, logo: jsLogo },
    { name: "TypeScript", level: 90, logo: tsLogo },
    { name: "mySQL", level: 95, logo: mySqlLogo },
    { name: "postgresql", level: 95, logo: postgresLogo },
    { name: "C", level: 95, logo: cLogo },
    { name: "Python", level: 70, logo: pythonLogo },
    { name: "Docker", level: 80, logo: dockerLogo },
    { name: "Git", level: 95, logo: gitLogo },
  ];

  return (
    <section className="flex scroll-smooth bg-black w-full min-h-screen p-20 justify-between ">
      <div className="flex-1 flex flex-col gap-12 min-w-[250px] max-w-2xl">
        <h1 className="text-[60px] md:text-[120px] font-semibold">
          What I Bring to the Table
        </h1>
        <div className="flex flex-col gap-8">
          <p className="text-xs md:text-3xl font-light max-w-3xl leading-relaxed">
            Throughout my studies and projects, I’ve gained hands-on experience with various programming languages and frameworks. Each skill here represents a step in my journey to becoming a well-rounded developer.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {skills.map((skill) => (
          <SkillCircle
            key={skill.name}
            name={skill.name}
            level={skill.level}
            logo={skill.logo}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;