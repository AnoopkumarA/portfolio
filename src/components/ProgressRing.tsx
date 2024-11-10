import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProgressRingProps {
  percentage: number;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ percentage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Set once: false to animate every time it comes into view

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="relative w-[100px] h-[100px]">
      {/* Background circle */}
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="text-cyber-blue/10"
        />
        {/* Animated progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-cyber-blue"
        />
      </svg>
      {/* Percentage text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-mono text-cyber-blue"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {percentage}%
      </motion.div>
    </div>
  );
};

export default ProgressRing;