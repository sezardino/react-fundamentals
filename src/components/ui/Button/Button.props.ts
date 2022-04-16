import { ButtonHTMLAttributes } from "react";
import { LinkProps } from "react-router-dom";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> | LinkProps;
