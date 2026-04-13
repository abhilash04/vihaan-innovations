import React from "react";
import { Box, Container, Typography, Paper, Tooltip } from "@mui/material";
import { motion } from "framer-motion";

const innerLogos = [
  { label: "WhatsApp", icon: "💬", angle: 0 },
  { label: "Razorpay", icon: "💳", angle: 60 },
  { label: "ABDM", icon: "🪪", angle: 120 },
  { label: "Tally", icon: "📊", angle: 180 },
  { label: "Aadhaar", icon: "🆔", angle: 240 },
  { label: "DICOM", icon: "📷", angle: 300 }
];

const outerLogos = [
  { label: "Insurance TPA", icon: "🛡️", angle: 30 },
  { label: "Lab Equip", icon: "🔬", angle: 90 },
  { label: "SMS Gateway", icon: "✉️", angle: 150 },
  { label: "Google Cal", icon: "📅", angle: 210 },
  { label: "PayU", icon: "💸", angle: 270 },
  { label: "Zoho Books", icon: "📚", angle: 330 }
];

const HMSIntegrations = () => {
  return (
    <Box sx={{ background: "#ffffff", py: 6, position: "relative", overflow: "hidden" }}>
      <style>
        {`
          @keyframes orbitRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes counterOrbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}
      </style>

      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#0A2D6E", fontWeight: 800, fontSize: "12px", mb: 1, letterSpacing: "1px" }}>INTEGRATIONS</Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Connects With Your Entire Ecosystem
          </Typography>
        </Box>

        {/* Orbit Layout Wrapper */}
        <Box sx={{ position: "relative", width: "100%", height: "450px", display: "flex", justifyContent: "center", alignItems: "center" }}>

          {/* Central HMS Node */}
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ zIndex: 10 }}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: "50%", bgcolor: "#0A2D6E", color: "#ffffff", width: 90, height: 90, display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid #10B981", boxShadow: "0 0 40px rgba(10,45,110,0.15)" }}>
              <Typography sx={{ fontWeight: 900, fontSize: "16px" }}>HMS</Typography>
            </Paper>
          </motion.div>

          {/* Inner Ring (Radius 120px) */}
          <Box sx={{ position: "absolute", width: "240px", height: "240px", animation: "orbitRotate 50s infinite linear", zIndex: 5 }}>
            {innerLogos.map((logo, i) => (
              <Box key={i} sx={{ position: "absolute", width: "100%", height: "100%", transform: `rotate(${logo.angle}deg)` }}>
                <Box sx={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)" }}>
                  <Box sx={{ animation: "counterOrbit 50s infinite linear" }}>
                    <Tooltip title={logo.label} arrow>
                      <Paper elevation={0} sx={{ width: 36, height: 36, borderRadius: "50%", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", transition: "all 0.3s", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 8px 20px rgba(10,45,110,0.06)" } }}>
                        <Typography sx={{ fontSize: "14px" }}>{logo.icon}</Typography>
                      </Paper>
                    </Tooltip>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Connecting lines inner ring */}
          <Box sx={{ position: "absolute", width: "240px", height: "240px", borderRadius: "50%", border: "1px dashed rgba(10,45,110,0.06)" }} />

          {/* Outer Ring (Radius 220px) */}
          <Box sx={{ position: "absolute", width: "440px", height: "440px", animation: "orbitRotate 80s infinite linear", zIndex: 2, display: { xs: "none", md: "block" } }}>
            {outerLogos.map((logo, i) => (
              <Box key={i} sx={{ position: "absolute", width: "100%", height: "100%", transform: `rotate(${logo.angle}deg)` }}>
                <Box sx={{ position: "absolute", top: -22, left: "50%", transform: "translateX(-50%)" }}>
                  <Box sx={{ animation: "counterOrbit 80s infinite linear" }}>
                    <Tooltip title={logo.label} arrow>
                      <Paper elevation={0} sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.03)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.02)", transition: "all 0.3s", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 8px 20px rgba(10,45,110,0.04)" } }}>
                        <Typography sx={{ fontSize: "16px" }}>{logo.icon}</Typography>
                      </Paper>
                    </Tooltip>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Connecting lines outer ring */}
          <Box sx={{ position: "absolute", width: "440px", height: "440px", borderRadius: "50%", border: "1px dashed rgba(10,45,110,0.04)", display: { xs: "none", md: "block" } }} />

        </Box>
      </Container>
    </Box>
  );
};

export default HMSIntegrations;
