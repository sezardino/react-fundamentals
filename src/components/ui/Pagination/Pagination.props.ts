import { HTMLProps } from "react";

export interface PaginationProps extends HTMLProps<HTMLUListElement> {
  total: number;
  limit: number;
  current: number;
  setCurrent: (current: number) => void;
}
