import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { bangaloreLocalities, majorIndianCities, globalCities, serviceTypes, slugify } from "./locationData";

const LocationLinks = ({ serviceType, isTraining = false }) => {
    const isWebDev = serviceType === serviceTypes.WEBSITE_DEVELOPMENT;
    const isDigitalMarketing = serviceType === serviceTypes.DIGITAL_MARKETING;
    const isAnimation = serviceType === serviceTypes.ANIMATION_VIDEO;
    const isSoftwareDev = serviceType === serviceTypes.SOFTWARE_DEVELOPMENT;
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

    const devTitle = isTraining ? "Professional Software Training in Bangalore" : "Website Development Services in Bangalore";
    const devSuffix = isTraining ? "Software Training" : "Website Development Services";
    const devPath = isTraining ? "software-training" : "website-development-services";

    const marketingTitle = isTraining ? "Digital Marketing Training in Bangalore" : "Digital Marketing in Bangalore";
    const marketingSuffix = isTraining ? "Digital Marketing Training" : "Digital Marketing Services";
    const marketingPath = isTraining ? "digital-marketing-training" : "digital-marketing-services";

    const animationTitle = isTraining ? "Animation & VFX Training in Bangalore" : "Animation & Video Services in Bangalore";
    const animationSuffix = isTraining ? "Animation & VFX Training" : "Animation & Video Services";
    const animationPath = isTraining ? "animation-and-video-services" : "animation-and-video-services";

    const softwareTitle = isTraining ? "Advanced Software Development Training in Bangalore" : "Software Development in Bangalore";
    const softwareSuffix = isTraining ? "Software Development Training" : "Software Development Services";
    const softwarePath = isTraining ? "software-development-training" : "custom-software-development";

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
                        {renderLinkGroup(isTraining ? "Global Technical Training & Certification" : "Global Website Development Services & IT Consulting", globalCities, devPath, devSuffix)}
                    </>
                )}

                {(showAll || isDigitalMarketing) && (
                    <Box sx={{ mt: (showAll || isWebDev) ? 8 : 0 }}>
                        {/* Digital Marketing Section */}
                        {renderLinkGroup(marketingTitle, bangaloreLocalities, marketingPath, marketingSuffix)}
                        {renderLinkGroup(marketingTitle.replace("in Bangalore", "in Major Cities"), majorIndianCities, marketingPath, marketingSuffix)}
                        {renderLinkGroup(isTraining ? "International Marketing Certification & Training" : "International Performance Marketing", globalCities, marketingPath, marketingSuffix)}
                    </Box>
                )}

                {(showAll || isAnimation) && (
                    <Box sx={{ mt: (showAll || isWebDev || isDigitalMarketing) ? 8 : 0 }}>
                        {/* Animation & Video Section */}
                        {renderLinkGroup(animationTitle, bangaloreLocalities, animationPath, animationSuffix)}
                        {renderLinkGroup(animationTitle.replace("in Bangalore", "in Major Cities"), majorIndianCities, animationPath, animationSuffix)}
                        {renderLinkGroup(isTraining ? "Global Creative Arts & VFX Training" : "Global Video Production", globalCities, animationPath, animationSuffix)}
                    </Box>
                )}

                {(showAll || isSoftwareDev) && (
                    <Box sx={{ mt: (showAll || isWebDev || isDigitalMarketing || isAnimation) ? 8 : 0 }}>
                        {/* Software Development Section */}
                        {renderLinkGroup(softwareTitle, bangaloreLocalities, softwarePath, softwareSuffix)}
                        {renderLinkGroup(softwareTitle.replace("in Bangalore", "in Major Cities"), majorIndianCities, softwarePath, softwareSuffix)}
                        {renderLinkGroup(isTraining ? "Global Software Training & Certification" : "Global Software Development", globalCities, softwarePath, softwareSuffix)}
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default LocationLinks;
