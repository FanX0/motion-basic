import { motion } from "motion/react";

const WhileHoverBasic = () => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} style={{ width: 160, height: 48, background: "#3b82f6", color: "white", borderRadius: 12 }}>
      whileHover
    </motion.button>
  );
};

export default WhileHoverBasic;