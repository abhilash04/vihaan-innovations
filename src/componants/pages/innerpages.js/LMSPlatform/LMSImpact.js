import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
  { value: "35%", label: "Boosted course completion rates", color: "#22c55e" },
  { value: "12", label: "Hours saved per instructor every week", color: "#3b82f6" },
  { value: "28%", label: "Growth in student re-enrollment and retention rates", color: "#f59e0b" },
  { value: "90-Day", label: "Average time to launch a complete LMS platform with us", color: "#8b5cf6" },
];

const LMSImpact = () => (
  <Box sx={{ bgcolor: "#ffffff", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Results & Impact Numbers</Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, i) => (
          <Grid item xs={6} md={3} key={i}>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", textAlign: "center", bgcolor: `${stat.color}10`, border: `2px solid ${stat.color}30`, transition: "all 0.3s", "&:hover": { transform: "translateY(-8px)", boxShadow: `0 15px 35px ${stat.color}30` } }}>
                <Typography sx={{ fontWeight: 900, color: stat.color, fontSize: { xs: "26px", md: "50px" }, lineHeight: 1 }}>{stat.value}</Typography>
                <Typography sx={{ color: "#475569", fontSize: "14px", fontWeight: 600, mt: 2, lineHeight: 1.4 }}>{stat.label}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default LMSImpact;
