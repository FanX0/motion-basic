import DocumentationLayout from "@/components/layout/DocumentationLayout";

import BasicKeyframes from "./BasicKeyframes";
import WildcardKeyframes from "./WildcardKeyframes";
import KeyframeTiming from "./KeyframeTiming";

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
          Using: keyframe arrays, wildcard null, and transition.times
        </div>
        <ul>
          <li>
            <h2>Basic keyframes</h2>
            <BasicKeyframes />
          </li>
          <li>
            <h2>Wildcard keyframes</h2>
            <WildcardKeyframes />
          </li>
          <li>
            <h2>Keyframe timing</h2>
            <KeyframeTiming />
          </li>
        </ul>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
