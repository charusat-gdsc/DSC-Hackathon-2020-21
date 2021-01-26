/** @format */

import classes from "./Info.module.css";
import React from "react";

const Info = ({ heading, content, smallHead }) => {
  return (
    <div className={classes.Container}>
      {smallHead ? (
        <h5 className={classes.Heading2}>{heading}</h5>
      ) : (
        <h3 className={classes.Heading}>{heading}</h3>
      )}
      <div className={classes.content}>{content}</div>
    </div>
  );
};

export default Info;
