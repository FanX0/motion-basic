import { motion } from "motion/react";

const BasicAttributes = () => {
  return (
    <svg width={320} height={140} viewBox="0 0 320 140">
      <motion.circle cx={60} cy={70} r={24} fill="#3b82f6" animate={{ r: [24, 36, 24], fill: ["#3b82f6", "#22c55e", "#3b82f6"] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.rect x={120} y={40} width={60} height={60} rx={12} fill="#ef4444" animate={{ x: [120, 160, 120] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.g initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity }} style={{ transformOrigin: "240px 70px" }}>
        <rect x={220} y={50} width={40} height={40} rx={10} fill="#f59e0b" />
      </motion.g>
    </svg>
  );
};

export default BasicAttributes;