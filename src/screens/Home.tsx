"use client";
import { motion } from "framer-motion";
import { LetterCollision } from "../components/LetterCollision";

function Home() {
	return (
		<section className="relative min-h-screen w-full overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900" />
			
			{/* Animated gradient orbs */}
			<div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
			
			{/* Grid pattern overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

			{/* Main Content */}
			<div className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
				<LetterCollision />
				
				{/* Scroll indicator */}
				<motion.div 
					className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.5 }}
				>
					<span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
					<motion.div 
						className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-2"
						initial={{ opacity: 0.5 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
					>
						<motion.div 
							className="w-1.5 h-1.5 bg-blue-500 rounded-full"
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default Home;
