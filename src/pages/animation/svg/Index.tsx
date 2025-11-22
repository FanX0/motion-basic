import DocumentationLayout, {
  Section,
} from "@/components/layout/DocumentationLayout";
import BasicAttributes from "./BasicAttributes";
import PathDrawing from "./PathDrawing";
import StaggeredDrawing from "./StaggeredDrawing";
import Interactions from "./Interactions";
import ScrollProgressSvg from "./ScrollProgressSvg";
import TimelineSvg from "./TimelineSvg";

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div
          style={{
            marginBottom: 12,
            background: "#e5e7eb",
            padding: 8,
            fontSize: 12,
          }}
        >
          Using: core SVG attribute/shape animations with motion/react
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#attributes">Basic attributes</a>
              </li>
              <li>
                <a href="#path-drawing">Path drawing</a>
              </li>
              <li>
                <a href="#staggered">Staggered drawing</a>
              </li>
              <li>
                <a href="#interactions">Interactions</a>
              </li>
              <li>
                <a href="#scroll-progress">Scroll progress</a>
              </li>
              <li>
                <a href="#timeline">Timeline control</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section
              id="attributes"
              title="Basic attributes"
              summary="Animate cx/cy/r, fill, and transforms on shapes"
            >
              <BasicAttributes />
            </Section>
            <Section
              id="path-drawing"
              title="Path drawing"
              summary="Draw paths by animating stroke dashoffset"
            >
              <PathDrawing />
            </Section>
            <Section
              id="staggered"
              title="Staggered drawing"
              summary="Multiple paths revealing with simple delays"
            >
              <StaggeredDrawing />
            </Section>
            <Section
              id="interactions"
              title="Interactions"
              summary="Hover/tap scale and color changes on groups"
            >
              <Interactions />
            </Section>
            <Section
              id="scroll-progress"
              title="Scroll progress"
              summary="Map page scroll progress to an SVG ring"
            >
              <ScrollProgressSvg />
            </Section>
            <Section
              id="timeline"
              title="Timeline control"
              summary="Sequence stroke→fill changes with useAnimate"
            >
              <TimelineSvg />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
