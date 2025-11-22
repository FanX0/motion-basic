import { motion } from "motion/react";

const InView = () => {
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
        Using: whileInView and viewport
      </div>
      <div style={{ height: 120 }} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
      >
        in view
      </motion.div>
      <div style={{ height: 120 }} />
    </>
  );
};

export default InView;