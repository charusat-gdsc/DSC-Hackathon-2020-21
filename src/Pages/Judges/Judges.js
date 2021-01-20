/** @format */

import React from "react";
import Card from "../../Components/Judges_Teams_Card/Card";
import classes from "./Judges.module.css";
import Musk from "../../assets/Judges/temp.jpg";
// import Page from "../../Layout/Page";

const Judges = () => {
  return (
    <div className={classes.Container}>
      <Card image={Musk} name={"Elon Musk"} role={"CEO"} />
      <Card image={Musk} name={"Elon Musk"} role={"CEO"} />
      <Card image={Musk} name={"Elon Musk"} role={"CEO"} />
    </div>
  );
};

export default Judges;
