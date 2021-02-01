/** @format */

import React, { useEffect } from "react";

import Card from "../../Components/Judges_Teams_Card/Card";
import classes from "./Teams.module.css";
import DSC_IIT from "../../assets/DSC_IIIT.png";
import DSC_NIT from "../../assets/DSC NIT.png";
import DSC_SCET from "../../assets/DSC SCET.png";
import DSC_SURA from "../../assets/DSC Sura.png";
import DSC_DDU from "../../assets/DSC DDU.png";
import DSC_BVM from "../../assets/DSC BVM.png";
import DSC_Charusat from "../../assets/DSC Charusat.png";
import DSC_PDPU from "../../assets/DSC PDPU.png";
import DSC_LOGO from "../../assets/dsc_logo.ico";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
// import Page from "../../Layout/Page";

const Members = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const [isOpen, setIsOpen] = useState(false);
  // const [modalData, setModalData] = useState({});

  // const showData = ({
  //   image,
  //   role,
  //   instagram,
  //   linkedin,
  //   twitter,
  //   facebook,
  //   description,
  // }) => {
  //   setModalData({
  //     image,
  //     name,
  //     role,
  //     instagram,
  //     linkedin,
  //     twitter,
  //     facebook,
  //     description,
  //   });

  //   setIsOpen(true);
  // };
  return (
    <div>
      <div className={classes.imageContainer}>
        <div className={classes.headerContainer}>
          <div className={classes.dscLogo}>
            <img src={DSC_LOGO} alt='Logo' />
          </div>
          <div className={classes.homeText}>
            <Link to='/'>Home</Link>
          </div>
        </div>
        <div className={classes.judgeContainer}>
          <span className={classes.judgeText}>Teams</span>
          <span className={classes.randomText}>
            Alone we can do so little, together we can do so much Our team is a
            compilation of astounding developers.
          </span>
        </div>
      </div>
      <div className={classes.flexContainer}>
        <Card
          image={DSC_SCET}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
          teams={true}
          role={"Lead : Parth Kapadia"}
          name={"DSC SCET"}
          instagram={"https://www.instagram.com/dscscet/"}
          linkedin={
            "https://www.linkedin.com/company/dscscet?originalSubdomain=in"
          }
          twitter={"https://twitter.com/dscscet"}
          facebook={"https://www.facebook.com/dscscet"}
        />
        <Card
          image={DSC_NIT}
          role={"Lead : Aemie Jariwala"}
          teams={true}
          name={"DSC SVNIT"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
          linkedin={
            "https://www.linkedin.com/company/dsc-nit-surat-powered-by-google-developers/"
          }
          instagram={"https://www.instagram.com/dsc_nitsurat/"}
        />
        <Card
          image={DSC_IIT}
          role={"Lead : Ekta Arora"}
          teams={true}
          name={"DSC IIIT, Surat"}
          instagram={"https://instagram.com/dsc_iiitsurat?igshid=1iss09ntmhmak"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
          linkedin={"https://www.linkedin.com/company/dsc-iiitsurat"}
          twitter={"https://twitter.com/dsc_iiitsurat?s=08"}
        />
        <Card
          image={DSC_SURA}
          role={"Lead : Sri Sai"}
          teams={true}
          name={"DSC Suramapallem"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
        />
        <Card
          image={DSC_DDU}
          role={"Lead : Devanshu Brahmbhatt"}
          teams={true}
          name={"DSC DDU"}
          facebook={"https://www.facebook.com/ddustudent "}
          instagram={"https://www.instagram.com/ddustudent/"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
          linkedin={"ttps://www.linkedin.com/company/ddustudent "}
          twitter={"https://twitter.com/ddustudent"}
        />

        <Card
          image={DSC_Charusat}
          role={"Lead : Jainam Mehta"}
          teams={true}
          name={"DSC Charusat"}
          instagram={"https://www.instagram.com/dsc.charusat/"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
          twitter={"https://twitter.com/DSC_Charusat"}
          facebook={"https://www.facebook.com/dsccharusat/"}
        />
        <Card
          image={DSC_PDPU}
          role={"Lead : Jay Rank"}
          teams={true}
          name={"DSC PDPU"}
          instagram={"https://www.instagram.com/dsc.pdpu/"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
        />
        <Card
          image={DSC_BVM}
          role={"Lead : Jay Patel"}
          teams={true}
          name={"DSC BVM"}
          instagram={"https://instagram.com/dsc.bvm?igshid=10bdq5pb338p4"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not"
          }
        />
      </div>
      <Footer />
      {/* <ProfileModal Data={modalData} isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  );
};

export default Members;
