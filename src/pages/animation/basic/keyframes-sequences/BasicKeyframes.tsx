import { motion } from "motion/react";

const BasicKeyframes = () => {
  return (
    <>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: keyframe arrays in animate and repeat
      </div>
      <motion.div
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        x keyframes
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        opacity keyframes
      </motion.div>
    </>
  );
};

export default BasicKeyframes;