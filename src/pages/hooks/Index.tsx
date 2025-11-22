import DocumentationLayout from "@/components/layout/DocumentationLayout";
import { Link } from "react-router";

const Index = () => {
  const items = [
    { to: "/hooks/use-animate", label: "useAnimate" },
    { to: "/hooks/use-animation-frame", label: "useAnimationFrame" },
    { to: "/hooks/use-drag-controls", label: "useDragControls" },
    { to: "/hooks/use-in-view", label: "useInView" },
    { to: "/hooks/use-page-in-view", label: "usePageInView" },
    { to: "/hooks/use-reduced-motion", label: "useReducedMotion" },
  ];

  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Hooks overview</div>
        <ul style={{ display: "grid", gap: 8 }}>
          {items.map((i) => (
            <li key={i.to} style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: 8 }}>
              <Link to={i.to}>{i.label}</Link>
            </li>
          ))}
        </ul>
      </article>
    </DocumentationLayout>
  );
};

export default Index;