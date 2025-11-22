import DocumentationLayout from "@/components/layout/DocumentationLayout";
import { Link } from "react-router";

const Index = () => {
  return (
    <DocumentationLayout>
      <aside>
        <ul>
          <li>
            <Link to="/animation/basic">Basic</Link>
          </li>
          <li>
            <Link to="/animation/layout">Layout</Link>
          </li>
          <li>
            <Link to="/animation/scroll">Scroll</Link>
          </li>
          <li>
            <Link to="/animation/svg">svg</Link>
          </li>
          <li>
            <Link to="/animation/transitions">Transitions</Link>
          </li>
        </ul>
      </aside>
    </DocumentationLayout>
  );
};
export default Index;
