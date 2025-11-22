import { AnimatePresence, Reorder } from "motion/react";
import { useState } from "react";

const WithPresence = () => {
  const [items, setItems] = useState(["A", "B", "C", "D"]);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <button onClick={() => setItems((arr) => arr.slice(0, -1))}>remove last</button>
      <Reorder.Group axis="y" values={items} onReorder={setItems} style={{ display: "grid", gap: 8 }}>
        <AnimatePresence>
          {items.map((item) => (
            <Reorder.Item key={item} value={item} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: "relative", padding: 10, borderRadius: 8, background: "#d1d5db" }}>
              {item}
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

export default WithPresence;