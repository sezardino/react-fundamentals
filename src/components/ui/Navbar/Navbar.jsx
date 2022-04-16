import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
