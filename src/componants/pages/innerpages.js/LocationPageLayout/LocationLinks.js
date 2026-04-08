import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { bangaloreLocalities, majorIndianCities, globalCities, serviceTypes, slugify } from "./locationData";

const LocationLinks = ({ serviceType }) => {
    const isWebDev = serviceType === serviceTypes.WEBSITE_DEVELOPMENT;
    const isDigitalMarketing = serviceType === serviceTypes.DIGITAL_MARKETING;
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
                            to={`/services/${pathPrefix}-in-${slugify(loc)}`}
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

    return (
        <Box sx={{ background: "#f8fbff", py: 10, borderTop: "1px solid #e6f1fb" }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ fontWeight: 900, color: "#042c53", mb: 6, textAlign: "center" }}>
                    Explore Our Service Locations
                </Typography>

                {/* Software Development / Website Development Sections */}
                {(showAll || isWebDev) && (
                    <>
                        {renderLinkGroup("Software Development Services in Bangalore Localities", bangaloreLocalities, "website-development-services", "Website Development Services")}
                        {renderLinkGroup("Web & App Development in Popular Cities", majorIndianCities, "website-development-services", "Website Development Services")}
                        {renderLinkGroup("Global IT Solutions & Consulting", globalCities, "website-development-services", "Website Development Services")}
                    </>
                )}

                {(showAll || isDigitalMarketing) && (
                    <Box sx={{ mt: (showAll || isWebDev) ? 8 : 0 }}>
                        {/* Digital Marketing Sections */}
                        {renderLinkGroup("Digital Marketing Services Across Bangalore", bangaloreLocalities, "digital-marketing-services", "Digital Marketing Services")}
                        {renderLinkGroup("Leading Digital Marketing Company in Major Cities", majorIndianCities, "digital-marketing-services", "Digital Marketing Services")}
                        {renderLinkGroup("International SEO & Performance Marketing", globalCities, "digital-marketing-services", "Digital Marketing Services")}
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default LocationLinks;
