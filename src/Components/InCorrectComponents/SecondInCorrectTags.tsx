import { useEffect, useState } from "react";
import { SecondInCorrectNestedTags } from "../../utils/NestedTags";
import RenderNestedTags from "../RenderNestedTags";

interface NestedTag {
    tag: string;
    children?: NestedTag[];
    content?: string;
  }
  
  
const SecondIncorrectTags = () => {
  const [inCorrectTags, setIncorrectTags] = useState<NestedTag[]>([]);

  useEffect(() => {
    setIncorrectTags(SecondInCorrectNestedTags);
    
  }, []);

  return <RenderNestedTags nodes={inCorrectTags} />;
};

export default SecondIncorrectTags;
