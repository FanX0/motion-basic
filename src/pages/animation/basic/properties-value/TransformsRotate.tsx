import { motion } from "motion/react";

const TransformsRotate = () => {
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
        Using: rotate, rotateX, rotateY with transformPerspective
      </div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        rotate
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ rotateX: [0, 180, 0], transformPerspective: 400 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        rotateX
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ rotateY: [0, 180, 0], transformPerspective: 400 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        rotateY
      </motion.div>
    </div>
  );
};

export default TransformsRotate;