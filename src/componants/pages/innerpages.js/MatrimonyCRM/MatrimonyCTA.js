import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const MatrimonyCTA = () => {
  return (
    <Box sx={{ position: "relative", bgcolor: "#0B1528", py: 8, overflow: "hidden" }}> {/* Matches the banner's deep navy */}

      {/* Decorative Stars / Lights matching the subtle tech vibe in the mock */}
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.8 }}>
        <motion.div animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 4 }} style={{ position: "absolute", top: "20%", left: "15%", color: "#ffffff", fontSize: "20px" }}>✦</motion.div>
        <motion.div animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} style={{ position: "absolute", bottom: "30%", right: "20%", color: "#00B4D8", fontSize: "24px" }}>✦</motion.div>

        {/* Soft bottom glow */}
        <Box sx={{ position: "absolute", bottom: "-50%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "80%", background: "radial-gradient(ellipse, rgba(0, 180, 216, 0.2) 0%, rgba(11, 21, 40, 0) 70%)", filter: "blur(60px)" }} />

        {/* Large graphic star on the bottom right like in the mock */}
        <Box sx={{ position: "absolute", bottom: "10%", right: "10%", opacity: 0.5 }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 0 L65 50 L120 60 L65 70 L60 120 L55 70 L0 60 L55 50 Z" fill="#00B4D8" />
          </svg>
        </Box>
      </Box>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center" }}>

            <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "32px", md: "46px" }, mb: 3, lineHeight: 1.2 }}>
              Let's build a platform your<br />community will trust
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", mb: 6, maxWidth: "500px", mx: "auto", lineHeight: 1.6 }}>
              Book a free 45-min discovery call
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #00B4D8 0%, #0096b4 100%)",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "16px",
                  px: 5,
                  py: 2,
                  borderRadius: "40px",
                  textTransform: "none",
                  boxShadow: "0 10px 30px rgba(0, 180, 216, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #0096b4 0%, #007a99 100%)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 40px rgba(0, 180, 216, 0.6)",
                  },
                  transition: "all 0.3s"
                }}
              >
                Book a Free Call
              </Button>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
                  <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Download feature checklist</span> or <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>View sample portal demo</span>
                </Typography>
              </Box>
            </Box>

          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default MatrimonyCTA;
