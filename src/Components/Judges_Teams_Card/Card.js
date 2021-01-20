/** @format */

import classes from "./Card.module.css";
import React from "react";

const Card = ({ image, name, role }) => {
  return (
    <div className={classes.Container}>
      <img className={classes.img} src={image} alt='Musk' />
      <div>
        <p className={classes.name}>{name}</p>
        <p className={classes.role}>{role}</p>
      </div>
    </div>
  );
};

export default Card;
