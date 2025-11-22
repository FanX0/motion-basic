import DocumentationLayout from "@/components/layout/DocumentationLayout";

import EnterBasics from "./EnterBasics";
import ExitAnimations from "./ExitAnimations";

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 py-20">
        <ul>
          <li className="mb-4 border-b border-gray-200">
            <h2>Enter basics</h2>
            <EnterBasics />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>Exit animations</h2>
            <ExitAnimations />
          </li>
        </ul>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
