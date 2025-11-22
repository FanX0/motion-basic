import { motion } from "motion/react";

const TransformOriginPerspective = () => {
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
        Using: originX, originY, rotate/rotateX and transformPerspective
      </div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ rotate: [0, 90, 0], originX: 0, originY: 0 }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        origin 0,0
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ rotateX: [0, 90, 0], transformPerspective: 400, originY: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        perspective
      </motion.div>
    </div>
  );
};

export default TransformOriginPerspective;