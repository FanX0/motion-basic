import { motion } from "motion/react";

const TransitionBasics = () => {
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
        Using: transition type spring, tween easing, keyframe timing via times
      </div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        spring x
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        tween opacity
      </motion.div>
      <motion.div
        animate={{ x: [0, 80, 0] }}
        transition={{ duration: 1.5, times: [0, 0.5, 1] }}
      >
        keyframes times
      </motion.div>
    </div>
  );
};

export default TransitionBasics;