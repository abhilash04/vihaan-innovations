import React from "react";
import { Box, Typography, Grid, Container, Link } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Building, Home, Key, FileText, Users, Database, Calendar, TrendingUp, Wrench, Briefcase, CreditCard, Laptop, Target, Archive } from "lucide-react";

const solutions = [
  { icon: <Users size={22} />, title: "CRM for Real Estate Agents", desc: "Help agents manage leads, track client chats, set up automatic replies, and close more deals easily." },
  { icon: <Database size={22} />, title: "Real Estate ERP Solution", desc: "An all-in-one system to handle property sales, billing, stock, and money reports in one single place." },
  { icon: <Calendar size={22} />, title: "Property Booking Management", desc: "Easy tools to handle property bookings, check what is available, and manage customer details automatically." },
  { icon: <TrendingUp size={22} />, title: "Real Estate Valuation Engine", desc: "Smart tools that check market data to find the right property prices and spot good investments." },
  { icon: <Wrench size={22} />, title: "Facility Management System", desc: "A simple platform built to track building repairs, service requests, and daily property upkeep." },
  { icon: <Briefcase size={22} />, title: "Investment Software Development", desc: "Software to keep track of your property investments and see how well your portfolio is doing." },
];

const PortalSolutions = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#F8F6F2", // Lighter Dark
        color: "#0C1424",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Watermark */}
      <Typography
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: 900,
          fontSize: { xs: "5rem", md: "9rem" },
          color: "rgba(255, 255, 255, 0.02)",
          letterSpacing: "10px",
          zIndex: 0,
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        SOLUTIONS
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="flex-start">
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: "2.2rem", md: "2.8rem" },
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Our Real Estate Software <br />
                <Box component="span" sx={{ color: "#3B82F6" }}>
                  Solutions Expertise
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#000",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                As an experienced real estate website design agency, we create smart digital platforms that help property businesses manage assets, automate operations, and improve client experiences.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Column - Grid of cards */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {solutions.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: "12px",
                        bgcolor: "rgba(172, 206, 255, 0.2)",
                        border: "1px solid rgba(255, 255, 255, 0.03)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(97, 142, 255, 0.4)",
                          borderColor: "rgba(36, 120, 255, 0.2)",
                          transform: "translateY(-4px)",
                          "& .read-more-icon": { transform: "translateX(4px)", color: "#3B82F6" },
                        },
                      }}
                    >
                      <Box sx={{ color: "#3B82F6", mb: 2 }}>{item.icon}</Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "'Urbanist', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "'Inter', sans-serif",
                          color: "#000",
                          fontSize: "0.85rem",
                          lineHeight: 1.5,
                          mb: 2,
                          flexGrow: 1,
                        }}
                      >
                        {item.desc}
                      </Typography>
                      <Link
                        href="#"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "#000",
                          textDecoration: "none",
                          fontSize: "0.80rem",
                          fontWeight: 600,
                          fontFamily: "'Inter', sans-serif",
                          transition: "color 0.2s ease",
                          "&:hover": { color: "#3B82F6" },
                        }}
                      >
                        Read More{" "}
                        <Box className="read-more-icon" sx={{ display: "flex", alignItems: "center", transition: "all 0.2s ease" }}>
                          <ArrowRight size={14} />
                        </Box>
                      </Link>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PortalSolutions;
