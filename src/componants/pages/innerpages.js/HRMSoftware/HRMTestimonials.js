import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const HRMTestimonials = () => (
  <Box sx={{ background: "#F8FAFC", py: 8, position: "relative", overflow: "hidden" }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography sx={{ color: "#f97316", fontWeight: 700, fontSize: "13px", mb: 1, letterSpacing: "1px" }}>TESTIMONIALS</Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Fira Sans" }}>
          What HR Leaders Say
        </Typography>
      </Box>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <Box sx={{ position: "relative", maxWidth: "800px", mx: "auto", px: { xs: 2, md: 6 }, py: 4, bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", borderRadius: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
          <FormatQuoteIcon sx={{ position: "absolute", top: -10, left: { xs: 10, md: 20 }, fontSize: 70, color: "rgba(249,115,22,0.15)" }} />
          <Typography sx={{ fontWeight: 600, color: "#1A202C", fontSize: { xs: "15px", md: "18px" }, lineHeight: 1.6, textAlign: "center", mb: 4, position: "relative", zIndex: 1, fontStyle: "italic" }}>
            "The customized HRM dashboard provided by Vihaan Innovations transformed our payroll tracking. Their scalable API integrates perfectly with our biometric setups and speeds up operations by 40%."
          </Typography>
          <FormatQuoteIcon sx={{ position: "absolute", bottom: 40, right: { xs: 10, md: 20 }, fontSize: 70, color: "rgba(249,115,22,0.15)", transform: "scaleX(-1)" }} />

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
            <Box sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: "rgba(139,92,246,0.1)", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
              <SupervisedUserCircleIcon sx={{ fontSize: 32, color: "#8b5cf6", mt: 1 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 800, color: "#f97316", fontSize: "14px" }}>Amit Kumar</Typography>
              <Typography sx={{ color: "rgba(11, 32, 70, 0.7)", fontSize: "11px", fontWeight: 500 }}>HR Manager, Fintech Corp</Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default HRMTestimonials;
