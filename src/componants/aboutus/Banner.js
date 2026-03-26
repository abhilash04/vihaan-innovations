import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import bgImage from "../../assets/img2.png"; // Using an existing tech image from assets

export default function Banner() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "75vh", md: "85vh" },
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      {/* Dark Overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.6) 100%)",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, pt: 10 }}>
        <Box component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} sx={{ maxWidth: "750px" }}>
          
          <Typography
            sx={{
              display: "inline-block",
              color: "#00b4d8",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              mb: 2,
              px: 2,
              py: 0.5,
              border: "1px solid rgba(0, 180, 216, 0.3)",
              background: "rgba(0, 180, 216, 0.1)",
              borderRadius: "50px",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            About Vihan Innovations
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: { xs: "36px", sm: "48px", md: "64px" },
              color: "#ffffff",
              lineHeight: 1.15,
              mb: 3,
            }}
          >
            Engineering <span style={{ color: "#00b4d8" }}>Growth</span> & <br /> Digital Transformation.
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: "16px", md: "18px" },
              color: "#cbd5e1",
              lineHeight: 1.7,
              mb: 5,
              maxWidth: "600px"
            }}
          >
            We are a modern technology consultancy empowering enterprises with custom software, strategic IT solutions, and innovative digital products built for scale.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "15px",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                textTransform: "none",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 10px 20px rgba(0, 180, 216, 0.3)",
                "&:hover": { background: "linear-gradient(90deg, #0077b6 0%, #023e8a 100%)", transform: "translateY(-3px)", boxShadow: "0 15px 25px rgba(0, 180, 216, 0.4)" },
                transition: "all 0.3s ease"
              }}
            >
              Discover Our Works
            </Button>
            
            <Button
              sx={{
                background: "transparent",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "15px",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                border: "1px solid rgba(255,255,255,0.2)",
                textTransform: "none",
                fontFamily: "'Inter', sans-serif",
                "&:hover": { background: "rgba(255,255,255,0.1)", borderColor: "#fff" },
                transition: "all 0.3s ease"
              }}
            >
              Join Our Team
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}