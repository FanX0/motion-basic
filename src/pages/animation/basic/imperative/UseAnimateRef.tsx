import { useAnimate } from "motion/react";

const UseAnimateRef = () => {
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
        Using: useAnimate hook, ref scope, selector targeting
      </div>
      <div ref={scope}>
        <div>target</div>
      </div>
      <button
        onClick={() => animate("div", { x: [0, 100, 0] }, { duration: 1 })}
      >
        run
      </button>
    </>
  );
};

export default UseAnimateRef;
