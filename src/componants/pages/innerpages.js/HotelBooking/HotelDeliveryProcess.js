import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Project Planning", sub: "We start by understanding your requirements, business goals, and project scope. This helps us create a strong foundation for the entire project." },
  { num: "02", title: "UI/UX Design\n& Prototype", sub: "Our team designs wireframes and user-friendly interfaces to ensure a smooth and engaging user experience before development begins." },
  { num: "03", title: "Development Phases", sub: "We use an agile development approach with regular updates, allowing flexibility and continuous improvements during the development process." },
  { num: "04", title: "Testing &\nQuality Assurance", sub: "The platform is thoroughly tested to identify and fix bugs, ensuring smooth performance and system stability." },
  { num: "05", title: "Launch &\nOngoing Support", sub: "After deployment, we provide continuous support, updates, and improvements to keep the platform running efficiently." },
];

const HotelDeliveryProcess = () => (
  <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography sx={{ color: "#0f766e", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Our Delivery Process</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>
          Step-by-Step Development Approach for Custom Platforms
        </Typography>
        <Typography sx={{ color: "#64748b", fontSize: "16px", mb: 1, maxWidth: "600px", mx: "auto" }}>
          As a trusted hotel booking app development company, we follow a clear and structured process to deliver scalable and high-performance booking solutions.
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
