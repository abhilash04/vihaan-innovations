import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const deliverySteps = [
  { num: "01", title: "Discovery &\nCurriculum Mapping", sub: "" },
  { num: "02", title: "UX Design\n& Prototype", sub: "" },
  { num: "03", title: "Development\nSprints", sub: "" },
  { num: "04", title: "Content Migration\n& Testing", sub: "" },
  { num: "05", title: "Launch &\nGrowth Support", sub: "" },
];

const LMSDeliveryProcess = () => (
  <Box sx={{ bgcolor: "#1e3a5f", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Our Delivery Process</Typography>
      </Box>
      <Box sx={{ position: "relative", overflowX: "auto", px: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", minWidth: "800px", position: "relative" }}>
          {/* Connector line */}
          <Box sx={{ position: "absolute", top: "28px", left: "8%", right: "8%", height: "2px", bgcolor: "rgba(255,255,255,0.25)", zIndex: 1 }} />
          {deliverySteps.map((step, i) => (
            <Box key={i} sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2 }}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.12 }}>
                <Box sx={{ width: 56, height: 56, borderRadius: "50%", bgcolor: "#2563eb", border: "3px solid rgba(255,255,255,0.4)", boxShadow: "0 0 0 4px rgba(37,99,235,0.3)", display: "flex", justifyContent: "center", alignItems: "center", mb: 3, zIndex: 2 }}>
                  <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "15px" }}>{step.num}</Typography>
                </Box>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}>
                <Typography sx={{ fontWeight: 700, color: "#ffffff", fontSize: "13px", textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.4 }}>{step.title}</Typography>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default LMSDeliveryProcess;
