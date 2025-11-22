import DocumentationLayout from "@/components/layout/DocumentationLayout";
import DragBasics from "./DragBasics";
import AxisLock from "./AxisLock";
import WhileDragLift from "./WhileDragLift";
import MomentumAndTransition from "./MomentumAndTransition";
import ConstraintsPixels from "./ConstraintsPixels";
import ConstraintsRef from "./ConstraintsRef";
import ElasticConstraints from "./ElasticConstraints";
import DirectionLock from "./DirectionLock";
import DragEvents from "./DragEvents";
import DragControlsScrubber from "./DragControlsScrubber";

const Section = ({ id, title, summary, children }: { id: string; title: string; summary: string; children: React.ReactNode }) => {
  return (
    <section id={id} style={{ marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #e5e7eb" }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{title}</h2>
      <div style={{ marginBottom: 10, background: "#f3f4f6", padding: 8, fontSize: 12 }}>{summary}</div>
      {children}
    </section>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: drag basics, axis lock, whileDrag lift, inertia, constraints, elasticity, direction lock, events, and drag controls</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#basics">Basics</a>
              </li>
              <li>
                <a href="#axis-lock">Axis lock</a>
              </li>
              <li>
                <a href="#while-drag">While drag</a>
              </li>
              <li>
                <a href="#momentum">Momentum & transition</a>
              </li>
              <li>
                <a href="#constraints-pixels">Constraints (pixels)</a>
              </li>
              <li>
                <a href="#constraints-ref">Constraints (ref)</a>
              </li>
              <li>
                <a href="#elastic">Elastic constraints</a>
              </li>
              <li>
                <a href="#direction-lock">Direction lock</a>
              </li>
              <li>
                <a href="#events">Drag events</a>
              </li>
              <li>
                <a href="#controls">Drag controls</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="basics" title="Basics" summary="Add drag to make elements draggable">
              <DragBasics />
            </Section>
            <Section id="axis-lock" title="Axis lock" summary="Limit to x or y axis">
              <AxisLock />
            </Section>
            <Section id="while-drag" title="While drag" summary="Add lift effects while dragging">
              <WhileDragLift />
            </Section>
            <Section id="momentum" title="Momentum & transition" summary="Disable momentum or customise inertia physics">
              <MomentumAndTransition />
            </Section>
            <Section id="constraints-pixels" title="Constraints (pixels)" summary="Constrain movement with pixel bounds">
              <ConstraintsPixels />
            </Section>
            <Section id="constraints-ref" title="Constraints (ref)" summary="Constrain to container bounds via ref">
              <ConstraintsRef />
            </Section>
            <Section id="elastic" title="Elastic constraints" summary="Control tug beyond constraints with dragElastic">
              <ElasticConstraints />
            </Section>
            <Section id="direction-lock" title="Direction lock" summary="Lock to first-drag axis and respond to onDirectionLock">
              <DirectionLock />
            </Section>
            <Section id="events" title="Drag events" summary="Listen to onDrag for live pointer data">
              <DragEvents />
            </Section>
            <Section id="controls" title="Drag controls" summary="Start drag from a separate element with useDragControls">
              <DragControlsScrubber />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;