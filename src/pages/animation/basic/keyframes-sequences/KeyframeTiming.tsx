import { motion } from "motion/react";

const KeyframeTiming = () => {
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
        Using: transition.times to position keyframes in the animation timeline
      </div>
      <motion.div
        animate={{ x: [0, 120, 0] }}
        transition={{
          duration: 2,
          ease: "linear",
          times: [0, 0.2, 1],
          repeat: Infinity,
        }}
      >
        times
      </motion.div>
    </>
  );
};

export default KeyframeTiming;