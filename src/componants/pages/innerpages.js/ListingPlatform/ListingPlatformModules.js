import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Tabs, Tab } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const tabNames = [
  "Listing CMS", 
  "Search Engine", 
  "Lister Dashboard", 
  "Payments", 
  "Admin Panel", 
  "SEO Tools", 
  "Analytics"
];

const moduleData = {
  0: {
    description: "Listing Platform listing websites and directories on point to real estate commerce for specific niches, specific scenarios, directories, locations, search features, review features, admin panels and workflow tracking functions.",
    listerContent: [
      "Custom listing submission forms",
      "Draft, publish and expire options",
      "Media upload and management for property visuals",
      "Real-time notifications to customers and admins"
    ],
    userContent: [
      "Categorized browsing and deep-link structure",
      "Recommendation lists and instant suggestions",
      "Save favorites and compare features",
      "Archive accounts and notifications"
    ]
  },
  1: {
    description: "Built-in dynamic search engine powered by Elasticsearch or equivalent for lightning-fast localized directory lookups.",
    listerContent: [
      "Keyword tagging and metadata optimization",
      "Boost listing visibility organically",
      "Search term analytics",
      "Location mapping integration"
    ],
    userContent: [
      "Autocorrect and instant-typeahead",
      "Radius-based map searching",
      "Facets and complex filtering (price, category)",
      "Saved searches and email alerts"
    ]
  },
  // Defaulting the rest to similar content for mockup purposes
  ...Array.from({ length: 5 }, (_, i) => ({
    description: "Powerful ecosystem modules connecting the backend operations with the front-line marketplace functionalities effortlessly.",
    listerContent: [
      "Streamlined data upload processes",
      "Actionable insights via minimal dashboards",
      "Direct API connections and seamless syncs",
      "Role-based access permissions"
    ],
    userContent: [
      "Intuitive navigation and discovery methods",
      "Personalized portal experiences",
      "Secure and private transaction tracking",
      "Instant feedback loops and support tickets"
    ]
  })).reduce((acc, curr, index) => ({ ...acc, [index + 2]: curr }), {})
};

const ListingPlatformModules = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const currentContent = moduleData[activeTab];

  return (
    <Box sx={{ bgcolor: "#ffffff", py: 12 }}>
      <Container maxWidth="lg">
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            Platform Modules
          </Typography>
        </Box>

        {/* Custom Tabs Implementation matching the image */}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: "none", overflowX: "auto", pb: 2 }}>
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
              mt: 2,
              p: { xs: 3, md: 5 },
              bgcolor: "#f8fafc", // Very light greyish blue
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              minHeight: "300px"
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
                <Typography sx={{ color: "#444", fontSize: "15px", lineHeight: 1.6, mb: 5 }}>
                  {currentContent.description}
                </Typography>

                <Grid container spacing={6}>
                  {/* Left Column (Listers) */}
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 800, color: "#1a1a1a", mb: 3, fontSize: "15px" }}>
                      For listers, admins scenarios for listers
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
                      End users, comprehensions and admins
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

        </Box>
      </Container>
    </Box>
  );
};

export default ListingPlatformModules;
