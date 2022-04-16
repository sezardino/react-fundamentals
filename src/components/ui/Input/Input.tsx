import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./Input.module.css";

import { InputProps } from "./InputProps";

export const Input: React.FC<InputProps> = ({ type, ...props }) => {
  if (type === "textarea") {
    type;
    props;
    return (
      <textarea
        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className={styles.input}
      />
    );
  }

  return (
    <input
      type={type}
      {...(props as InputHTMLAttributes<HTMLInputElement>)}
      className={styles.input}
    />
  );
};
