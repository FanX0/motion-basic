import { motion } from "motion/react";

const WhileDragLift = () => {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      style={{ width: 140, height: 60, background: "#f59e0b", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}
    >
      lift
    </motion.div>
  );
};

export default WhileDragLift;