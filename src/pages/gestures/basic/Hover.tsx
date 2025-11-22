import { motion } from "motion/react";

const Hover = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      style={{ width: 120, height: 60, background: "#3b82f6", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}
    >
      hover
    </motion.div>
  );
};

export default Hover;