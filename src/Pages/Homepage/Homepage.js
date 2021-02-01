/** @format */

import React, { Fragment, useState } from "react";
import TeamWork from "../../assets/teamwork.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import classes from "./HomePage.module.css";
import Heading from "../../Components/HomePage Components/Headings/Heading";
import Info from "../../Components/HomePage Components/Info/Info";
import MissionSVG from "../../assets/mission.svg";
import Presentation from "../../assets/presentation.png";
import collab from "../../assets/collab.png";
import Review from "../../assets/review.png";
import PrizesSVG from "../../assets/prizes.png";
import Rules from "../../assets/Rules.svg";
import AI from "../../assets/AI.svg";
import Dev from "../../assets/Dev.svg";
import TeamsSVG from "../../assets/teams.png";
import SVG from "../../Components/HomePage Components/SVGS/SVG";
import Contact from "../../Components/HomePage Components/Contact/Contact";
import SideDrawer from "../../Components/Navbar/Sidedrawer/SideDrawer";
import Backdrop from "../../Components/Navbar/Backdrop/Backdrop";
import { Link } from "react-router-dom";

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
          <div className={classes.btn}>
            <div
              class='apply-button'
              data-hackathon-slug='HackBash'
              data-button-theme='dark'
              style={{ height: "44px", width: "312px" }}></div>
          </div>
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
            <Info
              content={
                "The sole mission of the Developer Student Club (DSC) is to bring together like-minded students interested in google technologies. Powered by Google Developers, DSC endeavors to wedge the gap between theory and practice."
              }
              heading={"Our Mission"}
            />
            <Info
              content={
                "We, 8 DSC’s come together promoting our motto as we profoundly welcome applications from students throughout the country. DSC encourages students to solve real world problems and also gives an amazing opportunity to connect with alike minds, learn from them and grow towards their goals in their own way."
              }
            />
          </div>
          <div className={classes.svgRight}>
            <SVG svgsrc={MissionSVG} />
          </div>
        </div>
      </section>
      <section id='team'>
        <div className={classes.flex2}>
          <div className={classes.center}>
            <SVG svgsrc={TeamsSVG} />
          </div>
          <div>
            <div className={classes.teamHeading}>Our Team</div>
            <Info
              content={"Alone we can do so little, together we can do so much"}
              bold={true}
            />
            <Info
              content={
                "Our team is a compilation of astounding developers who have come together making this club exhilarating and well organized. As we constantly strive to encourage you towards development, we 8 DSC’s with more than 60 devs of Gujarat have joined our hands to organize a 24 hours Hackathon, HackBash. Our team of skilled developers and experts is at your disposal."
              }
            />
            <br />
            <Link className={classes.LearnMore} to='/teams'>
              Learn More..
            </Link>
          </div>
        </div>
      </section>
      <section id='prizes' className={classes.background}>
        <Heading heading={"Prizes"} />
        <div className={classes.flex2}>
          <div>
            <Info
              content={
                "Nothing piques the interest of a developer more than the developer swag!  As the saying goes “ The reward for work well done is the opportunity to do more”, who wouldn’t wanna grab some exciting goodies and swags that come with your hard work.  We cannot promise you Redbull in the online mode, but you have nothing to worry about as we have lots of prizes reserved for you. The HackBash brings you prizes worth Rs 40,000/-.  Not only this, we have swags, goodies, stickers, and a lot more stuff awaiting you. So what's stopping you from grabbing this opportunity?"
              }
              heading={"Win Exciting Prices"}
            />
          </div>
          <div className={classes.center3}>
            <SVG svgsrc={PrizesSVG} />
          </div>
        </div>
      </section>
      <section id='Domains'>
        <Heading heading={"Hackathon Domains"} />
        <div className={classes.flex3}>
          <div>
            <div className={classes.DomainSvg}>
              <SVG svgsrc={AI} />
            </div>
            <Info
              heading={"AI/ML Development"}
              content={
                "AI will contribute $15.7 trillion to the global economy by 2030. Instead of relaxing, let's be a part of this. Create a system that has any of the following technology stack - Machine Learning, Natural Language Processing, knowledge management, pattern recognition or any subset of AI. You can build literally anything, just that it should have a front end."
              }
            />
          </div>
          <div>
            <div>
              <div className={classes.DomainSvg}>
                <SVG svgsrc={Dev} />
              </div>
              <Info
                heading={"Full Stack Development"}
                content={
                  "Anything your heart desires! Hardware, web, mobile, gaming, VR, IoT, Blockchain...you name it, we’ll support it.  We have sponsored challenges, and other events to inspire you. The number of hacks here can be endless but do not forget to go through our evaluation criteria to ace in this domain. "
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className={classes.process} id='process'>
        <Heading heading={"Hackathon Process"} />
        <div className={classes.flex2}>
          <div className={classes.svgLeft}>
            <div>
              <img src={Presentation} alt='Laptop' className={classes.img} />
            </div>
            <div className={classes.margin}>
              <p className={classes.round}>Round 1</p>
              <p className={classes.round}>Resume And Presentation</p>
            </div>
          </div>
          <div>
            <Info heading={"Selection Round"} />
            <Info
              content={
                "The way to get started is to quit talking and begin Doing…"
              }
              bold={true}
            />
            <Info
              content={
                "Teams for the event will be selected on the basis of their Devfolio profile and their Resumes.We would love to hear what you are going to build. A brief description of around 200 words about your creative ideas will add an extra flourish to get people to talking. "
              }
            />
          </div>
        </div>
        <div className={classes.flex3}>
          <div>
            <Info heading={"Final Round"} />
            <Info content={"You want it ? then fight for it… "} bold={true} />
            <Info
              content={
                "Shortlisted teams will be announced for the final showdown… "
              }
            />
            <Info
              content={
                " A kick off call will be conducted to set the course and tone of the event for the teams & become acquainted to the judges. The final idea submission has to be made using the shared portal-link on Devfolio. You will have 24 hours to convert your idea into a working system which will compete with the rest of all."
              }
            />
            <Info content={"May the best hack win !"} bold={true} />
          </div>
          <div className={classes.svgRight}>
            <img src={collab} alt='Laptop' className={classes.img} />
            <div className={classes.margin}></div>
            <p className={classes.round}>Round 2</p>
            <p className={classes.round}>Final Project Showdown</p>
          </div>
        </div>
      </section>
      <section className={classes.background} id='judges'>
        <Heading heading={"Judges"} />
        <div className={classes.flex2}>
          <div className={classes.center2}>
            <SVG svgsrc={Review} />
          </div>
          <div>
            <Info
              content={
                "Your project will be evaluated on the following criterias"
              }
              heading={"Evaluation Basis"}
            />
            <br />
            <Info smallHead={true} heading={"Impact"} />
            <Info
              content={
                "What makes an idea great is the impact that it creates and the work it's supposed to do. The bigger the impact, the greater the innovation… "
              }
            />
            <br />
            <Info smallHead={true} heading={"Technology"} />
            <Info
              content={
                "Different technologies have different applications and it is your job to determine which suits your hack the best."
              }
            />
            <Info
              content={
                "Drawing to a close with a panel of judges for evaluating the winning hack, criteria for winning hacks:"
              }
            />

            <ul className={classes.list}>
              <li>Creative</li>
              <li>Innovative</li>
              <li>Useful</li>
            </ul>
            <Info
              content={
                "“Novelty of ideas matters, more creative ideas do better here, but the execution of the idea matters too.”"
              }
            />
          </div>
        </div>
      </section>
      <section id='rules'>
        <Heading heading={"Rules"} />
        <div className={classes.flex2}>
          <div>
            <Info
              content={
                "Hackathons are like marathons: Some people go to compete but most people take part to better themselves and have fun. Whatever the reason is you’re at a hackathon, make sure you’re upholding the spirit of the hackathon by collaborating with other teams, helping beginners, and having fun"
              }
            />
            <div className={classes.LearnMore2}>
              <Link to='/rules'>Learn More..</Link>
            </div>
          </div>
          <div className={classes.rulesSvg}>
            <SVG svgsrc={Rules} />
          </div>
        </div>
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
