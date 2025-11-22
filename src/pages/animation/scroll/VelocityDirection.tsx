import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";

const VelocityDirection = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastRef = useRef(0);
  useMotionValueEvent(scrollY, "change", (v) => {
    const vel = v - lastRef.current;
    lastRef.current = v;
    if (vel > 2) setHidden(true);
    else if (vel < -2) setHidden(false);
  });

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
        Using: derive scroll velocity/direction and react with UI changes
      </div>
      <motion.div
        animate={{ y: hidden ? -60 : 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 48,
          background: "#111827",
          color: "white",
          display: "grid",
          placeItems: "center",
        }}
      >
        bar
      </motion.div>
      <div style={{ height: 1200 }} />
    </>
  );
};

export default VelocityDirection;
