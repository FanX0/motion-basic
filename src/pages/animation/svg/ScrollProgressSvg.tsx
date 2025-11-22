import { motion, useScroll, useTransform } from "motion/react";

const circumference = 2 * Math.PI * 48;

const ScrollProgressSvg = () => {
  const { scrollYProgress } = useScroll();
  const dash = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  return (
    <svg width={160} height={160} viewBox="0 0 160 160">
      <circle cx={80} cy={80} r={48} stroke="#e5e7eb" strokeWidth={10} fill="none" />
      <motion.circle
        cx={80}
        cy={80}
        r={48}
        stroke="#3b82f6"
        strokeWidth={10}
        fill="none"
        strokeDasharray={circumference}
        style={{ strokeDashoffset: dash, transformOrigin: "80px 80px", rotate: -90 }}
      />
    </svg>
  );
};

export default ScrollProgressSvg;