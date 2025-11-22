import { motion } from "motion/react";

const Focus = () => {
  return (
    <motion.button
      whileFocus={{ scale: 1.08 }}
      style={{ width: 160, height: 48, background: "#0ea5e9", color: "white", borderRadius: 12 }}
    >
      focus me
    </motion.button>
  );
};

export default Focus;