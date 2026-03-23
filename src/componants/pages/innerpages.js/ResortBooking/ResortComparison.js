import React from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const rows = [
  { item: "Booking Calendar Sync", smart: true, trad: false },
  { item: "Staff Routing AI", smart: true, trad: false },
  { item: "No Overbooking Risk", smart: true, trad: false },
  { item: "Room Ready Alerts", smart: true, trad: "Manual" },
  { item: "Guest CRM Auto-sync", smart: true, trad: false },
  { item: "Multi-Currency Rates", smart: true, trad: "Limited" },
];

const ResortComparison = () => {
  return (
    <Box
      sx={{
        py: 12,
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
                <Box sx={{ width: "30px", height: "1px", bgcolor: "#D4AF37" }} />
                <Typography
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "#D4AF37",
                    fontSize: "0.85rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Future of Hospitality
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
                Embrace the Future <br />
                Of Guest Experiences
              </Typography>

              {[
                "Embrace Intelligent Smart Platform",
                "Personalized Guest Journey Modules",
                "Automated Staff Dispatch Operations",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                    <Check size={20} color="#D4AF37" />
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
                  mt: 4,
                  fontFamily: "'Outfit', sans-serif",
                  bgcolor: "#D4AF37",
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
                  <Grid item xs={6}>
                    <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.85rem", color: "rgba(245,245,240,0.6)" }}>
                      Capability
                    </Typography>
                  </Grid>
                  <Grid item xs={3} textAlign="center">
                    <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.85rem", color: "#D4AF37" }}>
                      Smart Platform
                    </Typography>
                  </Grid>
                  <Grid item xs={3} textAlign="center">
                    <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.85rem", color: "rgba(245,245,240,0.4)" }}>
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
                      <Grid item xs={6}>
                        <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem" }}>
                          {row.item}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} textAlign="center">
                        {row.smart === true ? <Check size={20} color="#4CAF50" /> : <X size={20} color="#F44336" />}
                      </Grid>
                      <Grid item xs={3} textAlign="center">
                        {row.trad === true ? (
                          <Check size={20} color="#4CAF50" />
                        ) : row.trad === false ? (
                          <X size={20} color="#F44336" />
                        ) : (
                          <Typography sx={{ fontSize: "0.85rem", color: "rgba(245,245,240,0.4)" }}>{row.trad}</Typography>
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
