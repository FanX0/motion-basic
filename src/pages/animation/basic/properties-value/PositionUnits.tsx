import { motion } from "motion/react";

const PositionUnits = () => {
  return (
    <div style={{ position: "relative", width: 200, height: 200 }}>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: animate top/left position across units with absolute positioning
      </div>
      <motion.div
        style={{ position: "absolute", width: 40, height: 40 }}
        animate={{
          top: ["10px", "2rem", "10px"],
          left: ["10px", "5rem", "10px"],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        pos
      </motion.div>
    </div>
  );
};

export default PositionUnits;