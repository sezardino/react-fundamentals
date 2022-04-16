import { HTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  type: "textarea";
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> | TextareaProps;
