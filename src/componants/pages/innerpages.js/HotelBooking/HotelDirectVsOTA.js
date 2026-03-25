import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const directBenefits = [
  "0% commission on direct bookings",
  "Full ownership of guest data",
  "Easy upselling and cross-selling",
  "Higher revenue per booking",
  "Custom loyalty and reward programs",
  "Flexible pricing, coupons, and packages",
];
const otaProblems = [
  "15–23% commission on every booking",
  "Guest data controlled by external platforms",
  "No direct upselling opportunities",
  "Lower revenue per room",
  "No built-in loyalty programs",
  "Pricing restrictions across platforms",
];

const HotelDirectVsOTA = () => (
  <Box sx={{ bgcolor: "#1e3a5f", py: 8, position: "relative", overflow: "hidden" }}>
    <Box sx={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 70%)" }} />
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>
          Direct Booking vs Third-Party Platforms
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", maxWidth: "600px", mx: "auto" }}>
          Maximize your revenue with a smart hotel booking website designed for direct bookings and full control.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {/* OTA Side */}
        <Grid item xs={12} md={5}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Paper elevation={0} sx={{ p: 5, borderRadius: "24px", bgcolor: "rgba(220,38,38,0.08)", border: "1.5px solid rgba(220,38,38,0.3)", height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                <Box sx={{ width: 46, height: 46, borderRadius: "12px", bgcolor: "rgba(220,38,38,0.2)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <CancelIcon sx={{ color: "#ef4444", fontSize: 26 }} />
                </Box>
                <Typography sx={{ fontWeight: 900, color: "#f87171", fontSize: "20px" }}>Third-Party Platforms</Typography>
              </Box>
              {otaProblems.map((item, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <CancelIcon sx={{ color: "#ef4444", fontSize: 18, flexShrink: 0 }} />
                  <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "14px" }}>{item}</Typography>
                </Box>
              ))}
            </Paper>
          </motion.div>
        </Grid>

        {/* Divider */}
        <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontWeight: 900, color: "#d4a017", fontSize: "22px" }}>VS</Typography>
          </Box>
        </Grid>

        {/* Direct Side */}
        <Grid item xs={12} md={5}>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Paper elevation={0} sx={{ p: 5, borderRadius: "24px", bgcolor: "rgba(15,118,110,0.15)", border: "1.5px solid rgba(15,118,110,0.4)", height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                <Box sx={{ width: 46, height: 46, borderRadius: "12px", bgcolor: "rgba(15,118,110,0.3)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <CheckCircleIcon sx={{ color: "#34d399", fontSize: 26 }} />
                </Box>
                <Typography sx={{ fontWeight: 900, color: "#34d399", fontSize: "20px" }}>Direct Booking Advantage</Typography>
              </Box>
              {directBenefits.map((item, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <CheckCircleIcon sx={{ color: "#34d399", fontSize: 18, flexShrink: 0 }} />
                  <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", fontWeight: 500 }}>{item}</Typography>
                </Box>
              ))}
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HotelDirectVsOTA;
