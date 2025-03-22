import { useEffect, useState } from "react";
import { ThirdInCorrectNestedTags } from "../../utils/NestedTags";
import RenderNestedTags from "../RenderNestedTags";

interface NestedTag {
    tag: string;
    children?: NestedTag[];
    content?: string;
  }
  
  
const ThirdIncorrectTags = () => {
  const [inCorrectTags, setIncorrectTags] = useState<NestedTag[]>([]);

  useEffect(() => {
    setIncorrectTags(ThirdInCorrectNestedTags);
    
  }, []);

  return <RenderNestedTags nodes={inCorrectTags} />;
};

export default ThirdIncorrectTags;
