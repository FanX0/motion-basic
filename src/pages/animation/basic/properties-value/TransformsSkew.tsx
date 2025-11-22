import { motion } from "motion/react";

const TransformsSkew = () => {
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
        Using: skewX and skewY keyframes
      </div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ skewX: ["0deg", "20deg", "0deg"] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        skewX
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ skewY: ["0deg", "20deg", "0deg"] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        skewY
      </motion.div>
    </div>
  );
};

export default TransformsSkew;