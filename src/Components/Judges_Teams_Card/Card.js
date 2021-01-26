/** @format */

import React from "react";
import classes from "./Card.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const Card = (props) => {
  const {
    image,
    name,
    role,
    instagram,
    linkedin,
    twitter,
    facebook,
    showData,
  } = props;
  const iconObj = { fontSize: "1.6rem", color: "white", margin: "0 2%" };
  const openLink = (url, e) => {
    window.open(url);
  };
  const showDatafunc = (e) => {
    showData(props);
  };
  const TeamRedirect = () => {
    // const link = props.name.split(" ").join("-");
    // history.push(`/teams/${link}`);
  };
  return (
    <div
      className={classes.Container}
      onClickCapture={props.teams ? TeamRedirect : showDatafunc}>
      <div className={classes.imageContainer}>
        <img className={classes.img} src={image} alt='Musk' />
        <div className={classes.overlay}>
          <div className={classes.socialContainer}>
            {facebook && (
              <FaFacebookF
                className={classes.social}
                style={iconObj}
                onClick={openLink.bind(this, facebook)}
              />
            )}

            {twitter && (
              <FaTwitter
                className={classes.social}
                style={iconObj}
                onClick={openLink.bind(this, twitter)}
              />
            )}

            {linkedin && (
              <FaLinkedinIn
                className={classes.social}
                style={iconObj}
                onClick={openLink.bind(this, linkedin)}
              />
            )}

            {instagram && (
              <FaInstagram
                className={classes.social}
                style={iconObj}
                onClick={openLink.bind(this, instagram)}
              />
            )}
          </div>
        </div>
      </div>

      <div style={{ padding: "3% 5%" }}>
        <p className={classes.name}>{name}</p>
        <p className={classes.role}>{role}</p>
      </div>
    </div>
  );
};

export default Card;
