import DocumentationLayout from "@/components/layout/DocumentationLayout";
import UseAnimateRef from "./UseAnimateRef";
import Timeline from "./Timeline";
import Playback from "./Playback";
import Counter from "./Counter";

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 py-20">
        <div
          style={{
            marginBottom: 12,
            background: "#e5e7eb",
            padding: 8,
            fontSize: 12,
          }}
        >
          Using: useAnimate hook, timelines, playback controls, MotionValue
          counters
        </div>
        <ul>
          <li>
            <h2>useAnimate ref</h2>
            <UseAnimateRef />
          </li>
          <li>
            <h2>Timeline</h2>
            <Timeline />
          </li>
          <li>
            <h2>Playback controls</h2>
            <Playback />
          </li>
          <li>
            <h2>Counter MotionValue</h2>
            <Counter />
          </li>
        </ul>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
