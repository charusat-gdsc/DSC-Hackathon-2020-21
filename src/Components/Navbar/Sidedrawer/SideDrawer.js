/** @format */

import classes from "./SideDrawer.module.css";
import React from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";

const SideDrawer = ({ showSideDrawer }) => {
  const handleImageClick = (id) => {
    showSideDrawer(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={classes.Container}>
      <div className={classes.heading}>HackBash</div>
      <Scrollspy
        items={[
          "home",
          "about",
          "prizes",
          "process",
          "judges",
          "rules",
          "contact",
        ]}>
        <ul className={classes.Links}>
          <Link
            className={classes.link}
            to='/#home'
            onClick={() => handleImageClick("home")}>
            Home
          </Link>
          <Link
            className={classes.link}
            to='#about'
            onClick={() => handleImageClick("about")}>
            About
          </Link>
          <Link
            className={classes.link}
            to='#prizes'
            onClick={() => handleImageClick("prizes")}>
            Prizes
          </Link>
          <Link
            className={classes.link}
            to='#process'
            onClick={() => handleImageClick("process")}>
            Process
          </Link>
          <Link
            className={classes.link}
            to='#judges'
            onClick={() => handleImageClick("judges")}>
            Judges
          </Link>
          <Link
            className={classes.link}
            to='#rules'
            onClick={() => handleImageClick("rules")}>
            Rules
          </Link>
          <Link
            className={classes.link}
            to='#contact'
            onClick={() => handleImageClick("contact")}>
            Contact
          </Link>
        </ul>
      </Scrollspy>
    </div>
  );
};

export default SideDrawer;
