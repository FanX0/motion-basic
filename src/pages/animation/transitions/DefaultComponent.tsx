import { motion } from "motion/react";

const DefaultComponent = () => {
  return (
    <motion.div initial={{ x: 0 }} animate={{ x: 140 }} transition={{ type: "spring", stiffness: 100 }} style={{ width: 80, height: 40, background: "#a78bfa", borderRadius: 8 }} />
  );
};

export default DefaultComponent;