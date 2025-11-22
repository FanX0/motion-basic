import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useState } from "react";


const ChangeEventsDemo = () => {
  const x = useMotionValue(0);
  const [latest, setLatest] = useState(0);
  const [count, setCount] = useState(0);
  useMotionValueEvent(x, "change", (v) => {
    setLatest(v as number);
    setCount((c) => c + 1);
  });

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 12 }}>
        <div>latest: {latest.toFixed(1)}</div>
        <div>count: {count}</div>
      </div>
      <motion.div drag="x" style={{ x, width: 160, height: 50, background: "#10b981", borderRadius: 12 }} />
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useMotionValueEvent to subscribe to motion value updates without re-rendering the source</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#change">Change events</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="change" title="Change events" summary="Subscribe to change and derive UI state">
              <ChangeEventsDemo />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;