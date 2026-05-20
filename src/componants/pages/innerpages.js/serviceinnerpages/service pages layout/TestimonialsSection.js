import React from "react";
import { Box, Typography, Container, Paper, Avatar, useTheme, useMediaQuery } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";

const marqueeLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const marqueeRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const testimonials = [
  { name: "Rahul Sharma", text: "Vihaan delivered our custom CRM ahead of schedule. Absolute professionals with top-tier engineering standards.", initial: "R", color: "#2563eb" },
  { name: "Amit Patel", text: "The DevOps transition setup by Vihaan cut our cloud bills by 35% with zero downtime. Exceptional scalability.", initial: "A", color: "#06b6d4" },
  { name: "Suresh Menon", text: "Our e-commerce portal handles robust loads effortlessly. Intuitive user flows have boosted conversion setups.", initial: "S", color: "#4f46e5" },
  { name: "Vikram Das", text: "The security audit and continuous monitoring setups solved our critical vulnerabilities. Highly reliable supporting nodes.", initial: "V", color: "#10b981" },
  { name: "Priya Rao", text: "Stunning dashboard metrics setups. User flows feel extremely fluid keeping engagement rates high continuously.", initial: "P", color: "#f59e0b" },
];

const TickerContainer = styled(Box)(({ speed, direction }) => ({
  display: "flex",
  width: "max-content",
  animation: `${direction === "left" ? marqueeLeft : marqueeRight} ${speed} linear infinite`,
  "&:hover": {
    animationPlayState: "paused",
  },
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  background: "#f8fafc",
  border: "1px solid rgba(0, 0, 0, 0.03)",
  borderRadius: "20px",
  padding: "24px",
  margin: "0 12px",
  width: "320px",
  display: "inline-flex",
  flexDirection: "column",
  gap: "16px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "none",
  "&:hover": {
    background: "#ffffff",
    transform: "translateY(-4px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
    borderColor: "#0087c9",
  },
}));

const TestimonialsSection = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const {
    subtitle = "CLIENT LOVE",
    title = "What Our Clients Say About Us",
    list = testimonials,
    rating = "4.9/5",
    reviews = "500+"
  } = data || {};

  return (
    <Box sx={{ bgcolor: "#ffffff", py: isMobile ? 6 : 6, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#0087c9", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", mb: 1.5 }}>
            {subtitle}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: isMobile ? "28px" : "40px", fontFamily: "Urbanist, sans-serif", color: "#0a2233" }}>
            {title}
          </Typography>
        </Box>
      </Container>

      {/* Row 1 Scrolling Left */}
      <Box sx={{ mb: 4 }}>
        <TickerContainer speed="30s" direction="left">
          {[...list, ...list].map((item, i) => (
            <TestimonialCard key={i} elevation={0} sx={{ width: isMobile ? "240px" : "320px", padding: isMobile ? "16px" : "24px", margin: isMobile ? "0 8px" : "0 12px", gap: isMobile ? "12px" : "16px" }}>
              <Box sx={{ display: "flex", gap: 0.5, color: "#f59e0b" }}>
                {[...Array(5)].map((_, j) => <StarIcon key={j} sx={{ fontSize: 16 }} />)}
              </Box>
              <Typography sx={{ color: "#475569", fontSize: "14px", fontStyle: "italic", lineHeight: 1.6, flexGrow: 1 }}>
                "{item.text}"
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: "auto" }}>
                <Avatar sx={{ bgcolor: item.color, color: "#ffffff", width: 40, height: 40, fontWeight: 700, fontSize: "14px" }}>
                  {item.initial}
                </Avatar>
                <Box>
                  <Typography sx={{ color: "#0a2233", fontWeight: 800, fontSize: "14px" }}>
                    {item.name}
                  </Typography>
                </Box>
              </Box>
            </TestimonialCard>
          ))}
        </TickerContainer>
      </Box>

      {/* Ratings Pill */}
      <Box sx={{ display: "flex", justifyContent: "center", }}>
        <Box sx={{ bgcolor: "rgba(0, 135, 201, 0.06)", border: "1px solid rgba(0, 135, 201, 0.15)", px: 3, py: isMobile ? 1.5 : 1, borderRadius: isMobile ? "24px" : "50px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 0.5 : 2, alignItems: "center" }}>
          <Typography sx={{ color: "#0087c9", fontSize: "13px", fontWeight: 700 }}>
            {rating} Average Rating ⭐
          </Typography>
          {!isMobile && <Box sx={{ width: "4px", height: "4px", bgcolor: "#0087c9", borderRadius: "50%" }} />}
          <Typography sx={{ color: "#0087c9", fontSize: "13px", fontWeight: 700 }}>
            {reviews} Reviews
          </Typography>
        </Box>
      </Box>

    </Box>
  );
};

export default TestimonialsSection;
