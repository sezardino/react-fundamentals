import styles from "./Input.module.css";

export const Input = (props) => {
  const { type = "", ...rest } = props;

  if (type === "textarea") {
    return <textarea {...props} className={styles.input} />;
  }

  return <input {...props} className={styles.input} />;
};
