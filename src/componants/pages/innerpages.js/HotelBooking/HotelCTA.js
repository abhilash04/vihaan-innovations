import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const HotelCTA = () => (
  <Box sx={{ position: "relative", bgcolor: "#0f2447", py: 10, overflow: "hidden" }}>
    <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "70%", height: "70%", background: "radial-gradient(ellipse, rgba(212,160,23,0.25) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }} />
    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: "absolute", top: "15%", left: "8%", color: "#d4a017", fontSize: 26 }}>✦</motion.div>
    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} style={{ position: "absolute", bottom: "18%", right: "10%", color: "#0f766e", fontSize: 22 }}>✦</motion.div>

    <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "26px", md: "46px" }, mb: 3, lineHeight: 1.2 }}>
          Ready to Grow Your Direct Bookings?
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", mb: 6 }}>
          Contact us today for custom hotel booking app development services and take control of your property’s revenue.
        </Typography>
        <Button variant="contained" sx={{ background: "linear-gradient(90deg, #d4a017 0%, #b8891a 100%)", color: "#0f172a", fontWeight: 900, fontSize: "16px", px: 7, py: 2.2, borderRadius: "50px", textTransform: "none", boxShadow: "0 10px 35px rgba(212,160,23,0.4)", "&:hover": { background: "linear-gradient(90deg, #b8891a 0%, #9a7215 100%)", transform: "translateY(-3px)", boxShadow: "0 16px 45px rgba(212,160,23,0.55)" }, transition: "all 0.3s", mb: 4 }}>
          Discuss Your Project
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          {["View Platform Demo", "Explore Features"].map((link, i) => (
            <Typography key={i} sx={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#d4a017" }, transition: "color 0.2s" }}>
              {link}
            </Typography>
          ))}
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default HotelCTA;
