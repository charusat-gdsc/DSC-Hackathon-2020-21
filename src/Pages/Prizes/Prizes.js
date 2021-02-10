/** @format */

import { React, useEffect } from "react";
// import prizeClasses from './Prizes.module.css';
// import judgeClasses from '../Judges/Judges.module.css';
import PrizeDomain from "./PrizeDomain";
import Footer from "../../Components/Footer/Footer";
import NestedNavBar from "../../Components/NestedNavbar/NestedNavbar";
import Info from "../../Components/HomePage Components/Info/Info";
import Rules from "../../Components/HomePage Components/Rules/Rules";

const Prizes = () => {
  // NEED TO CHANGE THIS TO PROPS
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NestedNavBar />
      <PrizeDomain domainName='AI/ML Domain' />
      <PrizeDomain domainName='Full Stack App Development Domain' />
      <Info heading='Matic Network' />
      <Rules content='Best hack built on top of Ethereum:  Rs.10000' />
      <Rules content='Best hack built on top of Ethereum + Matic: Rs.15000' />
      <Rules content='Eligibility for internship/full-time role interviews and a chance to land seed funding of up to 5000 USD!' />
      <Info heading='Portis' />
      <Rules content='Best App built on Portis: ₹15000' />
      <Info heading='Tezos' />
      <Rules content='Best App built on Tezos: ₹20,000' />
      <Footer />
    </div>
  );
};

export default Prizes;
