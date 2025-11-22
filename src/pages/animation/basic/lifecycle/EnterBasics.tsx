import { motion } from "motion/react";

const EnterBasics = () => {
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
        Using: initial, animate, and initial={false} to skip enter animation
      </div>
      <section>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          initial + animate
        </motion.div>
      </section>
      <section>
        <motion.div
          initial={false}
          animate={{ x: 100 }}
          transition={{ duration: 0.6 }}
        >
          initial=false
        </motion.div>
      </section>
    </>
  );
};

export default EnterBasics;
