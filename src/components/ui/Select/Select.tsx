import React from "react";
import styles from "./Select.module.css";
import { SelectProps } from "./Select.props";

export const Select: React.FC<SelectProps> = (props) => {
  const { defaultValue, options, ...rest } = props;

  return (
    <select {...rest} className={styles.select}>
      <option disabled>{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
