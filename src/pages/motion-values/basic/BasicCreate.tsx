import { motion, useMotionValue } from "motion/react";

const BasicCreate = () => {
  const x = useMotionValue(0);
  return <motion.div style={{ x, width: 120, height: 40, background: "#3b82f6", borderRadius: 8 }} />;
};

export default BasicCreate;