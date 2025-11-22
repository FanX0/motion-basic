import { Reorder } from "motion/react";
import { useState } from "react";

const BasicList = () => {
  const [items, setItems] = useState(["Alpha", "Bravo", "Charlie", "Delta"]);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} style={{ display: "grid", gap: 8 }}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item} style={{ position: "relative", padding: 10, borderRadius: 8, background: "#e5e7eb" }}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default BasicList;