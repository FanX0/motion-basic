import { motion } from "motion/react";

const InView = () => {
  return (
    <>
      <div style={{ height: 160 }} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        style={{ width: 160, height: 60, background: "#a78bfa", color: "white", borderRadius: 12, display: "grid", placeItems: "center" }}
      >
        in view
      </motion.div>
      <div style={{ height: 400 }} />
    </>
  );
};

export default InView;