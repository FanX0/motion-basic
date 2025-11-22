import { motion, useMotionValue } from "motion/react";

const MultiSync = () => {
  const x = useMotionValue(0);

  return (
    <div style={{ display: "grid", gridAutoFlow: "column", gap: 12 }}>
      <motion.div drag="x" style={{ x, width: 120, height: 40, background: "#0ea5e9", borderRadius: 8 }} />
      <motion.div style={{ x, width: 120, height: 40, background: "#a78bfa", borderRadius: 8 }} />
    </div>
  );
};

export default MultiSync;