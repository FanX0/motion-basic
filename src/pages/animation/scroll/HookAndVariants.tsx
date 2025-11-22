import { motion, useInView } from "motion/react";
// removed layout wrapper for combined index usage
import { useRef } from "react";

const HookAndVariants = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.6 });

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
        Using: useInView to drive variants on another element
      </div>
      <div style={{ height: 160 }} />
      <div
        ref={ref}
        style={{
          height: 160,
          background: inView ? "#22c55e" : "#ef4444",
          borderRadius: 12,
          display: "grid",
          placeItems: "center",
          color: "white",
        }}
      >
        source section ({inView ? "active" : "inactive"})
      </div>
      <motion.div
        initial={{ opacity: 0.6, scale: 0.95 }}
        animate={
          inView ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 }
        }
        transition={{ duration: 0.4 }}
        style={{
          marginTop: 12,
          height: 80,
          background: "#111827",
          color: "white",
          borderRadius: 12,
          display: "grid",
          placeItems: "center",
        }}
      >
        reacts to inView
      </motion.div>
      <div style={{ height: 600 }} />
    </>
  );
};

export default HookAndVariants;
