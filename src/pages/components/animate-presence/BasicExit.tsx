import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const BasicExit = () => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <button onClick={() => setShow((s) => !s)}>{show ? "hide" : "show"}</button>
      <AnimatePresence>
        {show && (
          <motion.div key="modal" exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: 140, height: 60, background: "#3b82f6", borderRadius: 12 }} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicExit;