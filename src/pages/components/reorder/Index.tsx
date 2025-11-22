import DocumentationLayout, {
  Section,
} from "@/components/layout/DocumentationLayout";
import BasicList from "./BasicList";
import HorizontalTabs from "./HorizontalTabs";
import DragHandle from "./DragHandle";
import WithPresence from "./WithPresence";
import ScrollableList from "./ScrollableList";

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
          Using: Reorder.Group and Reorder.Item for drag-to-reorder lists, axis
          control, drag handles, exit animations, and scroll measurement
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#basic">Basic list</a>
              </li>
              <li>
                <a href="#horizontal">Horizontal tabs</a>
              </li>
              <li>
                <a href="#handle">Drag handle</a>
              </li>
              <li>
                <a href="#presence">With presence</a>
              </li>
              <li>
                <a href="#scroll">Scrollable list</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section
              id="basic"
              title="Basic list"
              summary="Wrap values in Reorder.Group and render each item with Reorder.Item"
            >
              <BasicList />
            </Section>
            <Section
              id="horizontal"
              title="Horizontal tabs"
              summary="Use axis=x and as to render as button tabs"
            >
              <HorizontalTabs />
            </Section>
            <Section
              id="handle"
              title="Drag handle"
              summary="Start drag from a custom handle via useDragControls"
            >
              <DragHandle />
            </Section>
            <Section
              id="presence"
              title="With presence"
              summary="Animate item removal with AnimatePresence"
            >
              <WithPresence />
            </Section>
            <Section
              id="scroll"
              title="Scrollable list"
              summary="Measure scroll offset with layoutScroll in scrollable containers"
            >
              <ScrollableList />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
