import { useMemo } from "react";

import styles from "./Pagination.module.css";

export const Pagination = (props) => {
  const { total, limit, current, setCurrent, ...rest } = props;

  const pages = useMemo(() => {
    return new Array(Math.ceil(total / 10))
      .fill(0)
      .map((_, index) => index + 1);
  }, [total]);

  return (
    <ul {...rest} className={styles.pagination}>
      {pages.map((page) => (
        <li key={page}>
          <button
            className={`${styles.page} ${
              current === page ? styles.current : ""
            }`}
            onClick={() => setCurrent(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};
