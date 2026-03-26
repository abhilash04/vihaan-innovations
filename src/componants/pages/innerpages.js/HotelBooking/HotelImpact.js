import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
  { value: "35%", label: "Increase in direct bookings within 90 days", color: "#d4a017" },
  { value: "22%", label: "Drop in OTA commissions paid", color: "#0f766e" },
  { value: "40%", label: "Faster room turnover with housekeeping tech", color: "#3b82f6" },
  { value: "3 Mins", label: "Average digital check-in time", color: "#7c3aed" },
];

const HotelImpact = () => (
  <Box sx={{ bgcolor: "#1e3a5f", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography sx={{ color: "#d4a017", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Results & Impact</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Platform Performance & Business Impact</Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", maxWidth: "700px", mx: "auto" }}>
          These metrics show the average growth and performance improvement our clients experience after upgrading to our booking solutions.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, i) => (
          <Grid item xs={6} md={3} key={i}>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.06)", border: `1.5px solid ${stat.color}40`, textAlign: "center", transition: "all 0.3s", "&:hover": { transform: "translateY(-8px)", bgcolor: "rgba(255,255,255,0.1)", boxShadow: `0 15px 35px ${stat.color}30` } }}>
                <Typography sx={{ fontWeight: 900, color: stat.color, fontSize: { xs: "28px", md: "52px" }, lineHeight: 1 }}>{stat.value}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, mt: 2, lineHeight: 1.5 }}>{stat.label}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default HotelImpact;
