/** @format */

import React, { useState } from "react";

import Card from "../../Components/Judges_Teams_Card/Card";
import classes from "./Judges.module.css";
import Musk from "../../assets/Judges/temp.jpg";
import Footer from "../../Components/Footer/Footer";
import ProfileModal from "../../Components/ProfileModal/ProfileModal";
import { Link } from "react-router-dom";
// import Page from "../../Layout/Page";

const Judges = () => {
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
          <Link to={"/"} className={classes.homeText}>
            Home
          </Link>
        </div>
        <div className={classes.judgeContainer}>
          <div className={classes.judgeText}>JUDGES</div>
          <div className={classes.randomText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
        </div>
      </div>
      <div className={classes.flexContainer}>
        <Card
          image={Musk}
          name={"Jainam Mehta"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
          role={"CEO"}
          instagram={"https://twitter.com/home"}
          linkedin={"https://twitter.com/home"}
          twitter={"https://twitter.com/home"}
          facebook={"https://twitter.com/home"}
          showData={showData}
        />
        <Card
          image={Musk}
          name={"Aditya Pahilwni"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
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
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
          instagram={"https://twitter.com/home"}
          linkedin={"https://twitter.com/home"}
          twitter={"https://twitter.com/home"}
          facebook={"https://twitter.com/home"}
          showData={showData}
        />
        <Card
          image={Musk}
          name={"Elon Musk"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
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
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
          role={"CEO"}
          instagram={"https://twitter.com/home"}
          linkedin={"https://twitter.com/home"}
          twitter={"https://twitter.com/home"}
          facebook={"https://twitter.com/home"}
          showData={showData}
        />
        <Card
          image={Musk}
          name={"Mark Zuckerberg"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
          role={"Fb CEO"}
          instagram={"https://twitter.com/home"}
          linkedin={"https://twitter.com/home"}
          twitter={"https://twitter.com/home"}
          facebook={"https://twitter.com/home"}
          showData={showData}
        />
      </div>
      <Footer />
      <ProfileModal Data={modalData} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Judges;

// image,
//     name,
//     role,
//     instagram,
//     linkedin,
//     twitter,
//     facebook,
//     description,
