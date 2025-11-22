import { motion } from "motion/react";
import { useState } from "react";

const Pan = () => {
  const [count, setCount] = useState(0);
  return (
    <motion.div
      onPan={() => setCount((c) => c + 1)}
      style={{ width: 160, height: 80, background: "#f59e0b", color: "white", display: "grid", placeItems: "center", borderRadius: 12, touchAction: "none" }}
    >
      pan events: {count}
    </motion.div>
  );
};

export default Pan;