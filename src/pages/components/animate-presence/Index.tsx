import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import BasicExit from "./BasicExit";
import KeyChange from "./KeyChange";
import ListExit from "./ListExit";
import PresenceState from "./PresenceState";
import ManualSafeToRemove from "./ManualSafeToRemove";
import PropagateExit from "./PropagateExit";


const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: exit animations, key-change slides, list removals, presence state hooks, manual safeToRemove, and propagating child exits</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#basic-exit">Basic exit</a>
              </li>
              <li>
                <a href="#key-change">Key change</a>
              </li>
              <li>
                <a href="#list-exit">List exit</a>
              </li>
              <li>
                <a href="#presence">Presence state</a>
              </li>
              <li>
                <a href="#manual">Manual safeToRemove</a>
              </li>
              <li>
                <a href="#propagate">Propagate exit</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="basic-exit" title="Basic exit" summary="Wrap with AnimatePresence and define exit animations">
              <BasicExit />
            </Section>
            <Section id="key-change" title="Key change" summary="Change key to create slideshow-style transitions">
              <KeyChange />
            </Section>
            <Section id="list-exit" title="List exit" summary="Animate list item removal with exit and layout">
              <ListExit />
            </Section>
            <Section id="presence" title="Presence state" summary="Use useIsPresent to display exiting state">
              <PresenceState />
            </Section>
            <Section id="manual" title="Manual safeToRemove" summary="Delay DOM removal with usePresence and safeToRemove">
              <ManualSafeToRemove />
            </Section>
            <Section id="propagate" title="Propagate exit" summary="Propagate child exits from nested AnimatePresence">
              <PropagateExit />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;