import DocumentationLayout from "@/components/layout/DocumentationLayout";
import SingleComponent from "./SingleComponent";
import SharedElement from "./SharedElement";
import LayoutTiming from "./LayoutTiming";
import SpecialContexts from "./SpecialContexts";
import LayoutGroupDemo from "./LayoutGroupDemo";
import ScaleCorrection from "./ScaleCorrection";
import Troubleshooting from "./Troubleshooting";

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <header
          style={{
            marginBottom: 12,
            background: "#e5e7eb",
            padding: 8,
            fontSize: 12,
          }}
        >
          Using: navigation hub for layout topics and examples
        </header>
        <div>
          <ul>
            <li>
              <h2>Single component layout</h2>
              <SingleComponent />
            </li>
            <li>
              <h2>Shared element</h2>
              <SharedElement />
            </li>
            <li>
              <h2>Layout timing</h2>
              <LayoutTiming />
            </li>
            <li>
              <h2>Special contexts</h2>
              <SpecialContexts />
            </li>
            <li>
              <h2>LayoutGroup</h2>
              <LayoutGroupDemo />
            </li>
            <li>
              <h2>Scale correction</h2>
              <ScaleCorrection />
            </li>
            <li>
              <h2>Troubleshooting</h2>
              <Troubleshooting />
            </li>
          </ul>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
