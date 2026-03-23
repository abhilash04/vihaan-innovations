import React from "react";
import { Box, Container, Typography, Paper, Divider } from "@mui/material";
import { motion } from "framer-motion";
import StarRateIcon from '@mui/icons-material/StarRate';

const HMSTestimonial = () => {
  return (
    <Box sx={{ background: "#ffffff", py: 8, position: "relative", overflow: "hidden" }}>
      <style>
        {`
          @keyframes borderGlow {
            0% { border-color: #0A2D6E; }
            33% { border-color: #00B4D8; }
            66% { border-color: #10B981; }
            100% { border-color: #0A2D6E; }
          }
        `}
      </style>

      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center" }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: "24px", bgcolor: "#0A2D6E", color: "#ffffff", maxWidth: "800px", position: "relative", overflow: "hidden", border: "4px solid #0A2D6E", animation: "borderGlow 6s infinite ease-in-out", boxShadow: "0 20px 40px rgba(10,45,110,0.15)" }}>

            {/* Large Quotation mark */}
            <Typography sx={{ position: "absolute", top: 10, left: 30, fontSize: "140px", fontWeight: 900, color: "rgba(255,255,255,0.06)", fontFamily: "serif" }}>
              “
            </Typography>

            <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              {/* Staggered Stars */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 3 }}>
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.1 }}>
                    <StarRateIcon sx={{ color: "#F59E0B", fontSize: 24 }} />
                  </motion.div>
                ))}
              </Box>

              <Typography variant="h4" sx={{ fontStyle: "italic", fontWeight: 400, fontSize: { xs: "18px", md: "22px" }, mb: 4, fontFamily: "serif", lineHeight: 1.6, maxWidth: "680px", mx: "auto" }}>
                "We needed a platform that handles operational scale with security compliance. Vihaan's HMS synced our OPD/IPD tracks and cut data lags by 40% accurately. It's safe and flawless."
              </Typography>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", width: "60px", mx: "auto", mb: 2.5 }} />

              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "14px", mb: 0.3 }}>Dr. Rohan Sharma</Typography>
                <Typography sx={{ color: "#10B981", fontSize: "11px", fontWeight: 700 }}>Chief Medical Officer, Apollo Setups</Typography>
              </Box>
            </Box>

          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HMSTestimonial;
