import React from "react";
import { Grid } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import Hero from "./Hero";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import ServicesSection from "./ServiceSection";
import Impact from "./Impact";
import ProcessSection from "./ServiceProcess";
import TechStackSection from "./TechStack";
import IndustriesSection from "./IndustriesSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import SeoContent from "./SeoContent";
import LocationLinks from "./LocationLinks";
import { serviceTypes, getContentForLocation } from "./locationData";

const LocationPageLayout = () => {
    const { location: locationParam } = useParams();
    const routerLocation = useLocation();
    const path = routerLocation.pathname;

    // Dynamically determine service type based on the URL prefix
    const isDigitalMarketing = path.includes("digital-marketing");
    const isAnimation = path.includes("animation-and-video-services");

    let serviceType = serviceTypes.WEBSITE_DEVELOPMENT;
    if (isDigitalMarketing) serviceType = serviceTypes.DIGITAL_MARKETING;
    if (isAnimation) serviceType = serviceTypes.ANIMATION_VIDEO;

    // Parse location from pathname if locationParam is empty (for hyphenated routes)
    let detectedLocation = locationParam;
    if (!detectedLocation) {
        const parts = path.split("-in-");
        if (parts.length > 1) {
            detectedLocation = parts[1];
        }
    }

    // Format location name (e.g., "marathahalli" -> "Marathahalli")
    const locationName = detectedLocation
        ? detectedLocation.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        : "Bangalore";

    // Get unique content for this location and service type from our single data source
    const dynamicContent = getContentForLocation(locationName, serviceType);

    return (
        <Grid sx={{ background: "#ffffff" }}>
            <HeaderSec />
            <Hero
                location={locationName}
                serviceType={serviceType}
                content={dynamicContent.hero}
            />
            <ServicesSection
                location={locationName}
                serviceType={serviceType}
                services={dynamicContent.services}
            />
            <Impact location={locationName} />
            <SeoContent
                location={locationName}
                serviceType={serviceType}
                content={dynamicContent.seoContent}
            />
            <ProcessSection
                location={locationName}
                serviceType={serviceType}
                process={dynamicContent.process}
            />
            <TechStackSection
                location={locationName}
                serviceType={serviceType}
                techStack={dynamicContent.techStack}
            />
            <IndustriesSection
                location={locationName}
                serviceType={serviceType}
                industriesList={dynamicContent.industries}
            />
            <WhyChooseUs
                location={locationName}
                serviceType={serviceType}
                content={dynamicContent.about}
            />
            <Testimonials
                location={locationName}
                serviceType={serviceType}
            />
            <LocationLinks serviceType={serviceType} />
            <FooterAndPopup />
        </Grid>
    );
};

export default LocationPageLayout;