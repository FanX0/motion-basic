import DocumentationLayout, {
  Section,
} from "@/components/layout/DocumentationLayout";
import WhileInView from "./WhileInView";
import ViewportOptions from "./ViewportOptions";
import UseInViewState from "./UseInViewState";
import PageProgress from "./PageProgress";
import ElementParallax from "./ElementParallax";
import ScrollContainerReveal from "./ScrollContainerReveal";
import VelocityDirection from "./VelocityDirection";
import ManyItemsReveal from "./ManyItemsReveal";
import HookAndVariants from "./HookAndVariants";

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div
          style={{
            marginBottom: 12,
            background: "#e5e7eb",
            padding: 8,
            fontSize: 12,
          }}
        >
          Using: combined scroll examples on one page for quick exploration
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#while-in-view">While in view</a>
              </li>
              <li>
                <a href="#viewport-options">Viewport options</a>
              </li>
              <li>
                <a href="#hook-state">useInView state</a>
              </li>
              <li>
                <a href="#page-progress">Page progress</a>
              </li>
              <li>
                <a href="#element-parallax">Element parallax</a>
              </li>
              <li>
                <a href="#container-reveal">Container reveal</a>
              </li>
              <li>
                <a href="#velocity-direction">Velocity & direction</a>
              </li>
              <li>
                <a href="#many-items">Many items reveal</a>
              </li>
              <li>
                <a href="#hook-variants">Hook + variants</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section
              id="while-in-view"
              title="While in view"
              summary="Reveal on scroll using whileInView and viewport once"
            >
              <WhileInView />
            </Section>
            <Section
              id="viewport-options"
              title="Viewport options"
              summary="Control threshold and margins via amount and margin"
            >
              <ViewportOptions />
            </Section>
            <Section
              id="hook-state"
              title="useInView state"
              summary="Use useInView(ref) to drive UI state without animation"
            >
              <UseInViewState />
            </Section>
            <Section
              id="page-progress"
              title="Page progress"
              summary="Map scrollYProgress to styles like progress bar and header"
            >
              <PageProgress />
            </Section>
            <Section
              id="element-parallax"
              title="Element parallax"
              summary="Track a target element and map progress with useTransform"
            >
              <ElementParallax />
            </Section>
            <Section
              id="container-reveal"
              title="Container reveal"
              summary="Reveal inside an overflow scroll container"
            >
              <ScrollContainerReveal />
            </Section>
            <Section
              id="velocity-direction"
              title="Velocity & direction"
              summary="React to scroll speed/direction for auto-hide UI"
            >
              <VelocityDirection />
            </Section>
            <Section
              id="many-items"
              title="Many items reveal"
              summary="List items that reveal one-time on scroll"
            >
              <ManyItemsReveal />
            </Section>
            <Section
              id="hook-variants"
              title="Hook + variants"
              summary="Drive variants in other components via useInView state"
            >
              <HookAndVariants />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
