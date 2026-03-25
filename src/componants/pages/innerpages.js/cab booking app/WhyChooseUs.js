import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle2, Star, TrendingUp, Globe } from "lucide-react";

const carImageUrl = "https://images.unsplash.com/photo-1549399542-7e3f8b79c340?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const benefits = [
  "Customers Can Book Rides Instantly Online — No more phone calls. Customers check availability and book rides from any device in seconds.",
  "Drivers Are Automatically Assigned — Smart auto-dispatch eliminates manual coordination and reduces response time significantly.",
  "Fleet Availability Updated in Real Time — Always know which vehicles are available, in-use, or under maintenance at any moment.",
  "Payments and Billing Are Fully Automated — Integrated payment gateways, automated invoices, and fare calculations in one system.",
];

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 4, md: 8 },
        background: "#ffffff", // Light background
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={6} alignItems="center" sx={{ maxWidth: 1300, mx: "auto" }}>
        {/* Left Column - Benefits */}
        <Grid item xs={12} md={6}>
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
              Built for Transportation Businesses
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "#1a1a1a", fontWeight: 800, mb: 2, lineHeight: 1.2 }}
            >
              The Future of Ride Booking Starts With Smart Car Booking Software
            </Typography>
            <Typography sx={{ color: "#555", mb: 5, fontSize: "16px" }}>
              Traditional ride booking systems rely on manual processes that limit growth. Our car booking management platform transforms the entire workflow into an automated digital system.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {benefits.map((benefit, index) => {
                const [title, desc] = benefit.split(" — ");
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
                  >
                    <Box sx={{ mt: 0.5 }}>
                      <CheckCircle2 size={24} color="#fd544e" />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#1a1a1a",
                          fontWeight: 700,
                          fontSize: "16px",
                          mb: 0.5,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography sx={{ color: "#666", fontSize: "14px" }}>
                        {desc}
                      </Typography>
                    </Box>
                  </motion.div>
                );
              })}
            </Box>
          </motion.div>
        </Grid>

        {/* Right Column - Visual with Floating Stats */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "350px", md: "500px" },
          }}
        >
          {/* Main Car Image with Gradient Blend */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${carImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "24px",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0) 100%)", // blend to white
                  borderRadius: "24px",
                },
              }}
            />
          </motion.div>

          {/* Floating Stat Card 1: 10K+ */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            style={{
              position: "absolute",
              top: "15%",
              right: "10%",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.85)", // White Glass
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,0,0,0.04)",
                borderRadius: "16px",
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
              }}
            >
              <TrendingUp size={20} color="#f78361" />
              <Box>
                <Typography sx={{ color: "#1a1a1a", fontWeight: 800, fontSize: "18px" }}>
                  10K+
                </Typography>
                <Typography sx={{ color: "#666", fontSize: "11px" }}>
                  Cars Available
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Floating Stat Card 2: 50+ Cities */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: "20%",
              left: "5%",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,0,0,0.04)",
                borderRadius: "16px",
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
              }}
            >
              <Globe size={20} color="#fd544e" />
              <Box>
                <Typography sx={{ color: "#1a1a1a", fontWeight: 800, fontSize: "18px" }}>
                  50+
                </Typography>
                <Typography sx={{ color: "#666", fontSize: "11px" }}>
                  Cities Covered
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Floating Stat Card 3: 4.8 Rating */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            style={{
              position: "absolute",
              bottom: "25%",
              right: "5%",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,0,0,0.04)",
                borderRadius: "16px",
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
              }}
            >
              <Star size={20} color="#f78361" fill="#f78361" />
              <Box>
                <Typography sx={{ color: "#1a1a1a", fontWeight: 800, fontSize: "18px" }}>
                  4.8 ★
                </Typography>
                <Typography sx={{ color: "#666", fontSize: "11px" }}>
                  App Rating
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
