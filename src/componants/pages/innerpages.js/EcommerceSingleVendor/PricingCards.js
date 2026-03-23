import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { keyframes, styled } from "@mui/system";

// Animations
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const hoverScale = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.03); }
`;

const shimer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const StyledPricingCard = styled(Card)(({ theme, recommended }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "24px",
  backgroundColor: "#f1fafdff",
  border: recommended ? "2px solid #3f51b5" : "1px solid #eee",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  position: "relative",
  overflow: "visible",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  ...(recommended && {
    boxShadow: "0 10px 30px rgba(63, 81, 181, 0.15)",
  }),
}));

const RecommendedBadge = styled(Box)({
  position: "absolute",
  top: -15,
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#3f51b5",
  color: "#fff",
  padding: "4px 16px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "1px",
  zIndex: 10,
});

const PlanButton = styled(Button)(({ variant }) => ({
  borderRadius: "50px",
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: 700,
  textTransform: "none",
  transition: "all 0.3s ease",
  ...(variant === "contained" ? {
    backgroundColor: "#3f51b5",
    "&:hover": {
      backgroundColor: "#283593",
      transform: "scale(1.02)",
    }
  } : {
    border: "2px solid #3f51b5",
    color: "#3f51b5",
    "&:hover": {
      backgroundColor: "rgba(63, 81, 181, 0.05)",
      border: "2px solid #283593",
      transform: "scale(1.02)",
    }
  })
}));

const pricingPlans = [
  {
    title: "Basic Business Website",
    subtitle: "Perfect for startups and small businesses starting their online journey.",
    features: [
      "Professional website design",
      "Mobile-friendly responsive layout",
      "Essential pages (Home, About, Services, Contact)",
      "Contact forms for customer inquiries",
      "SEO-ready structure",
    ],
    buttonText: "Get a Quote",
    recommended: false,
    color: "#fafafa"
  },
  {
    title: "E-Commerce Website",
    subtitle: "Best for businesses that want to sell products online.",
    features: [
      "Complete online store setup",
      "Product catalog and inventory management",
      "Secure payment gateway integration",
      "Order tracking and management",
      "Mobile-friendly shopping experience",
    ],
    buttonText: "Launch My Online Store",
    recommended: true,
    color: "#fafafa"
  },
  {
    title: "Advanced Business Website",
    subtitle: "Ideal for growing businesses that want a stronger digital presence.",
    features: [
      "Custom website design tailored to your brand",
      "Multiple pages for services and information",
      "Lead generation forms and integrations",
      "Social media and marketing integration",
      "SEO-friendly website structure",
    ],
    buttonText: "Start Your Project",
    recommended: false,
    color: "#f0f4ff"
  },

];

const PricingCards = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8, animation: `${fadeInUp} 0.8s ease-out` }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "32px", md: "48px" },
              color: "#1a1a1a",
              mb: 2,
              letterSpacing: "-1px"
            }}
          >
            Flexible Website Solutions for Every Business
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "18px",
              color: "#666",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6
            }}
          >
            At Vihaan Innovations, every website is designed based on your business goals, design preferences, and required features. We offer flexible solutions to ensure you get the perfect website for your needs.
          </Typography>
        </Box>

        {/* Dynamic Pricing Cards */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {pricingPlans.map((plan, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={plan.title}
              sx={{ animation: `${fadeInUp} 0.8s ease-out ${index * 0.2}s backwards` }}
            >
              <StyledPricingCard recommended={plan.recommended}>
                {plan.recommended && <RecommendedBadge>Most Popular</RecommendedBadge>}
                <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", height: "100%" }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 1, fontSize: "20px" }}>
                    {plan.title}
                  </Typography>
                  <Typography sx={{ color: "#666", mb: 4, height: 48, overflow: "hidden", fontSize: "14px", lineHeight: 1.4 }}>
                    {plan.subtitle}
                  </Typography>

                  <Stack spacing={2} sx={{ mb: 4, flexGrow: 1 }}>
                    {plan.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                        <CheckCircleIcon sx={{ color: "#4caf50", fontSize: 20, mt: 0.2 }} />
                        <Typography sx={{ color: "#444", fontSize: "13px", fontWeight: 500, lineHeight: 1.2 }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <PlanButton
                    variant={plan.recommended ? "contained" : "outlined"}
                    fullWidth
                  >
                    {plan.buttonText}
                  </PlanButton>
                </CardContent>
              </StyledPricingCard>
            </Grid>
          ))}
        </Grid>

        {/* Custom Solution Footer Section */}
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 4, md: 6 },
            borderRadius: "32px",
            backgroundColor: "#f8f9fa",
            border: "1px dashed #3f51b5",
            animation: `${fadeInUp} 1s ease-out 0.8s backwards`,
            maxWidth: "1000px",
            mx: "auto"
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "28px",
              color: "#1a1a1a",
              mb: 1.5
            }}
          >
            Custom Website Solutions
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "17px",
              color: "#666",
              maxWidth: "700px",
              mx: "auto",
              mb: 4,
              lineHeight: 1.5
            }}
          >
            Need something unique? We also develop fully customized websites with advanced features tailored to your business.
          </Typography>
          <PlanButton
            variant="contained"
            sx={{
              px: 5,
              py: 2,
              fontSize: "18px",
              background: "linear-gradient(90deg, #3f51b5, #283593)",
              boxShadow: "0 10px 20px rgba(63, 81, 181, 0.2)",
              "&:hover": {
                background: "linear-gradient(90deg, #283593, #1a237e)",
                boxShadow: "0 15px 30px rgba(63, 81, 181, 0.3)"
              }
            }}
          >
            Request Custom Solution
          </PlanButton>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingCards;
