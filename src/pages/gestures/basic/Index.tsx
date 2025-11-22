import DocumentationLayout from "@/components/layout/DocumentationLayout";
import Hover from "./Hover";
import Tap from "./Tap";
import Pan from "./Pan";
import Drag from "./Drag";
import Focus from "./Focus";
import InView from "./InView";
import EventPropagation from "./EventPropagation";

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
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: hover, tap, pan, drag, focus, and inView gestures</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#hover">Hover</a>
              </li>
              <li>
                <a href="#tap">Tap</a>
              </li>
              <li>
                <a href="#pan">Pan</a>
              </li>
              <li>
                <a href="#drag">Drag</a>
              </li>
              <li>
                <a href="#focus">Focus</a>
              </li>
              <li>
                <a href="#in-view">In view</a>
              </li>
              <li>
                <a href="#event-propagation">Event propagation</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="hover" title="Hover" summary="Use whileHover and optional hover event listeners">
              <Hover />
            </Section>
            <Section id="tap" title="Tap" summary="Use whileTap and tap events for press interactions">
              <Tap />
            </Section>
            <Section id="pan" title="Pan" summary="Use onPan to respond to pointer movement; disable touch-action">
              <Pan />
            </Section>
            <Section id="drag" title="Drag" summary="Apply pointer movement directly to position with drag">
              <Drag />
            </Section>
            <Section id="focus" title="Focus" summary="Animate on focus visibility with whileFocus">
              <Focus />
            </Section>
            <Section id="in-view" title="In view" summary="Animate while element enters viewport with whileInView">
              <InView />
            </Section>
            <Section id="event-propagation" title="Event propagation" summary="Stop events reaching parent using onPointerDownCapture">
              <EventPropagation />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;