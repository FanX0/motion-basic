import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { motion, useMotionValue, useTransform } from "motion/react";


const RangeMappingDemo = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  const backgroundColor = useTransform(x, [-200, 0, 200], ["#ef4444", "#22c55e", "#ef4444"]);
  return <motion.div drag="x" style={{ x, opacity, backgroundColor, width: 160, height: 60, borderRadius: 12 }} />;
};

const FunctionMappingDemo = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, (v) => 1 + Math.min(Math.abs(v), 160) / 320);
  const rotate = useTransform(x, (v) => (v / 160) * 45);
  return <motion.div drag="x" style={{ x, scale, rotate, width: 160, height: 60, background: "#3b82f6", borderRadius: 12 }} />;
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useTransform to derive values via range arrays and functions</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#range">Range mapping</a>
              </li>
              <li>
                <a href="#function">Function mapping</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="range" title="Range mapping" summary="Map input ranges to output ranges, including colors">
              <RangeMappingDemo />
            </Section>
            <Section id="function" title="Function mapping" summary="Compute derived values via custom functions">
              <FunctionMappingDemo />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;