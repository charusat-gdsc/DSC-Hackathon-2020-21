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
          <span className={classes.header}>Aditya</span>
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
            <img className={classes.img} src={Musk} alt="Musk" />
            <p className={classes.name}>Aditya Pahilwani</p>
            <p className={classes.role}>Dev</p>
          </div>
          <div className={classes.descriptionModal}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
           
            <div className={classes.contactPart}>
              <span>Contact</span>
              <div className={classes.iconsContainer}>
                <FaFacebookF className={classes.icons} />
                <FaTwitter className={classes.icons} />
                <FaLinkedinIn className={classes.icons} />
                <FaInstagram className={classes.icons} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
