import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const CTASection = ({ data }) => {
  const {
    title = (
      <>
        Ready to Transform Your<br />Business With Technology?
      </>
    ),
    description = (
      <>
        Let's map out your ideal solution.<br />
        Book a free 45-minute discovery call. We'll formulate a custom strategy breakdown for your enterprise
      </>
    ),
    buttonText = "Get Started Today",
    brandText = "Vihaan Innovations"
  } = data || {};

  return (
    <Box sx={{ position: "relative", background: "linear-gradient(135deg, #fce7f3 0%, #e0f2fe 40%, #ccfbf1 100%)", pt: 12, pb: 6, overflow: "hidden" }}>

      {/* Top Wave */}
      <Box sx={{ position: "absolute", top: -1, left: 0, width: "100%", zIndex: 1, transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,50 C300,100 500,0 800,50 C1100,100 1200,30 1440,0 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </Box>

      {/* Starry Night Effects (Adapted for light theme) */}
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.8 }}>
        <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: "absolute", top: "20%", left: "15%", color: "#5138c2", fontSize: "20px" }}>✦</motion.div>
        <motion.div animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} style={{ position: "absolute", top: "60%", left: "10%", color: "#299bfc", fontSize: "14px" }}>✦</motion.div>
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }} style={{ position: "absolute", top: "30%", right: "20%", color: "#db2777", fontSize: "24px" }}>✦</motion.div>
        <motion.div animate={{ opacity: [0.1, 0.6, 0.1] }} transition={{ repeat: Infinity, duration: 5, delay: 2 }} style={{ position: "absolute", bottom: "25%", right: "15%", color: "#5138c2", fontSize: "30px" }}>✦</motion.div>

        {/* Soft bottom glow */}
        <Box sx={{ position: "absolute", bottom: "-30%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "60%", background: "radial-gradient(ellipse, rgba(41, 155, 252, 0.2) 0%, rgba(255, 255, 255, 0) 70%)", filter: "blur(60px)" }} />
      </Box>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center" }}>

            <Typography variant="h2" sx={{ fontWeight: 800, color: "#0a1628", fontSize: { xs: "36px", md: "52px" }, mb: 3, lineHeight: 1.2, fontFamily: "Urbanist, sans-serif" }}>
              {title}
            </Typography>

            <Typography sx={{ color: "#3b4656", fontSize: "18px", mb: 6, maxWidth: "600px", mx: "auto", lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}>
              {description}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
              <Button
                sx={{
                  background: "linear-gradient(90deg, #5138c2 0%, #299bfc 100%)",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "18px",
                  px: 6,
                  py: 2,
                  borderRadius: "40px",
                  textTransform: "none",
                  boxShadow: "0 10px 30px rgba(81, 56, 194, 0.25)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #442ea3 0%, #1e85de 100%)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 40px rgba(81, 56, 194, 0.4)",
                  },
                  transition: "all 0.3s"
                }}
              >
                Get Started Today
              </Button>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748b", cursor: "pointer", "&:hover": { color: "#0a1628" }, transition: "color 0.3s" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "15px", fontFamily: "Inter, sans-serif" }}>{brandText}</Typography>
              </Box>
            </Box>

          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTASection;
