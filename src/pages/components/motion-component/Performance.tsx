import { motion, useMotionValue } from "motion/react";
import { useEffect } from "react";

const Performance = () => {
  const x = useMotionValue(0);
  useEffect(() => {
    const t = setTimeout(() => x.set(100), 500);
    return () => clearTimeout(t);
  }, [x]);

  return <motion.div style={{ x, width: 100, height: 40, background: "#0ea5e9", borderRadius: 8 }} />;
};

export default Performance;