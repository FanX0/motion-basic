import DocumentationLayout from "@/components/layout/DocumentationLayout";
import { Link } from "react-router";

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 py-20">
        <ul className="flex flex-col gap-4 ">
          <li>
            <Link to="/basic/animation/properties-value">Properties Value</Link>
          </li>
          <li>
            <Link to="/basic/animation/timing-physics">Timing & Physics</Link>
          </li>
          <li>
            <Link to="/basic/animation/lifecycle">Lifecycle</Link>
          </li>
          <li>
            <Link to="/basic/animation/keyframes-sequences">
              Keyframes & Sequences
            </Link>
          </li>
          <li>
            <Link to="/basic/animation/gestures">Gestures</Link>
          </li>
          <li>
            <Link to="/basic/animation/variants">Variants</Link>
          </li>
          <li>
            <Link to="/basic/animation/mperative">Imperative</Link>
          </li>
        </ul>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
