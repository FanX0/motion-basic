import { motion, LayoutGroup } from "motion/react";
import { useState } from "react";

const Item = ({
  i,
  open,
  setOpen,
}: {
  i: number;
  open: number | null;
  setOpen: (n: number | null) => void;
}) => {
  const isOpen = open === i;
  return (
    <motion.div
      layout
      style={{
        background: "#10b981",
        color: "white",
        borderRadius: 12,
        padding: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>section {i + 1}</div>
        <button onClick={() => setOpen(isOpen ? null : i)}>
          {isOpen ? "close" : "open"}
        </button>
      </div>
      {isOpen && (
        <motion.div
          layout
          style={{
            marginTop: 8,
            background: "#064e3b",
            borderRadius: 8,
            padding: 8,
          }}
        >
          content
        </motion.div>
      )}
    </motion.div>
  );
};

const LayoutGroupDemo = () => {
  const [open, setOpen] = useState<number | null>(null);
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
        Using: LayoutGroup to coordinate layout animations across components
      </div>
      <LayoutGroup>
        <div style={{ display: "grid", gap: 8 }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Item key={i} i={i} open={open} setOpen={setOpen} />
          ))}
        </div>
      </LayoutGroup>
    </>
  );
};

export default LayoutGroupDemo;