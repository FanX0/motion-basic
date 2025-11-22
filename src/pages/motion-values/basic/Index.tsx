import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import BasicCreate from "./BasicCreate";
import SetGet from "./SetGet";
import TransformChain from "./TransformChain";
import SpringAttachment from "./SpringAttachment";
import EventsDemo from "./EventsDemo";
import VelocityDemo from "./VelocityDemo";
import MultiSync from "./MultiSync";


const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: motion values create/set/get, composition with useTransform/useSpring, events, velocity, and syncing across components</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#basic">Create</a>
              </li>
              <li>
                <a href="#set-get">Set and get</a>
              </li>
              <li>
                <a href="#transform">Transform chain</a>
              </li>
              <li>
                <a href="#spring">Spring attachment</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#velocity">Velocity</a>
              </li>
              <li>
                <a href="#multi">Multi-sync</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="basic" title="Create" summary="Create motion values and pass via style">
              <BasicCreate />
            </Section>
            <Section id="set-get" title="Set and get" summary="Update state with set and read with get; subscribe with events">
              <SetGet />
            </Section>
            <Section id="transform" title="Transform chain" summary="Compose new motion values from others with useTransform">
              <TransformChain />
            </Section>
            <Section id="spring" title="Spring attachment" summary="Attach springs to drag values for natural motion">
              <SpringAttachment />
            </Section>
            <Section id="events" title="Events" summary="Listen to change events without causing re-renders">
              <EventsDemo />
            </Section>
            <Section id="velocity" title="Velocity" summary="Read velocity per second with getVelocity">
              <VelocityDemo />
            </Section>
            <Section id="multi" title="Multi-sync" summary="Synchronise motion across components by sharing a motion value">
              <MultiSync />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;