import React from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const rows = [
  { item: "Booking", smart: "Online booking system", trad: "Manual inquiries" },
  { item: "Availability", smart: "Real-time tracking", trad: "Manual updates" },
  { item: "Guest Records", smart: "Central dashboard", trad: "Spreadsheets" },
  { item: "Maintenance", smart: "Online requests", trad: "Manual logs" },
  { item: "Reports", smart: "Advanced analytics", trad: "Limited" },
  { item: "Growth", smart: "Easy to expand", trad: "Hard to scale" },
  { item: "Security", smart: "Secure system", trad: "Basic" },
];

const ResortComparison = () => {
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
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Text Content */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Box sx={{ width: "30px", height: "1px", bgcolor: "#dd690aff" }} />
                <Typography
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "#dd690aff",
                    fontSize: "0.85rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Built for Resorts That Want to Grow
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  mb: 3,
                }}
              >
                Smart Resort Experiences
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  color: "rgba(245, 245, 240, 0.8)",
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                Your resort needs more than just a good-looking website. It needs a smart system that helps you manage bookings and guests easily.
              </Typography>

              {[
                "Easy online booking system",
                "Real-time room availability",
                "Centralized guest management",
                "Online service requests",
                "Smart reports and analytics",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                    <Check size={20} color="#dd690aff" />
                    <Typography
                      sx={{
                        fontFamily: "'Outfit', sans-serif",
                        color: "rgba(245, 245, 240, 0.8)",
                        fontSize: "1rem",
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </motion.div>
              ))}

              <Button
                variant="contained"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  mt: 3,
                  fontFamily: "'Outfit', sans-serif",
                  bgcolor: "#dd690aff",
                  color: "#0A111E",
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#E5C158" },
                }}
              >
                CTA Button
              </Button>
            </motion.div>
          </Grid>

          {/* Right Side - Comparison Table */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  border: "1px solid rgba(245, 245, 240, 0.08)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                {/* Table Header */}
                <Grid
                  container
                  sx={{
                    background: "linear-gradient(90deg, #1A2536, #121A26)",
                    p: 2.5,
                    borderBottom: "1px solid rgba(245, 245, 240, 0.08)",
                  }}
                >
                  <Grid item xs={5}>
                    <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", fontSize: "1rem", color: "rgba(255, 255, 255, 0.6)" }}>
                      Capability
                    </Typography>
                  </Grid>
                  <Grid item xs={3.5} textAlign="center">
                    <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "1rem", color: "#dd690aff" }}>
                      Smart Platform
                    </Typography>
                  </Grid>
                  <Grid item xs={3.5} textAlign="center">
                    <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", fontSize: "1rem", color: "rgba(245,245,240,0.4)" }}>
                      Traditional
                    </Typography>
                  </Grid>
                </Grid>

                {/* Table Body */}
                {rows.map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Grid
                      container
                      alignItems="center"
                      sx={{
                        p: 2,
                        bgcolor: index % 2 === 0 ? "rgba(245, 245, 240, 0.01)" : "rgba(245, 245, 240, 0.02)",
                        borderBottom: index !== rows.length - 1 ? "1px solid rgba(245, 245, 240, 0.04)" : "none",
                      }}
                    >
                      <Grid item xs={5}>
                        <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>
                          {row.item}
                        </Typography>
                      </Grid>
                      <Grid item xs={3.5} textAlign="center">
                        {row.smart === true ? (
                          <Check size={20} color="#4CAF50" />
                        ) : row.smart === false ? (
                          <X size={20} color="#F44336" />
                        ) : (
                          <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#dd690aff" }}>{row.smart}</Typography>
                        )}
                      </Grid>
                      <Grid item xs={3.5} textAlign="center">
                        {row.trad === true ? (
                          <Check size={20} color="#4CAF50" />
                        ) : row.trad === false ? (
                          <X size={20} color="#F44336" />
                        ) : (
                          <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "rgba(245,245,240,0.6)" }}>{row.trad}</Typography>
                        )}
                      </Grid>
                    </Grid>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResortComparison;
