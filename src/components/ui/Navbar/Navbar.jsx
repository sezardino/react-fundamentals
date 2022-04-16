import { Link } from "react-router-dom";
import { useAuth } from "../../../context";
import { Button } from "../Button/Button";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { isAuth, logout } = useAuth();

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
          <li>
            <Link to="redux">Redux</Link>
          </li>
          <li>
            {isAuth ? (
              <Button onClick={logout}>Logout</Button>
            ) : (
              <Link to="/auth">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
