import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
  { value: "40%", title: "Faster Onboarding", desc: "Digital admissions reducing queues." },
  { value: "30%", title: "Less Revenue Leaks", desc: "Linked item billing auto checks." },
  { value: "98%", title: "Data Accuracy", desc: "No manual prescription errors setups." },
  { value: "10k+", title: "Consults/Day", desc: "Large networks driving care curves." },
  { value: "24/7", title: "Support Desk", desc: "Ensuring 100% accurate switchovers index." }
];

const HMSResults = () => {
  return (
    <Box sx={{ background: "#0A2D6E", py: 8, position: "relative", overflow: "hidden" }}>
      {/* ECG Line Background Watermark */}
      <Box sx={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "100px", opacity: 0.04, transform: "translateY(-50%)", zIndex: 0 }}>
        <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M 0 50 L 200 50 L 210 40 L 220 70 L 230 30 L 240 50 L 400 50 L 410 20 L 420 80 L 430 50 L 600 50 L 610 45 L 620 50 L 1000 50" fill="none" stroke="#ffffff" strokeWidth="3" />
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={2} justifyContent="center" sx={{ px: 2 }}>
          {stats.map((item, index) => (
            <Grid item xs={6} md={2.4} key={index} sx={{ borderRight: index < stats.length - 1 ? { xs: "none", md: "1px solid rgba(255,255,255,0.1)" } : "none", textAlign: "center" }}>
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} style={{ padding: "10px" }}>
                <Typography sx={{ color: "#ffffff", fontWeight: 900, fontSize: { xs: "24px", md: "34px" }, mb: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {item.value}
                </Typography>
                <Typography sx={{ color: "#10B981", fontWeight: 800, fontSize: "12px", mb: 0.5 }}>{item.title}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "11px" }}>{item.desc}</Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HMSResults;
