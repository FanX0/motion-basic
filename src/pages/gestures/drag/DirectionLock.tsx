import { motion } from "motion/react";

const DirectionLock = () => {
  return (
    <motion.div
      drag="x"
      dragDirectionLock
      onDirectionLock={(axis) => console.log(`Locked to ${axis}`)}
      style={{ width: 140, height: 60, background: "#a78bfa", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}
    >
      direction lock
    </motion.div>
  );
};

export default DirectionLock;