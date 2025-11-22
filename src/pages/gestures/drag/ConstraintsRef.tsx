import { motion } from "motion/react";
import { useRef } from "react";

const ConstraintsRef = () => {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  return (
    <motion.div ref={constraintsRef} style={{ width: 320, height: 200, border: "1px solid #ddd", position: "relative" }}>
      <motion.div drag dragConstraints={constraintsRef} style={{ width: 120, height: 60, background: "#3b82f6", color: "white", display: "grid", placeItems: "center", borderRadius: 12, position: "absolute", top: 20, left: 20 }}>
        ref bounds
      </motion.div>
    </motion.div>
  );
};

export default ConstraintsRef;