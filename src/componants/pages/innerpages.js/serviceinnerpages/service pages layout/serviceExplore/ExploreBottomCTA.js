import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const SectionWrapper = styled(Box)({
  paddingTop: "80px",
  paddingBottom: "80px",
  backgroundColor: "#0B1528", // Deep navy from Matrimony CTA
  color: "#ffffff",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
});

const ExploreBottomCTA = ({ data }) => {
  if (!data) return null;
  const {
    title = "Ready to Grow?",
    description = "Book a free 45-min discovery call",
    cta = "Contact Us ↗"
  } = data || {};

  return (
    <SectionWrapper>
      {/* Decorative Stars / Lights matching Matrimony style */}
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.8 }}>
        <motion.div
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          style={{ position: "absolute", top: "20%", left: "15%", color: "#ffffff", fontSize: "20px" }}
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          style={{ position: "absolute", bottom: "30%", right: "20%", color: "#00B4D8", fontSize: "24px" }}
        >
          ✦
        </motion.div>

        {/* Soft bottom glow */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            height: "80%",
            background: "radial-gradient(ellipse, rgba(0, 180, 216, 0.2) 0%, rgba(11, 21, 40, 0) 70%)",
            filter: "blur(60px)"
          }}
        />

        {/* Large graphic star on the bottom right */}
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
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mb: 3,
              fontFamily: "Urbanist, sans-serif",
              letterSpacing: "-1.5px",
              fontSize: { xs: "32px", md: "56px" },
              lineHeight: 1.1
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "20px",
              mb: 6,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            {description}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
            <Button
              component={motion.button}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 180, 216, 0.4)",
                transform: "translateY(-3px)"
              }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #00B4D8 0%, #0096b4 100%)",
                color: "white",
                px: 7,
                py: 2.2,
                borderRadius: "100px",
                textTransform: "none",
                fontWeight: 900,
                fontSize: "18px",
                fontFamily: "Urbanist, sans-serif",
                boxShadow: "0 10px 30px rgba(0, 180, 216, 0.3)",
                transition: "all 0.3s",
                "&:hover": {
                  background: "linear-gradient(90deg, #0096b4 0%, #007a99 100%)",
                }
              }}
            >
              {cta}
            </Button>

            {/* <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: 600 }}>
                <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Download feature checklist</span> or <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>View sample portal demo</span>
              </Typography>
            </Box> */}
          </Box>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};

export default ExploreBottomCTA;
