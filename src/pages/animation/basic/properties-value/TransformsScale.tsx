import { motion } from "motion/react";

const TransformsScale = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: transform scale, scaleX, scaleY keyframes
      </div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        scale
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ scaleX: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        scaleX
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ scaleY: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        scaleY
      </motion.div>
    </div>
  );
};

export default TransformsScale;