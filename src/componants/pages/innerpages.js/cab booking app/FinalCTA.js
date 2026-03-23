import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Apple, PlayCircle, QrCode } from "lucide-react";

const FinalCTA = () => {
  return (
    <Box
      sx={{
        py: 16,
        px: { xs: 4, md: 8 },
        background: "#ffffff", // Light background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Perspective Lines / Road Effect */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200%",
          height: "100%",
          opacity: 0.1, // reduced opacity on light background
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <svg fill="none" viewBox="0 0 1000 600" style={{ width: "100%", height: "100%" }}>
          <path d="M 500 100 L 0 600" stroke="url(#line-grad)" strokeWidth="1.5" />
          <path d="M 500 100 L 1000 600" stroke="url(#line-grad)" strokeWidth="1.5" />
          <path d="M 500 100 L 250 600" stroke="url(#line-grad)" strokeWidth="1" />
          <path d="M 500 100 L 750 600" stroke="url(#line-grad)" strokeWidth="1" />
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fd544e" stopOpacity="0" />
              <stop offset="100%" stopColor="#fd544e" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </Box>

      {/* Spotlight Glow behind phone */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(253, 84, 78, 0.04) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
        }}
      />

      <Grid container spacing={4} alignItems="center" sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}>
        {/* Left - Content and Buttons */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#1a1a1a", // Dark Title
                fontWeight: 800,
                mb: 2,
                lineHeight: 1.2,
                fontSize: { xs: "28px", md: "42px" },
              }}
            >
              Download the App & <br /> Drive into the Drive Today
            </Typography>
            <Typography sx={{ color: "#555", fontSize: "16px", mb: 5, maxWidth: "500px" }}>
              Available on iOS and Android. Book in seconds, drive in minutes. No hidden fees, fully insured rides.
            </Typography>

            {/* Buttons Group */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
              {/* App Store */}
              <Button
                variant="contained"
                sx={{
                  background: "#ffffff",
                  color: "#1a1a1a",
                  borderRadius: "30px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  px: 3,
                  py: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  textTransform: "none",
                  fontWeight: 700,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  "&:hover": {
                    background: "#f9f9f9",
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Apple size={24} color="#1a1a1a" />
                <Box sx={{ textAlign: "left" }}>
                  <Typography sx={{ fontSize: "10px", fontWeight: 600, opacity: 0.7, lineHeight: 1 }}>
                    Download on the
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 800, lineHeight: 1.2 }}>
                    App Store
                  </Typography>
                </Box>
              </Button>

              {/* Google Play */}
              <Button
                variant="contained"
                sx={{
                  background: "#ffffff",
                  color: "#1a1a1a",
                  borderRadius: "30px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  px: 3,
                  py: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  textTransform: "none",
                  fontWeight: 700,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  "&:hover": {
                    background: "#f9f9f9",
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <PlayCircle size={24} color="#1a1a1a" />
                <Box sx={{ textAlign: "left" }}>
                  <Typography sx={{ fontSize: "10px", fontWeight: 600, opacity: 0.7, lineHeight: 1 }}>
                    GET IT ON
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 800, lineHeight: 1.2 }}>
                    Google Play
                  </Typography>
                </Box>
              </Button>
            </Box>

            {/* QR Code Segment */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  background: "#ffffff",
                  borderRadius: "12px",
                  width: 80,
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <QrCode size={55} color="#111" />
              </Box>
              <Typography sx={{ color: "#666", fontSize: "13px", maxWidth: "150px" }}>
                Scan to download instantly for both devices
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        {/* Right - Floating Phone Mockup */}
        <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            animate={{ y: [0, -15, 0] }}
            style={{ position: "relative" }}
          >
             <Box
               sx={{
                 width: "280px",
                 height: "560px",
                 background: "#ffffff", // Light theme internal frame simulation
                 borderRadius: "32px",
                 border: "8px solid #1a1a1a",
                 boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                 overflow: "hidden",
                 position: "relative",
                 "&::before": {
                   content: '""',
                   position: "absolute",
                   inset: 0,
                   background: "linear-gradient(135deg, rgba(253, 84, 78, 0.05) 0%, rgba(247, 131, 97, 0.03) 100%)",
                   zIndex: 1,
                 }
               }}
             >
                <Box sx={{ p: 2, position: "relative", zIndex: 2, borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <Typography sx={{ color: "#1a1a1a", fontWeight: 800, fontSize: "14px" }}>Cab App</Typography>
                </Box>
                <Box sx={{ p: 2, position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
                    <Box sx={{ height: 100, background: "#f9f9f9", borderRadius: "12px", p: 1 }}>
                        <Typography sx={{ fontSize: "11px", color: "#fd544e", fontWeight: 700 }}>Pickup Details</Typography>
                    </Box>
                </Box>
             </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinalCTA;
