import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { useAnimationFrame } from "motion/react";
import { useRef } from "react";


const FrameDemo = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useAnimationFrame((time) => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = `rotate(${(time / 1000) * 90}deg)`;
  });

  return <div ref={ref} style={{ width: 100, height: 100, background: "#10b981", borderRadius: 12 }} />;
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useAnimationFrame for per-frame updates with time and delta</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#frame">Frame loop</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="frame" title="Frame loop" summary="Update DOM transform each animation frame">
              <FrameDemo />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;