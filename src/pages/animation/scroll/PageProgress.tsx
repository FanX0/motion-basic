import { motion, useScroll, useTransform } from "motion/react";
// removed layout wrapper for combined index usage

const PageProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -24]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

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
        Using: useScroll for page progress and header shrink
      </div>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "#3b82f6",
          transformOrigin: "0% 50%",
          scaleX,
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          top: 8,
          left: 8,
          right: 8,
          height: 40,
          background: "#111827",
          color: "white",
          display: "grid",
          placeItems: "center",
          y: headerY,
          opacity: headerOpacity,
        }}
      >
        header
      </motion.div>
      <div style={{ height: 1200 }} />
    </>
  );
};

export default PageProgress;
