import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";

const ResortHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "#0A111E", // Dark Navy
        color: "#F5F5F0", // Ivory/Cream
        overflow: "hidden",
        backgroundImage: `radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 60%), 
                        linear-gradient(rgba(10, 17, 30, 0.85), rgba(10, 17, 30, 0.95)), 
                        url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        pt: { xs: 12, md: 8 },
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: { xs: "3rem", md: "4rem" },
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Elevate Your <br />
                Hospitality: Next-Gen{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#D4AF37", // Gold
                    position: "relative",
                    display: "inline-block",
                    textShadow: "0 0 20px rgba(212,175,55,0.3)",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -5,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      background: "linear-gradient(90deg, #D4AF37, transparent)",
                    },
                  }}
                >
                  Resort
                </Box>{" "}
                Booking
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  color: "rgba(245, 245, 240, 0.8)",
                  maxWidth: "500px",
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Build a premium guest experience with our intelligent resort
                management software. Steamlined booking, staff routing, and operational
                command all in one beautiful dashboard.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box sx={{ display: "flex", gap: 2, mb: 6 }}>
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    bgcolor: "#D4AF37",
                    color: "#0A111E",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    fontWeight: 600,
                    textTransform: "none",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": { bgcolor: "#E5C158" },
                    "&::after": {
                      content: "''",
                      position: "absolute",
                      top: "-50%",
                      left: "-50%",
                      width: "200%",
                      height: "200%",
                      background:
                        "linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)",
                      transform: "rotate(45deg)",
                      transition: "0.5s",
                    },
                    "&:hover::after": {
                      transform: "translate(50%, 50%) rotate(45deg)",
                    },
                  }}
                >
                  Request Demo
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    borderColor: "rgba(212, 175, 55, 0.5)",
                    color: "#F5F5F0",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#D4AF37",
                      bgcolor: "rgba(212, 175, 55, 0.05)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>

            {/* Stats */}
            <Box
              sx={{
                display: "flex",
                gap: 4,
                borderTop: "1px solid rgba(245, 245, 240, 0.1)",
                pt: 4,
                width: "fit-content",
              }}
            >
              {[
                { value: "500+", label: "Resorts" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#D4AF37",
                        fontWeight: 700,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Outfit', sans-serif",
                        color: "rgba(245, 245, 240, 0.6)",
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Right Content - Mockup */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "500px" },
                    height: "400px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(245, 245, 240, 0.1)",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.03)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Floating Mockup UI */}
                  <Box sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid rgba(245, 245, 240, 0.05)",
                        pb: 2,
                        mb: 2,
                      }}
                    >
                      <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
                        Dashboard
                      </Typography>
                      <Typography sx={{ color: "#D4AF37", fontSize: "0.85rem" }}>
                        Live Stats
                      </Typography>
                    </Box>
                    {/* Mock Grid */}
                    <Grid container spacing={1}>
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Grid item xs={4} key={item}>
                          <Box
                            sx={{
                              height: "80px",
                              bgcolor: "rgba(245, 245, 240, 0.02)",
                              borderRadius: "10px",
                              border: "1px solid rgba(245, 245, 240, 0.04)",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box sx={{ width: "20px", height: "20px", borderRadius: "50%", bgcolor: "#D4AF37", mb: 1, opacity: 0.8 }} />
                            <Box sx={{ width: "40px", height: "4px", bgcolor: "rgba(245, 245, 240, 0.3)", borderRadius: "2px" }} />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    {/* Calendar visual */}
                    <Box sx={{ mt: 3, p: 2, bgcolor: "rgba(0,0,0,0.2)", borderRadius: "10px" }}>
                      <Typography sx={{ fontSize: "0.85rem", opacity: 0.8, mb: 1 }}>
                        Room Allocation
                      </Typography>
                      <Box sx={{ display: "flex", gap: 0.5 }}>
                        {[...Array(12)].map((_, i) => (
                          <Box
                            key={i}
                            sx={{
                              flex: 1,
                              height: "15px",
                              bgcolor: i % 3 === 0 ? "#D4AF37" : "rgba(245,245,240,0.1)",
                              borderRadius: "2px",
                            }}
                          />
                        ))}
                      </Box>
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

export default ResortHero;
