import React, { useState } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
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

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#0A111E", // Dark Navy
        color: "#F5F5F0",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
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
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3rem" },
                mb: 2,
              }}
            >
              Who Should Use a Resort Management System
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={6} alignItems="center">
          {/* Left - Stacked Audience Cards */}
          <Grid item xs={12} md={5}>
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
                    {activeTab === index && <ArrowRight size={18} color="#D4AF37" />}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Right - Central Dashboard Diagram mockup */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Connecting Lines SVG */}
                <svg
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
                >
                  <motion.path
                    d="M 350 200 L 200 120"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <motion.path
                    d="M 350 200 L 200 280"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.path
                    d="M 350 200 L 500 200"
                    stroke="#D4AF37"
                    strokeWidth="1"
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
                    width: "160px",
                    height: "160px",
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
                  <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#D4AF37" }}>
                    Operations
                  </Typography>
                  <Typography sx={{ fontSize: "0.75rem", opacity: 0.6 }}>
                    Control Center
                  </Typography>
                </Box>

                {/* Satellite 1 */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "100px",
                    left: "140px",
                    width: "120px",
                    p: 1.5,
                    bgcolor: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>Booking</Typography>
                </Box>

                {/* Satellite 2 */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "100px",
                    left: "140px",
                    width: "120px",
                    p: 1.5,
                    bgcolor: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>Guests</Typography>
                </Box>

                {/* Satellite 3 */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "180px",
                    right: "100px",
                    width: "120px",
                    p: 1.5,
                    bgcolor: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>Analytics</Typography>
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
