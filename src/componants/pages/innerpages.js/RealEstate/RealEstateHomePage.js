import { Grid } from "@mui/material";
import React from "react";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import Banner from "../../../pages/innerpages.js/RealEstate/Banner";
import Clients from "./Clients";
import RealEstateServices from "./RealEstateServices";  
import GetInTouch from "./GetInTouch";
import RealEstateSegments from "./RealEstateSegments";
import RealEstateSoftwareSolutions from "./RealEstateSoftwareSolutions";
import RealEstateSolutions from "./RealEstateSolutions";
import RealEstateNumbers from "./RealEstateNumbers";
import Faqs from "./FAQs";
import Resources from "./Resources";

const RealEstateHomePage = () => {
  return (
    <Grid>
      <Header />
      <HeaderSec />
      <Banner/>
      <Clients/>
      <RealEstateServices/>
      <RealEstateSoftwareSolutions/>
      <GetInTouch/>
      <RealEstateSegments/>
      <RealEstateSolutions/>
      <RealEstateNumbers/>
      <Resources/>
      <Faqs/>
      <FooterAndPopup />
    </Grid>
  );
};

export default RealEstateHomePage;
