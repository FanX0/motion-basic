import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import SyncDemo from "./SyncDemo";
import AsyncDemo from "./AsyncDemo";


const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: concept of LazyMotion to reduce initial bundle, sync subset of features, and async load remaining features</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#sync">Synchronous features</a>
              </li>
              <li>
                <a href="#async">Asynchronous features</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="sync" title="Synchronous features" summary="Load a subset of features for initial render and animate with motion">
              <SyncDemo />
            </Section>
            <Section id="async" title="Asynchronous features" summary="Load remaining features after hydration and enable extra gestures">
              <AsyncDemo />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;