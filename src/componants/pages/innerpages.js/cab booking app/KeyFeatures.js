import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Zap, Navigation, Clock, ShieldCheck, Headphones, SlidersHorizontal, Car } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book a car in under 60 seconds with real-time availability and instant confirmation",
  },
  {
    icon: Navigation,
    title: "GPS Live Tracking",
    description: "Track your ride and vehicle location in real time from the app",
  },
  {
    icon: Clock,
    title: "Flexible Rentals",
    description: "Hourly, daily, weekly rental options to match any travel need",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Multiple payment options including UPI, cards, wallets, and pay-later",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support via chat, call, and in-app help center",
  },
  {
    icon: SlidersHorizontal,
    title: "Smart Filters",
    description: "Filter cars by type, fuel, transmission, brand, seats, and price range",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const KeyFeatures = () => {
  return (
    <Box
      sx={{
        py: 12,
        px: 4,
        background: "#ffffff", // Light background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Watermark - Car Silhouette */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          opacity: 0.03, 
          pointerEvents: "none",
          zIndex: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Car size={800} strokeWidth={0.5} color="#000" />
      </Box>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "transparent",
            background: "linear-gradient(135deg, #f78361 0%, #fd544e 100%)",
            WebkitBackgroundClip: "text",
            fontWeight: 600,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            mb: 1,
            zIndex: 1,
            position: "relative",
          }}
        >
          Section 4
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "#1a1a1a", // Dark title
            fontWeight: 800,
            mb: 2,
            zIndex: 1,
            position: "relative",
          }}
        >
          Key Features
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#666", // Muted title
            maxWidth: 600,
            mx: "auto",
            mb: 8,
            zIndex: 1,
            position: "relative",
          }}
        >
          Everything you need for a smooth and comfortable ride booking experience.
        </Typography>
      </motion.div>

      {/* Grid container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: "auto", zIndex: 1, position: "relative" }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={cardVariants}>
                  <Box
                    sx={{
                      p: 4,
                      background: "linear-gradient(135deg, #f78361 0%, #fd544e 100%)", // Gradient Card
                      borderRadius: "16px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      boxShadow: "0 8px 25px rgba(253, 84, 78, 0.15)",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 15px 35px rgba(253, 84, 78, 0.3)",
                      },
                    }}
                  >
                    {/* Icon Box */}
                    <Box
                      className="icon-box"
                      sx={{
                        p: 1.5,
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.15)", // Overlay transparent white
                        color: "#ffffff",
                        mb: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={24} />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#ffffff", // White text inside card
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: "18px",
                      }}
                    >
                      {feature.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.85)", // Muted white
                        fontSize: "14px",
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default KeyFeatures;
