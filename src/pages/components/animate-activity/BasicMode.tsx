import { motion } from "motion/react";
import { useRef, useState } from "react";

const BasicMode = () => {
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);
  const tRef = useRef<number | undefined>(undefined);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8 }}>
        <button
          onClick={() => {
            if (tRef.current) window.clearTimeout(tRef.current);
            setHidden(false);
            setVisible(true);
          }}
        >
          visible
        </button>
        <button
          onClick={() => {
            if (tRef.current) window.clearTimeout(tRef.current);
            setVisible(false);
            tRef.current = window.setTimeout(() => setHidden(true), 400);
          }}
        >
          hidden
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ display: hidden ? "none" : "block", width: 140, height: 60, background: "#3b82f6", borderRadius: 12 }}
      />
    </div>
  );
};

export default BasicMode;