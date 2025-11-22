import { motion } from "motion/react";
import { useEffect, useState } from "react";

const AsyncDemo = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>features loaded: {loaded ? "yes" : "no"}</div>
      {loaded ? (
        <motion.button whileHover={{ scale: 1.1 }} style={{ width: 160, height: 48, background: "#22c55e", color: "white", borderRadius: 12 }}>
          hover available
        </motion.button>
      ) : (
        <div style={{ width: 160, height: 48, background: "#e5e7eb", borderRadius: 12, display: "grid", placeItems: "center" }}>loading...</div>
      )}
    </div>
  );
};

export default AsyncDemo;