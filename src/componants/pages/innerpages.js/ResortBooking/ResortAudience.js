import React, { useState } from "react";
import { Box, Typography, Grid, Container, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Building, Home, Key, Star, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: <Building size={24} />,
    title: "Resort Owners",
    desc: "Manage bookings easily • Track revenue • Monitor performance",
  },
  {
    icon: <Home size={24} />,
    title: "Resort Chains",
    desc: "Manage multiple locations • Central booking control • Consistent guest experience",
  },
  {
    icon: <Key size={24} />,
    title: "Boutique Resorts & Villas",
    desc: "Showcase luxury rooms • Manage bookings smoothly • Improve guest experience",
  },
  {
    icon: <Star size={24} />,
    title: "Operations Managers",
    desc: "Handle daily tasks • Track maintenance • Manage staff",
  },
  {
    icon: <Building size={24} />,
    title: "Travel Businesses",
    desc: "Manage bookings easily • Communicate with guests • Track performance",
  },
];

const ResortAudience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        py: isMobile ? 4 : 8,
        bgcolor: "#0A111E", // Dark Navy
        color: "#F5F5F0",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: isMobile ? 4 : 8 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? "2.2rem" : "3rem",
                mb: 2,
              }}
            >
              Who Should Use a Resort Management System
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={isMobile ? 4 : 6} alignItems="center">
          {/* Left - Stacked Audience Cards */}
          <Grid item xs={isMobile ? 12 : 5} sx={{ order: isMobile ? 2 : 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {audiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Box
                    onMouseEnter={() => setActiveTab(index)}
                    sx={{
                      p: 3,
                      borderRadius: "12px",
                      bgcolor: activeTab === index ? "rgba(255, 255, 255, 0.04)" : "transparent",
                      border: "1px solid",
                      borderColor: activeTab === index ? "rgba(212, 175, 55, 0.3)" : "rgba(255, 255, 255, 0.03)",
                      borderLeft: activeTab === index ? "4px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.03)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: "8px",
                        bgcolor: activeTab === index ? "rgba(212, 175, 55, 0.15)" : "rgba(255, 255, 255, 0.05)",
                        color: "#D4AF37",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "rgba(245, 245, 240, 0.6)" }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Right - Central Dashboard Diagram mockup */}
          <Grid item xs={isMobile ? 12 : 7} sx={{ order: isMobile ? 1 : 2 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: isMobile ? "320px" : "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Connecting Lines SVG */}
                <svg
                  viewBox="0 0 400 320"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
                >
                  <motion.path
                    d={isMobile ? "M 200 160 L 80 60" : "M 200 160 L 140 100"}
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeDasharray="5,5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <motion.path
                    d={isMobile ? "M 200 160 L 80 260" : "M 200 160 L 140 220"}
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeDasharray="5,5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.path
                    d={isMobile ? "M 200 160 L 320 160" : "M 200 160 L 260 160"}
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeDasharray="5,5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </svg>

                {/* Central Glow Box */}
                <Box
                  sx={{
                    width: isMobile ? "100px" : "140px",
                    height: isMobile ? "100px" : "140px",
                    borderRadius: "20px",
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 30px rgba(212,175,55,0.1)",
                    zIndex: 1,
                  }}
                >
                  <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#D4AF37", fontSize: isMobile ? "0.8rem" : "0.9rem" }}>
                    Operations
                  </Typography>
                  <Typography sx={{ fontSize: isMobile ? "0.65rem" : "0.7rem", opacity: 0.6 }}>
                    Control Center
                  </Typography>
                </Box>

                {/* Satellite 1 */}
                <Box
                  sx={{
                    position: "absolute",
                    top: isMobile ? "20px" : "90px",
                    left: isMobile ? "10px" : "90px",
                    width: isMobile ? "80px" : "100px",
                    p: 1,
                    bgcolor: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                  }}
                >
                  <Typography sx={{ fontSize: isMobile ? "0.7rem" : "0.8rem", fontWeight: 700, color: "#fff" }}>Booking</Typography>
                </Box>

                {/* Satellite 2 */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: isMobile ? "20px" : "90px",
                    left: isMobile ? "10px" : "90px",
                    width: isMobile ? "80px" : "100px",
                    p: 1,
                    bgcolor: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                  }}
                >
                  <Typography sx={{ fontSize: isMobile ? "0.7rem" : "0.8rem", fontWeight: 700, color: "#fff" }}>Guests</Typography>
                </Box>

                {/* Satellite 3 */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: isMobile ? "10px" : "90px",
                    transform: "translateY(-50%)",
                    width: isMobile ? "80px" : "100px",
                    p: 1,
                    bgcolor: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                  }}
                >
                  <Typography sx={{ fontSize: isMobile ? "0.7rem" : "0.8rem", fontWeight: 700, color: "#fff" }}>Analytics</Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResortAudience;