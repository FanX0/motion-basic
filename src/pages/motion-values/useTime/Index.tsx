import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { motion, useTime, useTransform } from "motion/react";


const RotatingBox = () => {
  const time = useTime();
  const rotate = useTransform(time, (t) => (t / 1000) * 90 % 360);
  return (
    <div style={{ height: 160, display: "grid", placeItems: "center" }}>
      <motion.div style={{ rotate, width: 100, height: 100, background: "#8b5cf6", borderRadius: 12 }} />
    </div>
  );
};

const ProgressBar = () => {
  const time = useTime();
  const progress = useTransform(time, (t) => ((t % 4000) / 4000));
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ fontSize: 12 }}>time: {Math.floor(time.get())}ms</div>
      <div style={{ height: 8, background: "#e5e7eb", borderRadius: 4 }}>
        <motion.div style={{ height: 8, background: "#22c55e", borderRadius: 4, scaleX: progress, transformOrigin: "0% 50%" }} />
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useTime to drive animations and derive progress from elapsed milliseconds</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#rotate">Rotate</a>
              </li>
              <li>
                <a href="#progress">Progress</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="rotate" title="Rotate" summary="Map time to degrees for continuous rotation">
              <RotatingBox />
            </Section>
            <Section id="progress" title="Progress" summary="Use modulo to loop a progress bar">
              <ProgressBar />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;