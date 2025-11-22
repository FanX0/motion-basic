import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { useAnimationFrame, usePageInView } from "motion/react";
import { useRef } from "react";


const PageVisibilityDemo = () => {
  const isInView = usePageInView();
  const ref = useRef<HTMLDivElement | null>(null);
  useAnimationFrame((time) => {
    if (!isInView) return;
    const node = ref.current;
    if (!node) return;
    node.style.transform = `rotate(${(time / 1000) * 90}deg)`;
  });
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>isPageInView: {String(isInView)}</div>
      <div ref={ref} style={{ width: 100, height: 100, background: "#3b82f6", borderRadius: 12 }} />
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: usePageInView to pause animation loops when the tab is hidden</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#visibility">Visibility</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="visibility" title="Visibility" summary="Drive useAnimationFrame only when page is visible">
              <PageVisibilityDemo />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;