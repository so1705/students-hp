import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

/**
 * Neo-classical loading screen with animated circular progress bar
 * Features: Professional gold accent, serif typography, smooth animations
 * Color Scheme: Warm white background (#fafaf8), sophisticated dark text (#2d2d2a), professional gold (#c9a961)
 */
export default function LoadingScreen({ onComplete, duration = 3000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setIsComplete(true);
        setTimeout(() => {
          onComplete?.();
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5, delay: isComplete ? 0.2 : 0 }}
      className="fixed inset-0 bg-[#fafaf8] flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Animated circular progress bar */}
        <div className="relative w-32 h-32">
          <svg
            className="absolute inset-0"
            viewBox="0 0 120 120"
            style={{ transform: 'rotate(-90deg)' }}
          >
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="rgba(45, 45, 42, 0.1)"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <motion.circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#c9a961"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transition={{ duration: 0.1 }}
            />
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm font-semibold text-[#2d2d2a]"
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </div>

        {/* Organization name with staggered animation */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#2d2d2a]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              Elite Student
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-[#c9a961]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              Organization
            </h1>
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-sm text-[#3a3a37] mt-4"
          >
            読み込み中...
          </motion.p>
        </div>

        {/* Gold sweep line animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"
          style={{ originX: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
