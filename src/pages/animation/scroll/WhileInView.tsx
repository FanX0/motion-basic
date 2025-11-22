import { motion } from "motion/react";

const WhileInView = () => {
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
        Using: whileInView with viewport once
      </div>
      <div style={{ height: 160 }} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        reveal on scroll
      </motion.div>
      <div style={{ height: 400 }} />
    </>
  );
};

export default WhileInView;