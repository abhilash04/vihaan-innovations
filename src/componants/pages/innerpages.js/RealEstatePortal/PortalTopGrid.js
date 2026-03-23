import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Home, Compass, Key, Briefcase, FileText, Globe } from "lucide-react";

const solutions = [
  { icon: <Home size={28} />, title: "Mortgage Calculator Integration", color: "#3B82F6", desc: "Provide buyers with a clear understanding of property financing through smart mortgage calculators that estimate monthly payments, loan terms, and interest rates to support better purchase decisions." },
  { icon: <Briefcase size={28} />, title: "Condominium Management System", color: "#10B981", desc: "Simplify the management of shared residential properties with centralized tools that help monitor amenities, track maintenance, and manage condominium operations efficiently." },
  { icon: <Compass size={28} />, title: "Broker Management Platform", color: "#F59E0B", desc: "Manage real estate brokers with ease using digital tools that help track performance, manage commissions, assign listings, and streamline communication." },
  { icon: <Key size={28} />, title: "Tenant Management Solution", color: "#EC4899", desc: "Enhance tenant relationships with automated tenant management systems that handle rent payments, lease tracking, maintenance requests, and communication." },
  { icon: <FileText size={28} />, title: "Real Estate CRM with MLS Integration", color: "#8B5CF6", desc: "Improve property recommendations and client experiences with a powerful CRM integrated with MLS listings, enabling agents to match buyers with the right properties quickly." },
  { icon: <Globe size={28} />, title: "Smart Home Automation Integration", color: "#EF4444", desc: "Enable modern living experiences by integrating smart home automation systems that allow property owners to control lighting, security, climate, and appliances through intelligent platforms." },
];

const PortalTopGrid = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#081226", // Pure Dark Base
        color: "#FFFFFF",
        position: "relative",
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
              Top Real Estate Solutions for Diverse Business Needs
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
              Every real estate business has different operational requirements. We develop advanced digital solutions that help agencies, developers, brokers, and property managers streamline processes, improve customer experiences, and grow their real estate operations efficiently.
            </Typography>
          </motion.div>
        </Box>

        {/* Grid of Cards */}
        <Grid container spacing={4}>
          {solutions.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    bgcolor: "rgba(25, 30, 43, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.03)",
                    borderTop: `4px solid ${item.color}`, // Colored top border
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    perspective: "1000px", // Enables 3D context
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-4px) rotateX(3deg) rotateY(3deg)",
                      bgcolor: "rgba(25, 30, 43, 0.8)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      boxShadow: `0 15px 30px rgba(0,0,0,0.5), 0 0 20px ${item.color}15`,
                      "& .bg-gradient": { opacity: 0.05 },
                    },
                  }}
                >
                  {/* Subtle Gradient Wash on Hover hook */}
                  <Box
                    className="bg-gradient"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(135deg, ${item.color}, transparent)`,
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      zIndex: 0,
                    }}
                  />

                  <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                    <Box sx={{ color: item.color, mb: 2 }}>{item.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Urbanist', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                        flexGrow: 1,
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

export default PortalTopGrid;
