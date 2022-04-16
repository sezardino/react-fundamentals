import { LoaderProps } from "./Loader.props";

import styles from "./Loader.module.css";

export const Loader: React.FC<LoaderProps> = (props) => {
  return <div {...props} className={styles.loader}></div>;
};
