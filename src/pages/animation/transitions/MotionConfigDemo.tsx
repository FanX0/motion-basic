import { motion, MotionConfig } from "motion/react";

const MotionConfigDemo = () => {
  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
      <div style={{ display: "grid", gap: 8 }}>
        <motion.div initial={{ x: 0 }} animate={{ x: 120 }} style={{ width: 80, height: 40, background: "#22c55e", borderRadius: 8 }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: 80, height: 40, background: "#3b82f6", borderRadius: 8 }} />
      </div>
    </MotionConfig>
  );
};

export default MotionConfigDemo;