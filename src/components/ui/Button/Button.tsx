import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  if ("to" in props) {
    return (
      <Link {...props} className={styles.button}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
