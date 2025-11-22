import { motion } from "motion/react";

const lines = [
  "M20 30 H 300",
  "M20 60 H 300",
  "M20 90 H 300",
];

const StaggeredDrawing = () => {
  return (
    <svg width={360} height={120} viewBox="0 0 360 120" style={{ border: "1px solid #eee" }}>
      {lines.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={4}
          pathLength={1}
          style={{ strokeDasharray: 1 }}
          initial={{ strokeDashoffset: 1 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1, delay: i * 0.2 }}
        />
      ))}
    </svg>
  );
};

export default StaggeredDrawing;