import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Search, Shield, Users, BarChart2, MessageSquare, Globe, Cpu, Smartphone } from "lucide-react";

const services = [
  { icon: <Search size={24} />, title: "Listing Scraper", desc: "Automate dynamic feeds setup directly via MLS ports." },
  { icon: <Shield size={24} />, title: "Secure Data Escrow", desc: "Compliance lockbox auditing digital deeds accurately." },
  { icon: <Users size={24} />, title: "Broker Management", desc: "Track performance routing commission tier dashboards." },
  { icon: <BarChart2 size={24} />, title: "Market Analytics", desc: "Real-time pricing trend index and prediction layers." },
  { icon: <MessageSquare size={24} />, title: "Lead AI Nurture", desc: "Automated chat response routing warm buyer intents." },
  { icon: <Globe size={24} />, title: "Multi-Region SEO", desc: "Hyperlocal landing page multipliers ranking fast." },
  { icon: <Cpu size={24} />, title: "VR Smart Tours", desc: "Embed 3D walkthrough framing directly onto map view nodes." },
  { icon: <Smartphone size={24} />, title: "App Layout Deploy", desc: "Mirror web portal frame into iOS/Android native grids." },
];

const PortalServices = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#081226", // Dark base
        color: "#FFFFFF",
        position: "relative",
        backgroundImage: "radial-gradient(rgba(59, 130, 246, 0.05) 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "2.8rem" },
                mb: 1.5,
              }}
            >
              Comprehensive{" "}
              <Box
                component="span"
                sx={{
                  color: "#3B82F6",
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    bgcolor: "#3B82F6",
                    borderRadius: "2px",
                  },
                }}
              >
                Services
              </Box>{" "}
              Grid
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Every module you need to build a high-performance, enterprise-ready real estate ecosystem.
            </Typography>
          </motion.div>
        </Box>

        {/* Grid */}
        <Grid container spacing={4}>
          {services.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: Math.floor(index / 2) * 0.15 }} // Staggered delay based on rows (2 items per row)
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "12px",
                    bgcolor: "rgba(25, 30, 43, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(5px)",
                    height: "100%",
                    display: "flex",
                    gap: 2,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(25, 30, 43, 0.6)",
                      borderColor: "rgba(59, 130, 246, 0.2)",
                      "& .service-icon": { bgcolor: "#3B82F6", color: "#FFF", scale: "1.1" },
                      "&::after": { left: 0 }, // Hover line animation triggers
                    },
                    // Hover line left border animation hook
                    "&::after": {
                      content: "''",
                      position: "absolute",
                      top: 0,
                      left: "-4px",
                      width: "4px",
                      height: "100%",
                      bgcolor: "#3B82F6",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      p: 1.5,
                      borderRadius: "10px",
                      bgcolor: "rgba(59, 130, 246, 0.1)",
                      color: "#3B82F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "fit-content",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Urbanist', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        mb: 0.8,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(255, 255, 255, 0.6)",
                        lineHeight: 1.5,
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortalServices;
