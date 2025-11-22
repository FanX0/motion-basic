import { motion } from "motion/react";
import { useState } from "react";

const HoverEvents = () => {
  const [status, setStatus] = useState("idle");
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <motion.a
        onHoverStart={() => setStatus("hover start")}
        onHoverEnd={() => setStatus("hover end")}
        style={{ width: 200, height: 48, background: "#22c55e", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}
        href="#"
      >
        hover events
      </motion.a>
      <div>status: {status}</div>
    </div>
  );
};

export default HoverEvents;