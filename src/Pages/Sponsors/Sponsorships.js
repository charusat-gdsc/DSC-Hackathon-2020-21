/** @format */

import React, { useEffect } from "react";
import classes from "./Sponsorships.module.css";
import NestedNavbar from "../../Components/NestedNavbar/NestedNavbar";
import Info from "../../Components/HomePage Components/Info/Info";
import Heading from "../../Components/HomePage Components/Headings/Heading";
import Devfolio from "../../assets/Sponsors/devfolio.png";
import Matic from "../../assets/Sponsors/matic.png";
import Portis from "../../assets/Sponsors/portis.png";
import Tezos from "../../assets/Sponsors/tezos.png";
import SponsorCard from "../../Components/SponsorsCard/SponsorCard";
import Footer from "../../Components/Footer/Footer";
const Sponsorships = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NestedNavbar />
      <Heading heading={"Sponsorships"} />
      <Info smallHead={true} heading={"Gold Sponsors"} />
      <div className={classes.flexContainer}>
        <SponsorCard img={Devfolio} link={"https://devfolio.co/"} />
      </div>
      <Info smallHead={true} heading={"Silver Sponsors"} />
      <div className={classes.flexContainer}>
        <SponsorCard img={Matic} link={"https://matic.network/"} />
        <SponsorCard img={Portis} link={"https://www.portis.io/"} />
        <SponsorCard img={Tezos} link={"https://tezos.com/"} />
      </div>
      <Footer />
    </div>
  );
};

export default Sponsorships;
