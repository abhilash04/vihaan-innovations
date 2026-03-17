import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const ListingCTA = () => {
  return (
    <Box sx={{ position: "relative", bgcolor: "#0f172a", py: 16, overflow: "hidden" }}>
      
      {/* Soft gradient glow */}
      <Box sx={{ position: "absolute", bottom: "-30%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "80%", background: "radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, rgba(15, 23, 42, 0) 70%)", filter: "blur(60px)", zIndex: 0 }} />
      
      {/* Floating sparkle dots */}
      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: "absolute", top: "15%", left: "12%", color: "#3b82f6", fontSize: 22 }}>✦</motion.div>
      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} style={{ position: "absolute", bottom: "20%", right: "15%", color: "#22c55e", fontSize: 20 }}>✦</motion.div>
      <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }} style={{ position: "absolute", top: "35%", right: "25%", color: "#a855f7", fontSize: 14 }}>●</motion.div>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center" }}>

            <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "32px", md: "46px" }, mb: 3, lineHeight: 1.2 }}>
              Bottom CTA
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", mb: 2, lineHeight: 1.6 }}>
              Let's build a listing platform that owns its category.
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", mb: 7 }}>
              Let's talk. First call free.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "16px",
                  px: 6,
                  py: 2,
                  borderRadius: "40px",
                  textTransform: "none",
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.5)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #1d4ed8 0%, #1e40af 100%)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.6)",
                  },
                  transition: "all 0.3s"
                }}
              >
                Book a Free Call
              </Button>

              <Box sx={{ display: "flex", gap: 3 }}>
                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "underline", cursor: "pointer" }}>
                  View Live Demo
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "underline", cursor: "pointer" }}>
                  Feature Checklist
                </Typography>
              </Box>
            </Box>

          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ListingCTA;
