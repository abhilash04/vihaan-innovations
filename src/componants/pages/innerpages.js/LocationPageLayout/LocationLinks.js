import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { bangaloreLocalities, majorIndianCities, globalCities, serviceTypes, slugify } from "./locationData";

const LocationLinks = ({ serviceType, isTraining = false }) => {
    const isWebDev = serviceType === serviceTypes.WEBSITE_DEVELOPMENT;
    const isDigitalMarketing = serviceType === serviceTypes.DIGITAL_MARKETING;
    const isAnimation = serviceType === serviceTypes.ANIMATION_VIDEO;
    const showAll = !serviceType;

    const renderLinkGroup = (title, locations, pathPrefix, linkSuffix) => (
        <Box sx={{ mb: 6 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#042c53", mb: 2.5, borderBottom: "2px solid #e6f1fb", pb: 1, display: 'inline-block' }}>
                {title}
            </Typography>
            <Grid container spacing={1.5}>
                {locations.map((loc) => (
                    <Grid item key={loc}>
                        <Link
                            component={RouterLink}
                            to={`/${isTraining ? "training" : "services"}/${pathPrefix}-in-${slugify(loc)}`}
                            sx={{
                                fontSize: "13px",
                                color: "#378add",
                                textDecoration: "none",
                                fontWeight: 500,
                                transition: "all 0.2s",
                                "&:hover": { color: "#0c447c", textDecoration: "underline" },
                            }}
                        >
                            {linkSuffix} in {loc} |
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );

    const devTitle = isTraining ? "Professional Software Training in Bangalore" : "Software Development & Development Services in Bangalore";
    const devSuffix = isTraining ? "Software Training" : "Software Development & Development Services";
    const devPath = isTraining ? "software-training" : "website-development-services";

    const marketingTitle = isTraining ? "Digital Marketing Training in Bangalore" : "Software Development & Digital Marketing Bangalore";
    const marketingSuffix = isTraining ? "Digital Marketing Training" : "Software Development & Digital Marketing Services";
    const marketingPath = isTraining ? "digital-marketing-training" : "digital-marketing-services";

    const animationTitle = isTraining ? "Animation & VFX Training in Bangalore" : "Software Development & Animation Services Bangalore";
    const animationSuffix = isTraining ? "Animation & VFX Training" : "Software Development & Animation & Video Services";
    const animationPath = isTraining ? "animation-and-video-services" : "animation-and-video-services";

    return (
        <Box sx={{ background: "#f8fbff", py: 10, borderTop: "1px solid #e6f1fb" }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ fontWeight: 900, color: "#042c53", mb: 6, textAlign: "center" }}>
                    Explore Our {isTraining ? "Training" : "Service"} Locations
                </Typography>

                {/* Software / IT Section */}
                {(showAll || isWebDev) && (
                    <>
                        {renderLinkGroup(devTitle, bangaloreLocalities, devPath, devSuffix)}
                        {renderLinkGroup(devTitle.replace("in Bangalore", "in Major Cities"), majorIndianCities, devPath, devSuffix)}
                        {renderLinkGroup(isTraining ? "Global Technical Training & Certification" : "Global Software Development & IT Consulting", globalCities, devPath, devSuffix)}
                    </>
                )}

                {(showAll || isDigitalMarketing) && (
                    <Box sx={{ mt: (showAll || isWebDev) ? 8 : 0 }}>
                        {/* Digital Marketing Section */}
                        {renderLinkGroup(marketingTitle, bangaloreLocalities, marketingPath, marketingSuffix)}
                        {renderLinkGroup(marketingTitle.replace("in Bangalore", "in Major Cities"), majorIndianCities, marketingPath, marketingSuffix)}
                        {renderLinkGroup(isTraining ? "International Marketing Certification & Training" : "International Software Development & Performance Marketing", globalCities, marketingPath, marketingSuffix)}
                    </Box>
                )}

                {(showAll || isAnimation) && (
                    <Box sx={{ mt: (showAll || isWebDev || isDigitalMarketing) ? 8 : 0 }}>
                        {/* Animation & Video Section */}
                        {renderLinkGroup(animationTitle, bangaloreLocalities, animationPath, animationSuffix)}
                        {renderLinkGroup(animationTitle.replace("in Bangalore", "in Major Cities"), majorIndianCities, animationPath, animationSuffix)}
                        {renderLinkGroup(isTraining ? "Global Creative Arts & VFX Training" : "Global Software Development & Video Production", globalCities, animationPath, animationSuffix)}
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default LocationLinks;
