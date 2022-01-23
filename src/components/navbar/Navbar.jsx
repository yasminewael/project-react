import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (

    <nav className="d-flex justify-content-around">
      <h3 className="nav-title mt-1">Market</h3>
      <ul
        className="ul-nav d-flex justify-content-between mt-2"
        style={{ listStyle: "none" }}
      >
        <li className="li-nav mx-1">
          <Link className="link" to="/counter">Counter</Link>
        </li>
        <li className="li-nav mx-1">
          <Link className="link" to="/shop">shop</Link>
        </li>
        <li className="li-nav mx-1">
          <Link className="link" to="/todo">Todo</Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
