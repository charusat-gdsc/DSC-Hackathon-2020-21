/** @format */

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import values from "../../teams.json";
import Card from "../../Components/Judges_Teams_Card/Card";
import classes from "./Members.module.css";
import Musk from "../../assets/Judges/temp.jpg";
import Footer from "../../Components/Footer/Footer";
import ProfileModal from "../../Components/ProfileModal/ProfileModal";
import { Link } from "react-router-dom";

const Members = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const college_name = location.pathname.split("/")[2];
  const showData = ({
    image,
    name,
    role,
    instagram,
    linkedin,
    twitter,
    facebook,
    description,
  }) => {
    setModalData({
      image,
      name,
      role,
      instagram,
      linkedin,
      twitter,
      facebook,
      description,
    });

    setIsOpen(true);
  };
  return (
    <div>
      <div className={classes.imageContainer}>
        <div className={classes.headerContainer}>
          <div className={classes.dscLogo}></div>
          <Link to={"/"} className={classes.homeText}>
            Home
          </Link>
        </div>
        <div className={classes.judgeContainer}>
          <div className={classes.judgeText}>{college_name}</div>
          <div className={classes.randomText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
        </div>
      </div>
      <div className={classes.flexContainer}>
        {values[college_name].map((element) => (
          <Card
            image={Musk}
            name={element.name}
            description={element.description}
            role={element.role}
            instagram={element.instagram}
            linkedin={element.linkedin}
            twitter={element.twitter}
            facebook={element.facebook}
            showData={showData}
          />
        ))}
      </div>
      <Footer />
      <ProfileModal Data={modalData} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Members;
