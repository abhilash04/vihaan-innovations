import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Arjun Mehta",
    city: "Mumbai",
    car: "Booked Sedan",
    rating: 5,
    text: "Seamless booking process and extremely clean cars. Highly recommend for business trips!",
  },
  {
    name: "Sneha Rao",
    city: "Bangalore",
    car: "Booked SUV",
    rating: 5,
    text: "Great experience with the outstation rental. Driver was courteous and punctual.",
  },
  {
    name: "Rohan Das",
    city: "Delhi",
    car: "Booked Luxury",
    rating: 4,
    text: "The BMW was in top notch condition. Perfect for our wedding anniversary drive.",
  },
  {
    name: "Priya Sharma",
    city: "Pune",
    car: "Booked Electric",
    rating: 5,
    text: "Loved the Tesla rental! Very smooth ride and great support from the app team throughout.",
  },
  {
    name: "Vikram Singh",
    city: "Hyderabad",
    car: "Booked Hatchback",
    rating: 5,
    text: "Affordable and quick. Picked up the car in 5 mins from the hub. Ideal for city commute.",
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
          Section 8
        </Typography>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", color: "#1a1a1a", fontWeight: 800, mb: 2 }}
        >
          User Testimonials
        </Typography>
        <Typography
          sx={{ textAlign: "center", color: "#666", maxWidth: 600, mx: "auto", mb: 8 }}
        >
          See what our happy riders have to say about their journey with us.
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
