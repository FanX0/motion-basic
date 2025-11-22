import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { useInView } from "motion/react";
import { useRef, useState } from "react";


const BasicInView = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [once, setOnce] = useState(false);
  const inView = useInView(ref, { once, margin: "0px" });
  return (
    <div>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8, alignItems: "center" }}>
        <label style={{ display: "grid", gridAutoFlow: "column", gap: 6, alignItems: "center" }}>
          <input type="checkbox" checked={once} onChange={(e) => setOnce(e.target.checked)} />
          <span>once</span>
        </label>
      </div>
      <div style={{ height: 200 }} />
      <div ref={ref} style={{ height: 120, background: "#e5e7eb", borderRadius: 8, display: "grid", placeItems: "center" }}>target</div>
      <div>inView: {String(inView)}</div>
      <div style={{ height: 400 }} />
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useInView to track visibility with options like once and margin</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#basic">Basic</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="basic" title="Basic" summary="Toggle once and adjust margin for detection area">
              <BasicInView />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;