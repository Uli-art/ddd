import React from "react"
import { Link } from "react-router-dom"

const NavBar=() => {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/devices'>Devices</Link></li>
        <li><a href="#">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;