import { motion } from "motion/react";

const ValueTypes = () => {
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
        Using: numbers, number strings, colors, complex strings, display,
        visibility
      </div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ width: [80, 160, 80] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        number
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ width: ["80px", "160px", "80px"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        number string
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ backgroundColor: ["#ef4444", "#22c55e", "#3b82f6"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        color
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{
          boxShadow: [
            "0px 0px 0px rgba(0,0,0,0.0)",
            "0px 10px 30px rgba(0,0,0,0.3)",
            "0px 0px 0px rgba(0,0,0,0.0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        complex string
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ display: ["block", "none", "block"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        display
      </motion.div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ visibility: ["visible", "hidden", "visible"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        visibility
      </motion.div>
    </div>
  );
};

export default ValueTypes;