/** @format */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */

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
import Sponsors from "../../assets/Sponsors.svg";
import TeamsSVG from "../../assets/teams.png";
import SVG from "../../Components/HomePage Components/SVGS/SVG";
import Contact from "../../Components/HomePage Components/Contact/Contact";
import SideDrawer from "../../Components/Navbar/Sidedrawer/SideDrawer";
import Backdrop from "../../Components/Navbar/Backdrop/Backdrop";
import { Link } from "react-router-dom";
import { Timeline, TimelineItem } from "react-timelinev2";

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
              className='apply-button'
              data-hackathon-slug='hackbash'
              data-button-theme='dark'
              style={{ height: "44px", width: "312px" }}></div>
          </div>
        </div>
        <div className={classes.SVG}>
          <img src={TeamWork} alt='SVG' />
        </div>
      </section>
      <div className={classes.trailer}>
        <iframe
          width='700'
          height='450'
          title='Trailer'
          src='https://www.youtube.com/embed/M77AVgw9wbI'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </div>
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
      <section className={classes.process} id='process'>
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
        <div>
          <div className={classes.TimeLine}>
            <Heading heading={"Time Line"} />
            <Timeline>
              <TimelineItem
                shadows
                hoverShadow
                side='left'
                title='Application'
                dateColor={"white"}
                date='5/02/2021'>
                The application for the hackathon will be open to everyone from
                5th of february, 2021 on dev folio. Do make sure to fill the
                form and submit it by 1st of march,2021, 11.59 pm. Do remember
                that your profile will be judged on the github and the
                presentation of your idea.
              </TimelineItem>
              <TimelineItem
                shadows
                hoverShadow
                side='right'
                dateColor={"white"}
                title='Selected candidates'
                date='6/03/2021'>
                After the analysis of all the submitted presentations, A list of
                final candidates eligible for the hackathon will be released on
                6th of march,2021.
              </TimelineItem>
              <TimelineItem
                side='left'
                dateColor={"white"}
                title='Hackathon '
                date='13/03/2021'>
                The most awaited event Hackathon starts at 10 am on 13th March,
                2021. Keep track of the time as the event comes to an end
                exactly after 24 hours on 14th March 2021, 10 am.
              </TimelineItem>
              <TimelineItem
                dateColor={"white"}
                side='right'
                title='Results '
                date='Not Declared'>
                After the most awaiting event we know each one of you is excited
                to know the final result. Rest assured as the final result will
                be out in a period of 1 week. So keep calm and do coding.
              </TimelineItem>
            </Timeline>
          </div>
        </div>
        <Heading heading={"Rounds Information"} />
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
                "Teams for the event will be selected on the basis of their Devfolio profile and their Presentations.We would love to hear what you are going to build. A brief description of your creative ideas in a powerpoint presentation will add an extra flourish to get people to talking. We expect you to follow the strict guidelines when making presentation."
              }
            />
            <div className={classes.pptbtn}>
              <a
                target='_blank'
                href='https://docs.google.com/presentation/d/1Q5v4qfEeh-n03fie5Cf4oDfT9USVitIlkl3ufsYgbAc/edit?usp=sharing'>
                Demo Presentation
              </a>
            </div>
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
      <section id='prizes' className={classes.background}>
        <Heading heading={"Prizes"} />
        <div className={classes.flex2}>
          <div>
            <Info
              content={
                "Nothing piques the interest of a developer more than the developer swag!  As the saying goes “ The reward for work well done is the opportunity to do more”, who wouldn’t wanna grab some exciting goodies and swags that come with your hard work.  "
              }
              heading={"Win Exciting Prices"}
            />
            <Info
              content={
                "We cannot promise you Redbull in the online mode, but you have nothing to worry about as we have lots of prizes reserved for you. The HackBash brings you prizes worth Rs 40,000/-.  Not only this, we have swags, goodies, stickers, and a lot more stuff awaiting you. So what's stopping you from grabbing this opportunity?"
              }
            />
          </div>
          <div className={classes.center3}>
            <SVG svgsrc={PrizesSVG} />
          </div>
        </div>
      </section>
      <section id='sponsorships'>
        <div className={classes.flex2}>
          <div className={classes.sponsorsSVG}>
            <SVG svgsrc={Sponsors} />
          </div>
          <div className={classes.Sponsors}>
            <div className={classes.teamHeading}>Our Sponsors</div>
            <Info
              content={
                "The Hackbash Community Is Very Grateful To All Our Sponsors."
              }
              bold={true}
            />
            <Info
              content={
                "Here are the members of the Hackbash family that understand the value of tech education and help make our hackathon the very best. They are a key role to the innovation and supporters of this next wave of innovation. What can we say, they’re awesome!!"
              }
            />
            <br />
            <Link className={classes.LearnMore} to='/sponsorships'>
              Learn More..
            </Link>
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
