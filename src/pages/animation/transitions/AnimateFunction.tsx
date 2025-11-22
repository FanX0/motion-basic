import { useAnimate } from "motion/react";

const AnimateFunction = () => {
  const [scope, animate] = useAnimate();

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div ref={scope}>
        <div
          className="demo-box"
          style={{ width: 100, height: 40, background: "#111827", color: "white", display: "grid", placeItems: "center", borderRadius: 8 }}
        >
          box
        </div>
      </div>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8 }}>
        <button onClick={() => animate(".demo-box", { x: 120 }, { duration: 0.4 })}>move</button>
        <button onClick={() => animate(".demo-box", { rotate: 90 }, { type: "spring", stiffness: 200 })}>rotate</button>
        <button onClick={() => animate(".demo-box", { x: 0, rotate: 0 }, { duration: 0.3 })}>reset</button>
      </div>
    </div>
  );
};

export default AnimateFunction;