import { motion } from "motion/react";

const ElasticConstraints = () => {
  return (
    <motion.div drag dragConstraints={{ left: 0, right: 300 }} dragElastic={0.1} style={{ width: 120, height: 60, background: "#f43f5e", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}>
      elastic
    </motion.div>
  );
};

export default ElasticConstraints;