import { motion } from "motion/react";

const EventPropagation = () => {
  return (
    <motion.div whileTap={{ scale: 1.2 }} style={{ padding: 12, border: "1px solid #ddd", borderRadius: 12 }}>
      <button onPointerDownCapture={(e) => e.stopPropagation()} style={{ padding: 8, borderRadius: 8, background: "#111827", color: "white" }}>child</button>
    </motion.div>
  );
};

export default EventPropagation;