/** @format */

import classes from "./Info.module.css";
import React from "react";

const Info = ({ heading, content }) => {
  return (
    <div className={classes.Container}>
      <h3 className={classes.Heading}>{heading}</h3>
      <div className={classes.content}>{content}</div>
    </div>
  );
};

export default Info;
