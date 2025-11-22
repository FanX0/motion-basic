import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const EventsDemo = () => {
  const x = useMotionValue(0);
  const [changed, setChanged] = useState(0);
  useMotionValueEvent(x, "change", (v) => setChanged(v as number));

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>change: {changed}</div>
      <motion.div drag="x" style={{ x, width: 140, height: 40, background: "#ef4444", borderRadius: 8 }} />
    </div>
  );
};

export default EventsDemo;