import { motion } from "motion/react";

const MomentumAndTransition = () => {
  return (
    <div style={{ display: "grid", gridAutoFlow: "column", gap: 12 }}>
      <motion.div drag dragMomentum={false} style={{ width: 120, height: 60, background: "#ef4444", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}>no momentum</motion.div>
      <motion.div drag dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} style={{ width: 140, height: 60, background: "#a78bfa", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}>custom inertia</motion.div>
    </div>
  );
};

export default MomentumAndTransition;