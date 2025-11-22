import { Reorder } from "motion/react";
import { useState } from "react";

const HorizontalTabs = () => {
  const [tabs, setTabs] = useState(["Overview", "Features", "Pricing", "About"]);

  return (
    <Reorder.Group axis="x" values={tabs} onReorder={setTabs} as="div" style={{ display: "grid", gridAutoFlow: "column", gap: 8 }}>
      {tabs.map((t) => (
        <Reorder.Item key={t} value={t} as="button" style={{ position: "relative", padding: "8px 12px", borderRadius: 8, background: "#e5e7eb" }}>
          {t}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default HorizontalTabs;