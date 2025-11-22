import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const images = [
  { src: "https://picsum.photos/seed/1/200/120" },
  { src: "https://picsum.photos/seed/2/200/120" },
  { src: "https://picsum.photos/seed/3/200/120" },
];

const KeyChange = () => {
  const [index, setIndex] = useState(0);
  const image = images[index];

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8 }}>
        <button onClick={() => setIndex((i) => (i + 1) % images.length)}>next</button>
        <button onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}>prev</button>
      </div>
      <div style={{ width: 200, height: 120, overflow: "hidden" }}>
        <AnimatePresence initial={false}>
          <motion.img
            key={image.src}
            src={image.src}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            style={{ display: "block", width: 200, height: 120, objectFit: "cover", borderRadius: 12 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default KeyChange;