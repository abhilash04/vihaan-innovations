import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Tabs, Tab } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import GroupAddIcon from '@mui/icons-material/GroupAdd'; // Generic avatars placeholder

const tabData = ["Member Profile Portal", "Matchmaking Engine", "Messaging & Interest", "Subscription & Payments"];

const moduleDetails = {
  0: {
    whatItDoes: ["Filter by gotra, caste", "Advanced search", "Verified badge display"],
    whoUsesIt: ["WhatsApp alerts", "Custom filters", "Gotra search"]
  },
  1: {
    whatItDoes: ["AI-driven matchmaking", "Compatibility scores", "Automated daily matches"],
    whoUsesIt: ["Agent/Staff Panel", "WhatsApp alerts", "Custom filters", "Gotra search"] // Mimicking the repeated text block in the mock for visual fidelity
  },
  2: {
    whatItDoes: ["Secure in-app chat", "Interest express/accept", "Read receipts"],
    whoUsesIt: ["Agent/Staff Panel", "WhatsApp alerts", "Custom filters", "Gotra search"]
  },
  3: {
    whatItDoes: ["Razorpay/Stripe integration", "Plan upgrades", "Invoice generation"],
    whoUsesIt: ["CRM Panel", "Unsubscribed client", "Agent & Reports", "Analytics & Reports"]
  }
};

const MatrimonyPlatformModules = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const currentContent = moduleDetails[activeTab];

  return (
    <Box sx={{ bgcolor: "#5981B6", pb: 10, pt: 6 }}> {/* Medium blue from the mock section background */}
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "inline-block", mb: 1 }}>
            <Typography sx={{
              fontWeight: 800, color: "#ffffff", fontSize: "28px",
              display: "flex", alignItems: "center", gap: 1,
              justifyContent: "center"
            }}>
              Platform Modules — Tabbed Deep Dive
            </Typography>
          </Box>
        </Box>

        {/* Mock UI Container */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            bgcolor: "#ffffff",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          {/* Top Tabs */}
          <Box sx={{ bgcolor: "#0B2046" }}> {/* Dark navy background for tabs */}
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{
                '& .MuiTabs-indicator': { backgroundColor: '#ffffff', height: 4 },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: { xs: "12px", md: "15px" },
                  color: "rgba(255,255,255,0.6)",
                  py: 3,
                  px: 2,
                  borderRight: "1px solid rgba(255,255,255,0.1)"
                },
                '& .Mui-selected': { color: '#ffffff !important' },
              }}
            >
              {tabData.map((label, i) => (
                <Tab label={label} key={i} />
              ))}
            </Tabs>
          </Box>

          {/* Inner Content Layout structured like a table */}
          <Box sx={{ minHeight: "300px", position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Grid container>
                  {/* Left Column (What it does) */}
                  <Grid item xs={12} sm={6} sx={{ p: { xs: 4, md: 6 }, borderRight: { sm: "1px solid rgba(0,0,0,0.1)" } }}>
                    <Typography sx={{ fontWeight: 800, color: "#1a1a1a", mb: 2, fontSize: "15px", textTransform: "uppercase" }}>
                      what it does
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0, '& li': { mb: 1.5, color: "#444", fontSize: "15px", fontWeight: 500 } }}>
                      {currentContent.whatItDoes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </Box>

                    {/* Placeholder for avatars seen in the mock */}
                    {activeTab === 0 && (
                      <Box sx={{ mt: 5, color: "#5981B6" }}>
                        <GroupAddIcon sx={{ fontSize: 50 }} />
                        <GroupAddIcon sx={{ fontSize: 50, ml: -2 }} />
                        <GroupAddIcon sx={{ fontSize: 50, ml: -2 }} />
                      </Box>
                    )}
                  </Grid>

                  {/* Right Column (Who uses it) */}
                  <Grid item xs={12} sm={6} sx={{ p: { xs: 4, md: 6 }, bgcolor: "#f8f9fe" }}>
                    <Typography sx={{ fontWeight: 800, color: "#1a1a1a", mb: 2, fontSize: "15px", textTransform: "uppercase" }}>
                      who uses it
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0, '& li': { mb: 1.5, color: "#666", fontSize: "15px" }, listStyleType: "circle" }}>
                      {currentContent.whoUsesIt.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Paper>

      </Container>
    </Box>
  );
};

export default MatrimonyPlatformModules;
