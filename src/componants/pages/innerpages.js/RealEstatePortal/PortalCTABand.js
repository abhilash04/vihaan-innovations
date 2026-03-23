import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PortalCTABand = () => {
  return (
    <Box
      sx={{
        py: 8,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#081226", // Base Dark Section remains dark
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
              background: "#F8F6F2", // Inner Card takes Light Theme Background
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0,0,0,0.5)", // Stronger shadow in dark section
            }}
          >
            {/* Ambient Background Lights */}
            <Box
              sx={{
                position: "absolute",
                width: "250px",
                height: "250px",
                bgcolor: "#3B82F6", // Light Blue
                filter: "blur(80px)",
                opacity: 0.12,
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
                  color: "#1A1A1A", // Dark Text Customization
                }}
              >
                Real Estate Portal Design That Modernizes <br />
                <Box component="span" sx={{ color: "#F59E0B" }}>
                  Your Business
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#4A5568", // Muted Dark Text
                  maxWidth: "600px",
                  margin: "0 auto 4px auto",
                  fontSize: "1rem",
                }}
              >
                Transform your property business with professional real estate portal design solutions that help agencies, developers, and property platforms manage listings, attract buyers, and streamline operations.
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
                  },
                }}
              >
                Get a Free Consultation
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PortalCTABand;
