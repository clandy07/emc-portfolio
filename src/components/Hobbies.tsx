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
            description: "I stay active by playing basketball and other sports, which help me build teamwork and keep my energy high.",
        },
    ];

    return (
        <section className="py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
                {hobbies.map((hobby, index) => (
                    <div
                        key={index}
                        className="group [perspective:1000px] w-full h-64"
                    >
                        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Side */}
                            <div className="absolute inset-0 bg-white dark:bg-gray-800 border rounded-xl overflow-hidden shadow-md flex flex-col justify-center items-center [backface-visibility:hidden]">
                                <img
                                    src={hobby.img}
                                    alt={hobby.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Back Side */}
                            <div className="absolute inset-0 bg-blue-500 text-white rounded-xl flex flex-col justify-center items-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
                                <p className="text-sm">{hobby.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hobbies;
