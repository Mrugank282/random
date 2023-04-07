import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/navbar.css';

function Navbar() {
  return (
    <>
      <div className="endpoints">
      <div className="nav-component"><Link to="/">Users</Link></div>
      <div className="nav-component"><Link to="/favs">Fav</Link></div>
      </div>
    </>
  );
}

export default Navbar;
