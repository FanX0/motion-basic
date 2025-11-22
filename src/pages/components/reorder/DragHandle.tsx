import { Reorder, useDragControls } from "motion/react";
import { useState } from "react";

const DragItem = ({ item }: { item: string }) => {
  const controls = useDragControls();
  return (
    <Reorder.Item value={item} dragListener={false} dragControls={controls} style={{ position: "relative", display: "flex", alignItems: "center", gap: 8, padding: 10, borderRadius: 8, background: "#f3f4f6" }}>
      <div onPointerDown={(e) => controls.start(e.nativeEvent)} style={{ width: 20, height: 20, borderRadius: 4, background: "#111827" }} />
      <div>{item}</div>
    </Reorder.Item>
  );
};

const DragHandle = () => {
  const [items, setItems] = useState(["One", "Two", "Three", "Four"]);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} style={{ display: "grid", gap: 8 }}>
      {items.map((item) => (
        <DragItem key={item} item={item} />
      ))}
    </Reorder.Group>
  );
};

export default DragHandle;