/** @format */

import classes from "./Info.module.css";
import React from "react";

const Info = ({ heading, content, smallHead, bold }) => {
  return (
    <div className={classes.Container}>
      {smallHead ? (
        <h5 className={classes.Heading2}>{heading}</h5>
      ) : (
        <h3 className={classes.Heading}>{heading}</h3>
      )}
      {bold ? (
        <div className={classes.content2}>{content}</div>
      ) : (
        <div className={classes.content}>{content}</div>
      )}
    </div>
  );
};

export default Info;
