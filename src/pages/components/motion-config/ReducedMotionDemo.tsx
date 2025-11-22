import { motion, MotionConfig } from "motion/react";
import { useState } from "react";

const ReducedMotionDemo = () => {
  const [policy, setPolicy] = useState<"user" | "always" | "never">("user");

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8 }}>
        <button onClick={() => setPolicy("user")}>user</button>
        <button onClick={() => setPolicy("always")}>always</button>
        <button onClick={() => setPolicy("never")}>never</button>
      </div>
      <MotionConfig reducedMotion={policy}>
        <div style={{ display: "grid", gap: 8 }}>
          <motion.div initial={{ x: 0 }} animate={{ x: 120 }} style={{ width: 100, height: 40, background: "#0ea5e9", borderRadius: 8 }} />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: 100, height: 40, background: "#111827", color: "white", borderRadius: 8, display: "grid", placeItems: "center" }}>opacity</motion.div>
          <motion.div layout style={{ width: 100, height: 40, background: "#f59e0b", borderRadius: 8 }} />
        </div>
      </MotionConfig>
    </div>
  );
};

export default ReducedMotionDemo;