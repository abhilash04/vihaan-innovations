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
    description: "A purpose-built CRM that understands the real estate sales cycle — from first enquiry to final registration. Track every touchpoint, automate follow-ups, and keep your entire team aligned.",
    features: [
      "Lead source tracking & campaign attribution",
      "Custom pipeline stages per project type",
      "WhatsApp + email + call integration",
      "Automated follow-up sequences & reminders",
      "Role-based access for agents, managers & admins"
    ]
  },
  {
    id: "buyer",
    title: "Buyer / Tenant Portal",
    icon: <PersonOutlineOutlinedIcon />,
    description: "Empower your clients with a self-service portal to track their property journey, view documents, and make payments securely.",
    features: [
      "Secure login & OTP verification",
      "Property shortlisting & comparison",
      "Site visit booking engine",
      "Payment history & upcoming dues",
      "Document vault (agreements, receipts)"
    ]
  },
  {
    id: "inventory",
    title: "Inventory Management",
    icon: <Inventory2OutlinedIcon />,
    description: "Real-time visibility into your available units, sold properties, and blocked inventory across all your ongoing projects.",
    features: [
      "Live tower & floor plan status",
      "Automated hold & release logic",
      "Pricing & cost sheet generator",
      "Parking allocation & management",
      "Multi-project dashboard"
    ]
  },
  {
    id: "partner",
    title: "Channel Partner Portal",
    icon: <HandshakeOutlinedIcon />,
    description: "A dedicated interface for your broker network to submit leads, track status, and manage their commissions transparently.",
    features: [
      "CP onboarding & RERA compliance",
      "Lead tagging & protection rules",
      "Real-time status updates on submitted leads",
      "Commission slab & payout tracking",
      "Marketing collateral sharing"
    ]
  },
  {
    id: "postsales",
    title: "Post-Sales Module",
    icon: <ReceiptLongOutlinedIcon />,
    description: "Streamline the complex processes that happen after the booking amount is paid, from agreements to possession.",
    features: [
      "Demand letter automation",
      "Receipt generation & accounting integration",
      "Welcome kit & handover checklists",
      "Modification request management",
      "Customer grievance ticketing"
    ]
  }
];

const RealEstatePlatformModules = () => {
  const [activeModule, setActiveModule] = useState(modulesData[0]);

  return (
    <Box sx={{ py: 12, bgcolor: "#f8f9fe" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
