import React from "react";
import { Box, Typography, Container, Paper, Avatar } from "@mui/material";
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
  { name: "Rahul Sharma", role: "CEO, TechCorp", text: "Vihaan delivered our custom CRM ahead of schedule. Absolute professionals with top-tier engineering standards.", initial: "R", color: "#2563eb" },
  { name: "Amit Patel", role: "Director, Edelweiss", text: "The DevOps transition setup by Vihaan cut our cloud bills by 35% with zero downtime. Exceptional scalability.", initial: "A", color: "#06b6d4" },
  { name: "Suresh Menon", role: "Founder, Organica", text: "Our e-commerce portal handles robust loads effortlessly. Intuitive user flows have boosted conversion setups.", initial: "S", color: "#4f46e5" },
  { name: "Vikram Das", role: "CTO, FinLeap", text: "The security audit and continuous monitoring setups solved our critical vulnerabilities. Highly reliable supporting nodes.", initial: "V", color: "#10b981" },
  { name: "Priya Rao", role: "Product Manager, Swiggy", text: "Stunning dashboard metrics setups. User flows feel extremely fluid keeping engagement rates high continuously.", initial: "P", color: "#f59e0b" },
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
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  borderRadius: "20px",
  padding: "24px",
  margin: "0 12px",
  width: "320px",
  display: "inline-flex",
  flexDirection: "column",
  gap: "16px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.06)",
    transform: "scale(1.03)",
    boxShadow: "0 12px 32px rgba(37, 99, 235, 0.1)",
  },
}));

const TestimonialsSection = () => {
  return (
    <Box sx={{ bgcolor: "#0d1f35", py: { xs: 10, md: 14 }, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ color: "#06b6d4", fontWeight: 600, fontSize: "12px", letterSpacing: "1px", mb: 1.5 }}>
            CLIENT LOVE
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "44px" }, fontFamily: "Urbanist, sans-serif", color: "#ffffff", mb: 2 }}>
            What Our Clients Say About Us
          </Typography>
        </Box>
      </Container>

      {/* Row 1 Scrolling Left */}
      <Box sx={{ mb: 4 }}>
        <TickerContainer speed="30s" direction="left">
          {[...testimonials, ...testimonials].map((item, i) => (
            <TestimonialCard key={i}>
              <Box sx={{ display: "flex", gap: 0.5, color: "#f59e0b" }}>
                {[...Array(5)].map((_, j) => <StarIcon key={j} sx={{ fontSize: 16 }} />)}
              </Box>
              <Typography sx={{ color: "#ffffff", fontSize: "14px", fontStyle: "italic", lineHeight: 1.6, flexGrow: 1 }}>
                "{item.text}"
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: "auto" }}>
                <Avatar sx={{ bgcolor: item.color, width: 40, height: 40, fontWeight: 700, fontSize: "14px" }}>
                  {item.initial}
                </Avatar>
                <Box>
                  <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "14px" }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: "#06b6d4", fontSize: "12px" }}>
                    {item.role}
                  </Typography>
                </Box>
              </Box>
            </TestimonialCard>
          ))}
        </TickerContainer>
      </Box>

      {/* Ratings Pill */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Box sx={{ bgcolor: "rgba(6, 182, 212, 0.1)", border: "1px solid rgba(6, 182, 212, 0.2)", px: 3, py: 1, borderRadius: "50px", display: "flex", gap: 2, alignItems: "center" }}>
          <Typography sx={{ color: "#06b6d4", fontSize: "13px", fontWeight: 600 }}>
            4.9/5 Average Rating ⭐
          </Typography>
          <Box sx={{ width: "4px", height: "4px", bgcolor: "#06b6d4", borderRadius: "50%" }} />
          <Typography sx={{ color: "#06b6d4", fontSize: "13px", fontWeight: 600 }}>
            500+ Reviews
          </Typography>
        </Box>
      </Box>

      {/* Row 2 Scrolling Right */}
      <Box>
        <TickerContainer speed="35s" direction="right">
          {[...testimonials, ...testimonials].map((item, i) => (
            <TestimonialCard key={i}>
              <Box sx={{ display: "flex", gap: 0.5, color: "#f59e0b" }}>
                {[...Array(5)].map((_, j) => <StarIcon key={j} sx={{ fontSize: 16 }} />)}
              </Box>
              <Typography sx={{ color: "#ffffff", fontSize: "14px", fontStyle: "italic", lineHeight: 1.6, flexGrow: 1 }}>
                "{item.text}"
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: "auto" }}>
                <Avatar sx={{ bgcolor: item.color, width: 40, height: 40, fontWeight: 700, fontSize: "14px" }}>
                  {item.initial}
                </Avatar>
                <Box>
                  <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "14px" }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: "#06b6d4", fontSize: "12px" }}>
                    {item.role}
                  </Typography>
                </Box>
              </Box>
            </TestimonialCard>
          ))}
        </TickerContainer>
      </Box>

    </Box>
  );
};

export default TestimonialsSection;
