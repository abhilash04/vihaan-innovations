import React from "react";
import { Box, Container, Typography, Avatar, Card } from "@mui/material";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { styled, keyframes } from "@mui/system";

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

// Animations for infinite scroll
const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeRow = styled(Box)(({ direction }) => ({
  display: "flex",
  width: "max-content",
  animation: `${direction === "right" ? scrollRight : scrollLeft} 30s linear infinite`,
  "&:hover": {
    animationPlayState: "paused",
  },
}));

const ReviewCard = styled(Card)(({ theme }) => ({
  width: "380px",
  minWidth: "380px",
  margin: "0 15px",
  padding: "24px",
  borderRadius: "24px",
  background: "#ffffff",
  border: "1px solid rgba(253, 84, 78, 0.15)", // Using theme accent color (fd544e)
  boxShadow: "0 10px 30px rgba(253, 84, 78, 0.05)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "160px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 40px rgba(253, 84, 78, 0.12)",
    borderColor: "#fd544e",
  },
}));

const ReviewCardContent = ({ item }) => (
  <ReviewCard elevation={0}>
    {/* Top section: Avatar and Text */}
    <Box sx={{ display: "flex", flex: 1, gap: 2, mb: 1 }}>
      <Avatar
        sx={{
          width: 110,
          height: 110,
          bgcolor: "#fdf5f5", // Light tint of red/coral
          color: "#fd544e",
          fontWeight: 800,
          fontSize: "32px",
          borderRadius: "50%",
          border: "1.5px solid rgba(253, 84, 78, 0.2)",
          overflow: "hidden",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {item.name.charAt(0)}
      </Avatar>

      <Typography
        sx={{
          fontSize: "13px",
          color: "#4a4a4a",
          lineHeight: 1.4,
          fontStyle: "italic",
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          flex: 1
        }}
      >
        "{item.text}"
      </Typography>
    </Box>

    {/* Bottom Section */}
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 1.5, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
      <Box sx={{ flex: 1 }}>
        <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px", lineHeight: 1.2 }}>
          {item.name}
        </Typography>
        <Typography sx={{ fontSize: "11px", color: "#666666", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {item.city} • <span style={{ color: "#fd544e", fontWeight: 600 }}>{item.car}</span>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 0.25, color: "#ffd700", ml: 1 }}>
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} size={14} fill="#ffd700" color="#ffd700" />
        ))}
      </Box>
    </Box>
  </ReviewCard>
);

const Testimonials = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(180deg, #ffffff 0%, #fffbfb 100%)", // Replaced white with subtle gradient to match premium feel
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

      {/* Row 1: Scrolling Right */}
      <Box sx={{ mb: 4 }}>
        <MarqueeRow direction="right">
          {[...reviews, ...reviews, ...reviews].map((item, idx) => (
            <ReviewCardContent key={`r1-${idx}`} item={item} />
          ))}
        </MarqueeRow>
      </Box>

      {/* Row 2: Scrolling Left */}
      <Box>
        <MarqueeRow direction="left">
          {[...reviews, ...reviews, ...reviews].map((item, idx) => (
            <ReviewCardContent key={`r2-${idx}`} item={item} />
          ))}
        </MarqueeRow>
      </Box>
    </Box>
  );
};

export default Testimonials;
