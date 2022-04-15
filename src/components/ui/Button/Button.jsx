import styles from "./Button.module.css";

export const Button = (props) => {
  const { children } = props;

  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
