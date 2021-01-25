/** @format */

import React, { useState } from "react";

import Card from "../../Components/Judges_Teams_Card/Card";
import classes from "./Members.module.css";
import Musk from "../../assets/Judges/temp.jpg";
import Footer from "../../Components/Footer/Footer";
import ProfileModal from "../../Components/ProfileModal/ProfileModal";
// import Page from "../../Layout/Page";

const Members = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

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
          <span className={classes.homeText}>Home</span>
        </div>
        <div className={classes.judgeContainer}>
          <span className={classes.judgeText}>Members</span>
          <span className={classes.randomText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </span>
        </div>
      </div>
      <div className={classes.flexContainer}>
        <Card
          image={Musk}
          name={"Jainam Mehta"}
          role={"DSC LEAD"}
          instagram={"https://twitter.com/home"}
          linkedin={"https://twitter.com/home"}
          twitter={"https://twitter.com/home"}
          facebook={"https://twitter.com/home"}
          showData={showData}
        />
        <Card
          image={Musk}
          name={"Aditya Pahilwni"}
          role={"DSC CORE"}
          instagram={"https://twitter.com/home"}
          linkedin={"https://twitter.com/home"}
          twitter={"https://twitter.com/home"}
          facebook={"https://twitter.com/home"}
          showData={showData}
        />
        <Card
          image={Musk}
          name={"Elon Musk"}
          role={"CEO"}
          instagram={"https://twitter.com/home"}
          linkedin={"https://twitter.com/home"}
          twitter={"https://twitter.com/home"}
          facebook={"https://twitter.com/home"}
          showData={showData}
        />
        <Card
          image={Musk}
          name={"Elon Musk"}
          role={"CEO"}
          instagram={"https://twitter.com/home"}
          linkedin={"https://twitter.com/home"}
          twitter={"https://twitter.com/home"}
          facebook={"https://twitter.com/home"}
          showData={showData}
        />
        <Card
          image={Musk}
          name={"Elon Musk"}
          role={"CEO"}
          instagram={"https://twitter.com/home"}
          linkedin={"https://twitter.com/home"}
          twitter={"https://twitter.com/home"}
          facebook={"https://twitter.com/home"}
          showData={showData}
        />
        <Card
          image={Musk}
          name={"Elon Musk"}
          role={"CEO"}
          instagram={"https://twitter.com/home"}
          linkedin={"https://twitter.com/home"}
          twitter={"https://twitter.com/home"}
          facebook={"https://twitter.com/home"}
          showData={showData}
        />
      </div>
      <Footer />
      <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Members;
