'use client';
import React from 'react';

function About() {
    return (
        <section className="scroll-smooth bg-white w-full min-h-screen text-black">
            <div className="px-8 py-20">
                <div className="flex flex-col gap-12">
                    <h1 className="text-[60px] md:text-[120px] font-semibold">
                        I'm Eduardo.
                    </h1>
                    <div className="flex flex-col gap-8">
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
        </section>
    );
}

export default About;