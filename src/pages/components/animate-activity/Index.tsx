import DocumentationLayout from "@/components/layout/DocumentationLayout";
import BasicMode from "./BasicMode";
import SequenceExit from "./SequenceExit";
import LayoutPop from "./LayoutPop";

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
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: hide/show with maintained state, sequence exits via variants, and pop out of layout while exiting</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#basic">Basic mode</a>
              </li>
              <li>
                <a href="#sequence">Sequence exit</a>
              </li>
              <li>
                <a href="#layout-pop">Layout pop</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="basic" title="Basic mode" summary="Animate hide then set display: none to maintain state">
              <BasicMode />
            </Section>
            <Section id="sequence" title="Sequence exit" summary="Use variants and delayChildren for ordered exits">
              <SequenceExit />
            </Section>
            <Section id="layout-pop" title="Layout pop" summary="Pop element out of layout while exiting to allow reflow">
              <LayoutPop />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;