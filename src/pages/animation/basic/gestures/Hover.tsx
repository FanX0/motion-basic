import { motion } from "motion/react";

const Hover = () => {
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
        Using: whileHover
      </div>
      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>hover</motion.div>
    </>
  );
};

export default Hover;