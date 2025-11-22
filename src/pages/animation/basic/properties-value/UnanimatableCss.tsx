import { motion } from "motion/react";

const UnanimatableCss = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: animate normally un-animatable CSS like backgroundImage and
        maskImage
      </div>
      <motion.div
        style={{ width: 120, height: 80 }}
        animate={{
          backgroundImage: [
            "linear-gradient(45deg, #ef4444, #f59e0b)",
            "linear-gradient(45deg, #22c55e, #06b6d4)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        background-image
      </motion.div>

      <motion.div
        style={{
          width: 120,
          height: 80,
          maskImage: "linear-gradient(black, transparent)",
        }}
        animate={{
          maskImage: [
            "linear-gradient(black, transparent)",
            "linear-gradient(transparent, black)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        mask-image
      </motion.div>
    </div>
  );
};

export default UnanimatableCss;