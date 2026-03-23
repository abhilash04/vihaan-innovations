import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Search, Shield, Users, BarChart2, MessageSquare, Globe, Cpu, Smartphone } from "lucide-react";

const services = [
  { icon: <Search size={24} />, title: "Real Estate Technology Consulting", desc: "Strategic consulting to help businesses choose the right architecture, features, and technology for scalable real estate platforms." },
  { icon: <Shield size={24} />, title: "Property Management Software Development", desc: "Custom solutions for managing tenants, properties, payments, and maintenance through powerful dashboards." },
  { icon: <Users size={24} />, title: "Real Estate Vendor Management", desc: "Manage contractors, brokers, and vendors efficiently with centralized tools and automated workflows." },
  { icon: <Smartphone size={24} />, title: "Real Estate App Development", desc: "Mobile apps for buyers, sellers, and agents that integrate seamlessly with your real estate website platform." },
  { icon: <Globe size={24} />, title: "Property Listing Marketplace", desc: "Build high-performance property listing marketplaces with advanced search filters and map-based property discovery." },
  { icon: <Cpu size={24} />, title: "Construction Management Software", desc: "Digital tools to track construction progress, budgets, documentation, and contractor coordination." },
  { icon: <BarChart2 size={24} />, title: "Real Estate Software Modernization", desc: "Upgrade outdated systems into modern cloud-based platforms with improved speed, security, and scalability." },
  { icon: <MessageSquare size={24} />, title: "Third-Party Integrations", desc: "Integrate CRM, payment gateways, MLS listings, maps, and analytics tools into your real estate ecosystem." },
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
              Real Estate Website{" "}
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
                Development Services
              </Box>
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
              We deliver modern real estate website development services designed for agencies, developers, and property marketplaces. As an experienced real estate portal development company, we build scalable platforms with smart search, listings, and seamless integrations.
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
