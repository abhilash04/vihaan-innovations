import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const RealEstateCTA = () => {
  return (
    <Box sx={{
      position: "relative",
      bgcolor: "#0B1120", // Deep night blue from the mockup bottom section
      py: 8,
      overflow: "hidden",
      textAlign: "center"
    }}>

      {/* Starry Night Effect Background Elements */}
      <Box sx={{
        position: 'absolute', top: '20%', left: '10%', width: '4px', height: '4px', bgcolor: '#fff', borderRadius: '50%', boxShadow: '0 0 10px 2px rgba(255,255,255,0.8)'
      }} />
      <Box sx={{
        position: 'absolute', top: '60%', right: '15%', width: '6px', height: '6px', bgcolor: '#fff', borderRadius: '50%', boxShadow: '0 0 15px 3px #00B4D8'
      }} />
      <Box sx={{
        position: 'absolute', bottom: '30%', left: '20%', width: '3px', height: '3px', bgcolor: '#fff', borderRadius: '50%', boxShadow: '0 0 8px 1px rgba(255,255,255,0.6)'
      }} />
      <Box sx={{
        position: 'absolute', top: '15%', right: '30%', width: '5px', height: '5px', bgcolor: '#fff', borderRadius: '50%', boxShadow: '0 0 12px 2px #ffeaa7'
      }} />
      <Box sx={{
        position: 'absolute', bottom: '15%', right: '40%', width: '8px', height: '8px', transform: "rotate(45deg)", bgcolor: '#fff', boxShadow: '0 0 20px 4px #4facfe'
      }} />

      {/* Giant Bottom Glow */}
      <Box sx={{
        position: "absolute",
        bottom: "-50%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle, rgba(0, 180, 216, 0.2) 0%, rgba(11, 17, 32, 0) 70%)",
        zIndex: 0
      }} />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "26px", md: "48px" }, mb: 3 }}>
            Ready to build your <br /> real estate platform?
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", mb: 6, maxWidth: "600px", mx: "auto", lineHeight: 1.6 }}>
            Schedule a free 45-minute consultation call. We’ll help you find the right Real Estate CRM Development solution for your business — no generic presentations, just a focused discussion about your real business needs and challenges.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "center", gap: 3 }}>

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #00F2FE 0%, #4FACFE 100%)",
                color: "#0B2046",
                fontWeight: 700,
                fontSize: "18px",
                px: 5,
                py: 2,
                borderRadius: "40px",
                textTransform: "none",
                boxShadow: "0 10px 30px rgba(0, 242, 254, 0.4)",
                "&:hover": {
                  background: "linear-gradient(90deg, #4FACFE 0%, #00F2FE 100%)",
                  boxShadow: "0 15px 40px rgba(0, 242, 254, 0.6)",
                  transform: "translateY(-2px)"
                },
                transition: "all 0.3s ease"
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Book a Free Call
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "16px",
                px: 4,
                py: 2,
                borderRadius: "40px",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#00F2FE",
                  bgcolor: "rgba(0, 242, 254, 0.05)"
                }
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Explore Features Again?
            </Button>
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default RealEstateCTA;
