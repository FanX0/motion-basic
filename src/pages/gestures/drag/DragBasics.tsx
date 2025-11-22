import { motion } from "motion/react";

const DragBasics = () => {
  return (
    <motion.div drag style={{ width: 120, height: 60, background: "#3b82f6", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}>
      drag
    </motion.div>
  );
};

export default DragBasics;