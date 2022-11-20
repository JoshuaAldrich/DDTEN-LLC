import { Link } from "react-router-dom";
import classes from "../styles/nav.module.css";
import ddTen from "../images/DDTEN.png";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <Link className={classes.link} to="/">
        DDTEN LLC
      </Link>
      <img src={ddTen} alt="DDTEN Logo" className={classes.img} />
      <Link className={classes.link} to="/about">
        About Us
      </Link>
      <Link className={classes.link} to="/projects">
        Projects
      </Link>
      <Link className={classes.link} to="/products">
        Products
      </Link>
      <Link className={classes.link} to="/services">
        Services
      </Link>
      <Link className={classes.link} to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
