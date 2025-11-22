import { motion, useMotionValue, useTransform } from "motion/react";

const TransformChain = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return <motion.div drag="x" style={{ x, opacity, width: 140, height: 40, background: "#f59e0b", borderRadius: 8 }} />;
};

export default TransformChain;