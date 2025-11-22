import { useAnimate } from "motion/react";
import { useRef } from "react";

const Playback = () => {
  const [scope, animate] = useAnimate();
  const controlsRef = useRef<{
    pause: () => void;
    play: () => void;
    time: number;
    speed: number;
  } | null>(null);

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
        Using: useAnimate controls (pause, play, time, speed)
      </div>
      <div ref={scope}>
        <div className="target">target</div>
      </div>
      <button
        onClick={async () => {
          controlsRef.current = await animate(
            ".target",
            { x: 120 },
            { duration: 2 }
          );
        }}
      >
        play
      </button>
      <button
        onClick={() => controlsRef.current && controlsRef.current.pause()}
      >
        pause
      </button>
      <button onClick={() => controlsRef.current && controlsRef.current.play()}>
        resume
      </button>
      <button
        onClick={() => controlsRef.current && (controlsRef.current.time = 0.5)}
      >
        time=0.5
      </button>
      <button
        onClick={() => controlsRef.current && (controlsRef.current.speed = 2)}
      >
        speed=2x
      </button>
    </>
  );
};

export default Playback;