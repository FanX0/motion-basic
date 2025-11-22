import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { motion, useMotionValue, useVelocity, useMotionValueEvent, useTransform } from "motion/react";
import { useState } from "react";


const VelocityDemo = () => {
  const x = useMotionValue(0);
  const vx = useVelocity(x);
  const [latestV, setLatestV] = useState(0);
  useMotionValueEvent(vx, "change", (v) => setLatestV(v as number));
  const bg = useTransform(vx, [-2000, 0, 2000], ["#ef4444", "#e5e7eb", "#22c55e"]);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>velocity: {latestV.toFixed(1)}</div>
      <motion.div drag="x" style={{ x, width: 160, height: 60, borderRadius: 12, background: bg }} />
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useVelocity to read per-second change of a motion value and derive UI</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#velocity">Velocity</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="velocity" title="Velocity" summary="Observe velocity motion value and map to color">
              <VelocityDemo />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;