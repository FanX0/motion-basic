import { motion } from "motion/react";

const TransformsTranslate = () => {
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
        Using: transform translate props x and y with keyframes
      </div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        x
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        y
      </motion.div>
    </div>
  );
};

export default TransformsTranslate;