import { motion } from "motion/react";
// removed layout wrapper for combined index usage

const ManyItemsReveal = () => {
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
        Using: list of items revealing on scroll
      </div>
      <div style={{ height: 160 }} />
      <ul style={{ display: "grid", gap: 12 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            style={{
              height: 60,
              background: "#93c5fd",
              borderRadius: 12,
              display: "grid",
              placeItems: "center",
            }}
          >
            item {i + 1}
          </motion.li>
        ))}
      </ul>
      <div style={{ height: 600 }} />
    </>
  );
};

export default ManyItemsReveal;
