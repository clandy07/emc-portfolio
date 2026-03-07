import { motion } from "framer-motion";

interface SkillCircleProps {
  name: string;
  level: number; // 0–100
  logo: string;  // image path or URL
  index?: number;
}

export const SkillCircle: React.FC<SkillCircleProps> = ({ name, level, logo, index = 0 }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div 
      className="group relative flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-green-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:via-green-500/5 group-hover:to-amber-500/10 transition-all duration-500" />
      
      <div className="relative w-[100px] h-[100px]">
        {/* Background circle */}
        <svg width="100" height="100" className="absolute top-0 left-0 -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
            fill="none"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>

        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.img
            src={logo}
            alt={name}
            width={36}
            height={36}
            className="object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </div>
      </div>

      {/* Skill info */}
      <div className="relative mt-4 text-center space-y-1">
        <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{name}</p>
        <motion.p 
          className="text-xs font-mono text-slate-500 group-hover:text-blue-400 transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {level}%
        </motion.p>
      </div>
    </motion.div>
  );
};
