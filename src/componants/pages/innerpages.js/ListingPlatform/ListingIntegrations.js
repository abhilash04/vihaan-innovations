import React from "react";
import { Box, Container, Typography, Paper, Grid, useTheme, useMediaQuery } from "@mui/material";
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

const Bubble = ({ size, color, top, left, right, bottom, delay }) => (
  <motion.div
    animate={{
      y: [0, -12, 0],
      scale: [1, 1.03, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      top, left, right, bottom,
      zIndex: 0,
      filter: "blur(40px)",
      opacity: 0.12,
      pointerEvents: "none",
    }}
  />
);

const ListingIntegrations = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#f8fafc", py: isMobile ? 6 : 8, position: "relative", overflow: "hidden" }}>

      <Bubble size={300} color="#3b82f6" top="-80px" left="-80px" delay={0} />
      <Bubble size={250} color="#ec4899" bottom="-80px" right="-80px" delay={1} />
      <Bubble size={200} color="#10b981" top="30%" right="10%" delay={2} />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: isMobile ? 4 : 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: isMobile ? "1.75rem" : "2.1rem", mb: 1.5 }}>
            Seamless Integrations
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "15px" }}>
            Connect with critical business toolkits tech stacks ecosystem.
          </Typography>
        </Box>

        {/* Integration Cloud Container */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: isMobile ? 3 : 6, 
            borderRadius: "24px", 
            bgcolor: "#ffffff", 
            border: "1px solid rgba(0,0,0,0.04)", 
            boxShadow: "0 10px 40px rgba(0,0,0,0.03)" 
          }}
        >
          {/* Replacing Flex with Grid for rigid symmetry */}
          <Grid container spacing={isMobile ? 2 : 3} justifyContent="center" alignItems="center">
            {integrationLogos.map((logo, index) => (
              <Grid item xs={isMobile ? 4 : 6} sm={4} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
                    <Box sx={{
                      width: isMobile ? 55 : 65, 
                      height: isMobile ? 55 : 65, 
                      borderRadius: "18px", // smooth curved square
                      bgcolor: logo.bg,
                      display: "flex", 
                      justifyContent: "center", 
                      alignItems: "center",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                      border: logo.bg === "#ffffff" ? "1px solid #e2e8f0" : "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.12)"
                      }
                    }}>
                      <Typography sx={{ color: logo.color, fontWeight: 900, fontSize: isMobile ? "20px" : "24px", letterSpacing: -1 }}>
                        {logo.initial}
                      </Typography>
                    </Box>
                    <Typography 
                      sx={{ 
                        fontWeight: 700, 
                        color: "#444", 
                        fontSize: "12px", 
                        textAlign: "center", 
                        lineHeight: 1.3, 
                        whiteSpace: "pre-line" 
                      }}
                    >
                      {logo.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Paper>

      </Container>
    </Box>
  );
};

export default ListingIntegrations;
