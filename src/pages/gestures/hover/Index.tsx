import DocumentationLayout from "@/components/layout/DocumentationLayout";
import WhileHoverBasic from "./WhileHoverBasic";
import WhileHoverCustom from "./WhileHoverCustom";
import HoverEvents from "./HoverEvents";
import HoverRecognizer from "./HoverRecognizer";

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
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: reliable hover animations via whileHover, events, and hover()</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#while-hover">whileHover</a>
              </li>
              <li>
                <a href="#custom-transition">Custom transition</a>
              </li>
              <li>
                <a href="#events">Hover events</a>
              </li>
              <li>
                <a href="#hover-fn">hover() recogniser</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="while-hover" title="whileHover" summary="Declaratively animate on hover and return on exit">
              <WhileHoverBasic />
            </Section>
            <Section id="custom-transition" title="Custom transition" summary="Use transition in whileHover and on exit with component transition">
              <WhileHoverCustom />
            </Section>
            <Section id="events" title="Hover events" summary="Listen with onHoverStart/onHoverEnd when hover really exists">
              <HoverEvents />
            </Section>
            <Section id="hover-fn" title="hover() recogniser" summary="Tiny hover() integrates with useEffect and returns cleanup">
              <HoverRecognizer />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;