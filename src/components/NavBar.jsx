import syles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={syles.navbar}>
      <NavLink to="/" className={syles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={syles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? syles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? syles.active : "")}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? syles.active : "")}
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? syles.active : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
