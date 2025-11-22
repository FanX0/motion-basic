import { motion } from "motion/react";
import { useRef, useState } from "react";

const SequenceExit = () => {
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
            tRef.current = window.setTimeout(() => setHidden(true), 700);
          }}
        >
          hidden
        </button>
      </div>
      <motion.ul
        initial={false}
        animate={visible ? "visible" : "hidden"}
        variants={{ visible: {}, hidden: { transition: { delayChildren: 0.1 } } }}
        style={{ display: hidden ? "none" : "grid", gap: 8 }}
      >
        {["A", "B", "C", "D"].map((item) => (
          <motion.li key={item} variants={{ hidden: { opacity: 0 } }} style={{ width: 100, height: 40, background: "#22c55e", borderRadius: 8, display: "grid", placeItems: "center" }}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SequenceExit;