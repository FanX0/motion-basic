import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const ExitPresence = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <button onClick={() => setVisible((v) => !v)}>toggle</button>
      <AnimatePresence>
        {visible && (
          <motion.div key="box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} style={{ width: 120, height: 60, background: "#22c55e", borderRadius: 12 }} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExitPresence;