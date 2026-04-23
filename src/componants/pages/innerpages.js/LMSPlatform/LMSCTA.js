import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import PopUps from "../../../common/PopUps";

const LMSCTA = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Box sx={{ position: "relative", bgcolor: "#0f172a", py: 6, overflow: "hidden" }}>
      {/* Gradient glow */}
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "70%", height: "70%", background: "radial-gradient(ellipse, rgba(37,99,235,0.35) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }} />
      {/* Sparkles */}
      <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: "absolute", top: "18%", left: "10%", color: "#60a5fa", fontSize: 24 }}>✦</motion.div>
      <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} style={{ position: "absolute", bottom: "20%", right: "12%", color: "#34d399", fontSize: 20 }}>✦</motion.div>
      <motion.div animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }} style={{ position: "absolute", top: "40%", right: "20%", color: "#a78bfa", fontSize: 14 }}>●</motion.div>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "26px", md: "46px" }, mb: 5, lineHeight: 1.2 }}>
            Let’s build a powerful learning platform with expert LMS Website Development tailored to your needs.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "20px", fontWeight: 600, mb: 2 }}>
            Talk to our team. First consultation is free.
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpenPopup(true)}
            sx={{
              background: "linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "16px",
              px: 6,
              py: 2,
              borderRadius: "50px",
              textTransform: "none",
              boxShadow: "0 8px 30px rgba(37,99,235,0.5)",
              "&:hover": {
                background: "linear-gradient(90deg, #1d4ed8 0%, #6d28d9 100%)",
                transform: "translateY(-3px)",
                boxShadow: "0 14px 40px rgba(37,99,235,0.6)"
              },
              transition: "all 0.3s",
              mb: 4
            }}
          >
            Book a Free 45-min Discovery Call
          </Button>
          {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          {["View Live Demo", "Download Feature Plan"].map((link, i) => (
            <Typography key={i} sx={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "underline", cursor: "pointer", "&:hover": { color: "rgba(255,255,255,0.9)" } }}>
              {link}
            </Typography>
          ))}
        </Box> */}
        </motion.div>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default LMSCTA;
