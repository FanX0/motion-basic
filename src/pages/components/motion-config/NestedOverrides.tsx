import { motion, MotionConfig } from "motion/react";

const NestedOverrides = () => {
  return (
    <MotionConfig transition={{ duration: 0.6, ease: "easeInOut" }}>
      <div style={{ display: "grid", gap: 12 }}>
        <motion.div initial={{ x: 0 }} animate={{ x: 120 }} style={{ width: 100, height: 40, background: "#ef4444", borderRadius: 8 }} />
        <MotionConfig transition={{ type: "spring", stiffness: 160, damping: 24 }}>
          <motion.div initial={{ x: 0 }} animate={{ x: 120 }} style={{ width: 100, height: 40, background: "#10b981", borderRadius: 8 }} />
        </MotionConfig>
      </div>
    </MotionConfig>
  );
};

export default NestedOverrides;