import { motion } from "motion/react";
import { useState } from "react";

const WildcardKeyframes = () => {
  const [baseX, setBaseX] = useState(0);

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
        Using: wildcard keyframe null to start from current value
      </div>
      <button onClick={() => setBaseX((v) => (v === 0 ? 50 : 0))}>nudge</button>
      <motion.div
        style={{ x: baseX }}
        animate={{ x: [null, 120, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        wildcard x
      </motion.div>
    </>
  );
};

export default WildcardKeyframes;