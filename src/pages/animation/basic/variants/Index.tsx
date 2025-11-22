import DocumentationLayout from "@/components/layout/DocumentationLayout";
import Orchestration from "./Orchestration";
import DynamicVariants from "./DynamicVariants";
import BasicVariants from "./BasicVariants";

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
          Using: variants for propagation, orchestration (when, delayChildren),
          and dynamic custom
        </div>
        <ul>
          <li className="mb-4 border-b border-gray-200">
            <h2>Basic variants</h2>
            <BasicVariants />
          </li>
          <li>
            <h2>Orchestration</h2>
            <Orchestration />
          </li>
          <li>
            <h2>Dynamic variants</h2>
            <DynamicVariants />
          </li>
        </ul>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
