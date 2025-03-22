import React from "react";
import { CorrectNestedTags } from "../utils/NestedTags";
import RenderNestedTags from "./RenderNestedTags";

const CorrectTags: React.FC = () => {
  return <RenderNestedTags nodes={CorrectNestedTags} />;
};

export default CorrectTags;
