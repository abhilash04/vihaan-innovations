import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import CancelIcon from '@mui/icons-material/Cancel';

const problems = [
  "Paying 15–25% commission to booking platforms",
  "No direct bookings from your own website",
  "Reservations spread across multiple systems",
  "Overbooking and duplicate booking issues",
  "Guest data not properly organised",
  "Manual check-in and check-out processes",
  "No clear view of room revenue and occupancy",
  "Housekeeping is not managed digitally",
];

const HotelProblem = () => (
  <Box sx={{ bgcolor: "#fffdf0", py: 6, position: "relative", overflow: "hidden" }}>
    <Box sx={{ position: "absolute", bottom: -80, right: -80, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)" }} />
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "28px", md: "38px" }, mb: 2 }}>
          The Problem
        </Typography>
        <Typography sx={{ fontWeight: 700, color: "#dc2626", fontSize: { xs: "18px", md: "22px" }, mb: 1 }}>
          Are you losing revenue to third-party booking platforms?
        </Typography>
        {/* <Typography sx={{ fontWeight: 600, color: "#475569", fontSize: "18px", mb: 2 }}>
          Are outdated systems affecting your guest experience?
        </Typography> */}
        <Typography sx={{ color: "#64748b", fontSize: "16px", maxWidth: "600px", mx: "auto" }}>
          Many businesses running hotel booking websites face these common challenges:
        </Typography>
      </Box>
      <Grid container spacing={6} alignItems="center">
        {/* Left Illustration */}
        <Grid item xs={12} md={5}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Paper elevation={0} sx={{ p: 5, borderRadius: "24px", bgcolor: "rgba(255,255,255,0.85)", border: "1px solid rgba(212,160,23,0.2)", boxShadow: "0 20px 50px rgba(0,0,0,0.06)", textAlign: "center" }}>
              {/* OTA commission illustration mock */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 900, color: "#dc2626", fontSize: "48px", lineHeight: 1 }}>23%</Typography>
                <Typography sx={{ color: "#64748b", fontSize: "14px", fontWeight: 600 }}>Up to 23% commission lost on every booking</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}>
                {["Booking.com", "Airbnb", "Expedia"].map((ota, i) => (
                  <Box key={i} sx={{ textAlign: "center" }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: "12px", bgcolor: "#fef2f2", display: "flex", justifyContent: "center", alignItems: "center", mx: "auto", mb: 1 }}>
                      <Typography sx={{ fontSize: "16px" }}>🔴</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "10px", color: "#94a3b8", fontWeight: 600 }}>{ota}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ height: "6px", bgcolor: "#fef2f2", borderRadius: "3px", overflow: "hidden", mx: 2 }}>
                <motion.div initial={{ width: "0%" }} whileInView={{ width: "75%" }} viewport={{ once: true }} transition={{ duration: 1.5 }} style={{ height: "100%", background: "#dc2626", borderRadius: "3px" }} />
              </Box>
              <Typography sx={{ mt: 1.5, fontSize: "12px", color: "#dc2626", fontWeight: 600 }}>Revenue continues to leak through third-party platforms</Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* Right Problem Bullets */}
        <Grid item xs={12} md={7}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {problems.map((prob, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.8)", border: "1px solid rgba(220,38,38,0.1)" }}>
                  <CancelIcon sx={{ color: "#dc2626", fontSize: 20, flexShrink: 0 }} />
                  <Typography sx={{ color: "#334155", fontSize: "15px", fontWeight: 500 }}>{prob}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HotelProblem;
