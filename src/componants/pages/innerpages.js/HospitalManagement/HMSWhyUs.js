import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import StarRateIcon from '@mui/icons-material/StarRate';

const diffs = [
  { id: "01", title: "ABDM & NABH Ready", desc: "Compliance-first hospital management software built from day one-no third-party integrations needed." },
  { id: "02", title: "99.9% Uptime Cloud", desc: "Secure, encrypted hospital management software with multi-layer redundancy and offline sync support." },
  { id: "03", title: "Modular Upgrades", desc: "Flexible hospital management software pay only for what you need and scale anytime." },
  { id: "04", title: "24/7 Hypercare Support", desc: "Dedicated experts ensuring smooth onboarding and continuous support for your hospital management software." }
];

const HMSWhyUs = () => {
  return (
    <Box sx={{ background: "#F5F7FA", py: 8, position: "relative", overflow: "hidden" }}>
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ px: 2 }} alignItems="stretch">
          {/* Left: Differentiator Stacks */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {diffs.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                  <Paper elevation={0} sx={{ p: 3, borderRadius: "16px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.03)", position: "relative", overflow: "hidden", cursor: "pointer", transition: "all 0.3s", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 8px 25px rgba(10,45,110,0.05)", bgcolor: "rgba(10,45,110,0.01)", borderLeft: "4px solid #0A2D6E", "& .bg-num": { color: "rgba(10,45,110,0.06)" } } }}>
                    {/* Big BG Number */}
                    <Typography className="bg-num" sx={{ position: "absolute", top: -10, right: 10, fontSize: "64px", fontWeight: 900, color: "rgba(10,45,110,0.02)", transition: "all 0.3s", userSelect: "none" }}>
                      {item.id}
                    </Typography>

                    <Box sx={{ position: "relative", zIndex: 1 }}>
                      <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "16px", mb: 0.5 }}>{item.title}</Typography>
                      <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: "12px", lineHeight: 1.5 }}>{item.desc}</Typography>
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Right: Quote card with shifting gradient list */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ height: "100%" }}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: "24px", height: "90%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", color: "#ffffff", background: "linear-gradient(-45deg, #0A2D6E, #0077B6, #00B4D8, #0A2D6E)", backgroundSize: "400% 400%", animation: "gradientShift 12s infinite ease-in-out", boxShadow: "0 15px 35px rgba(10,45,110,0.15)" }}>
                {/* Large Quotation mark */}
                <Typography sx={{ position: "absolute", top: 10, left: 30, fontSize: "120px", fontWeight: 900, color: "rgba(255,255,255,0.08)", fontFamily: "serif" }}>
                  “
                </Typography>

                <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", px: 2 }}>
                  <Typography variant="h4" sx={{ fontStyle: "italic", fontWeight: 400, fontSize: { xs: "18px", md: "22px" }, mb: 3, fontFamily: "serif", lineHeight: 1.6 }}>
                    "Our EMR documentation speed multiplied 3x within weeks. The unified dashboard eliminated operational gaps and improved patient care significantly."
                  </Typography>

                  <Box sx={{ display: "flex", justifyContent: "center", gap: 0.3, mb: 1.5 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarRateIcon key={i} sx={{ color: "#F59E0B", fontSize: 20 }} />
                    ))}
                  </Box>

                  <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "14px" }}>Dr. Aryan Mehta</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}>Director, Lifeline Multi-specialty</Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HMSWhyUs;
