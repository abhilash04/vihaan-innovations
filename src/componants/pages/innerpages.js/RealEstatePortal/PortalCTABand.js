import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PortalCTABand = () => {
  return (
    <Box
      sx={{
        py: 12,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#081226", // Base
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              p: { xs: 5, md: 8 },
              borderRadius: "24px",
              background: "linear-gradient(135deg, #0A2540 0%, #001025 100%)", // Deep blue gradient
              border: "1px solid rgba(59, 130, 246, 0.2)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            {/* Ambient Background Lights */}
            <Box
              sx={{
                position: "absolute",
                width: "250px",
                height: "250px",
                bgcolor: "#3B82F6",
                filter: "blur(80px)",
                opacity: 0.15,
                top: "-10%",
                left: "-10%",
                zIndex: 0,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "250px",
                height: "250px",
                bgcolor: "#10B981", // Teal/emerald ambient light
                filter: "blur(80px)",
                opacity: 0.1,
                bottom: "-10%",
                right: "-10%",
                zIndex: 0,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "3rem" },
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Supercharge Your PropTech <br />
                <Box component="span" sx={{ color: "#F59E0B" }}>
                  Product Visibility
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(255, 255, 255, 0.7)",
                  maxWidth: "600px",
                  margin: "0 auto 4px auto",
                  fontSize: "1rem",
                }}
              >
                Schedule a 10-minute briefing to witness our blueprint scaling
                dashboards firsthand.
              </Typography>

              <Button
                variant="contained"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  mt: 4,
                  fontFamily: "'Inter', sans-serif",
                  bgcolor: "#F59E0B", // Gold
                  color: "#081226",
                  px: 5,
                  py: 1.8,
                  borderRadius: "8px",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "1rem",
                  boxShadow: "0 4px 15px rgba(245, 158, 11, 0.3)",
                  "&:hover": { bgcolor: "#D97706" },
                  // Outer Glow Pulse animation
                  animation: "glowPulse 2s infinite",
                  "@keyframes glowPulse": {
                    "0%": { boxShadow: "0 0 0 0 rgba(245, 158, 11, 0.4)" },
                    "70%": { boxShadow: "0 0 0 15px rgba(245, 158, 11, 0)" },
                    "100%": { boxShadow: "0 0 0 0 rgba(245, 158, 11, 0)" },
                  },
                }}
              >
                Request 1:1 Live Demo
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PortalCTABand;
