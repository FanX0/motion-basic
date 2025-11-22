import { motion } from "motion/react";

const AxisLock = () => {
  return (
    <div style={{ display: "grid", gridAutoFlow: "column", gap: 12 }}>
      <motion.div drag="x" style={{ width: 100, height: 50, background: "#0ea5e9", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}>x</motion.div>
      <motion.div drag="y" style={{ width: 100, height: 50, background: "#22c55e", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}>y</motion.div>
    </div>
  );
};

export default AxisLock;