import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ElementParallax = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

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
        Using: useScroll(target) and useTransform for parallax
      </div>
      <div style={{ height: 200 }} />
      <div
        ref={ref}
        style={{
          position: "relative",
          height: 240,
          overflow: "hidden",
          border: "1px solid #ddd",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: "#93c5fd",
            y: bgY,
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            y: fgY,
            opacity,
          }}
        >
          content
        </motion.div>
      </div>
      <div style={{ height: 600 }} />
    </>
  );
};

export default ElementParallax;
