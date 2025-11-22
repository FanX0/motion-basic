import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const ExitAnimations = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: exit prop and AnimatePresence to animate removed elements
      </div>
      <button onClick={() => setVisible((v) => !v)}>toggle</button>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
          >
            exit
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExitAnimations;
