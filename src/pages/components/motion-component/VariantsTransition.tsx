import { motion } from "motion/react";

const variants = {
  active: { backgroundColor: "#f43f5e" },
  inactive: { backgroundColor: "#ffffff", transition: { duration: 0.6 } },
};

const VariantsTransition = () => {
  return (
    <motion.div variants={variants} animate="active" transition={{ type: "spring" }} style={{ width: 120, height: 60, borderRadius: 12 }} />
  );
};

export default VariantsTransition;