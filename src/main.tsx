import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/home/Home";

import AnimationsIndex from "@/pages/animation/basic/Index";
import AnimationsLayoutIndex from "@/pages/animation/layout/Index";
import CoreProps from "@/pages/animation/basic/CoreProps";
import PropertiesIndex from "@/pages/animation/basic/properties-value/Index";
import RegularCssProps from "@/pages/animation/basic/properties-value/RegularCssProps";
import UnanimatableCss from "@/pages/animation/basic/properties-value/UnanimatableCss";
import TransformsTranslate from "@/pages/animation/basic/properties-value/TransformsTranslate";
import TransformsScale from "@/pages/animation/basic/properties-value/TransformsScale";
import TransformsRotate from "@/pages/animation/basic/properties-value/TransformsRotate";
import TransformsSkew from "@/pages/animation/basic/properties-value/TransformsSkew";
import TransformOriginPerspective from "@/pages/animation/basic/properties-value/TransformOriginPerspective";
import ValueTypes from "@/pages/animation/basic/properties-value/ValueTypes";
import UnitConversion from "@/pages/animation/basic/properties-value/UnitConversion";
import CssVariables from "@/pages/animation/basic/properties-value/CssVariables";
import TimingIndex from "@/pages/animation/basic/timing-physics/Index";
import TransitionBasics from "@/pages/animation/basic/timing-physics/TransitionBasics";
import DefaultTransitions from "@/pages/animation/basic/timing-physics/DefaultTransitions";
import MotionConfigDefaults from "@/pages/animation/basic/timing-physics/MotionConfigDefaults";
import PositionUnits from "@/pages/animation/basic/properties-value/PositionUnits";
import KeyframesIndex from "@/pages/animation/basic/keyframes-sequences/Index";
import BasicKeyframes from "@/pages/animation/basic/keyframes-sequences/BasicKeyframes";
import WildcardKeyframes from "@/pages/animation/basic/keyframes-sequences/WildcardKeyframes";
import KeyframeTiming from "@/pages/animation/basic/keyframes-sequences/KeyframeTiming";
import VariantsIndex from "@/pages/animation/basic/variants/Index";
import BasicVariants from "@/pages/animation/basic/variants/BasicVariants";
import Orchestration from "@/pages/animation/basic/variants/Orchestration";
import DynamicVariants from "@/pages/animation/basic/variants/DynamicVariants";
import MperativeIndex from "@/pages/animation/basic/imperative/Index";
import UseAnimateRef from "@/pages/animation/basic/imperative/UseAnimateRef";
import Timeline from "@/pages/animation/basic/imperative/Timeline";
import Playback from "@/pages/animation/basic/imperative/Playback";
import Counter from "@/pages/animation/basic/imperative/Counter";
import AnimationGesturesIndex from "@/pages/animation/basic/gestures/Index";
import Hover from "@/pages/animation/basic/gestures/Hover";
import Tap from "@/pages/animation/basic/gestures/Tap";
import Focus from "@/pages/animation/basic/gestures/Focus";
import Drag from "@/pages/animation/basic/gestures/Drag";
import InView from "@/pages/animation/basic/gestures/InView";
import LifecycleIndex from "@/pages/animation/basic/lifecycle/Index";
import EnterBasics from "@/pages/animation/basic/lifecycle/EnterBasics";
import ExitAnimations from "@/pages/animation/basic/lifecycle/ExitAnimations";
import SingleComponent from "@/pages/animation/layout/SingleComponent";
import SharedElement from "@/pages/animation/layout/SharedElement";
import LayoutTiming from "@/pages/animation/layout/LayoutTiming";
import SpecialContexts from "@/pages/animation/layout/SpecialContexts";
import LayoutGroupDemo from "@/pages/animation/layout/LayoutGroupDemo";
import ScaleCorrection from "@/pages/animation/layout/ScaleCorrection";
import Troubleshooting from "@/pages/animation/layout/Troubleshooting";
import ScrollIndex from "@/pages/animation/scroll/Index";
import WhileInView from "@/pages/animation/scroll/WhileInView";
import UseInViewState from "@/pages/animation/scroll/UseInViewState";
import PageProgress from "@/pages/animation/scroll/PageProgress";
import ElementParallax from "@/pages/animation/scroll/ElementParallax";
import VelocityDirection from "@/pages/animation/scroll/VelocityDirection";
import ViewportOptions from "@/pages/animation/scroll/ViewportOptions";
import ScrollContainerReveal from "@/pages/animation/scroll/ScrollContainerReveal";
import ManyItemsReveal from "@/pages/animation/scroll/ManyItemsReveal";
import HookAndVariants from "@/pages/animation/scroll/HookAndVariants";
import SvgIndex from "@/pages/animation/svg/Index";
import TransitionsIndex from "@/pages/animation/transitions/Index";
import GesturesBasicIndex from "@/pages/gestures/basic/Index";
import GesturesHoverIndex from "@/pages/gestures/hover/Index";
import GesturesDragIndex from "@/pages/gestures/drag/Index";
import MotionComponentIndex from "@/pages/components/motion-component/Index";
import AnimateActivityIndex from "@/pages/components/animate-activity/Index";
import AnimatePresenceIndex from "@/pages/components/animate-presence/Index";
import LayoutGroupIndex from "@/pages/components/layout-group/Index";
import LazyMotionIndex from "@/pages/components/lazy-motion/Index";
import MotionConfigIndex from "@/pages/components/motion-config/Index";
import ReorderIndex from "@/pages/components/reorder/Index";
import MotionValuesBasicIndex from "@/pages/motion-values/basic/Index";
import UseMotionTemplateIndex from "@/pages/motion-values/useMotionTemplate/Index";
import UseMotionValueEventIndex from "@/pages/motion-values/useMotionValueEvent/Index";
import UseScrollIndex from "@/pages/motion-values/useScroll/Index";
import UseSpringIndex from "@/pages/motion-values/useSpring/Index";
import UseTimeIndex from "@/pages/motion-values/useTime/Index";
import UseTransformIndex from "@/pages/motion-values/useTransform/Index";
import UseVelocityIndex from "@/pages/motion-values/useVelocity/Index";
import Index from "./pages/animation/basic/Index";
import AnimationIndex from "./pages/animation/Index";
import Documentation from "./pages/home/Documentation";
import GesturesIndex from "@/pages/gestures/Index";
import ComponentsIndex from "@/pages/components/ComponentsIndex";
import HooksIndex from "@/pages/hooks/Index";
import UseAnimateHookIndex from "@/pages/hooks/useAnimate/Index";
import UseAnimationFrameHookIndex from "@/pages/hooks/useAnimationFrame/Index";
import UseDragControlsHookIndex from "@/pages/hooks/useDragControls/Index";
import UseInViewHookIndex from "@/pages/hooks/useInView/Index";
import UsePageInViewHookIndex from "@/pages/hooks/usePageInView/Index";
import UseReducedMotionHookIndex from "@/pages/hooks/useReducedMotion/Index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<Index />} />
        <Route path="/animation/basic" element={<AnimationsIndex />} />
        <Route path="/animation/layout" element={<AnimationsLayoutIndex />} />
        <Route path="/basic/animation/core-props" element={<CoreProps />} />

        <Route
          path="/basic/animation/properties-value"
          element={<PropertiesIndex />}
        />
        <Route
          path="/basic/animation/properties-value/regular-css"
          element={<RegularCssProps />}
        />
        <Route
          path="/basic/animation/properties-value/unanimatable-css"
          element={<UnanimatableCss />}
        />
        <Route
          path="/basic/animation/properties-value/transforms-translate"
          element={<TransformsTranslate />}
        />
        <Route
          path="/basic/animation/properties-value/transforms-scale"
          element={<TransformsScale />}
        />
        <Route
          path="/basic/animation/properties-value/transforms-rotate"
          element={<TransformsRotate />}
        />
        <Route
          path="/basic/animation/properties-value/transforms-skew"
          element={<TransformsSkew />}
        />
        <Route
          path="/basic/animation/properties-value/transform-origin-perspective"
          element={<TransformOriginPerspective />}
        />
        <Route
          path="/basic/animation/properties-value/value-types"
          element={<ValueTypes />}
        />
        <Route
          path="/basic/animation/properties-value/unit-conversion"
          element={<UnitConversion />}
        />
        <Route
          path="/basic/animation/properties-value/css-variables"
          element={<CssVariables />}
        />
        <Route
          path="/basic/animation/timing-physics"
          element={<TimingIndex />}
        />
        <Route
          path="/basic/animation/timing-physics/transition-basics"
          element={<TransitionBasics />}
        />
        <Route
          path="/basic/animation/timing-physics/default-transitions"
          element={<DefaultTransitions />}
        />
        <Route
          path="/basic/animation/timing-physics/motion-config-defaults"
          element={<MotionConfigDefaults />}
        />
        <Route
          path="/basic/animation/keyframes-sequences"
          element={<KeyframesIndex />}
        />
        <Route
          path="/basic/animation/keyframes-sequences/basic-keyframes"
          element={<BasicKeyframes />}
        />
        <Route
          path="/basic/animation/keyframes-sequences/wildcard-keyframes"
          element={<WildcardKeyframes />}
        />
        <Route
          path="/basic/animation/keyframes-sequences/keyframe-timing"
          element={<KeyframeTiming />}
        />
        <Route path="/basic/animation/variants" element={<VariantsIndex />} />
        <Route
          path="/basic/animation/variants/basic-variants"
          element={<BasicVariants />}
        />
        <Route
          path="/basic/animation/variants/orchestration"
          element={<Orchestration />}
        />
        <Route
          path="/basic/animation/variants/dynamic-variants"
          element={<DynamicVariants />}
        />
        <Route path="/basic/animation/mperative" element={<MperativeIndex />} />
        <Route
          path="/basic/animation/mperative/use-animate-ref"
          element={<UseAnimateRef />}
        />
        <Route
          path="/basic/animation/mperative/timeline"
          element={<Timeline />}
        />
        <Route
          path="/basic/animation/mperative/playback"
          element={<Playback />}
        />
        <Route
          path="/basic/animation/mperative/counter"
          element={<Counter />}
        />
        <Route
          path="/basic/animation/gestures"
          element={<AnimationGesturesIndex />}
        />
        <Route path="/basic/animation/gestures/hover" element={<Hover />} />
        <Route path="/basic/animation/gestures/tap" element={<Tap />} />
        <Route path="/basic/animation/gestures/focus" element={<Focus />} />
        <Route path="/basic/animation/gestures/drag" element={<Drag />} />
        <Route path="/basic/animation/gestures/in-view" element={<InView />} />
        <Route path="/basic/animation/lifecycle" element={<LifecycleIndex />} />
        <Route
          path="/basic/animation/lifecycle/enter-basics"
          element={<EnterBasics />}
        />
        <Route
          path="/basic/animation/lifecycle/exit-animations"
          element={<ExitAnimations />}
        />
        <Route
          path="/basic/animation/properties-value/position-units"
          element={<PositionUnits />}
        />

        <Route
          path="/basic/layout/single-component"
          element={<SingleComponent />}
        />
        <Route
          path="/basic/layout/shared-element"
          element={<SharedElement />}
        />
        <Route path="/basic/layout/layout-timing" element={<LayoutTiming />} />
        <Route
          path="/basic/layout/special-contexts"
          element={<SpecialContexts />}
        />
        <Route
          path="/basic/layout/layout-group"
          element={<LayoutGroupDemo />}
        />
        <Route
          path="/basic/layout/scale-correction"
          element={<ScaleCorrection />}
        />
        <Route
          path="/basic/layout/troubleshooting"
          element={<Troubleshooting />}
        />
        <Route path="/animation/scroll" element={<ScrollIndex />} />
        <Route
          path="/animation/scroll/while-in-view"
          element={<WhileInView />}
        />
        <Route
          path="/animation/scroll/viewport-options"
          element={<ViewportOptions />}
        />
        <Route
          path="/animation/scroll/use-in-view"
          element={<UseInViewState />}
        />
        <Route
          path="/animation/scroll/page-progress"
          element={<PageProgress />}
        />
        <Route
          path="/animation/scroll/element-parallax"
          element={<ElementParallax />}
        />
        <Route
          path="/animation/scroll/container-reveal"
          element={<ScrollContainerReveal />}
        />
        <Route
          path="/animation/scroll/velocity-direction"
          element={<VelocityDirection />}
        />
        <Route
          path="/animation/scroll/many-items"
          element={<ManyItemsReveal />}
        />
        <Route
          path="/animation/scroll/hook-variants"
          element={<HookAndVariants />}
        />
        <Route path="/animation/svg" element={<SvgIndex />} />
        <Route path="/animation/transitions" element={<TransitionsIndex />} />
        <Route path="/gestures/basic" element={<GesturesBasicIndex />} />
        <Route path="/gestures/hover" element={<GesturesHoverIndex />} />
        <Route path="/gestures/drag" element={<GesturesDragIndex />} />
        <Route
          path="/components/motion-component"
          element={<MotionComponentIndex />}
        />
        <Route
          path="/components/animate-activity"
          element={<AnimateActivityIndex />}
        />
        <Route
          path="/components/animate-presence"
          element={<AnimatePresenceIndex />}
        />
        <Route path="/components/layout-group" element={<LayoutGroupIndex />} />
        <Route path="/components/lazy-motion" element={<LazyMotionIndex />} />
        <Route
          path="/components/motion-config"
          element={<MotionConfigIndex />}
        />
        <Route path="/components/reorder" element={<ReorderIndex />} />
        <Route
          path="/motion-values/basic"
          element={<MotionValuesBasicIndex />}
        />
        <Route
          path="/motion-values/use-motion-template"
          element={<UseMotionTemplateIndex />}
        />
        <Route
          path="/motion-values/use-motion-value-event"
          element={<UseMotionValueEventIndex />}
        />
        <Route path="/motion-values/use-scroll" element={<UseScrollIndex />} />
        <Route path="/motion-values/use-spring" element={<UseSpringIndex />} />
        <Route path="/motion-values/use-time" element={<UseTimeIndex />} />
        <Route
          path="/motion-values/use-transform"
          element={<UseTransformIndex />}
        />
        <Route
          path="/motion-values/use-velocity"
          element={<UseVelocityIndex />}
        />
        <Route path="/animation" element={<AnimationIndex />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/gestures" element={<GesturesIndex />} />
        <Route path="/components" element={<ComponentsIndex />} />
        <Route path="/hooks" element={<HooksIndex />} />
        <Route path="/hooks/use-animate" element={<UseAnimateHookIndex />} />
        <Route
          path="/hooks/use-animation-frame"
          element={<UseAnimationFrameHookIndex />}
        />
        <Route
          path="/hooks/use-drag-controls"
          element={<UseDragControlsHookIndex />}
        />
        <Route path="/hooks/use-in-view" element={<UseInViewHookIndex />} />
        <Route
          path="/hooks/use-page-in-view"
          element={<UsePageInViewHookIndex />}
        />
        <Route
          path="/hooks/use-reduced-motion"
          element={<UseReducedMotionHookIndex />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
