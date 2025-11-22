import DocumentationLayout from "@/components/layout/DocumentationLayout";

import TransitionBasics from "./TransitionBasics";
import DefaultTransitions from "./DefaultTransitions";
import MotionConfigDefaults from "./MotionConfigDefaults";

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
          Using: transition types (spring/tween), default behaviors, and
          MotionConfig global defaults
        </div>
        <ul>
          <li className="mb-4 border-b border-gray-200">
            <h2>Transition basics</h2>
            <TransitionBasics />
          </li>
          <li>
            <h2>Default transitions</h2>
            <DefaultTransitions />
          </li>
          <li>
            <h2>MotionConfig defaults</h2>
            <MotionConfigDefaults />
          </li>
        </ul>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
