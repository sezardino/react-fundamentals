import { HTMLProps } from "react";
import { Post } from "../../types";

export interface PostListProps extends HTMLProps<HTMLUListElement> {
  posts: Post[];
  title: string;
  onDeletePost: (id: number) => void;
}
