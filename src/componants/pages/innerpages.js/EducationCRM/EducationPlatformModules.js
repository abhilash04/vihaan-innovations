import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Tabs, Tab, List, ListItem, ListItemButton, ListItemText, Avatar, AvatarGroup } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const tabData = [
  "Admissions CRM", "Student Portal", "Fee Management", "Counsellor Performance", "Reports & Analytics"
];

const moduleDetails = {
  0: {
    sidebar: ["Inventory Management", "Channel Partner Portal", "Post-Sales Module"],
    title: "Real Estate CRM", // Using the text from the mockup for fidelity, although it says Real Estate
    description: "A purpose-built CRM that understands the real estate sales cycle — from first enquiry to final registration. Automate follow-ups, capture leads, and keep your entire team aligned.",
    features: [
      "Lead source tracking & campaign attribution",
      "Custom pipeline stages & prospect tagging",
      "WhatsApp + email + call integration",
      "Automated follow-up sequences & reminders",
      "Role-based access for agents, managers & admins"
    ]
  },
  // Dummy data for other tabs matching the style
  1: { sidebar: ["Application Forms", "Document Vault", "Status Tracker"], title: "Student Portal", description: "Empower students to manage their own application journey.", features: ["Self-service application tracking", "Secure document upload", "Automated status alerts"] },
  2: { sidebar: ["Invoicing", "Payment Gateway Integration", "Discount Rules"], title: "Fee Management", description: "Streamlined fee collection and reconciliations.", features: ["Automated invoice generation", "Partial payment support", "Scholarship application workflows"] },
  3: { sidebar: ["Lead Distribution", "Call Analytics", "Target Tracking"], title: "Counsellor Performance", description: "Monitor and optimize your admissions team.", features: ["Round-robin lead assignment", "Call recording & transcription", "Daily activity dashboards"] },
  4: { sidebar: ["Conversion Metrics", "Source ROI", "Cohort Analysis"], title: "Reports & Analytics", description: "Deep insights into your funnel performance.", features: ["Customizable report builder", "Scheduled email delivery", "Live visual dashboards"] }
};

const EducationPlatformModules = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSidebarIndex, setActiveSidebarIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setActiveSidebarIndex(0); // Reset sidebar when tab changes
  };

  const currentContent = moduleDetails[activeTab];

  return (
    <Box sx={{ bgcolor: "#F8FAFC", py: 16, position: "relative" }}>
      
      {/* Decorative arrow pointing down */}
      <Box sx={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
        <Box sx={{ width: 2, height: 60, bgcolor: "rgba(0, 180, 216, 0.3)", mx: "auto", position: "relative" }}>
          <Box sx={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%) rotate(45deg)", width: 10, height: 10, borderBottom: "2px solid #00B4D8", borderRight: "2px solid #00B4D8" }} />
        </Box>
      </Box>

      <Container maxWidth="lg">
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "32px", md: "42px" }, mb: 2 }}>
            Platform Modules
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "18px" }}>
            Pick the modules you need — or take the full platform
          </Typography>
        </Box>

        {/* Mock UI Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={0}
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              bgcolor: "#ffffff",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)"
            }}
          >
            {/* Top Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: "#f8f9fe" }}>
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange} 
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTabs-indicator': { backgroundColor: '#00B4D8', height: 3 },
                  '& .MuiTab-root': { textTransform: 'none', fontWeight: 600, fontSize: "15px", color: "#666", py: 3, px: 4 },
                  '& .Mui-selected': { color: '#0B2046 !important', bgcolor: "#ffffff" },
                }}
              >
                {tabData.map((label, i) => (
                  <Tab label={label} key={i} />
                ))}
              </Tabs>
            </Box>

            {/* Inner Content Layout */}
            <Grid container sx={{ minHeight: "450px" }}>
              
              {/* Left Sidebar Menu */}
              <Grid item xs={12} md={4} sx={{ borderRight: { xs: 'none', md: '1px solid rgba(0,0,0,0.08)' }, bgcolor: "#fafbfc" }}>
                <Box sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 3 }}>
                    {tabData[activeTab]}
                  </Typography>
                  <Typography sx={{ color: "#666", fontSize: "14px", mb: 4, lineHeight: 1.5 }}>
                    A purpose-built CRM that understands the real estate sales cycle — from first.
                  </Typography>

                  <List disablePadding>
                    {currentContent.sidebar.map((item, idx) => (
                      <ListItem key={idx} disablePadding sx={{ mb: 1.5 }}>
                        <ListItemButton
                          onClick={() => setActiveSidebarIndex(idx)}
                          sx={{
                            borderRadius: "10px",
                            bgcolor: activeSidebarIndex === idx ? "#ffffff" : "transparent",
                            boxShadow: activeSidebarIndex === idx ? "0 4px 15px rgba(0,0,0,0.05)" : "none",
                            border: activeSidebarIndex === idx ? "1px solid rgba(0,0,0,0.05)" : "1px solid transparent",
                            py: 1.5,
                            '&:hover': { bgcolor: activeSidebarIndex === idx ? "#ffffff" : "rgba(0,0,0,0.02)" }
                          }}
                        >
                          <ListItemText 
                            primary={item} 
                            primaryTypographyProps={{ 
                              fontSize: "14px", 
                              fontWeight: activeSidebarIndex === idx ? 700 : 500,
                              color: activeSidebarIndex === idx ? "#1a1a1a" : "#666" 
                            }} 
                          />
                          {activeSidebarIndex === idx && <ArrowForwardIosIcon sx={{ fontSize: 12, color: "#00B4D8" }} />}
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>

              {/* Right Details Area */}
              <Grid item xs={12} md={8}>
                <Box sx={{ p: { xs: 4, md: 6 }, height: "100%", display: "flex", flexDirection: "column" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeTab}-${activeSidebarIndex}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      style={{ flexGrow: 1 }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 2 }}>
                        {currentContent.title}
                      </Typography>
                      <Typography sx={{ color: "#666", fontSize: "15px", lineHeight: 1.6, mb: 4 }}>
                        {currentContent.description}
                      </Typography>

                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {currentContent.features.map((feature, idx) => (
                          <Box component="li" key={idx} sx={{ color: "#444", fontSize: "14px", mb: 1.5, fontWeight: 500 }}>
                            {feature}
                          </Box>
                        ))}
                      </Box>
                    </motion.div>
                  </AnimatePresence>

                  {/* Bottom Avatar Section inside the mock window */}
                  <Box sx={{ 
                    mt: "auto", pt: 4, 
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    borderTop: "1px solid rgba(0,0,0,0.05)" 
                  }}>
                    <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 40, height: 40, border: '2px solid #fff' } }}>
                      <Avatar sx={{ bgcolor: "#cbf3f0", color: "#00B4D8" }}>U1</Avatar>
                      <Avatar sx={{ bgcolor: "#00B4D8", color: "#fff" }}>U2</Avatar>
                      <Avatar sx={{ bgcolor: "#0B2046", color: "#fff" }}>U3</Avatar>
                      <Avatar sx={{ bgcolor: "#e0e0e0", color: "#666" }}>U4</Avatar>
                    </AvatarGroup>
                    <Box sx={{ width: 120, height: 10, borderRadius: 5, bgcolor: "rgba(0,0,0,0.05)" }} />
                  </Box>
                </Box>
              </Grid>

            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default EducationPlatformModules;
