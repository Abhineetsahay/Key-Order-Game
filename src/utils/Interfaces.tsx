export interface TagContent {
  tag: string;
  children?: TagContent[];
  content?: string;
}

export interface RenderNestedTagsProps {
  nodes: TagContent[];
}
