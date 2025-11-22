import { motion } from "motion/react";

const OnUpdateEvents = () => {
  return (
    <motion.article animate={{ opacity: 1 }} onUpdate={(latest) => console.log(latest.opacity)} onAnimationStart={() => console.log("start")}
      style={{ width: 160, height: 60, background: "#93c5fd", borderRadius: 12 }}
    />
  );
};

export default OnUpdateEvents;