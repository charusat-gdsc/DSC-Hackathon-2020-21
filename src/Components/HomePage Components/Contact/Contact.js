/** @format */
/* eslint-disable react/jsx-no-target-blank */

import React from "react";
import classes from "./Contact.module.css";
import discord from "../../../assets/discord.svg";
const Contact = () => {
  return (
    <div className={classes.Container}>
      <p className={classes.heading1}>DON’T MISS ANY UPDATE!</p>
      <p className={classes.heading2}>Join our Discord now.</p>
      <div className={classes.img}>
        <a target='_blank' href='https://discord.gg/XA8Qu9GPyV'>
          <img src={discord} alt='discord' />
        </a>
      </div>
    </div>
  );
};

export default Contact;
