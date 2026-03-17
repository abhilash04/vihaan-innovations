import React from "react";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";

const integrations = [
  { name: "Zoom", color: "#2563eb", letter: "Z" },
  { name: "Google Meet", color: "#22c55e", letter: "M" },
  { name: "Razorpay", color: "#3b82f6", letter: "R" },
  { name: "WhatsApp", color: "#22c55e", letter: "W" },
  { name: "YouTube", color: "#ef4444", letter: "YT" },
  { name: "Custom LMS API", color: "#7c3aed", letter: "API" },
  { name: "AWS S3", color: "#f59e0b", letter: "AWS" },
  { name: "Google & Facebook Login", color: "#3b82f6", letter: "G" },
  { name: "Zapier", color: "#f97316", letter: "Z" },
  { name: "ZOOM & API", color: "#2563eb", letter: "ZA" },
];

const LMSIntegrations = () => (
  <Box sx={{ bgcolor: "#eff6ff", py: 14 }}>
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Integrations & Compatibility</Typography>
        <Typography sx={{ color: "#64748b", fontSize: "16px" }}>Compatible tools, platforms, and services to integrate to.</Typography>
      </Box>
      <Paper elevation={0} sx={{ p: 6, borderRadius: "24px", bgcolor: "#ffffff", border: "1px solid #dbeafe", boxShadow: "0 10px 40px rgba(37,99,235,0.06)" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", alignItems: "center" }}>
          {integrations.map((intg, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ scale: 1.1 }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, cursor: "pointer" }}>
                <Box sx={{ width: 58, height: 58, borderRadius: "14px", bgcolor: `${intg.color}18`, border: `2px solid ${intg.color}30`, display: "flex", justifyContent: "center", alignItems: "center", color: intg.color, fontWeight: 900, fontSize: "14px" }}>
                  {intg.letter}
                </Box>
                <Typography sx={{ fontWeight: 600, color: "#475569", fontSize: "12px", textAlign: "center", lineHeight: 1.2 }}>{intg.name}</Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Paper>
    </Container>
  </Box>
);

export default LMSIntegrations;
