import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajan Mehta",
    city: "Mumbai",
    car: "Taxi Fleet Operator",
    rating: 5,
    text: "The car booking management system completely transformed how we manage our 200+ taxi fleet. Driver dispatch is fully automated now.",
  },
  {
    name: "Sneha Rao",
    city: "Bangalore",
    car: "Car Rental Business",
    rating: 5,
    text: "Our car rental bookings increased by 40% after switching to this platform. The online booking system is seamless for customers.",
  },
  {
    name: "Rohan Das",
    city: "Delhi",
    car: "Corporate Transport Manager",
    rating: 5,
    text: "Managing employee transportation for 500+ staff was a nightmare before. Now everything is automated — bookings, billing, and reports.",
  },
  {
    name: "Priya Sharma",
    city: "Pune",
    car: "Travel Agency Owner",
    rating: 5,
    text: "The ride scheduling and payment automation features have saved us hours of manual work every week. Highly recommended platform.",
  },
  {
    name: "Vikram Singh",
    city: "Hyderabad",
    car: "Ride-Hailing Startup",
    rating: 5,
    text: "We launched our local ride-hailing service using this platform in under a month. The dispatch system and driver app work flawlessly.",
  },
];

const Row = ({ items, reverse = false }) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <Box
      sx={{
        display: "flex",
        width: "max-content",
        gap: 3,
        position: "relative",
      }}
    >
      <motion.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        style={{
          display: "flex",
          gap: "24px",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "350px",
              background: "#ffffff", // White background for cards
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderRadius: "16px",
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.03)",
              transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                borderColor: "rgba(253, 84, 78, 0.2)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
              },
            }}
          >
            <Box>
              {/* Stars */}
              <Box sx={{ display: "flex", gap: 0.5, mb: 1.5 }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} color="#ffd700" fill="#ffd700" />
                ))}
              </Box>

              {/* Review Text */}
              <Typography
                sx={{
                  color: "#444", // Dark text for reviews
                  fontSize: "14px",
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                "{item.text}"
              </Typography>
            </Box>

            {/* Reviewer Details */}
            <Box>
              <Typography sx={{ color: "#1a1a1a", fontWeight: 700, fontSize: "15px" }}>
                {item.name}
              </Typography>
              <Typography sx={{ color: "#666", fontSize: "12px" }}>
                {item.city} • <span style={{ color: "#fd544e", fontWeight: 600 }}>{item.car}</span>
              </Typography>
            </Box>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

const Testimonials = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "#ffffff", // Light background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#fd544e",
            fontWeight: 600,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Client Success Stories
        </Typography>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", color: "#1a1a1a", fontWeight: 800, mb: 2 }}
        >
          What Transportation Businesses Say
        </Typography>
        <Typography
          sx={{ textAlign: "center", color: "#666", maxWidth: 600, mx: "auto", mb: 8 }}
        >
          See how transportation businesses are growing with our car booking management platform.
        </Typography>
      </motion.div>

      {/* Ticker Rows */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, overflow: "hidden" }}>
        <Row items={reviews} reverse={false} />
        <Row items={reviews} reverse={true} />
      </Box>
    </Box>
  );
};

export default Testimonials;
