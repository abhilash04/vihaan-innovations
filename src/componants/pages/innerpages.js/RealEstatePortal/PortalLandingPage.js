import React from "react";
import { Box } from "@mui/material";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import PortalHero from "./PortalHero";
import PortalTrustedBy from "./PortalTrustedBy";
import PortalServices from "./PortalServices";
import PortalSolutions from "./PortalSolutions";
import PortalCTABand from "./PortalCTABand";
import PortalSegments from "./PortalSegments";
import PortalTopGrid from "./PortalTopGrid";
import PortalStats from "./PortalStats";
import PortalBlog from "./PortalBlog";
import PortalBlogAlternate from "./PortalBlogAlternate";

const PortalLandingPage = () => {
  return (
    <Box sx={{ bgcolor: "#0B1A33", color: "#F5F5F0", overflow: "hidden" }}>
      <HeaderSec />
      <PortalHero />
      <PortalTrustedBy />
      <PortalServices />
      <PortalSolutions />
      <PortalCTABand />
      <PortalSegments />
      <PortalTopGrid />
      <PortalStats />
      <PortalBlog />
      <PortalBlogAlternate />
      <FooterAndPopup />
    </Box>
  );
};

export default PortalLandingPage;
