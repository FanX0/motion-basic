import { motion } from "motion/react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

const BasicVariants = () => {
  return (
    <>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: variants propagation via parent initial/animate
      </div>
      <motion.div initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>one</motion.div>
        <motion.div variants={itemVariants}>two</motion.div>
        <motion.div variants={itemVariants}>three</motion.div>
      </motion.div>
    </>
  );
};

export default BasicVariants;