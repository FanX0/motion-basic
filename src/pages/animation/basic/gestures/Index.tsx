import DocumentationLayout from "@/components/layout/DocumentationLayout";

import Hover from "./Hover";
import Focus from "./Focus";
import Tap from "./Tap";
import Drag from "./Drag";
import InView from "./InView";

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
          Using: overview of supported gesture props whileHover, whileTap,
          whileFocus, whileDrag, whileInView
        </div>
        <ul>
          <li className="mb-4 border-b border-gray-200">
            <h2>Hover</h2>
            <Hover />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>whileTap</h2>
            <Tap />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>whileFocus</h2>
            <Focus />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>whileDrag</h2>
            <Drag />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>whileInView</h2>
            <InView />
          </li>
        </ul>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
