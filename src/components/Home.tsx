"use client";
import { LetterCollision } from "./LetterCollision";

function Home() {
	return (
		<div className="min-h-screen relative overflow-hidden w-full">
			<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 animate-gradient" />

			<div className="px-8 py-6 relative z-10">
				<LetterCollision />
			</div>
		</div>
	);
}

export default Home;
