import React from "react";
import { Portal } from "../Portal/Portal";
import styles from "./Modal.module.css";
import { ModalProps } from "./Modal.props";

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, visible, setVisible, ...rest } = props;

  const classes = [styles.modal];

  if (visible) {
    classes.push(styles.visible);
  }

  return (
    <Portal>
      <div
        {...rest}
        className={classes.join(" ")}
        onClick={() => setVisible(false)}
      >
        <div
          className={styles["modal-inner"]}
          onClick={(evt) => evt.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
