import { useEffect, useState } from "react";
import { FirstInCorrectNestedTags } from "../../utils/NestedTags";
import RenderNestedTags from "../RenderNestedTags";

interface NestedTag {
    tag: string;
    children?: NestedTag[];
    content?: string;
  }
  
  
const FirstIncorrectTags = () => {
  const [inCorrectTags, setIncorrectTags] = useState<NestedTag[]>([]);

  useEffect(() => {
    setIncorrectTags(FirstInCorrectNestedTags);
    
  }, []);

  return <RenderNestedTags nodes={inCorrectTags} />;
};

export default FirstIncorrectTags;
