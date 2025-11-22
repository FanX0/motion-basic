import { motion, useDragControls } from "motion/react";

const DragControlsScrubber = () => {
  const dragControls = useDragControls();

  function startDrag(e: React.PointerEvent) {
    dragControls.start(e.nativeEvent, { snapToCursor: true });
  }

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div onPointerDown={startDrag} style={{ width: 240, height: 24, background: "#e5e7eb", borderRadius: 12 }} />
      <motion.div drag="x" dragControls={dragControls} dragListener={false} style={{ width: 40, height: 40, background: "#111827", color: "white", display: "grid", placeItems: "center", borderRadius: 20 }}>
        handle
      </motion.div>
    </div>
  );
};

export default DragControlsScrubber;