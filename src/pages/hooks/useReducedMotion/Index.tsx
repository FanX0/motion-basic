import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { motion, useReducedMotion } from "motion/react";


const AccessibleAnimation = () => {
  const prefersReducedMotion = useReducedMotion();
  const closedX = prefersReducedMotion ? 0 : -120;
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>prefersReducedMotion: {String(prefersReducedMotion)}</div>
      <motion.div initial={{ opacity: 0, x: closedX }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ width: 200, height: 60, background: "#f59e0b", borderRadius: 12 }} />
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useReducedMotion to adapt animations to accessibility settings</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#accessible">Accessible</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="accessible" title="Accessible" summary="Replace x animations with opacity when reduced motion is enabled">
              <AccessibleAnimation />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;