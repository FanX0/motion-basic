import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";


const FilterTemplateDemo = () => {
  const blur = useMotionValue(0);
  const saturate = useMotionValue(100);
  const filter = useMotionTemplate`blur(${blur}px) saturate(${saturate}%)`;

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8, alignItems: "center" }}>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={{ fontSize: 12 }}>blur (px)</span>
          <input type="range" min={0} max={20} defaultValue={0} onChange={(e) => blur.set(Number(e.target.value))} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={{ fontSize: 12 }}>saturate (%)</span>
          <input type="range" min={0} max={200} defaultValue={100} onChange={(e) => saturate.set(Number(e.target.value))} />
        </label>
      </div>
      <motion.img
        alt="template demo"
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop"
        style={{ width: 300, height: 180, objectFit: "cover", borderRadius: 12, filter }}
      />
    </div>
  );
};

const TransformTemplateDemo = () => {
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);
  const scale = useMotionValue(1);
  const transform = useMotionTemplate`translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8 }}>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={{ fontSize: 12 }}>x (px)</span>
          <input type="range" min={-120} max={120} defaultValue={0} onChange={(e) => tx.set(Number(e.target.value))} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={{ fontSize: 12 }}>y (px)</span>
          <input type="range" min={-120} max={120} defaultValue={0} onChange={(e) => ty.set(Number(e.target.value))} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={{ fontSize: 12 }}>scale</span>
          <input type="range" min={0.5} max={1.5} step={0.01} defaultValue={1} onChange={(e) => scale.set(Number(e.target.value))} />
        </label>
      </div>
      <div style={{ height: 140, border: "1px solid #e5e7eb", borderRadius: 8, position: "relative" }}>
        <motion.div style={{ transform, width: 100, height: 60, background: "#3b82f6", borderRadius: 12, color: "white", display: "grid", placeItems: "center", position: "absolute", left: 20, top: 40 }}>
          box
        </motion.div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useMotionTemplate to join motion values into string styles like filter and transform</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#filter">Filter</a>
              </li>
              <li>
                <a href="#transform">Transform</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="filter" title="Filter" summary="Compose blur and saturate into a single filter string">
              <FilterTemplateDemo />
            </Section>
            <Section id="transform" title="Transform" summary="Compose translate and scale into a CSS transform string">
              <TransformTemplateDemo />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;