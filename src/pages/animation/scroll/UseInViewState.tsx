import { useRef } from "react";
import { useInView } from "motion/react";
// removed layout wrapper for combined index usage

const UseInViewState = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "0px" });

  return (
    <>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: useInView to drive React state
      </div>
      <div style={{ height: 160 }} />
      <div ref={ref} style={{ height: 120, background: "#e5e7eb" }}>
        target
      </div>
      <div>inView: {String(inView)}</div>
      <div style={{ color: inView ? "#16a34a" : "#ef4444" }}>
        {inView ? "active" : "inactive"}
      </div>
      <div style={{ height: 400 }} />
    </>
  );
};

export default UseInViewState;
