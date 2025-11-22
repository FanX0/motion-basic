import { motion } from "motion/react";

const Drag = () => {
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
        Using: drag, whileDrag, dragMomentum
      </div>
      <motion.div drag dragMomentum={false} whileDrag={{ scale: 1.05 }}>
        drag
      </motion.div>
    </>
  );
};

export default Drag;