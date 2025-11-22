import { motion, MotionConfig } from "motion/react";

const MotionConfigDefaults = () => {
  return (
    <MotionConfig transition={{ duration: 0.6, ease: "easeInOut" }}>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: MotionConfig with global default transition for subtree
      </div>
      <div>
        <motion.div initial={{ x: 0 }} animate={{ x: 120 }}>
          global tween x
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          global tween opacity
        </motion.div>
        <motion.div animate={{ x: [0, 60, 0] }}>global keyframes</motion.div>
      </div>
    </MotionConfig>
  );
};

export default MotionConfigDefaults;