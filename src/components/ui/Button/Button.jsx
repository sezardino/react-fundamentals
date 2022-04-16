import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export const Button = (props) => {
  const { children, to } = props;

  const Tag = to ? Link : "button";

  return (
    <Tag {...props} to={to ? to : null} className={styles.button}>
      {children}
    </Tag>
  );
};
