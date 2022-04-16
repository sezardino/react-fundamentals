import { HTMLProps } from "react";

export interface ModalProps extends HTMLProps<HTMLDivElement> {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}
