import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Taxi Companies — Manage taxis, drivers, and ride bookings efficiently",
  "Car Rental Businesses — Simplify vehicle rental bookings and fleet ops",
  "Travel Agencies — Coordinate transportation services for travelers",
  "Corporate Transport Services — Manage employee transportation fleets",
  "Ride-Hailing Startups — Launch your own Uber-style ride booking platform",
  "Airport Transfer Services — Manage scheduled airport pickup & drop rides",
];

const BusinessRentals = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a", // base dark
      }}
    >
      <Grid container sx={{ minHeight: "500px" }}>
        {/* Left Side - Dark theme */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "#ffffff", // Light background
            p: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fd544e",
                fontWeight: 600,
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Who Uses This Platform
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "#1a1a1a", fontWeight: 800, mb: 2, lineHeight: 1.2 }}
            >
              Who Should Use a Car Booking Management System
            </Typography>
            <Typography sx={{ color: "#555", fontSize: "16px", mb: 4, maxWidth: "450px" }}>
              This platform is designed for transportation businesses of all sizes — from taxi fleets and car rentals to ride-hailing startups and corporate transport services.
            </Typography>

            <Button
              variant="contained"
              sx={{
                background: "transparent",
                color: "#1a1a1a",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "24px",
                px: 3,
                py: 1.2,
                textTransform: "none",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                "&:hover": {
                  background: "rgba(0,0,0,0.03)",
                  borderColor: "#fd544e",
                },
                transition: "all 0.3s ease",
              }}
            >
              Get Your Car Booking Platform <ArrowRight size={18} color="#fd544e" />
            </Button>
          </motion.div>
        </Grid>

        {/* Right Side - Accent Gradient with features */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "linear-gradient(135deg, #f78361 0%, #fd544e 100%)",
            p: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Vertical dividing glow line using absolute box with height and shadow */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "2px",
              background: "#fff",
              opacity: 0.3,
              boxShadow: "0 0 10px #fff",
              display: { xs: "none", md: "block" },
            }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.2)",
                p: { xs: 3, md: 5 },
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Grid container spacing={2}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      style={{ display: "flex", alignItems: "center", gap: 12 }}
                    >
                      <CheckCircle size={20} color="#fff" />
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        {feature}
                      </Typography>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessRentals;
