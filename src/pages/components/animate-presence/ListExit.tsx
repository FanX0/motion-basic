import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ListExit = () => {
  const [items, setItems] = useState([1, 2, 3, 4]);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <button onClick={() => setItems((arr) => arr.slice(0, -1))}>remove last</button>
      <AnimatePresence>
        <ul style={{ display: "grid", gap: 8 }}>
          {items.map((id) => (
            <motion.li key={id} exit={{ opacity: 0 }} layout style={{ width: 140, height: 40, background: "#22c55e", borderRadius: 8 }}>
              item {id}
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>
    </div>
  );
};

export default ListExit;