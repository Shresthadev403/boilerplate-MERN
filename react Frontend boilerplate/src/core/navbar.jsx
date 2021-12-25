import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getJwt } from "../auth/auth";
import { logOut } from "../user/signOut";



const IsActive = (path) => {
  const location = useLocation();
  if (location.pathname === path) {
    return true;
  } else {
    return false;
  }
};


function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Navbar</div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li>
              <Link
                className={IsActive("/") ? "nav-link-active" : "nav-items "}
                to="/"
              >
                Home
              </Link>
            </li>
            {!getJwt() && (
              <li>
                <Link
                  className={
                    IsActive("/signup") ? "nav-link-active" : "nav-items"
                  }
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
            )}
            <li>
              {!getJwt() && (
                <Link
                  className={
                    IsActive("/signin") ? "nav-link-active" : "nav-items "
                  }
                  to="/signin"
                >
                  Sign In
                </Link>
              )}
              {getJwt() && (
                <Link
                  className={
                    IsActive("/signout") ? "nav-link-active" : "nav-items "
                  }
                  to="/"
                  onClick={logOut}
                  
                >
                  Sign Out
                </Link>
              )}
            </li>
            <li>
              <Link
                className={
                  IsActive("/about") ? "nav-link-active" : "nav-items "
                }
                to="/about"
              >
                About
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
