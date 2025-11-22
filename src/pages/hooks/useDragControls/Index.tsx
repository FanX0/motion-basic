import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { motion, useDragControls } from "motion/react";


const ScrubberDemo = () => {
  const controls = useDragControls();
  function startDrag(e: React.PointerEvent) {
    controls.start(e.nativeEvent, { snapToCursor: true });
  }

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div onPointerDown={startDrag} style={{ width: 260, height: 24, background: "#e5e7eb", borderRadius: 12 }} />
      <motion.div drag="x" dragControls={controls} dragListener={false} style={{ width: 40, height: 40, background: "#111827", color: "white", display: "grid", placeItems: "center", borderRadius: 20 }}>
        handle
      </motion.div>
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useDragControls to start drags from any element and snap to cursor</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#scrubber">Scrubber</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="scrubber" title="Scrubber" summary="Start dragging from a separate element via controls.start">
              <ScrubberDemo />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;