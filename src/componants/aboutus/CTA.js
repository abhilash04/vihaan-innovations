import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <Box sx={{ py: { xs: 8, md: 8 }, background: "#ffffff" }}>
      <Container maxWidth="lg">
        <Box component={motion.div} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} sx={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          borderRadius: "24px",
          p: { xs: 4, sm: 6, md: 8 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Abstract background shapes */}
          <Box sx={{ position: "absolute", top: "-50%", left: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(0, 180, 216, 0.2) 0%, transparent 70%)", borderRadius: "50%" }} />
          <Box sx={{ position: "absolute", bottom: "-50%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 70%)", borderRadius: "50%" }} />

          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography variant="h2" sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: { xs: "32px", md: "48px" }, color: "#ffffff", mb: 3 }}>
              Let's Build the Future Together.
            </Typography>
            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#94a3b8", mb: 5, maxWidth: "600px", mx: "auto" }}>
              Whether you need to scale an existing platform, design a new digital product, or digitally transform your enterprise, our engineers are ready.
            </Typography>
            <Button
              component={Link}
              to="/contact-us"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "16px",
                px: 5,
                py: 2,
                borderRadius: "30px",
                textTransform: "none",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 10px 20px rgba(0, 180, 216, 0.2)",
                "&:hover": { background: "linear-gradient(90deg, #0077b6 0%, #023e8a 100%)", transform: "translateY(-3px)", boxShadow: "0 15px 25px rgba(0, 180, 216, 0.3)" },
                transition: "all 0.3s ease"
              }}
            >
              Start a Conversation
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
