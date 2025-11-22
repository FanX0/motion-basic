import { motion } from "motion/react";
import { useState } from "react";

const Troubleshooting = () => {
  const [useLayout, setUseLayout] = useState(true);
  const [mounted, setMounted] = useState(true);

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
        Using: layout vs transform animations; mount/unmount behavior
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        <div>layout vs transform</div>
        {useLayout ? (
          <motion.div
            layout
            style={{
              width: 160,
              height: 80,
              background: "#2563eb",
              borderRadius: 12,
            }}
          />
        ) : (
          <motion.div
            animate={{ x: 80 }}
            style={{
              width: 160,
              height: 80,
              background: "#2563eb",
              borderRadius: 12,
            }}
          />
        )}
        <button onClick={() => setUseLayout((v) => !v)}>toggle method</button>

        <div>mount/unmount vs display none</div>
        {mounted ? (
          <motion.div
            layout
            style={{
              width: 160,
              height: 40,
              background: "#14b8a6",
              borderRadius: 8,
            }}
          />
        ) : null}
        <button onClick={() => setMounted((v) => !v)}>toggle mount</button>
      </div>
    </>
  );
};

export default Troubleshooting;
