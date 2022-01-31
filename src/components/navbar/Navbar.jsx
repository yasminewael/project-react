import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const NavbarComponent = () => {
  return (


<>
<nav className="navbar navbar-expand-lg">
  <div>
  <Link className="nav-brand mx-5 text-decoration-none"  to="/">Market</Link>
  </div>
  <div className="ms-auto align-items-center mx-5">
  <Link className="nav-item"  to="/">Home</Link>
        <Link className="nav-item" to="/shop">shop</Link>
        <Link className="nav-item" to="/counter">Counter</Link>

  </div>
</nav>

</>
    );
};

export default NavbarComponent;
