import { motion } from "motion/react";
import { useState } from "react";

const UnitConversion = () => {
  const [wide, setWide] = useState(false);

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
        Using: unit conversion in keyframes and width to "auto"
      </div>
      <motion.div
        style={{ width: 80, height: 80 }}
        animate={{ x: ["10px", "5rem", "10px"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        x units
      </motion.div>

      <button onClick={() => setWide((v) => !v)}>toggle width</button>
      <motion.div
        style={{ height: 40 }}
        animate={{ width: wide ? "auto" : 100 }}
        transition={{ duration: 0.4 }}
      >
        width auto
      </motion.div>
    </div>
  );
};

export default UnitConversion;