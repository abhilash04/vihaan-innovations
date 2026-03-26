import React from "react";
import { Box } from "@mui/material";

import Banner from "./Banner";
import HeaderSec from "../common/HeaderSec";
import Footer from "../common/Footer";
import WhoWeAre from "./WhoWeAre";

export default function AboutUs() {
    return (
        <Box sx={{ fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
            <HeaderSec />
            <Box>
                <Banner />
                <WhoWeAre />
            </Box>
            <Footer />
        </Box>
    );
}