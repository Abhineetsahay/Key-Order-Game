import React from "react";
import { RenderNestedTagsProps,TagContent } from "../utils/Interfaces";



const RenderNestedTags: React.FC<RenderNestedTagsProps> = ({ nodes }) => {
  

  return (
    <>
      {nodes.map((node, index) => {
        const { tag, children, content }: TagContent = node;
        return React.createElement(
          tag,
          { key: index,className:"hidden" },
          content || (children && <RenderNestedTags nodes={children} />)
        );
      })}
    </>
  );
};

export default RenderNestedTags;
