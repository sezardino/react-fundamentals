import styles from "./Select.module.css";

export const Select = (props) => {
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
