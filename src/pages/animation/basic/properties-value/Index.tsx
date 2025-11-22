import DocumentationLayout from "@/components/layout/DocumentationLayout";

import RegularCssProps from "./RegularCssProps";
import UnanimatableCss from "./UnanimatableCss";
import TransformsTranslate from "./TransformsTranslate";
import TransformsScale from "./TransformsScale";
import TransformsRotate from "./TransformsRotate";
import TransformsSkew from "./TransformsSkew";
import TransformOriginPerspective from "./TransformOriginPerspective";
import ValueTypes from "./ValueTypes";
import PositionUnits from "./PositionUnits";
import UnitConversion from "./UnitConversion";
import CssVariables from "./CssVariables";

const Index = () => {
  return (
    <DocumentationLayout>
      <article className="px-50 py-20">
        <div
          style={{
            marginBottom: 12,
            background: "#e5e7eb",
            padding: 8,
            fontSize: 12,
          }}
        >
          Using: overview of Motion-supported properties and value types
        </div>
        <ul>
          <li className="mb-4 border-b border-gray-200">
            <h2>Regular CSS properties</h2>
            <RegularCssProps />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>Un-animatable CSS properties</h2>
            <UnanimatableCss />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>Transforms Translate</h2>
            <TransformsTranslate />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>Transforms Scale</h2>
            <TransformsScale />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>Transforms Rotate</h2>
            <TransformsRotate />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>Transforms Skew</h2>
            <TransformsSkew />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>Transform origin & perspective</h2>
            <TransformOriginPerspective />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>Value types</h2>
            <ValueTypes />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>Position units</h2>
            <PositionUnits />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>Unit conversion</h2>
            <UnitConversion />
          </li>
          <li className="mb-4 border-b border-gray-200">
            <h2>CSS variables</h2>
            <CssVariables />
          </li>
        </ul>
      </article>
    </DocumentationLayout>
  );
};

export default Index;
