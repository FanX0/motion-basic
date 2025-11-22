import { motion, usePresence } from "motion/react";
import { useEffect } from "react";

const ManualSafeToRemove = () => {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      const t = setTimeout(safeToRemove, 800);
      return () => clearTimeout(t);
    }
  }, [isPresent, safeToRemove]);

  return <motion.div exit={{ opacity: 0 }} style={{ width: 140, height: 60, background: "#ef4444", borderRadius: 12 }} />;
};

export default ManualSafeToRemove;