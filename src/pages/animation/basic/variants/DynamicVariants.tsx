import { motion } from "motion/react";
import DocumentationLayout from "@/components/layout/DocumentationLayout";

const dynamic = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({ opacity: 1, x: custom }),
};

const DynamicVariants = () => {
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
        Using: dynamic variants via function and custom prop
      </div>
      <motion.div initial="hidden" animate="visible">
        {[0, 1, 2].map((i) => (
          <motion.div key={i} variants={dynamic} custom={i * 40}>
            item {i}
          </motion.div>
        ))}
      </motion.div>
    </DocumentationLayout>
  );
};

export default DynamicVariants;
