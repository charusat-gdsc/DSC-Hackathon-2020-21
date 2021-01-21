/** @format */

import classes from "./Footer.module.css";
import React from "react";

const Footer = () => {
   const handleImageClick = (id) => {
     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
   };
  return (
    <div className={classes.Container}>
      <p className={classes.heading}>Follow Us</p>
      <div className={classes.socials}>
        <div className={classes.box}>
          <i class='fab fa-discord fa-2x'></i>
        </div>
        <div className={classes.box}>
          <i className={classes.box} class='fab fa-instagram fa-2x'></i>
        </div>
        <div className={classes.box}>
          <i className={classes.box} class='fab fa-twitter fa-2x'></i>
        </div>
      </div>
      <div className={classes.links}>
        <ul>
          <li onClick={() => handleImageClick("home")}>Home</li>
          <li onClick={() => handleImageClick("about")}>About</li>
          <li onClick={() => handleImageClick("prizes")}>Prizes</li>
          <li onClick={() => handleImageClick("process")}>Process</li>
          <li onClick={() => handleImageClick("judges")}>Judges</li>
          <li onClick={() => handleImageClick("rules")}>Rules</li>
          <li onClick={() => handleImageClick("contact")}>Contact</li>
        </ul>
      </div>
      <div className={classes.Copyright}>
        Copyright 2021 All rights reserved | Cognizance Hackathon
      </div>
      <div className={classes.Copyright2}>
        Designed and Developed by DSC CHARUSAT with ❤
      </div>
    </div>
  );
};

export default Footer;
