import { motion } from "motion/react";

const Drag = () => {
  return (
    <div style={{ position: "relative", height: 120, border: "1px solid #ddd" }}>
      <motion.div
        drag="x"
        whileDrag={{ scale: 1.1, backgroundColor: "#f43f5e" }}
        style={{ width: 120, height: 60, background: "#22c55e", color: "white", display: "grid", placeItems: "center", borderRadius: 12, position: "absolute", top: 30, left: 10 }}
      >
        drag x
      </motion.div>
    </div>
  );
};

export default Drag;