import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const SharedElement = () => {
  const [open, setOpen] = useState(false);

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
        Using: layoutId for shared transitions and AnimatePresence for
        mount/unmount
      </div>
      {!open && (
        <motion.div
          layoutId="card"
          style={{
            width: 120,
            height: 80,
            borderRadius: 12,
            background: "#22c55e",
            color: "white",
            display: "grid",
            placeItems: "center",
          }}
        >
          card
        </motion.div>
      )}
      <button onClick={() => setOpen(true)}>open</button>
      <AnimatePresence>
        {open && (
          <motion.div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <motion.div
              layoutId="card"
              style={{
                width: 360,
                height: 240,
                borderRadius: 20,
                background: "#22c55e",
                color: "white",
                display: "grid",
                placeItems: "center",
              }}
            >
              modal
            </motion.div>
            <button onClick={() => setOpen(false)}>close</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SharedElement;