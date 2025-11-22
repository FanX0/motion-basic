import { motion } from "motion/react";

const DefaultTransitions = () => {
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
        Using: default transitions (spring for physical values, tween for visual
        values)
      </div>
      <motion.div initial={{ x: 0 }} animate={{ x: 100 }}>
        default x spring
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        default opacity tween
      </motion.div>
      <motion.div
        animate={{ backgroundColor: ["#ef4444", "#22c55e", "#3b82f6"] }}
      >
        default color tween
      </motion.div>
      <motion.div initial={{ scale: 1 }} animate={{ scale: 1.2 }}>
        default scale spring
      </motion.div>
    </div>
  );
};

export default DefaultTransitions;