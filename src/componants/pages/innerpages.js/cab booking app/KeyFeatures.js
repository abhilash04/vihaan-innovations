import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Car, Smartphone, Users, Navigation, CreditCard, BarChart2 } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Fleet Management",
    description: "Manage vehicles and track fleet availability easily. Vehicle listing, category management, maintenance scheduling, and multi-fleet dashboard.",
  },
  {
    icon: Smartphone,
    title: "Online Ride Booking System",
    description: "Allow customers to book rides instantly through your website or mobile app with real-time availability and instant booking confirmation.",
  },
  {
    icon: Users,
    title: "Driver Management System",
    description: "Manage drivers and ride assignments efficiently with driver profiles, availability tracking, ride dispatch, and performance analytics.",
  },
  {
    icon: Navigation,
    title: "Ride Dispatch & Scheduling",
    description: "Automate ride dispatch with smart driver assignment, scheduled bookings, GPS ride tracking, and real-time ride status monitoring.",
  },
  {
    icon: CreditCard,
    title: "Payment & Billing Management",
    description: "Simplify billing with secure payment gateway integration, automated invoice generation, fare calculation, and multiple payment methods.",
  },
  {
    icon: BarChart2,
    title: "Reports & Analytics Dashboard",
    description: "Gain insights into business performance with ride booking reports, revenue analytics, driver performance reports, and PDF/Excel exports.",
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
        py: 8,
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
          Core Platform Features
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
          Comprehensive Car Booking Management System Features
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#666", // Muted title
            maxWidth: 700,
            mx: "auto",
            mb: 8,
            zIndex: 1,
            position: "relative",
          }}
        >
          Our car booking management system includes everything transportation businesses need to manage ride bookings, coordinate drivers, and operate fleets efficiently.
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
