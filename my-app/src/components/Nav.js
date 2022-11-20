import { Link } from "react-router-dom";
import classes from "../styles/nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <Link className={classes.link} to="/">
        Joshua Aldrich
      </Link>
      <Link className={classes.link} to="/about">
        About Me
      </Link>
      <Link className={classes.link} to="/projects">
        Projects
      </Link>
      <Link className={classes.link} to="/contact">
        Contact
      </Link>
      <Link className={classes.link} to="/resume">
        Resume
      </Link>
    </nav>
  );
};

export default Nav;
