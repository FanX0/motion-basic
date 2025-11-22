import { motion } from "motion/react";

const WhileHoverCustom = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
      transition={{ duration: 0.5 }}
      style={{ width: 200, height: 48, background: "#0ea5e9", color: "white", borderRadius: 12 }}
    >
      custom transitions
    </motion.button>
  );
};

export default WhileHoverCustom;