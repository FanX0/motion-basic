import { Reorder } from "motion/react";
import { useState } from "react";

const ScrollableList = () => {
  const [items, setItems] = useState(Array.from({ length: 12 }).map((_, i) => `Item ${i + 1}`));

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} layoutScroll style={{ width: 220, height: 180, overflowY: "auto", border: "1px solid #ddd", borderRadius: 8, padding: 8 }}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item} style={{ position: "relative", padding: 8, borderRadius: 8, background: "#e5e7eb", marginBottom: 8 }}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default ScrollableList;