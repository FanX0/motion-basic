import { motion } from "motion/react";
// removed layout wrapper for combined index usage

const box = {
  width: 140,
  height: 80,
  borderRadius: 12,
  display: "grid",
  placeItems: "center",
  background: "#3b82f6",
  color: "white",
} as const;

const ViewportOptions = () => {
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
        Using: viewport options — once, amount, margin
      </div>

      <div style={{ height: 160 }} />

      <section style={{ display: "grid", gap: 16 }}>
        <div>
          <div>once: true</div>
          <motion.div
            style={box}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            one-time reveal
          </motion.div>
        </div>

        <div>
          <div>once: false (default)</div>
          <motion.div
            style={box}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            replay on re-enter
          </motion.div>
        </div>

        <div>
          <div>amount: 0.8 (enter later)</div>
          <motion.div
            style={box}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8 }}
          >
            threshold 80%
          </motion.div>
        </div>

        <div>
          <div>margin: -100px (expand intersection)</div>
          <motion.div
            style={box}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
          >
            rootMargin
          </motion.div>
        </div>
      </section>

      <div style={{ height: 600 }} />
    </>
  );
};

export default ViewportOptions;