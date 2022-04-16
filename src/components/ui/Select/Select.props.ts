import { HTMLProps } from "react";

interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  defaultValue: string;
  options: SelectOption[];
}
