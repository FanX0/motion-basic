import { motion, useMotionValue } from "motion/react";
import { useState } from "react";

const VelocityDemo = () => {
  const x = useMotionValue(0);
  const [vel, setVel] = useState(0);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>velocity: {vel.toFixed(1)}</div>
      <motion.div
        drag="x"
        onDragEnd={() => setVel(x.getVelocity())}
        style={{ x, width: 140, height: 40, background: "#10b981", borderRadius: 8 }}
      />
    </div>
  );
};

export default VelocityDemo;