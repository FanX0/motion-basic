import { motion } from "motion/react";

const PathDrawing = () => {
  return (
    <svg width={360} height={120} viewBox="0 0 360 120" style={{ border: "1px solid #eee" }}>
      <motion.path
        d="M20 60 C 80 10, 160 110, 220 60 S 320 10, 340 60"
        fill="none"
        stroke="#111827"
        strokeWidth={4}
        pathLength={1}
        style={{ strokeDasharray: 1 }}
        initial={{ strokeDashoffset: 1 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2 }}
      />
    </svg>
  );
};

export default PathDrawing;