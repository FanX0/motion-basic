import { motion } from "motion/react";

const Tap = () => {
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
        Using: whileTap
      </div>
      <motion.div whileTap={{ scale: 0.95 }}>tap</motion.div>
    </>
  );
};

export default Tap;