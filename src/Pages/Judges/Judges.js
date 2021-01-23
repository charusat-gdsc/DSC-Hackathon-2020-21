/** @format */

import React, { useState } from "react";

import Card from "../../Components/Judges_Teams_Card/Card";
import classes from "./Judges.module.css";
import Musk from "../../assets/Judges/temp.jpg";
import Footer from "../../Components/Footer/Footer";
import ProfileModal from "../../Components/ProfileModal/ProfileModal";
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
        <div className={classes.dscLogo}></div>
        <span className={classes.homeText}>Home</span>
      </div>
      <div className={classes.flexContainer}>
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
          name={"Aditya Pahilwni"}
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

export default Judges;
