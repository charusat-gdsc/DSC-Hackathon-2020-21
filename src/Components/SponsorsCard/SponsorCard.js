/** @format */
/* eslint-disable react/jsx-no-target-blank */

import classes from "./SponsorCard.module.css";
import React from "react";

const SponsorCard = ({ img, link }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.banner}>
        <a href={link} target='_blank'>
          <img src={img} alt='Banner' />
        </a>
      </div>
    </div>
  );
};

export default SponsorCard;
