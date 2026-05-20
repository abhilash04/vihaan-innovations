import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Tabs, Tab, Button, useTheme, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import PopUps from "../../../common/PopUps";

const tabNames = [
  "Listing Management",
  "Search Engine",
  "User Experience",
  "Integrations",
  "Admin Panel",
  "SEO Tools",
  "Analytics"
];

const moduleData = {
  0: {
    description: "Core foundation for building scalable top listing sites for business",
    listerContent: [
      "Custom listing submission forms",
      "Draft, publish & expiry controls",
      "Media upload & gallery management",
      "Real-time notifications"
    ],
    userContent: [
      "Categorized browsing & structured directories",
      "Save favorites & compare listings",
      "Smart recommendations"
    ]
  },
  1: {
    description: "",
    listerContent: [
      "Keyword tagging & metadata optimization",
      "Search analytics & performance tracking",
      "Location mapping integration"
    ],
    userContent: [
      "Lightning-fast search (Elasticsearch powered)",
      "Autocomplete & instant suggestions",
      "Filters (price, category, location)",
      "Radius-based map search"
    ]
  },
  2: {
    description: "",
    listerContent: [
      "Dashboard insights & quick actions",
      "Notification and workflow tracking"
    ],
    userContent: [
      "Personalized experiences",
      "Saved searches & alerts",
      "Smooth navigation & discovery"
    ]
  },
  3: {
    description: "",
    listerContent: [
      "API integrations & third-party sync",
      "Automated data workflows",
      "Secure role-based access"
    ],
    userContent: [
      "Seamless interactions across platform",
      "Faster data processing"
    ]
  },
  4: {
    description: "",
    listerContent: [
      "Full listing moderation",
      "User & role management",
      "Workflow tracking system",
      "Secure transaction monitoring"
    ],
    userContent: [
      "Enhanced security and platform reliability"
    ]
  },
  5: {
    description: "",
    listerContent: [
      "SEO-friendly URLs & schema",
      "Metadata & keyword optimization",
      "Boost listing visibility organically"
    ],
    userContent: [
      "Search engine-friendly pages",
      "Better discoverability"
    ]
  },
  6: {
    description: "",
    listerContent: [
      "Real-time performance analytics",
      "User behavior tracking",
      "Conversion & traffic insights"
    ],
    userContent: [
      "Improved recommendations",
      "Better search results"
    ]
  }
};

const ListingPlatformModules = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const currentContent = moduleData[activeTab];

  return (
    <Box sx={{ bgcolor: "#ffffff", py: isMobile ? 6 : 8 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: isMobile ? 6 : 8 }}>
          <Typography sx={{ color: "#2563eb", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: 1, mb: 1 }}>
            Platform Modules
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: isMobile ? "1.75rem" : "2.25rem", mb: 2 }}>
            Complete Modules That Power Top Listing Sites for Business
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", mb: 1, maxWidth: "700px", margin: "0 auto" }}>
            Build and scale top listing sites for business with a powerful set of modules designed for listers, admins, and end users—covering everything from submissions to analytics and monetization.
          </Typography>
        </Box>

        {/* Custom Tabs Implementation matching the image */}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: "none", overflowX: "auto", pb: isMobile ? 1 : 2 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                minHeight: "48px",
                '& .MuiTabs-indicator': { display: "none" },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#666",
                  bgcolor: "#f1f5f9",
                  borderRadius: "8px",
                  mx: 0.5,
                  minHeight: "40px",
                  py: 1,
                  px: 3,
                  transition: "all 0.2s",
                },
                '& .Mui-selected': {
                  color: '#ffffff !important',
                  bgcolor: "#3b82f6 !important",
                  boxShadow: "0 4px 10px rgba(59, 130, 246, 0.4)"
                },
              }}
            >
              {tabNames.map((name, i) => (
                <Tab label={name} key={i} disableRipple />
              ))}
            </Tabs>
          </Box>

          {/* Content Box attached to tabs visually */}
          <Paper
            elevation={0}
            sx={{
              mt: isMobile ? 1 : 2,
              p: isMobile ? 3 : 5,
              bgcolor: "#f8fafc", // Very light greyish blue
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              minHeight: isMobile ? "auto" : "300px"
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >

                {/* Description Text */}
                {currentContent.description && (
                  <Typography sx={{ color: "#444", fontSize: "15px", lineHeight: 1.6, mb: 5 }}>
                    {currentContent.description}
                  </Typography>
                )}

                <Grid container spacing={isMobile ? 4 : 6}>
                  {/* Left Column (Listers) */}
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 800, color: "#1a1a1a", mb: 3, fontSize: "15px" }}>
                      {activeTab === 4 ? "For Admins" : "For Listers & Admins"}
                    </Typography>
                    <Box component="ul" sx={{
                      pl: 0, m: 0, listStyle: "none",
                      '& li': {
                        position: "relative",
                        pl: "24px",
                        mb: 2,
                        color: "#666",
                        fontSize: "14px",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: "8px",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          bgcolor: "#94a3b8"
                        }
                      }
                    }}>
                      {currentContent.listerContent.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </Box>
                  </Grid>

                  {/* Right Column (End Users) */}
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 800, color: "#1a1a1a", mb: 3, fontSize: "15px" }}>
                      For End Users
                    </Typography>
                    <Box component="ul" sx={{
                      pl: 0, m: 0, listStyle: "none",
                      '& li': {
                        position: "relative",
                        pl: "24px",
                        mb: 2,
                        color: "#666",
                        fontSize: "14px",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: "8px",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          bgcolor: "#94a3b8"
                        }
                      }
                    }}>
                      {currentContent.userContent.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </AnimatePresence>
          </Paper>

          {/* Footer CTA */}
          <Box sx={{ textAlign: "center", mt: isMobile ? 4 : 6 }}>
            <Typography sx={{ color: "#1a1a1a", fontWeight: 700, fontSize: "18px", mb: 2 }}>
              Build Your Own Top Listing Site for Business
            </Typography>
            <Button
              variant="contained"
              onClick={() => setOpenPopup(true)}
              sx={{
                bgcolor: "#2563eb",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "15px",
                px: isMobile ? 4 : 5,
                py: 1.5,
                borderRadius: "8px",
                textTransform: "none",
                boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
                "&:hover": {
                  bgcolor: "#1d4ed8",
                  boxShadow: "0 6px 20px rgba(37, 99, 235, 0.4)",
                },
              }}
            >
              Get Free Demo
            </Button>
          </Box>

        </Box>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default ListingPlatformModules;
