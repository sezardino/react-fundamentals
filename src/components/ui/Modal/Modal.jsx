import { Portal } from "../Portal/Portal";
import styles from "./Modal.module.css";

const ModalInner = (props) => {
  const { children, visible, setVisible, ...rest } = props;

  const classes = [styles.modal];

  if (visible) {
    classes.push(styles.visible);
  }

  return (
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
  );
};

export const Modal = (props) => (
  <Portal>
    <ModalInner {...props} />
  </Portal>
);
