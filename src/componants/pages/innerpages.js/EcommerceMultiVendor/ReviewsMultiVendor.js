import React, { useState } from "react";
import { Box, Container, Typography, Avatar, Card } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// ✅ Importing images
import ganeshImg from "../../../../assets/ganesh1.png";
import abhi1Img from "../../../../assets/abhi.png";

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
  border: "1px solid rgba(0, 191, 255, 0.15)",
  boxShadow: "0 10px 30px rgba(0, 191, 255, 0.05)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "160px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 40px rgba(0, 191, 255, 0.12)",
    borderColor: "#00bfff",
  },
}));

const reviews = [
  { id: 1, name: "Ramesh Kumar", role: "Marketplace Owner", review: "Vihaan Innovations developed our multi-vendor marketplace perfectly. The platform is fast, scalable, and easy for vendors to manage.", rating: 5 },
  { id: 2, name: "Anita Sharma", role: "Real Estate Consultant", review: "Our real estate CRM website works smoothly and helps us manage property leads efficiently.", rating: 5 },
  { id: 3, name: "Rahul Verma", role: "Online Store Owner", review: "The team delivered a modern eCommerce website with great design and fast loading speed.", rating: 5 },
  { id: 4, name: "Sanjay Patel", role: "Retail Business Owner", review: "We loved the UI/UX design. Customers find our website easy to navigate and shop.", rating: 5 },
  { id: 5, name: "Priya Mehta", role: "Startup Founder", review: "Excellent development service and great communication throughout the project.", rating: 5 },
  { id: 6, name: "Karan Singh", role: "Digital Entrepreneur", review: "Our website traffic and conversions improved after launching the new platform.", rating: 5 },
  { id: 7, name: "Neha Kapoor", role: "Business Consultant", review: "Vihaan Innovations built a powerful business website that truly reflects our brand.", rating: 5 },
  { id: 8, name: "Amit Agarwal", role: "Store Owner", review: "The eCommerce system works flawlessly. Inventory and order management are very simple now.", rating: 5 },
  { id: 9, name: "Deepak Nair", role: "IT Consultant", review: "Highly professional team with creative ideas and strong technical skills.", rating: 5 },
  { id: 10, name: "Manoj Gupta", role: "Marketplace Founder", review: "Our online marketplace launched smoothly thanks to the experienced developers.", rating: 5 },
  { id: 11, name: "Pooja Desai", role: "Business Owner", review: "They delivered our website on time with excellent performance and security.", rating: 5 },
  { id: 12, name: "Arjun Reddy", role: "Entrepreneur", review: "The website design looks premium and works perfectly on all devices.", rating: 5 },
  { id: 13, name: "Sneha Iyer", role: "Startup Owner", review: "Customer support from Vihaan Innovations is outstanding and very responsive.", rating: 5 },
  { id: 14, name: "Rohit Sharma", role: "Marketing Manager", review: "Our business gained more leads after launching the SEO-friendly website.", rating: 5 },
  { id: 15, name: "Vikram Joshi", role: "Company Director", review: "The team understood our requirements perfectly and built a scalable platform.", rating: 5 },
];

const ReviewCardContent = ({ review, image }) => (
  <ReviewCard elevation={0}>
    {/* Grid-like 4-portion layout */}
    <Box sx={{ display: "flex", flex: 1, gap: 2, mb: 1 }}>
      {/* Portion 1: Photo */}
      <Avatar
        src={image}
        imgProps={{
          style: {
            objectFit: "contain",
            width: "100%",
            height: "100%",
            backgroundColor: "#f8faff",
          }
        }}
        sx={{
          width: 110,
          height: 110,
          bgcolor: "#f8faff",
          borderRadius: "50%",
          border: "1.5px solid rgba(0, 191, 255, 0.2)",
          overflow: "hidden",
          flexShrink: 0
        }}
      >
        {review.name.charAt(0)}
      </Avatar>
      {/* Portion 2: Review Text */}
      <Typography
        sx={{
          fontSize: "13px",
          color: "#435963",
          lineHeight: 1.4,
          fontStyle: "italic",
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          flex: 1
        }}
      >
        "{review.review}"
      </Typography>
    </Box>

    {/* Bottom Section */}
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 1.5, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
      {/* Portion 3: Name */}
      <Box sx={{ flex: 1 }}>
        <Typography sx={{ fontWeight: 700, color: "#1d1d1f", fontSize: "14px", lineHeight: 1.2 }}>
          {review.name}
        </Typography>
        <Typography sx={{ fontSize: "11px", color: "#86868b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {review.role}
        </Typography>
      </Box>
      {/* Portion 4: Rating */}
      <Box sx={{ color: "#FFD700", fontSize: "14px", ml: 1 }}>
        {"⭐".repeat(review.rating)}
      </Box>
    </Box>
  </ReviewCard>
);

const ReviewsMultiVendor = () => {
  // Split reviews into two rows
  const row1 = reviews.slice(0, 8);
  const row2 = reviews.slice(8);

  return (
    <Box sx={{ py: 4, background: "linear-gradient(180deg, #ffffff 0%, #f0f8ff 100%)", overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "32px", md: "42px" },
            color: "#1d1d1f",
            mb: 2,
            letterSpacing: "-0.02em",
          }}
        >
          Trusted by Businesses – <span style={{ color: "#00bfff" }}>Client Reviews</span> & Success Stories
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            color: "#5e6d7a",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.4,
          }}
        >
          Discover how businesses grow faster with Vihaan Innovations, the experts in scalable website development, eCommerce platforms, and CRM solutions.
        </Typography>
      </Container>

      {/* Row 1: Scrolling Right */}
      <Box sx={{ mb: 4 }}>
        <MarqueeRow direction="right">
          {[...row1, ...row1].map((review, idx) => (
            <ReviewCardContent key={`r1-${idx}`} review={review} image={ganeshImg} />
          ))}
        </MarqueeRow>
      </Box>

      {/* Row 2: Scrolling Left */}
      <Box>
        <MarqueeRow direction="left">
          {[...row2, ...row2].map((review, idx) => (
            <ReviewCardContent key={`r2-${idx}`} review={review} image={abhi1Img} />
          ))}
        </MarqueeRow>
      </Box>
    </Box>
  );
};

export default ReviewsMultiVendor;
