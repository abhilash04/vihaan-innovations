import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

// Simple text logos since we can't load external images
const integrationLogos = [
  { label: "Google Maps", bg: "#ffffff", color: "#4285F4", initial: "G" },
  { label: "Stripe", bg: "#635bff", color: "#ffffff", initial: "S" },
  { label: "Razorpay", bg: "#02042B", color: "#3395FF", initial: "R" },
  { label: "PayU", bg: "#ffffff", color: "#21a046", initial: "P" },
  { label: "WhatsApp\nBusiness API", bg: "#25D366", color: "#ffffff", initial: "W" },
  { label: "Google\nAnalytics", bg: "#ee6f28", color: "#ffffff", initial: "A" },
  { label: "SMS\nGateway", bg: "#7c3aed", color: "#ffffff", initial: "S" },
];

const ListingIntegrations = () => {
  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 14 }}>
      <Container maxWidth="md">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            Integrations
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px" }}>
            Compatible tech stacks to integrate to.
          </Typography>
        </Box>

        {/* Integration Cloud Container */}
        <Paper elevation={0} sx={{ p: 6, borderRadius: "24px", bgcolor: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center", alignItems: "center" }}>
            {integrationLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.1 }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                  <Box sx={{
                    width: 60, height: 60, borderRadius: "16px",
                    bgcolor: logo.bg,
                    display: "flex", justifyContent: "center", alignItems: "center",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    border: logo.bg === "#ffffff" ? "1px solid #e2e8f0" : "none"
                  }}>
                    <Typography sx={{ color: logo.color, fontWeight: 900, fontSize: "22px" }}>
                      {logo.initial}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: "#666", fontSize: "12px", textAlign: "center", lineHeight: 1.2, whiteSpace: "pre-line" }}>
                    {logo.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Paper>

      </Container>
    </Box>
  );
};

export default ListingIntegrations;
