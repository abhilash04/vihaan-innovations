import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../../../../common/HeaderSec";
import FooterAndPopup from "../../../../common/Footer";

// Section Components
import ExploreHero from "./serviceExplore/ExploreHero";
import ExploreServicesGrid from "./serviceExplore/ExploreServicesGrid";
import ExploreProcess from "./serviceExplore/ExploreProcess";
import ExploreComparison from "./serviceExplore/ExploreComparison";
import ExploreOutcomes from "./serviceExplore/ExploreOutcomes";
import ExploreResults from "./serviceExplore/ExploreResults";
import ExploreBottomCTA from "./serviceExplore/ExploreBottomCTA";
import ExplorePricing from "./serviceExplore/ExplorePricing";

import { getExploreDataByTitle } from "./serviceExplore/ExploreData";
import NotFound from "../../../NotFound";

const ServiceDetails = ({ title: propTitle }) => {
  const { title: urlTitle } = useParams();
  const title = propTitle || decodeURIComponent(urlTitle);
  const data = getExploreDataByTitle(title);

  if (!data) {
    return <NotFound />;
  }

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <Header />
      {/* Dynamic Sections */}
      <ExploreHero data={data?.hero ? data.hero : { title }} />
      {data?.services && <ExploreServicesGrid data={data?.services} title={data.hero?.title || title} />}
      {data?.process && <ExploreProcess data={data?.process} />}
      {data?.comparison && <ExploreComparison data={data?.comparison} />}
      {data?.outcomes && <ExploreOutcomes data={data?.outcomes} />}
      {data?.results && <ExploreResults data={data?.results} />}
      {data?.bottomCTA && <ExploreBottomCTA data={data?.bottomCTA} />}
      <FooterAndPopup />
    </Box>
  );
};

export default ServiceDetails;
