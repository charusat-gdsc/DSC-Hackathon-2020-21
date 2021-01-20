/** @format */

import classes from "./Rules.module.css";
import React from "react";
import tick from "../../../assets/tick.svg";

const Rules = ({ content }) => {
  return (
    <div className={classes.Container}>
      <img src={tick} alt='Tick' className={classes.svg} />
      <div className={classes.content}>{content}</div>
    </div>
  );
};

export default Rules;
