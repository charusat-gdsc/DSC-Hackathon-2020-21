/** @format */

import React, { useEffect } from "react";
import classes from "./Sponsorships.module.css";
import NestedNavbar from "../../Components/NestedNavbar/NestedNavbar";
import Heading from "../../Components/HomePage Components/Headings/Heading";
import Devfolio from "../../assets/Sponsors/devfolio.png";
import Matic from "../../assets/Sponsors/matic.png";
import Portis from "../../assets/Sponsors/portis.png";
import Tezos from "../../assets/Sponsors/tezos.png";
import Global_Careers from "../../assets/Sponsors/Global Carrers.jpg";
import IEEE1 from "../../assets/Sponsors/IEEE-1.jpeg";
import IEEE2 from "../../assets/Sponsors/IEEE-2.jpeg";
import Github from "../../assets/Sponsors/Github.png";
import SSIP from "../../assets/Sponsors/SSIP.png";
import SCET from "../../assets/Sponsors/SCET.png";
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
      <div className={classes.flexContainer}>
        <SponsorCard img={Devfolio} link={"https://devfolio.co/"} />
        <SponsorCard img={Matic} link={"https://matic.network/"} />
        <SponsorCard img={Portis} link={"https://www.portis.io/"} />
        <SponsorCard img={Tezos} link={"https://tezos.com/"} />
        <SponsorCard img={Global_Careers} link={"https://tezos.com/"} />
        <SponsorCard img={IEEE2} link={"https://ieeegujaratsection.org/"} />
        <SponsorCard img={Github} link={"https://githubcampus.expert/"} />
        <SponsorCard img={IEEE1} link={"http://Ieeespsgs.org"} />
        <SponsorCard img={SSIP} link={"http://www.ssipgujarat.in/"} />
        <SponsorCard img={SCET} link={"https://scet.ac.in/"} />
      </div>
      <Footer />
    </div>
  );
};

export default Sponsorships;
