import { useAnimate } from "motion/react";

const Timeline = () => {
  const [scope, animate] = useAnimate();

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
        Using: useAnimate timeline arrays with offsets via at
      </div>
      <div ref={scope}>
        <div className="box1">one</div>
        <div className="box2">two</div>
        <div className="box3">three</div>
      </div>
      <button
        onClick={() =>
          animate([
            [".box1", { x: 80 }, { duration: 0.3 }],
            [".box2", { opacity: 1 }, { at: 0.2, duration: 0.5 }],
            [".box3", { y: -20 }, { at: 0.5, duration: 0.3 }],
          ])
        }
      >
        play timeline
      </button>
    </>
  );
};

export default Timeline;