import { motion } from "motion/react";

const SyncDemo = () => {
  return (
    <motion.div animate={{ scale: 1.1 }} transition={{ duration: 0.4 }} style={{ width: 120, height: 60, background: "#3b82f6", borderRadius: 12 }} />
  );
};

export default SyncDemo;