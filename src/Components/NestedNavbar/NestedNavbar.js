/** @format */

import classes from "./Navbar.module.css";
import React from "react";
import Logo from "../../assets/dsc_logo.ico";
import { Link } from "react-router-dom";
const NestedNavbar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.Logo}>
        <img src={Logo} alt='Logo' />
      </div>
      <div className={classes.Link}>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default NestedNavbar;
