/** @format */

import React, { Fragment, useState } from "react";
import TeamWork from "../../assets/teamwork.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import classes from "./HomePage.module.css";
import Heading from "../../Components/HomePage Components/Headings/Heading";
import Info from "../../Components/HomePage Components/Info/Info";
import { Text, Team, Prices, Process2 } from "./Content";
import MissionSVG from "../../assets/mission.svg";
import Presentation from "../../assets/presentation.png";
import collab from "../../assets/collab.png";
import Review from "../../assets/review.png";
import PrizesSVG from "../../assets/prizes.png";
import TeamsSVG from "../../assets/teams.png";
import SVG from "../../Components/HomePage Components/SVGS/SVG";
import Rules from "../../Components/HomePage Components/Rules/Rules";
import Contact from "../../Components/HomePage Components/Contact/Contact";
import SideDrawer from "../../Components/Navbar/Sidedrawer/SideDrawer";
import Backdrop from "../../Components/Navbar/Backdrop/Backdrop";

const Homepage = () => {
  const [sideDrawer, setsideDrawer] = useState(false);
  const showSideDrawer = (value) => {
    setsideDrawer(value);
  };
  return (
    <Fragment>
      {sideDrawer ? (
        <Fragment>
          <SideDrawer showSideDrawer={showSideDrawer} />
          <Backdrop showSideDrawer={showSideDrawer} />
        </Fragment>
      ) : null}
      <Navbar showSideDrawer={showSideDrawer} />
      <section id='home' className={classes.Container}>
        <div className={classes.Info}>
          <h1 className={classes.heading1}>HACKBASH </h1>
          <h2 className={classes.heading2}>HACKATHON</h2>
          <p className={classes.text}>
            Think. Code. Innovate. <br />A chance to shine and win exciting
            prices!
          </p>
          <button className={classes.btn}>Grab Your spot now !</button>
        </div>
        <div className={classes.SVG}>
          <img src={TeamWork} alt='SVG' />
        </div>
      </section>
      <div className={classes.backImg} />
      <section id='about'>
        <Heading heading={"About"} />
        <div className={classes.flex}>
          <div>
            <Info content={Text} heading={"Our Mission"} />
          </div>
          <div className={classes.svgRight}>
            <SVG svgsrc={MissionSVG} />
          </div>
        </div>
        <div className={classes.flex2}>
          <div className={classes.svgLeft}>
            <SVG svgsrc={TeamsSVG} />
          </div>
          <div>
            <Info content={Team} heading={"Our Team"} />
          </div>
        </div>
      </section>
      <section id='prizes' className={classes.background}>
        <Heading heading={"Prizes"} />
        <div className={classes.flex2}>
          <div>
            <Info content={Prices} heading={"Win Exciting Prices"} />
          </div>
          <div className={classes.svgRight}>
            <SVG svgsrc={PrizesSVG} />
          </div>
        </div>
      </section>
      <section className={classes.process} id='process'>
        <Heading heading={"Hackathon Process"} />
        <div className={classes.flex2}>
          <div className={classes.svgLeft}>
            <img src={Presentation} alt='Laptop' className={classes.img} />
            <p className={classes.round}>Round 1</p>
            <p className={classes.round}>Resume And Presentation</p>
          </div>
          <div>
            <Info content={Prices} heading={"Selection Round"} />
            <Info content={Process2} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className={classes.flex3}>
          <div>
            <Info content={Prices} heading={"Final Round"} />
            <Info content={Process2} />
          </div>
          <div className={classes.svgRight}>
            <img src={collab} alt='Laptop' className={classes.img} />
            <p className={classes.round}>Round 2</p>
            <p className={classes.round}>Final Project Showdown</p>
          </div>
        </div>
      </section>
      <section className={classes.background} id='judges'>
        <Heading heading={"Judges"} />
        <div className={classes.flex2}>
          <div className={classes.svgLeft}>
            <SVG svgsrc={Review} />
          </div>
          <div>
            <Info content={Prices} heading={"Evaluation Basis"} />
          </div>
        </div>
      </section>
      <section id='rules'>
        <Heading heading={"Rules"} />
        <Rules
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed condimentum mauris. Praesent viverra tortor libero, eusemper sapien viverra quis."
          }
        />
        <Rules
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed condimentum mauris."
          }
        />
        <Rules
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed condimentum mauris. Praesent viverra tortor libero, eusemper sapien viverra quis. Curabitur sed condimentum mauris."
          }
        />
        <Rules
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
