'use client';
import Hobbies from './Hobbies';
import pp from '../assets/me.jpg';


function About() {
    return (
        <section className="scroll-smooth bg-white w-full min-h-screen text-black">
            <div className="px-8 py-20 flex flex-col md:flex-row flex-wrap gap-x-20 max-w-7xl mx-auto justify-between items-center">
                <img src={pp} alt="Profile Picture" className="w-196 h-196 md:w-100 md:h-100 rounded-full object-cover flex-shrink-0" />
                <div className="flex-1 flex flex-col gap-12 min-w-[250px] max-w-2xl">
                    <h1 className="text-[60px] md:text-[120px] font-semibold">
                        Hello, I'm Eduardo.
                    </h1>
                    <div className="flex flex-col gap-8">
                        <p className="text-xl md:text-3xl font-light max-w-3xl leading-relaxed">
                            I am currently a Computer Science undergraduate at the University of San Carlos.
                        </p>
                        <p className="text-xl md:text-3xl font-light max-w-3xl leading-relaxed">
                            I craft digital experiences with code and creativity.
                        </p>
                        <p className="text-xl md:text-3xl font-light max-w-3xl leading-relaxed">
                            Full-stack developer focused on building elegant solutions
                            to complex problems.
                        </p>
                    </div>
                </div>
            </div>
            <Hobbies />
        </section>
    );
}

export default About;