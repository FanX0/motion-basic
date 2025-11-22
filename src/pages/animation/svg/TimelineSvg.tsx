import { useAnimate } from "motion/react";

const TimelineSvg = () => {
  const [scope, animate] = useAnimate();

  return (
    <div>
      <svg ref={scope} width={360} height={140} viewBox="0 0 360 140">
        <path className="line" d="M20 70 H 340" stroke="#111827" strokeWidth={6} fill="none" pathLength={1} style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
        <rect className="box" x={150} y={50} width={60} height={40} rx={10} fill="#3b82f6" opacity={0} />
      </svg>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button
          onClick={() =>
            animate([
              [".line", { strokeDashoffset: 0 }, { duration: 0.8 }],
              [".box", { opacity: 1 }, { at: 0.8, duration: 0.4 }],
              [".box", { fill: "#22c55e" }, { at: "+0.2" }],
            ])
          }
        >
          play
        </button>
      </div>
    </div>
  );
};

export default TimelineSvg;