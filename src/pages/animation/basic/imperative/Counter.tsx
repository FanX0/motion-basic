import { animate } from "motion";
import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const Counter = () => {
  const v = useMotionValue(0);
  const [d, setD] = useState(0);
  useMotionValueEvent(v, "change", (latest) => setD(Math.round(latest)));

  return (
    <>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: MotionValue with animate and useMotionValueEvent
      </div>
      <motion.span>{d}</motion.span>
      <button onClick={() => animate(v, 100, { duration: 2 })}>start</button>
    </>
  );
};

export default Counter;