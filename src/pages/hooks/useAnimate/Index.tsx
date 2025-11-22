import DocumentationLayout, { Section } from "@/components/layout/DocumentationLayout";
import { useAnimate } from "motion/react";
import { useCallback } from "react";


const ScopedAnimateDemo = () => {
  const [scope, animate] = useAnimate();

  const enter = useCallback(async () => {
    await animate(scope.current, { opacity: 1 }, { duration: 0.3 });
    await animate("li", { opacity: 1, x: 0 }, { duration: 0.4 });
  }, [animate, scope]);

  const reset = useCallback(async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0 });
    await animate("li", { opacity: 0, x: -20 }, { duration: 0 });
  }, [animate, scope]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 8 }}>
        <button onClick={reset}>reset</button>
        <button onClick={enter}>animate</button>
      </div>
      <ul ref={scope} style={{ opacity: 0, display: "grid", gap: 8 }}>
        {["One", "Two", "Three"].map((t) => (
          <li key={t} style={{ width: 180, height: 40, background: "#e5e7eb", borderRadius: 8, opacity: 0, transform: "translateX(-20px)", display: "grid", placeItems: "center" }}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 pt-20 pb-50 ">
        <div style={{ marginBottom: 12, background: "#e5e7eb", padding: 8, fontSize: 12 }}>Using: useAnimate for scoped selectors, manual timelines, and cleanup</div>
        <div style={{ display: "flex", gap: 16 }}>
          <nav style={{ position: "sticky", top: 8, alignSelf: "flex-start" }}>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#scoped">Scoped animate</a>
              </li>
            </ul>
          </nav>
          <div style={{ flex: 1 }}>
            <Section id="scoped" title="Scoped animate" summary="Animate the scoped element and child selector">
              <ScopedAnimateDemo />
            </Section>
          </div>
        </div>
      </article>
    </DocumentationLayout>
  );
};

export default Index;