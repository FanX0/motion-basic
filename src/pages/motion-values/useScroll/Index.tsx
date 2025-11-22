import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";


const PageProgress = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <div style={{ position: "relative" }}>
      <motion.div style={{ position: "sticky", top: 0, left: 0, right: 0, height: 4, background: "#e5e7eb", transformOrigin: "0% 50%", scaleX: progress }} />
      <div style={{ height: 600 }} />
    </div>
  );
};

const ElementProgress = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <div>
      <div style={{ height: 200 }} />
      <div ref={ref} style={{ height: 300, border: "1px solid #e5e7eb", borderRadius: 8, padding: 12 }}>
        <div>target element</div>
        <motion.div style={{ width, height: 8, background: "#22c55e", borderRadius: 4 }} />
      </div>
      <div style={{ height: 400 }} />
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useScroll page progress and element-based progress with offset control</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#page">Page progress</a>
              </li>
              <li>
                <a href="#element">Element progress</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="page" title="Page progress" summary="Bind scrollYProgress to a sticky scaleX bar">
              <PageProgress />
            </Section>
            <Section id="element" title="Element progress" summary="Track a target element with offset mapping">
              <ElementProgress />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;