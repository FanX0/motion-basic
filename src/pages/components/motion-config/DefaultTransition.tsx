import { motion, MotionConfig } from "motion/react";

const DefaultTransition = () => {
  return (
    <MotionConfig transition={{ duration: 0.6, ease: "easeInOut" }}>
      <div style={{ display: "grid", gap: 8 }}>
        <motion.div initial={{ x: 0 }} animate={{ x: 120 }} style={{ width: 100, height: 40, background: "#3b82f6", borderRadius: 8 }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: 100, height: 40, background: "#22c55e", borderRadius: 8 }} />
        <motion.div animate={{ x: [0, 60, 0] }} style={{ width: 100, height: 40, background: "#a78bfa", borderRadius: 8 }} />
      </div>
    </MotionConfig>
  );
};

export default DefaultTransition;