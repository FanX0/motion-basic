import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import Basic from "./Basic";
import Performance from "./Performance";
import VariantsTransition from "./VariantsTransition";
import ExitPresence from "./ExitPresence";
import CustomCreate from "./CustomCreate";
import OnUpdateEvents from "./OnUpdateEvents";


const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: motion components with animate, whileInView, layout, style transforms, variants, transitions, exit with AnimatePresence, motion.create custom components, and event callbacks</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#basic">Basic</a>
              </li>
              <li>
                <a href="#performance">Performance</a>
              </li>
              <li>
                <a href="#variants">Variants & transition</a>
              </li>
              <li>
                <a href="#exit">Exit presence</a>
              </li>
              <li>
                <a href="#custom">Custom motion.create</a>
              </li>
              <li>
                <a href="#events">onUpdate & onAnimationStart</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="basic" title="Basic" summary="Animate values, whileInView, layout, independent transforms via style">
              <Basic />
            </Section>
            <Section id="performance" title="Performance" summary="Use motion values to update without React re-render">
              <Performance />
            </Section>
            <Section id="variants" title="Variants & transition" summary="Provide variants and default transitions">
              <VariantsTransition />
            </Section>
            <Section id="exit" title="Exit presence" summary="Animate exit with AnimatePresence">
              <ExitPresence />
            </Section>
            <Section id="custom" title="Custom motion.create" summary="Convert custom components to motion with create()">
              <CustomCreate />
            </Section>
            <Section id="events" title="onUpdate & onAnimationStart" summary="Listen to runtime updates and animation start">
              <OnUpdateEvents />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;