import { useEffect, useState } from "react";
import meImg from "../assets/me.jpg";

function Hero() {
	const [showImage, setShowImage] = useState(false);
	const [showText, setShowText] = useState(false);

	useEffect(() => {
		setTimeout(() => setShowImage(true), 200);
		setTimeout(() => setShowText(true), 600);
	}, []);

	return (
		<section className="min-h-screen flex items-center justify-center bg-transparent p-0">
			<div className="flex items-center">
				<img
					src={meImg}
					alt="Me"
					className={`w-128 h-128 object-cover rounded-full mr-8 transition-opacity duration-700 ${
						showImage ? "opacity-100" : "opacity-0"
					}`}
				/>
				<div
					className={`transition-all duration-700 ${
						showText ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
					}`}
				>
					<h1 className="text-3xl font-bold mb-2">
						Hi, I’m Eduardo — a Computer Science Student & Developer
					</h1>
					<p className="text-lg text-gray-400">
						My passion for building began in childhood, tinkering with LEGOs and
						anything I could find. Today, I channel that same curiosity and
						creativity into developing software and solving real-world problems.
						I’m grateful for every opportunity to learn, grow, and create
						something meaningful.
					</p>
					<ul className="flex items-center gap-4 mt-4 p-4 px-0">
						<li>
							<button className="rounded-full px-6 py-2 bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
								Let's work together!
							</button>
						</li>
						<li>
							<button className="rounded-full px-6 py-2 bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
								My resume?
							</button>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Hero;
