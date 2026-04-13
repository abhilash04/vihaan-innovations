import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  BarChart2,
  Bell,
  CheckCircle,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <CalendarDays size={24} color="#D4AF37" />,
    title: "Resort Property Management",
    desc: "Manage all your resort properties from one dashboard.",
    bullets: ["Add and manage multiple properties", "List rooms and villas easily", "Control admin roles and permissions", "Switch between properties quickly"],
  },
  {
    icon: <Globe size={24} color="#D4AF37" />,
    title: "Online Booking & Reservation System",
    desc: "Make booking simple for your guests.",
    bullets: ["Show real-time room availability", "Instant booking confirmation", "Secure online payments", "Automatic booking notifications"],
  },
  {
    icon: <Users size={24} color="#D4AF37" />,
    title: "Guest Management System",
    desc: "Keep all guest details organized.",
    bullets: ["Store complete guest profiles", "Track booking history", "Manage guest requests and feedback", "Allow booking changes easily"],
  },
  {
    icon: <CheckCircle size={24} color="#D4AF37" />,
    title: "Room & Availability Management",
    desc: "Avoid overbooking and manage rooms better.",
    bullets: ["Real-time room availability", "Track occupancy", "Smart room allocation", "Calendar-based dashboard"],
  },
  {
    icon: <Bell size={24} color="#D4AF37" />,
    title: "Resort Operations Management",
    desc: "Handle daily operations smoothly.",
    bullets: ["Manage staff and services", "Track maintenance requests", "Monitor expenses and utilities", "Store documents digitally"],
  },
  {
    icon: <BarChart2 size={24} color="#D4AF37" />,
    title: "Reports & Analytics Dashboard",
    desc: "Understand your business performance.",
    bullets: ["Booking and revenue reports", "Occupancy insights", "Guest behavior analysis", "Export reports (PDF/Excel)"],
  },
];

const ResortFeatures = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#0A111E", // Dark Navy
        color: "#F5F5F0",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3rem" },
                mb: 2,
              }}
            >
              Comprehensive Resort Website Development Features
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                color: "rgba(245, 245, 240, 0.7)",
                fontSize: "1.1rem",
                maxWidth: "700px",
                margin: "0 auto",
                mb: 4,
              }}
            >
              We provide everything your resort needs to build a strong online presence and manage bookings easily. Our system helps you attract more guests and increase direct bookings.
            </Typography>
            {/* Underline Animation */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                height: "4px",
                background: "#D4AF37",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            />
          </motion.div>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={3} alignItems="stretch">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                    p: 4,
                    borderRadius: "16px",
                    height: "80%",
                    borderTop: "3px solid #D4AF37",
                    border: "1px solid rgba(245, 245, 240, 0.03)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(212, 175, 55, 0.4)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      bgcolor: "rgba(212, 175, 55, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "rgba(212, 175, 55, 0.2)",
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      mb: 1.5,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "rgba(245, 245, 240, 0.7)",
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.desc}
                  </Typography>
                  <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                    {feature.bullets.map((bullet, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          fontSize: "0.85rem",
                          color: "rgba(245, 245, 240, 0.5)",
                          mb: 0.8,
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        <Box
                          sx={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            bgcolor: "#D4AF37",
                          }}
                        />
                        {bullet}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ResortFeatures;
