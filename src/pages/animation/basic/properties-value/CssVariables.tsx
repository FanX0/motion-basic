import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { useState } from "react";

const CssVariables = () => {
  const [on, setOn] = useState(false);

  const parentStyle: CSSProperties & { [key: `--${string}`]: string | number } =
    {
      width: 160,
      height: 160,
      "--bg": "#ef4444",
      "--scale": 1,
    };

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
        Using: CSS variables in style and animate, var(...) target values
      </div>
      <button onClick={() => setOn((v) => !v)}>toggle</button>
      <motion.div
        style={parentStyle}
        animate={{
          "--bg": on ? "#22c55e" : "#ef4444",
          "--scale": on ? 1.2 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          style={{ width: 60, height: 60, backgroundColor: "var(--bg)" }}
          animate={{ scale: "var(--scale)" }}
        >
          child
        </motion.div>
      </motion.div>

      <motion.div
        style={
          {
            width: 80,
            height: 80,
            "--action-bg": "#3b82f6",
          } as CSSProperties & { [key: `--${string}`]: string }
        }
        animate={{ backgroundColor: "var(--action-bg)" }}
      >
        var target
      </motion.div>
    </div>
  );
};

export default CssVariables;
