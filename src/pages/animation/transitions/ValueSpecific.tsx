import { motion } from "motion/react";

const ValueSpecific = () => {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0.2 }}
      animate={{ x: 0, opacity: 1, transition: { default: { type: "spring" }, opacity: { ease: "linear", duration: 0.6 } } }}
      style={{ width: 120, height: 60, background: "#ef4444", borderRadius: 12 }}
    />
  );
};

export default ValueSpecific;