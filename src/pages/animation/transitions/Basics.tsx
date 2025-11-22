import { motion } from "motion/react";

const Basics = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <motion.div initial={{ x: 0 }} animate={{ x: 120 }} transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }} style={{ width: 80, height: 40, background: "#3b82f6", borderRadius: 8 }} />
      <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} style={{ width: 80, height: 40, background: "#22c55e", borderRadius: 8 }} />
    </div>
  );
};

export default Basics;