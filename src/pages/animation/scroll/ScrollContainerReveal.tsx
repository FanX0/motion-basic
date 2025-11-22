import { motion } from "motion/react";
// removed layout wrapper for combined index usage

const ScrollContainerReveal = () => {
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
        Using: whileInView inside a scrollable container
      </div>
      <div style={{ height: 120 }} />
      <div
        style={{
          height: 240,
          overflow: "auto",
          border: "1px solid #ddd",
          padding: 12,
        }}
      >
        <div style={{ height: 200 }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          style={{
            height: 80,
            background: "#22c55e",
            color: "white",
            display: "grid",
            placeItems: "center",
            borderRadius: 12,
          }}
        >
          reveal within container
        </motion.div>
        <div style={{ height: 200 }} />
      </div>
      <div style={{ height: 400 }} />
    </>
  );
};

export default ScrollContainerReveal;
