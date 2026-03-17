import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const integrations = [
  { name: "Booking.com", color: "#003580", letter: "B" },
  { name: "Airbnb", color: "#FF5A5F", letter: "A" },
  { name: "TripAdvisor", color: "#00AA6C", letter: "TA" },
  { name: "Expedia", color: "#F5A623", letter: "Ex" },
  { name: "MakeMyTrip", color: "#e31837", letter: "M" },
  { name: "Stripe", color: "#635bff", letter: "S" },
  { name: "Razorpay", color: "#3395ff", letter: "R" },
  { name: "WhatsApp", color: "#25D366", letter: "W" },
  { name: "Zapier", color: "#f97316", letter: "Z" },
  { name: "Google Hotel\nAds", color: "#4285F4", letter: "G" },
  { name: "Twilio\nSMS", color: "#f22f46", letter: "T" },
  { name: "Vihaan\nCentral API", color: "#0f766e", letter: "V" },
];

const HotelIntegrations = () => (
  <Box sx={{ bgcolor: "#f8fafc", py: 14 }}>
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography sx={{ color: "#0f766e", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Integrations</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>
          Seamless Integration with the Hospitality Ecosystem
        </Typography>
      </Box>
      <Paper elevation={0} sx={{ p: 6, borderRadius: "28px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 15px 50px rgba(0,0,0,0.04)" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", alignItems: "center" }}>
          {integrations.map((intg, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ scale: 1.12, y: -4 }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, cursor: "pointer" }}>
                <Box sx={{ width: 60, height: 60, borderRadius: "16px", bgcolor: `${intg.color}18`, border: `2px solid ${intg.color}35`, display: "flex", justifyContent: "center", alignItems: "center", color: intg.color, fontWeight: 900, fontSize: "14px" }}>
                  {intg.letter}
                </Box>
                <Typography sx={{ fontWeight: 600, color: "#64748b", fontSize: "11px", textAlign: "center", lineHeight: 1.2, whiteSpace: "pre-line" }}>{intg.name}</Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Paper>
    </Container>
  </Box>
);

export default HotelIntegrations;
