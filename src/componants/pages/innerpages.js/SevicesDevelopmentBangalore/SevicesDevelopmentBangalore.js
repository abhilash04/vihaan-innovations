import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./Hero";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import ServicesSection from "./ServiceSection";
import ProcessSection from "./ServiceProcess";
import TechStackSection from "./TechStack";
import IndustriesSection from "./IndustriesSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";


const SevicesDevelopmentBangalore = () => {
    return (
        <Grid sx={{ background: "#ffffff" }}> {/* Global light theme alignment */}
            <HeaderSec />
            <Hero />
            <ServicesSection />
            <ProcessSection />
            <TechStackSection />
            <IndustriesSection />
            <WhyChooseUs />
            <Testimonials />
            <FooterAndPopup />
        </Grid>
    );
};

export default SevicesDevelopmentBangalore;