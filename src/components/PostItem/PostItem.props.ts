import { HTMLProps } from "react";
import { Post } from "../../types";

export interface PostItemProps extends HTMLProps<HTMLDivElement> {
  post: Post;
  onDeletePost: (id: number) => void;
}
