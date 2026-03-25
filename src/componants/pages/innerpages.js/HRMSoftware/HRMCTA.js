import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const HRMCTA = () => (
  <Box sx={{ background: "linear-gradient(135deg, #0A1E3F 0%, #112A46 100%)", py: 8, position: "relative", overflow: "hidden" }}>
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "28px", md: "42px" }, lineHeight: 1.2, mb: 3, fontFamily: "Fira Sans" }}>
            Ready to Streamline Your<br />
            Workforce <Box component="span" sx={{ color: "#f97316", background: "linear-gradient(90deg, #f97316, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Operations?</Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", mb: 2, maxWidth: "600px", mx: "auto" }}>
            Transform the way you manage your team with a powerful employee management system application built to automate HR tasks, boost productivity, and ensure secure workforce management.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button variant="contained" sx={{ bgcolor: "#f97316", color: "#fff", fontWeight: 800, px: 4, py: 1.5, borderRadius: "25px", textTransform: "none", boxShadow: "0 6px 20px rgba(249,115,22,0.4)", "&:hover": { bgcolor: "#ea580c" } }}>
              Start Free Trial
            </Button>
            <Button variant="outlined" sx={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff", fontWeight: 800, px: 4, py: 1.5, borderRadius: "25px", textTransform: "none", "&:hover": { borderColor: "#fff" } }}>
              Request Demo
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default HRMCTA;
