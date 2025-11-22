import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const PropagateExit = () => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <button onClick={() => setShow((s) => !s)}>{show ? "hide" : "show"}</button>
      <AnimatePresence>
        {show ? (
          <motion.section exit={{ opacity: 0 }} style={{ padding: 12, border: "1px solid #ddd", borderRadius: 12 }}>
            <AnimatePresence propagate>
              <motion.div key="child-a" exit={{ opacity: 0 }} style={{ width: 100, height: 40, background: "#10b981", borderRadius: 8 }} />
              <motion.div key="child-b" exit={{ opacity: 0 }} style={{ width: 100, height: 40, background: "#0ea5e9", borderRadius: 8 }} />
            </AnimatePresence>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default PropagateExit;