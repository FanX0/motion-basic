import { motion } from "motion/react";
import React from "react";

const Base = React.forwardRef<HTMLDivElement, { color?: string }>((props, ref) => {
  return <div ref={ref} style={{ width: 120, height: 60, background: props.color ?? "#111827", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}>custom</div>;
});

const MotionCustom = motion.create(Base);

const CustomCreate = () => {
  return <MotionCustom animate={{ scale: 1.1 }} transition={{ type: "spring" }} />;
};

export default CustomCreate;