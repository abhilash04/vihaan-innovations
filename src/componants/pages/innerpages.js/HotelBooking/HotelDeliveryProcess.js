import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Full Stack\nPlanning", sub: "Discovery, scope, requirements" },
  { num: "02", title: "UX Design\n& Prototype", sub: "Wireframes, UI approval" },
  { num: "03", title: "Development\nSprints", sub: "Agile 2-week build cycles" },
  { num: "04", title: "3D Custom\nSupport", sub: "QA, testing, content migration" },
  { num: "05", title: "Launch &\nGrowth Support", sub: "Go-live + 60 days support" },
];

const HotelDeliveryProcess = () => (
  <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography sx={{ color: "#0f766e", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Our Delivery Process</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" } }}>
          Step-by-Step Delivery Method for Custom Platforms
        </Typography>
      </Box>
      <Box sx={{ overflowX: "auto" }}>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", minWidth: "800px", position: "relative", px: 4 }}>
          {/* Connector */}
          <Box sx={{ position: "absolute", top: "28px", left: "8%", right: "8%", height: "2px", background: "linear-gradient(90deg, #d4a017, #0f766e)", zIndex: 1 }} />
          {steps.map((step, i) => (
            <Box key={i} sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2 }}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.12 }}>
                <Box sx={{ width: 56, height: 56, borderRadius: "50%", background: i < 3 ? "linear-gradient(135deg, #d4a017, #b8891a)" : "linear-gradient(135deg, #0f766e, #0d5f59)", display: "flex", justifyContent: "center", alignItems: "center", mb: 3, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}>
                  <Typography sx={{ color: "#ffffff", fontWeight: 900, fontSize: "15px" }}>{step.num}</Typography>
                </Box>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }} style={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "13px", whiteSpace: "pre-line", lineHeight: 1.4, mb: 0.5 }}>{step.title}</Typography>
                <Typography sx={{ color: "#94a3b8", fontSize: "11px", lineHeight: 1.3 }}>{step.sub}</Typography>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default HotelDeliveryProcess;
