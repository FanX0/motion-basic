import { hover } from "motion";
import { useEffect, useRef, useState } from "react";

const HoverRecognizer = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!ref.current) return;
    return hover(ref.current, () => {
      setStatus("hover start");
      return () => setStatus("hover end");
    });
  }, []);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <button ref={ref} style={{ width: 200, height: 48, background: "#111827", color: "white", borderRadius: 12 }}>hover()</button>
      <div>status: {status}</div>
    </div>
  );
};

export default HoverRecognizer;