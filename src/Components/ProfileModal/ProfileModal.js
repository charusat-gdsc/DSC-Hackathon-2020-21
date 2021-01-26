/** @format */

/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./ProfileModal.module.css";
import Musk from "../../assets/Judges/temp.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ProfileModal = (props) => {
  console.log(props.Data);
  const iconObj = { fontSize: "24px", color: "grey", margin: "0 2%" };
  const { isOpen, setIsOpen } = props;
  let modalStyle = {
    transform: isOpen ? "translateY(0)" : "translateY(-100vh)",
    opacity: isOpen ? "1" : "0",
  };
  return (
    <div className={classes.modal} style={modalStyle}>
      <div className={classes.modalContainer}>
        <div className={classes.modalHeader}>
          <span className={classes.header}>{props.Data.name}</span>
          <AiOutlineClose
            style={iconObj}
            className={classes.closeIcon}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
        <div className={classes.modalBody}>
          <div className={classes.profileModal}>
            <img className={classes.img} src={props.Data.image} alt='Musk' />
            <p className={classes.name}>{props.Data.name}</p>
            <p className={classes.role}>{props.Data.role}</p>
          </div>
          <div className={classes.descriptionModal}>
            {props.Data.description}
            <div className={classes.contactPart}>
              <span>Contact</span>
              <div className={classes.iconsContainer}>
                <a
                  className={classes.icons}
                  href={props.facebook}
                  target='_blank'>
                  <FaFacebookF className={classes.icons} />
                </a>
                <a
                  className={classes.icons}
                  href={props.twitter}
                  target='_blank'>
                  <FaTwitter className={classes.icons} />
                </a>
                <a
                  className={classes.icons}
                  href={props.linkedin}
                  target='_blank'>
                  <FaLinkedinIn className={classes.icons} />
                </a>
                <a
                  className={classes.icons}
                  href={props.instagram}
                  target='_blank'>
                  <FaInstagram className={classes.icons} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
