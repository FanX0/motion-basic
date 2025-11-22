import DocumentationLayout from "@/components/layout/DocumentationLayout";
import TabsUnderline from "./TabsUnderline";
import AccordionGroup from "./AccordionGroup";
import ScopedLayoutId from "./ScopedLayoutId";

const Section = ({ id, title, summary, children }: { id: string; title: string; summary: string; children: React.ReactNode }) => {
  return (
    <section id={id} style={{ marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #e5e7eb" }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{title}</h2>
      <div style={{ marginBottom: 10, background: "#f3f4f6", padding: 8, fontSize: 12 }}>{summary}</div>
      {children}
    </section>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: LayoutGroup to coordinate layout animations across components, underline shared layoutId scoped by group id, and isolated highlights</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#tabs-underline">Tabs underline</a>
              </li>
              <li>
                <a href="#accordion">Accordion group</a>
              </li>
              <li>
                <a href="#scoped">Scoped layoutId</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="tabs-underline" title="Tabs underline" summary="Move a shared underline with layoutId; scope with group id">
              <TabsUnderline />
            </Section>
            <Section id="accordion" title="Accordion group" summary="Coordinate siblings with LayoutGroup + layout">
              <AccordionGroup />
            </Section>
            <Section id="scoped" title="Scoped layoutId" summary="Isolate shared layoutId between groups with id">
              <ScopedLayoutId />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;