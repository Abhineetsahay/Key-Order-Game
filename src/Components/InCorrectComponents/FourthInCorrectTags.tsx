import { useEffect, useState } from "react";
import { FourthInCorrectNestedTags } from "../../utils/NestedTags";
import RenderNestedTags from "../RenderNestedTags";

interface NestedTag {
    tag: string;
    children?: NestedTag[];
    content?: string;
  }
  
  
const FourthIncorrectTags = () => {
  const [inCorrectTags, setIncorrectTags] = useState<NestedTag[]>([]);

  useEffect(() => {
    setIncorrectTags(FourthInCorrectNestedTags);
    
  }, []);

  return <RenderNestedTags nodes={inCorrectTags} />;
};

export default FourthIncorrectTags;
