import { motion } from "motion/react";

const Interactions = () => {
  return (
    <svg width={360} height={140} viewBox="0 0 360 140">
      <motion.g whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ transformOrigin: "180px 70px" }}>
        <circle cx={100} cy={70} r={28} fill="#22c55e" />
        <motion.rect x={160} y={42} width={60} height={56} rx={12} initial={{ fill: "#3b82f6" }} whileHover={{ fill: "#ef4444" }} />
        <rect x={240} y={50} width={40} height={40} rx={10} fill="#f59e0b" />
      </motion.g>
    </svg>
  );
};

export default Interactions;