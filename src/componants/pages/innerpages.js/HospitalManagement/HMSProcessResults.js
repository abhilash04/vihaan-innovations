import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Audit", desc: "Hospital workflow audit." },
  { id: 2, title: "Config", desc: "Configuring EMR modules." },
  { id: 3, title: "Train", desc: "Staff onboarding desk." },
  { id: 4, title: "Sync", desc: "Safe data migration sets." },
  { id: 5, title: "Life", desc: "Live support desk activation." }
];

const stats = [
  { value: "40%", label: "Faster Insurance Approval" },
  { value: "30%", label: "Less Manual Data Errors" },
  { value: "90 Days", label: "Average Onboarding Sync" },
  { value: "24/7", label: "Client Support Desk" }
];

const HMSProcessResults = () => {
  return (
    <Box sx={{ background: "#ffffff", position: "relative" }}>
      {/* Process Section 9 */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography sx={{ color: "#0D9488", fontWeight: 800, fontSize: "12px", mb: 1, letterSpacing: "1px" }}>OUR PROCESS</Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "34px" }, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Simplified Implementation Plan
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between", flexWrap: { xs: "wrap", md: "nowrap" }, position: "relative", px: 2 }}>
            {/* Connecting Line Desktop */}
            <Box sx={{ display: { xs: "none", md: "block" }, position: "absolute", top: 20, left: 50, right: 50, height: "3px", bgcolor: "rgba(13, 148, 136, 0.1)", zIndex: 1 }} />

            {steps.map((step, i) => (
              <Box key={step.id} sx={{ textAlign: "center", width: { xs: "100%", sm: "45%", md: "18%" }, mb: { xs: 4, md: 0 }, position: "relative", zIndex: 2 }}>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: "#ffffff", border: "4px solid #0D9488", color: "#0B2046", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 2, boxShadow: "0 4px 10px rgba(13,148,136,0.15)" }}>
                    {step.id}
                  </Box>
                  <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "14px", mb: 0.5 }}>{step.title}</Typography>
                  <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: "12px" }}>{step.desc}</Typography>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Results Section 10 */}
      <Box sx={{ bgcolor: "#1E3A8A", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center" sx={{ px: 2 }}>
            {stats.map((stat, s) => (
              <Grid item xs={6} md={3} key={s} sx={{ textAlign: "center" }}>
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: s * 0.1 }}>
                  <Typography sx={{ color: "#ffffff", fontWeight: 900, fontSize: { xs: "28px", md: "38px" }, mb: 0.5, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: 600 }}>{stat.label}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HMSProcessResults;
