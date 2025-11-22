import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";


const SpringFromValue = () => {
  const target = useMotionValue(0);
  const [stiffness, setStiffness] = useState(120);
  const [damping, setDamping] = useState(20);
  const x = useSpring(target, { stiffness, damping });

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8 }}>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={{ fontSize: 12 }}>target x</span>
          <input type="range" min={-140} max={140} defaultValue={0} onChange={(e) => target.set(Number(e.target.value))} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={{ fontSize: 12 }}>stiffness</span>
          <input type="range" min={60} max={300} defaultValue={120} onChange={(e) => setStiffness(Number(e.target.value))} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={{ fontSize: 12 }}>damping</span>
          <input type="range" min={8} max={40} defaultValue={20} onChange={(e) => setDamping(Number(e.target.value))} />
        </label>
      </div>
      <motion.div style={{ x, width: 140, height: 50, background: "#f59e0b", borderRadius: 12 }} />
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useSpring to derive a spring-animation value from another motion value</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#basic">Basic spring</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="basic" title="Basic spring" summary="Attach spring to a target motion value and adjust stiffness/damping">
              <SpringFromValue />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;