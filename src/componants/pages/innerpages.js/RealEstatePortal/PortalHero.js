import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Home, MapPin } from "lucide-react";
import img from '../../../../assets/Real-estate-listings.png'
const PortalHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "#081226", // Dark Midnight Blue
        color: "#FFFFFF",
        overflow: "hidden",
        pt: { xs: 8, md: 6 },
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), 
                        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  p: "6px 16px",
                  borderRadius: "20px",
                  border: "1px solid rgba(59, 130, 246, 0.4)",
                  bgcolor: "rgba(15, 107, 255, 0.05)",
                  mb: 3,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.15)",
                }}
              >
                <Home size={14} color="#fff" />
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "#fff",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  Real Estate Software Solutions
                </Typography>
              </Box>
            </motion.div>

            {/* Headline H1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: "2.8rem", md: "3.8rem" },
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Real Estate Portal Development <br />
                <Box
                  component="span"
                  sx={{
                    color: "#3B82F6", // Electric Blue
                    position: "relative",
                    display: "inline-block",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      background: "#3B82F6",
                      borderRadius: "2px",
                      // Inline animation handled via Framer Motion below or kept static
                    },
                  }}
                >
                  for Modern Property Businesses
                </Box>
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  color: "rgba(255, 255, 255, 0.7)",
                  maxWidth: "480px",
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                We build scalable real estate portal development solutions including property listing platforms, CRM integrations, agent dashboards, and mobile-ready portals. Launch your own real estate marketplace similar to Zillow or MagicBricks with advanced search, property management tools, and lead generation features.
              </Typography>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="contained"
                endIcon={
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight size={18} />
                  </motion.div>
                }
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  bgcolor: "#3B82F6",
                  color: "#FFFFFF",
                  px: 4,
                  py: 1.8,
                  borderRadius: "8px",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "1rem",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(59,130,246,0.3)",
                  "&:hover": { bgcolor: "#2563EB" },
                  // Passive Shimmer effect
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "50%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    transform: "skewX(-25deg)",
                    animation: "shimmer 3s infinite",
                  },
                  "@keyframes shimmer": {
                    "0%": { left: "-100%" },
                    "20%": { left: "150%" },
                    "100%": { left: "150%" },
                  },
                }}
              >
                View portal Demo
              </Button>
            </motion.div>
          </Grid>

          {/* Right Content - Mockup Layered Visual */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ position: "relative", display: "flex", justifyContent: "center" }}
            >
              {/* Background Glow */}
              <Box
                sx={{
                  position: "absolute",
                  width: "120%",
                  height: "120%",
                  background: "radial-gradient(circle, rgba(249, 248, 240, 0.08) 0%, transparent 60%)",
                  top: "-10%",
                  left: "-10%",
                  zIndex: 0,
                }}
              />

              {/* Central Floating Card mockup */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ zIndex: 1 }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "420px" },
                    borderRadius: "16px",
                    overflow: "hidden",
                    bgcolor: "rgba(25, 30, 43, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* Mock Image top */}
                  <Box
                    sx={{
                      height: "240px",
                      position: "relative",
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 15,
                        left: 15,
                        bgcolor: "#10B981", // Emerald Green For Sale pill
                        color: "#FFF",
                        p: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      For Sale
                    </Box>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 800, fontSize: "1.3rem", mb: 0.5 }}>
                      $1,245,000
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1, opacity: 0.7 }}>
                      <MapPin size={14} color="#3B82F6" />
                      <Typography sx={{ fontSize: "0.8rem", fontFamily: "'Inter', sans-serif" }}>
                        Skyline Blvd, New York
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, borderTop: "1px solid rgba(255,255,255,0.05)", pt: 1.5 }}>
                      {["4 Beds", "3 Baths", "2,400 Sq Ft"].map((spec, i) => (
                        <Typography key={i} sx={{ fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", opacity: 0.6 }}>
                          {spec}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PortalHero;
