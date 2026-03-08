import { motion } from 'framer-motion';
import myImg from '../assets/photo.jpg';
import musicImg from '../assets/music.jpg';
import singImg from '../assets/sing.jpg';
import sportImg from '../assets/sport.png';

function Hobbies() {

    const hobbies = [
        {
            title: "Playing Guitar",
            img: musicImg,
            description: "I love playing acoustic and electric guitar during my free time.",
        },
        {
            title: "Photography",
            img: myImg,
            description: "Capturing moments through my lens is one of my favorite hobbies.",
        },
        {
            title: "Singing",
            img: singImg,
            description: "Expressing myself through music and vocals is both relaxing and inspiring for me.",
        },
        {
            title: "Sports",
            img: sportImg,
            description: "I stay active by playing pickleball and other sports, which help me build teamwork and keep my energy high.",
        },
    ];

    return (
        <section className="relative py-20 px-8 md:px-16 lg:px-24">
            {/* Section Header */}
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-sm font-mono text-amber-500 tracking-widest uppercase mb-4 block">
                    Life Beyond Code
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-200 via-slate-300 to-slate-500 bg-clip-text text-transparent">
                    "Touching Grass" Gallery
                </h2>
            </motion.div>

            {/* Hobbies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {hobbies.map((hobby, index) => (
                    <motion.div
                        key={index}
                        className="group [perspective:1000px] w-full h-72"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Side */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-700/50 [backface-visibility:hidden]">
                                <img
                                    src={hobby.img}
                                    alt={hobby.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-semibold text-white">{hobby.title}</h3>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Back Side */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-500/90 to-green-500/90 backdrop-blur-sm rounded-2xl flex flex-col justify-center items-center p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-white/20">
                                <h3 className="text-xl font-bold text-white mb-3">{hobby.title}</h3>
                                <p className="text-sm text-white/90 leading-relaxed">{hobby.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative hint */}
            <motion.p 
                className="text-center text-slate-500 text-sm mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Hover over the cards to learn more!
            </motion.p>
        </section>
    );
}

export default Hobbies;
