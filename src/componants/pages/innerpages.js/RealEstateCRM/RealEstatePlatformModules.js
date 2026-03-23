import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const modulesData = [
  {
    id: "crm",
    title: "Real Estate CRM",
    icon: <DashboardOutlinedIcon />,
    description: "A powerful Real Estate CRM system designed for the property sales process - from the first customer inquiry to the final property registration. Easily manage leads, automate follow-ups, and keep your entire sales team organised and connected.",
    features: [
      "Lead source tracking and marketing campaign insights",
      "Custom sales pipeline stages for different property projects",
      "WhatsApp, email, and call integration",
      "Automated follow-ups, notifications, and reminders",
      "Role-based access for agents, managers, and administrators"

    ]
  },
  {
    id: "buyer",
    title: "Buyer / Tenant Portal",
    icon: <PersonOutlineOutlinedIcon />,
    description: "A user-friendly client portal that allows buyers or tenants to easily track their property journey, access important documents, and make secure payments online.",
    features: [
      "Secure login with OTP verification",
      "Property shortlisting and comparison options",
      "Online site visit booking system",
      "Payment history and upcoming payment reminders",
      "Secure document storage for agreements and receipts"

    ]
  },
  {
    id: "inventory",
    title: "Property Inventory Management",
    icon: <Inventory2OutlinedIcon />,
    description: "A smart inventory management system that gives real-time updates on available units, sold properties, and reserved inventory across all your ongoing real estate projects.",
    features: [
      "Live tower and floor availability status",
      "Automatic unit hold and release system",
      "Property pricing and cost sheet generator",
      "Parking space allocation and management",
      "Multi-project overview dashboard"
    ]
  },
  {
    id: "partner",
    title: "Channel Partner Portal",
    icon: <HandshakeOutlinedIcon />,
    description: "A dedicated broker portal that allows channel partners to submit leads, track lead status, and monitor their commissions with complete transparency.",
    features: [
      "Channel partner registration and RERA compliance support",
      "Lead tagging and lead protection system",
      "Real-time updates on submitted leads",
      "Commission structure and payout tracking",
      "Marketing materials and project brochures sharing"
    ]
  },
  {
    id: "postsales",
    title: "Post-Sales Management",
    icon: <ReceiptLongOutlinedIcon />,
    description: "A streamlined post-sales system that helps manage all activities after a property booking, from agreement processing to final possession.",
    features: [
      "Automated demand letter generation",
      "Receipt creation with accounting system integration",
      "Welcome kit and property handover checklist",
      "Customer modification request management",
      "Customer support and grievance ticket system"
    ]
  }
];

const RealEstatePlatformModules = () => {
  const [activeModule, setActiveModule] = useState(modulesData[0]);

  return (
    <Box sx={{ py: 6, bgcolor: "#f8f9fe" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, mb: 2, color: "#1a1a1a" }}>
            Platform Modules
          </Typography>
          <Typography sx={{ fontSize: "18px", color: "#666", lineHeight: 1.4 }}>
            Pick the modules you need — or take the full platform
          </Typography>
        </Box>

        {/* Interactive Mock UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Paper
            elevation={0}
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0,0,0,0.1)",
              border: "1px solid rgba(0,0,0,0.05)",
              bgcolor: "#ffffff"
            }}
          >
            {/* Mac OS Style Top Bar */}
            <Box sx={{ bgcolor: "#f1f3f5", px: 2, py: 1.5, display: "flex", gap: 1, borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f56" }} />
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#27c93f" }} />
            </Box>

            <Grid container>
              {/* Sidebar */}
              <Grid item xs={12} md={4} sx={{ borderRight: { xs: 'none', md: "1px solid rgba(0,0,0,0.05)" }, bgcolor: "#fafbfc" }}>
                <Box sx={{ p: 3 }}>
                  <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "1px", mb: 2 }}>
                    Modules
                  </Typography>
                  <List disablePadding>
                    {modulesData.map((module) => (
                      <ListItem key={module.id} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                          onClick={() => setActiveModule(module)}
                          sx={{
                            borderRadius: "12px",
                            py: 1.5,
                            bgcolor: activeModule.id === module.id ? "#ffffff" : "transparent",
                            boxShadow: activeModule.id === module.id ? "0 4px 15px rgba(0,0,0,0.05)" : "none",
                            border: activeModule.id === module.id ? "1px solid rgba(0,0,0,0.04)" : "1px solid transparent",
                            "&:hover": {
                              bgcolor: activeModule.id === module.id ? "#ffffff" : "rgba(0,0,0,0.02)"
                            }
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 40, color: activeModule.id === module.id ? "#00B4D8" : "#888" }}>
                            {module.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={module.title}
                            primaryTypographyProps={{
                              fontWeight: activeModule.id === module.id ? 700 : 500,
                              color: activeModule.id === module.id ? "#1a1a1a" : "#666",
                              fontSize: "14px"
                            }}
                          />
                          {activeModule.id === module.id && <ChevronRightIcon sx={{ color: "#00B4D8", fontSize: 20 }} />}
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>

              {/* Main Content Area */}
              <Grid item xs={12} md={8}>
                <Box sx={{ p: { xs: 4, md: 6 }, position: "relative", minHeight: "450px" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModule.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography variant="h3" sx={{ fontSize: "28px", fontWeight: 800, color: "#1a1a1a", mb: 2 }}>
                        {activeModule.title}
                      </Typography>
                      <Typography sx={{ color: "#555", fontSize: "16px", lineHeight: 1.6, mb: 4, maxWidth: "600px" }}>
                        {activeModule.description}
                      </Typography>

                      <Grid container spacing={2}>
                        {activeModule.features.map((feature, index) => (
                          <Grid item xs={12} key={index}>
                            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                              <CheckCircleIcon sx={{ color: "#00B4D8", fontSize: 20, mt: 0.3 }} />
                              <Typography sx={{ color: "#444", fontSize: "15px", fontWeight: 500 }}>
                                {feature}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </motion.div>
                  </AnimatePresence>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>

      </Container>
    </Box>
  );
};

export default RealEstatePlatformModules;
