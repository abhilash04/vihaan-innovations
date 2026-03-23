import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const reassuranceBadges = ["ABDM Ready", "NABH Aligned", "TPA Enabled", "Multi-branch", "99.9% Uptime"];

const HMSCTA = () => {
  return (
    <Box sx={{ background: "#0A2D6E", py: { xs: 8, md: 10 }, position: "relative", overflow: "hidden" }}>
      {/* Diagonal Stripes Background Faint */}
      <Box sx={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)", backgroundSize: "40px 40px", zIndex: 0 }} />

      {/* Hospital Building Watermark Faint */}
      <Box sx={{ position: "absolute", right: -50, top: "10%", width: "40%", height: "80%", opacity: 0.04, pointerEvents: "none", zIndex: 0 }}>
        <svg width="100%" height="100%" viewBox="0 0 400 600">
          <path d="M 50 500 L 50 200 L 150 200 L 150 100 L 250 100 L 250 200 L 350 200 L 350 500 Z" fill="none" stroke="#ffffff" strokeWidth="3" />
          <rect x="80" y="250" width="20" height="20" fill="#ffffff" />
          <rect x="130" y="250" width="20" height="20" fill="#ffffff" />
          <rect x="180" y="250" width="20" height="20" fill="#ffffff" />
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center" sx={{ px: 2 }}>
          {/* Left: Text & badges */}
          <Grid item xs={12} md={7}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Typography sx={{ color: "#10B981", fontWeight: 800, fontSize: "12px", mb: 1.2, letterSpacing: "1px" }}>GET STARTED TODAY</Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "28px", md: "40px" }, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: 1.2 }}>
                Let's Build a Hospital Management System Your Entire Team Will Use
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", mb: 4, maxWidth: "520px", lineHeight: 1.6 }}>
                Form unified operations from registration to discharge clear. Digitize EMRs and cut operational leaks efficiently setups setups triggers correctly.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: "#ffffff", color: "#0A2D6E", fontWeight: 800, px: 3, py: 1.5, borderRadius: "25px", textTransform: "none", "&:hover": { bgcolor: "#f4f7fa" } }}>
                  Book a Free 60-Min Call
                </Button>
                <Button variant="outlined" sx={{ borderColor: "#ffffff", color: "#ffffff", fontWeight: 800, px: 3, py: 1.5, borderRadius: "25px", textTransform: "none", borderWidth: "2px", "&:hover": { borderWidth: "2px", bgcolor: "rgba(255,255,255,0.04)" } }}>
                  View All Features
                </Button>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {reassuranceBadges.map((tag, t) => (
                  <Box key={t} sx={{ display: "flex", alignItems: "center", gap: 0.5, bgcolor: "rgba(255,255,255,0.06)", px: 1.2, py: 0.5, borderRadius: "20px" }}>
                    <CheckCircleOutlineIcon sx={{ color: "#10B981", fontSize: 13 }} />
                    <Typography sx={{ color: "#ffffff", fontSize: "10px", fontWeight: 700 }}>{tag}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Floating dashboard mockup */}
          <Grid item xs={12} md={5}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: "flex", justifyContent: "center" }}>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <Paper elevation={0} sx={{ p: 1.5, borderRadius: "20px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", width: "100%", maxWidth: "320px", boxShadow: "0 15px 35px rgba(0,0,0,0.12)" }}>
                  <Box component="img" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80" alt="CTA Mockup Dashboard" sx={{ width: "100%", height: "auto", borderRadius: "12px", mb: 1 }} />
                  <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "11px", mb: 0.5 }}>Daily Census Overview</Typography>
                  <Box sx={{ width: "100%", height: "4px", bgcolor: "#10B981", borderRadius: "2px", mt: 1 }} />
                </Paper>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HMSCTA;
