import React from "react";
import { Box, Typography, Grid, Container, Link } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Building, Home, Key, Percent, FileText, Layout } from "lucide-react";

const solutions = [
  { icon: <Home size={22} />, title: "B2C Portals", desc: "For sale & rent listing indices facing buyers directly." },
  { icon: <Building size={22} />, title: "B2B Dashboards", desc: "Corporate property managers with deep analytic rollups." },
  { icon: <Key size={22} />, title: "Tenant Portals", desc: "Payment hooks and automated dispatch maintenance." },
  { icon: <Percent size={22} />, title: "Broker CRM", desc: "Lead routing pipelines with integrated contract triggers." },
  { icon: <FileText size={22} />, title: "Auction Blocks", desc: "Real-time transparent bid locks with digital signatures." },
  { icon: <Layout size={22} />, title: "Builder Modules", desc: "Project phase tracking with floorplan overlay matrices." },
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
                Solutions <br />
                <Box component="span" sx={{ color: "#3B82F6" }}>
                  Expertise
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
                From single brokers onwards up to global asset portfolios—our framework supports 360-degree digital mapping correctly.
              </Typography>
              <Box
                sx={{
                  width: "100px",
                  height: "2px",
                  bgcolor: "rgba(59, 130, 246, 0.4)",
                  borderRadius: "1px",
                }}
              />
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
