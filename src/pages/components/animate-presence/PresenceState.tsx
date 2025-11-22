import { motion, useIsPresent } from "motion/react";

const PresenceState = () => {
  const isPresent = useIsPresent();
  return (
    <motion.div exit={{ opacity: 0 }} style={{ width: 140, height: 60, background: "#a78bfa", borderRadius: 12, display: "grid", placeItems: "center" }}>
      {isPresent ? "Here!" : "Exiting..."}
    </motion.div>
  );
};

export default PresenceState;