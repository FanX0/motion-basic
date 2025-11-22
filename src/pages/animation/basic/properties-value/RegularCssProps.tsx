import { motion } from "motion/react";

const RegularCssProps = () => {
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
        Using: animate regular CSS props (opacity, filter, backgroundColor)
      </div>
      <motion.div
        style={{ width: 80, height: 80 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        opacity
      </motion.div>

      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ filter: ["blur(0px)", "blur(6px)", "blur(0px)"] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        filter
      </motion.div>

      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ backgroundColor: ["#ef4444", "#22c55e", "#3b82f6"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        color
      </motion.div>
    </div>
  );
};

export default RegularCssProps;
