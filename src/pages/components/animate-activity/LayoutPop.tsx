import { motion } from "motion/react";
import { useRef, useState } from "react";

const LayoutPop = () => {
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [exiting, setExiting] = useState(false);
  const tRef = useRef<number | undefined>(undefined);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8 }}>
        <button
          onClick={() => {
            if (tRef.current) window.clearTimeout(tRef.current);
            setHidden(false);
            setExiting(false);
            setVisible(true);
          }}
        >
          visible
        </button>
        <button
          onClick={() => {
            if (tRef.current) window.clearTimeout(tRef.current);
            setExiting(true);
            setVisible(false);
            tRef.current = window.setTimeout(() => {
              setHidden(true);
              setExiting(false);
            }, 400);
          }}
        >
          hidden
        </button>
      </div>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 12 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ display: hidden ? "none" : "block", position: exiting ? "absolute" : "static", width: 140, height: 60, background: "#f59e0b", borderRadius: 12 }}
        />
        <div style={{ width: 140, height: 60, background: "#e5e7eb", borderRadius: 12 }} />
      </div>
    </div>
  );
};

export default LayoutPop;