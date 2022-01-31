import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const NavbarComponent = () => {
  return (

    // <nav className="d-flex justify-content-around">
    //   <h3 className="mt-1">Market</h3>
    //   <ul
    //     className="d-flex justify-content-between mt-2"
    //     style={{ listStyle: "none" }}
    //   >
    //     <li className="mx-1">
    //       <Link className="link" to="/counter">Counter</Link>
    //     </li>
    //     <li className="mx-1">
    //       <Link className="link" to="/shop">shop</Link>
    //     </li>
    //   </ul>
    // </nav>
<>
<nav className="navbar navbar-expand-lg">
  <div>
  <Link className="nav-brand mx-5 text-decoration-none"  to="/">Market</Link>
  </div>
  <div className="ms-auto align-items-center mx-5">
  <Link className="nav-item"  to="/">Home</Link>
        <Link className="nav-item" to="/shop">shop</Link>
        <Link className="nav-item" to="/counter">Counter</Link>

    {/* <ul class="navbar-nav d-flex justify-content-between">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(currt)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul> */}
  </div>
</nav>

</>
    );
};

export default NavbarComponent;
