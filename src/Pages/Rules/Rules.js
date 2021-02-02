/** @format */

import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Heading from "../../Components/HomePage Components/Headings/Heading";
import Info from "../../Components/HomePage Components/Info/Info";
import Rules from "../../Components/HomePage Components/Rules/Rules";
import NestedNavbar from "../../Components/NestedNavbar/NestedNavbar";

const Rulespage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NestedNavbar />
      <Heading heading={"Rules"} />
      <Info heading={"Eligibility"} />
      <Rules
        content={
          "Attendees from all backgrounds, genders, and geographies are welcome. There is no age restriction to attend the hackathon. In case you are under 18, your parents/legal guardian should contact the hackathon to request a waiver authorizing you to attend the hackathon and submit their plan for your attendance and transportation to and from the hackathon."
        }
      />
      <Rules
        content={
          "Committee members are not eligible to participate in the hackathon. They may, however, assist teams mentors during the coding/development phase."
        }
      />
      <Rules
        content={
          "There is no country restriction but you must be eligible to receive prizes (in case you win) and you are responsible for paying any taxes on the prize winnings."
        }
      />
      <Info heading={"Team Formation"} />
      <Rules
        content={
          "Teams can consist of at least two team members to a maximum of four members. A team should mandatory have a male and a female member. Exceptions can be made for teams on a case by case basis. Contact the hackathon committee in case you need to have any issue regarding female/male members"
        }
      />
      <Rules
        content={
          "Changes to team members are not permitted post registration. Exceptions can be made on a case by case basis as decided by the rules committee."
        }
      />
      <Info heading={"Project Development"} />
      <Rules
        content={
          "No development may start before the actual date and time of the event. Any teams that violate this rule will be automatically disqualified. The first line of code should be written on the day of the event after the team has registered. However, we encourage you to brainstorm ideas and create wireframes/mock-ups via our private discord server."
        }
      />
      <Rules
        content={
          "Any software development tools, game engine, IDE, and/or programming language can be used for the event. If a team member uses a purchased tool licensed to him or her and the license is not transferable to other members the member’s team must choose one available to all developer teams."
        }
      />
      <Rules
        content={
          "To ensure a level field for all contestants, all code must be created only at the hackathon. You are permitted to use publicly developed and openly licensed API’s and SDKs for your project."
        }
      />
      <Rules
        content={
          "A team can submit only one entry for the hackathon. Participation at the hackathon is subjected on a “per-team” basis meaning you are not allowed to be on more than one team at the event."
        }
      />
      <Rules
        content={
          "Any team member violating the code of conduct, involved in the act of plagiarism will be disqualified"
        }
      />
      <Info heading={"Project Submission"} />
      <Rules
        content={
          "All teams should have a team name, and be registered with Devfolio."
        }
      />
      <Rules
        content={
          "All projects should be submitted to the assigned within the assigned interval of time. Failure to submit will result in disqualification."
        }
      />
      <Info heading={"Attendee Code of Conduct"} />
      <Rules
        content={
          "Our hackathon is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, nationality, religion, previous hackathon attendance or computing experience (or lack of any of the aforementioned)."
        }
      />
      <Rules
        content={
          "We do not tolerate harassment of hackathon participants in any form. Sexual language and imagery are not appropriate for any hackathon venue, including hacks, talks, workshops, parties, social media and other online media. Hackathon participants violating these rules may be sanctioned or expelled from the hackathon at the discretion of the hackathon organizers."
        }
      />
      <Rules
        content={
          "Participants asked to stop any harassing behaviour are expected to comply immediately. As this is a hackathon, we like to explicitly note that the hacks created at our hackathon are equally subject to the anti-harassment policy. "
        }
      />
      <Footer />
    </div>
  );
};

export default Rulespage;
