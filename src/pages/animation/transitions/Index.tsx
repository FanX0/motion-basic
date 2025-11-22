import DocumentationLayout, {
  Section,
} from "@/components/layout/DocumentationLayout";
import Basics from "./Basics";
import ValueSpecific from "./ValueSpecific";
import DefaultComponent from "./DefaultComponent";
import MotionConfigDemo from "./MotionConfigDemo";
import Types from "./Types";
import KeyframesTiming from "./KeyframesTiming";
import SpringParams from "./SpringParams";
import AnimateFunction from "./AnimateFunction";

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
          Using: transition types and configuration in Motion
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#basics">Basics</a>
              </li>
              <li>
                <a href="#value-specific">Value-specific</a>
              </li>
              <li>
                <a href="#defaults">Defaults</a>
              </li>
              <li>
                <a href="#motion-config">MotionConfig</a>
              </li>
              <li>
                <a href="#types">Types</a>
              </li>
              <li>
                <a href="#keyframes">Keyframes timing</a>
              </li>
              <li>
                <a href="#spring-params">Spring params</a>
              </li>
              <li>
                <a href="#animate-fn">animate() function</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section
              id="basics"
              title="Basics"
              summary="Set a transition on any animation prop (duration, delay, ease)"
            >
              <Basics />
            </Section>
            <Section
              id="value-specific"
              title="Value-specific"
              summary="Different transitions per value, with default handling others"
            >
              <ValueSpecific />
            </Section>
            <Section
              id="defaults"
              title="Defaults"
              summary="Set component-level default transitions"
            >
              <DefaultComponent />
            </Section>
            <Section
              id="motion-config"
              title="MotionConfig"
              summary="Set global defaults for a subtree"
            >
              <MotionConfigDemo />
            </Section>
            <Section
              id="types"
              title="Types"
              summary="Tween, spring (physics/duration), and inertia"
            >
              <Types />
            </Section>
            <Section
              id="keyframes"
              title="Keyframes timing"
              summary="Position keyframes with times and set easing arrays"
            >
              <KeyframesTiming />
            </Section>
            <Section
              id="spring-params"
              title="Spring params"
              summary="bounce, visualDuration, damping, mass, stiffness"
            >
              <SpringParams />
            </Section>
            <Section
              id="animate-fn"
              title="animate() function"
              summary="Use animate() to target elements imperatively"
            >
              <AnimateFunction />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
