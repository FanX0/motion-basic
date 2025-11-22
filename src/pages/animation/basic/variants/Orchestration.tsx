import { motion } from "motion/react";

const child = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Orchestration = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: transition when="beforeChildren" and delayChildren for
        orchestration
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ when: "beforeChildren", delayChildren: 0.2 }}
      >
        <motion.div variants={child}>a</motion.div>
        <motion.div variants={child}>b</motion.div>
        <motion.div variants={child}>c</motion.div>
      </motion.div>
    </div>
  );
};

export default Orchestration;
