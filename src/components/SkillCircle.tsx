import { motion } from "framer-motion";


interface SkillCircleProps {
  name: string;
  level: number; // 0–100
  logo: string;  // image path or URL
}

export const SkillCircle: React.FC<SkillCircleProps> = ({ name, level, logo }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="relative w-[120px] h-[120px] -rotate-90">
        {/* background circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="none"
        />
        {/* animated progress circle */}
        <motion.svg
          width="120"
          height="120"
          className="absolute top-0 left-0"
        >
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#3b82f6"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.svg>

        <div className="absolute inset-0 rotate-90 flex items-center justify-center">
          <img
            src={logo}
            alt={name}
            width={40}
            height={40}
            className="object-contain invert brightness-0"
          />
        </div>
      </div>

      <p className="text-lg font-medium">{name}</p>
      <p className="text-sm text-gray-500">{level}%</p>
    </div>
  );
};
