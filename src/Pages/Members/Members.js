/** @format */

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import values from "../../teams.json";
import Card from "../../Components/Judges_Teams_Card/Card";
import classes from "./Members.module.css";
import Musk from "../../assets/Judges/temp.jpg";
import Footer from "../../Components/Footer/Footer";
import Heading from "../../Components/HomePage Components/Headings/Heading";
import NestedNavbar from "../../Components/NestedNavbar/NestedNavbar";

const Members = () => {
  const location = useLocation();
  const college_name = location.pathname.split("/")[2];

  return (
    <div>
      <NestedNavbar />
      <Heading heading={college_name} />
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
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Members;
