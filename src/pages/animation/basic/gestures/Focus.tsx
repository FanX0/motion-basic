import { motion } from "motion/react";

const Focus = () => {
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
        Using: whileFocus
      </div>
      <motion.button whileFocus={{ scale: 1.1 }}>focus</motion.button>
    </>
  );
};

export default Focus;