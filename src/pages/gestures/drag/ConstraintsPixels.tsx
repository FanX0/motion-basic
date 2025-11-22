import { motion } from "motion/react";

const ConstraintsPixels = () => {
  return (
    <div style={{ position: "relative", height: 200, border: "1px solid #ddd" }}>
      <motion.div
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        style={{ width: 120, height: 60, background: "#10b981", color: "white", display: "grid", placeItems: "center", borderRadius: 12, position: "absolute", top: 70, left: 70 }}
      >
        pixels
      </motion.div>
    </div>
  );
};

export default ConstraintsPixels;