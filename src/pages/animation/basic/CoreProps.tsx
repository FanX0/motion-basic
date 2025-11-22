import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import DocumentationLayout from "@/components/layout/DocumentationLayout";

const CoreProps = () => {
  const [visible, setVisible] = useState(true);
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <DocumentationLayout>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: initial, animate, transition, keyframes, times, whileHover,
        whileTap, whileInView, viewport, exit, AnimatePresence, variants
      </div>
      <ul>
        <li>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            initial / animate / transition
          </motion.div>
        </li>

        <li>
          <motion.div
            animate={{ x: [0, 80, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            keyframes on x
          </motion.div>
        </li>

        <li>
          <motion.div
            animate={{ x: [0, 100, 100, 0], y: [0, 0, 50, 50] }}
            transition={{
              duration: 2,
              ease: "linear",
              times: [0, 0.33, 0.66, 1],
            }}
          >
            keyframes with times
          </motion.div>
        </li>

        <li>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            whileHover / whileTap
          </motion.div>
        </li>

        <li>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            whileInView / viewport
          </motion.div>
        </li>

        <li>
          <button onClick={() => setVisible((v) => !v)}>toggle</button>
          <AnimatePresence>
            {visible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                exit
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        <li>
          <div>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: i * 0.05 }}
              >
                variants
              </motion.div>
            ))}
          </div>
        </li>
      </ul>
    </DocumentationLayout>
  );
};

export default CoreProps;
