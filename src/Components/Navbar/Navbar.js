/** @format */

import React, { useState, useEffect } from "react";
import classes from "./nav.module.css";
import Logo from "../../assets/dsc_logo.ico";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import { debounce } from "./Helper";

const Navbar = ({ showSideDrawer }) => {
  const handleImageClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <div
      className={classes.Container}
      style={{ top: visible ? "0" : "-100px" }}>
      <div className={classes.logo}>
        <img src={Logo} className={classes.img} alt='Logo' />
      </div>
      <div>
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
              className={classes.link1}
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
      <div onClick={() => showSideDrawer(true)} className={classes.hamburger}>
        <div className={classes.lines}></div>
        <div className={classes.lines}></div>
        <div className={classes.lines}></div>
      </div>
    </div>
  );
};

export default Navbar;
