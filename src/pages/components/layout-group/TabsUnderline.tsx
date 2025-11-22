import { LayoutGroup, motion } from "motion/react";
import { useState } from "react";

const Row = ({ id }: { id: string }) => {
  const tabs = ["Overview", "Features", "Pricing", "About"];
  const [active, setActive] = useState(0);

  return (
    <LayoutGroup id={id}>
      <div style={{ position: "relative", display: "grid", gridAutoFlow: "column", gap: 12 }}>
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            style={{ position: "relative", padding: "8px 12px", borderRadius: 8, background: i === active ? "#e5e7eb" : "transparent" }}
          >
            {t}
            {i === active && (
              <motion.div layoutId="underline" style={{ position: "absolute", left: 8, right: 8, bottom: -2, height: 3, background: "#3b82f6", borderRadius: 2 }} />
            )}
          </button>
        ))}
      </div>
    </LayoutGroup>
  );
};

const TabsUnderline = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Row id="row-1" />
      <Row id="row-2" />
    </div>
  );
};

export default TabsUnderline;