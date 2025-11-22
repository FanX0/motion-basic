import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const SetGet = () => {
  const x = useMotionValue(0);
  const [latest, setLatest] = useState(0);
  useMotionValueEvent(x, "change", (v) => setLatest(v as number));

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8 }}>
        <button onClick={() => x.set(100)}>set 100</button>
        <button onClick={() => x.set(0)}>set 0</button>
        <div>get: {x.get()}</div>
        <div>latest: {latest}</div>
      </div>
      <motion.div style={{ x, width: 120, height: 40, background: "#22c55e", borderRadius: 8 }} />
    </div>
  );
};

export default SetGet;