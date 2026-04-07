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
    // This allows us to handle 'website-development', 'digital-marketing', 'web-app-development' etc without hardcoding
    const isDigitalMarketing = path.includes("digital-marketing");

    const serviceType = isDigitalMarketing
        ? serviceTypes.DIGITAL_MARKETING
        : serviceTypes.WEBSITE_DEVELOPMENT;

    // Format location name (e.g., "marathahalli" -> "Marathahalli")
    const locationName = locationParam
        ? locationParam.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
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