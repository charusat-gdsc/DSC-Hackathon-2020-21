/** @format */

import classes from "./Footer.module.css";
import React from "react";
import { Link } from "react-router-dom";
import Discord from "../../assets/la_discord.svg";
import Instagram from "../../assets/dashicons_instagram.svg";

const Footer = () => {
  return (
    <div className={classes.Container}>
      <p className={classes.heading}>Follow Us</p>
      <div className={classes.socials}>
        <div className={classes.box}>
          <a target='_blank' href='https://discord.gg/XA8Qu9GPyV'>
            <img src={Discord} alt='Discord' />
          </a>
        </div>
        <div className={classes.box}>
          <img src={Instagram} alt='Discord' />
        </div>
      </div>
      <div className={classes.links}>
        <ul>
          <li>
            <Link to='/#home'>Home</Link>
          </li>
          <li>
            <Link to='/#about'>About</Link>
          </li>
          <li>
            <Link to='/#prizes'>Prizes</Link>
          </li>
          <li>
            <Link to='/#process'>Process</Link>
          </li>
          <li>
            <Link to='/#judges'>Judges</Link>
          </li>
          <li>
            <Link to='/#rules'>Rules</Link>
          </li>
          <li>
            <Link to='/#contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className={classes.Copyright}>
        Copyright 2021 All rights reserved | hackbash
      </div>
      <div className={classes.Copyright2}>
        Developed & Designed by DSC Charusat with ❤
      </div>
    </div>
  );
};

export default Footer;
