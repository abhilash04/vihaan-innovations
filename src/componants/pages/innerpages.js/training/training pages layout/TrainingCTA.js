import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const TrainingCTA = ({ data = {} }) => {
  const { title, subtitle, primaryButton, secondaryButton, footerText } = data;
  return (
    <Box sx={{ position: "relative", bgcolor: "#0f172a", py: { xs: 10, md: 15 }, overflow: "hidden" }}>

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

            <Typography sx={{ color: "#ffffff", fontSize: { xs: "32px", md: "48px" }, mb: 2, lineHeight: 1.2, fontWeight: 800 }}>
              {title || (<>Ready to Become an <span style={{ color: "#00b4d8" }}>Expert</span>?</>)}
            </Typography>

            <Typography sx={{ color: "#cbd5e1", fontSize: "18px", mb: 8, opacity: 0.9, maxWidth: "600px", mx: "auto" }}>
              {subtitle || "Join 1200+ professionals who have transformed their careers with Vihaan Innovations Academy. Master core skills and land high-paying roles."}
            </Typography>


            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "16px",
                  px: 6,
                  py: 2.2,
                  borderRadius: "40px",
                  textTransform: "none",
                  boxShadow: "0 10px 30px rgba(0, 180, 216, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #0077b6 0%, #023e8a 100%)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 35px rgba(0, 180, 216, 0.5)",
                  },
                  transition: "all 0.3s"
                }}
              >
                {primaryButton || "Enroll Now →"}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "16px",
                  px: 6,
                  py: 2.2,
                  borderRadius: "40px",
                  textTransform: "none",
                  "&:hover": { borderColor: "#ffffff", background: "rgba(255,255,255,0.1)", transform: "translateY(-3px)" },
                  transition: "all 0.3s ease",
                }}
              >
                {secondaryButton || "Download Syllabus"}
              </Button>
            </Stack>

            <Typography sx={{ mt: 6, color: "rgba(255,255,255,0.5)", fontSize: "14px", fontWeight: 600 }}>
               {footerText || "* New batch starting this Monday. Limited slots left."}
            </Typography>

          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TrainingCTA;
