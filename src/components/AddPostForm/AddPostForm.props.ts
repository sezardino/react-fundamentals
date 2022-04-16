import { HTMLProps } from "react";
import { Post } from "../../types";

export interface AddPostFormProps extends HTMLProps<HTMLFormElement> {
  onAddPost: (data: Pick<Post, "body" | "title">) => void;
}
