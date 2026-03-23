import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const otas = ["Booking.com", "Airbnb", "Expedia", "MakeMyTrip", "Agoda", "Goibibo"];
const colors = ["#003580", "#FF5A5F", "#F5A623", "#e31837", "#d32c2c", "#e84393"];

const HotelChannelManager = () => (
  <Box sx={{ bgcolor: "#f0faf8", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography sx={{ color: "#0f766e", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Channel Manager</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>
          Synchronize from Inventory and Prevent Overbooking
        </Typography>
        <Typography sx={{ color: "#64748b", fontSize: "16px", mb: 1, maxWidth: "600px", mx: "auto" }}>
          Two-way live sync ensures your rooms are always up-to-date across every OTA and channel — no double bookings, ever.
        </Typography>
      </Box>

      {/* Hub and spoke diagram */}
      <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", mt: 8, minHeight: "300px" }}>
        {/* Spokes */}
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "100%", zIndex: 1 }}>
          <svg width="100%" height="100%" viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
            {otas.map((_, i) => {
              const angle = (i / otas.length) * 2 * Math.PI - Math.PI / 2;
              const x2 = 300 + 220 * Math.cos(angle);
              const y2 = 140 + 110 * Math.sin(angle);
              return (
                <line key={i} x1="300" y1="140" x2={x2} y2={y2} stroke={colors[i]} strokeWidth="2" strokeDasharray="6,4" opacity="0.5" />
              );
            })}
          </svg>
        </Box>

        {/* Center node */}
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: "relative", zIndex: 3 }}>
          <Paper elevation={0} sx={{ width: 120, height: 120, borderRadius: "24px", bgcolor: "#0f766e", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxShadow: "0 15px 35px rgba(15,118,110,0.3)", zIndex: 3 }}>
            <SyncAltIcon sx={{ fontSize: 36, color: "#ffffff", mb: 0.5 }} />
            <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "11px", textAlign: "center", lineHeight: 1.2 }}>Your Hotel<br />System</Typography>
          </Paper>
        </motion.div>

        {/* OTA satellite nodes */}
        {otas.map((ota, i) => {
          const angle = (i / otas.length) * 2 * Math.PI - Math.PI / 2;
          const radius = { xs: 130, md: 160 };
          const x = Math.cos(angle) * 160;
          const y = Math.sin(angle) * 100;
          return (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ position: "absolute", transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`, zIndex: 2, top: "50%", left: "50%" }}>
              <Paper elevation={0} sx={{ px: 2, py: 1.5, borderRadius: "12px", bgcolor: "#ffffff", border: `2px solid ${colors[i]}30`, boxShadow: "0 6px 16px rgba(0,0,0,0.08)", minWidth: "90px", textAlign: "center" }}>
                <Typography sx={{ fontWeight: 800, color: colors[i], fontSize: "11px" }}>{ota}</Typography>
              </Paper>
            </motion.div>
          );
        })}
      </Box>

      {/* Benefits row */}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 8 }}>
        {["Real-time Inventory Sync", "No Overbooking", "One Dashboard for All", "Rate Parity Management"].map((benefit, i) => (
          <Grid item xs={6} md={3} key={i}>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <Paper elevation={0} sx={{ p: 2.5, borderRadius: "14px", bgcolor: "#ffffff", border: "1px solid rgba(15,118,110,0.15)", textAlign: "center" }}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#0f766e", mx: "auto", mb: 1.5 }} />
                <Typography sx={{ fontWeight: 700, color: "#1e293b", fontSize: "13px" }}>{benefit}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default HotelChannelManager;
