import { motion, useMotionValue, useSpring } from "motion/react";

const SpringAttachment = () => {
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const x = useSpring(dragX);
  const y = useSpring(dragY);

  return <motion.div drag style={{ x, y, width: 80, height: 80, background: "#8b5cf6", borderRadius: 12 }} dragMomentum={false} />;
};

export default SpringAttachment;