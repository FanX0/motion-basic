import { Link } from "react-router";
import type { ReactNode } from "react";

export const Section = ({ id, title, summary, children }: { id: string; title: string; summary: string; children: ReactNode }) => {
  return (
    <section id={id} style={{ marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #e5e7eb" }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{title}</h2>
      <div style={{ marginBottom: 10, background: "#f3f4f6", padding: 8, fontSize: 12 }}>{summary}</div>
      {children}
    </section>
  );
};

const DocumentationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className=" top-0 left-0 right-0 bg-gray-400 text-center p-4">
        <nav>
          <ul className="flex flex-row gap-4 bg-gray-400">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animation">Animation</Link>
            </li>
            <li>
              <Link to="/gestures">Gestures</Link>
            </li>
            <li>
              <Link to="/components">Components</Link>
            </li>
            <li>
              <Link to="/motion-values/basic">Motion Values</Link>
            </li>
            <li>
              <Link to="/hooks">Hooks</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="relative">{children}</main>
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-400 text-center p-4">
        Farid Azhari Nurcahyo
      </footer>
    </div>
  );
};

export default DocumentationLayout;
