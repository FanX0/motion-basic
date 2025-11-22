import { motion } from "motion/react";

const Basic = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <motion.div className="box" animate={{ scale: 1.2 }} style={{ width: 80, height: 40, background: "#3b82f6", borderRadius: 8 }} />
      <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} style={{ width: 80, height: 40, background: "#22c55e", borderRadius: 8 }} />
      <motion.div layout style={{ width: 80, height: 40, background: "#ef4444", borderRadius: 8 }} />
      <motion.div style={{ x: 100, width: 80, height: 40, background: "#a78bfa", borderRadius: 8 }} />
    </div>
  );
};

export default Basic;