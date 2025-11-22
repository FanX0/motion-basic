import { motion } from "motion/react";

const DragEvents = () => {
  function onDrag(_event: PointerEvent, info: { point: { x: number; y: number } }) {
    console.log(info.point.x, info.point.y);
  }

  return (
    <motion.div drag onDrag={onDrag} style={{ width: 140, height: 60, background: "#10b981", color: "white", display: "grid", placeItems: "center", borderRadius: 12 }}>
      drag events
    </motion.div>
  );
};

export default DragEvents;