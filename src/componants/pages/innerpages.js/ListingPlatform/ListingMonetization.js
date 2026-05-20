import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import PopUps from "../../../common/PopUps";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const strategies = [
  {
    title: "Featured Listing Tiers",
    desc: "• Highlight businesses with premium visibility\n• Tiered pricing for listings based on placement, duration, and endorsements\n• Notifications to users about featured listings",
    icon: <MonetizationOnIcon />,
    color: "#eab308" // Gold/Yellow
  },
  {
    title: "Banner Ad Placements",
    desc: "• Strategic banner placements for maximum clicks\n• Detailed metrics for impressions and ROI\n• Flexible options for campaigns and ad rotation",
    icon: <WebAssetIcon />,
    color: "#22c55e" // Green
  },
  {
    title: "Subscription Plans",
    desc: "• Offer recurring subscription plans for businesses\n• Easy plan management and renewal options\n• Tiered subscriptions for different features",
    icon: <CreditCardIcon />,
    color: "#3b82f6" // Blue
  },
  {
    title: "Payment Gateway Integrations",
    desc: "• Accept payments via Stripe and Razorpay\n• Automated invoicing and transaction management\n• Secure, real-time processing for payments",
    icon: <LocalAtmIcon />,
    color: "#6366f1" // Indigo
  }
];

const MoneyCard = ({ title, desc, icon, color, delay, isMobile }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: isMobile ? 3 : 4,
        borderRadius: "16px",
        bgcolor: "#ffffff",
        height: isMobile ? "auto" : "60%",
        display: "flex",
        alignItems: "flex-start",
        gap: isMobile ? 2 : 3,
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
          borderColor: color
        }
      }}
    >
      {/* Icon Area */}
      <Box sx={{
        color: color,
        p: 1.5,
        borderRadius: "12px",
        bgcolor: `${color}15`, // 15% opacity background of the primary color
        "& > svg": { fontSize: isMobile ? 28 : 32 }
      }}>
        {icon}
      </Box>

      {/* Text Area */}
      <Box>
        <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "16px", mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ color: "#666", fontSize: "14px", lineHeight: 1.6, whiteSpace: "pre-line" }}>
          {desc}
        </Typography>
      </Box>
    </Paper>
  </motion.div>
);

const ListingMonetization = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#f8fafc", py: isMobile ? 6 : 8 }}> {/* Light grayish background */}
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: isMobile ? 6 : 8 }}>
          <Typography sx={{ color: "#2563eb", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: 1, mb: 1 }}>
            Monetization & Revenue
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: isMobile ? "1.75rem" : "2.25rem", mb: 2 }}>
            Revenue Streams for Every Business Listing Website India
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
            Maximize earnings and manage transactions effortlessly on your business listing website India with featured listings, ad placements, and subscription plans integrated with modern payment gateways.
          </Typography>
        </Box>

        {/* 2x2 Grid */}
        <Grid container spacing={isMobile ? 3 : 4} rowSpacing={isMobile ? 2 : 3} mb={isMobile ? 6 : 8}>
          {strategies.map((strategy, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MoneyCard {...strategy} delay={index * 0.1} isMobile={isMobile} />
            </Grid>
          ))}
        </Grid>

        {/* Footer CTA */}
        <Box sx={{ textAlign: "center", mt: isMobile ? 4 : 6 }}>
          <Typography sx={{ color: "#1a1a1a", fontWeight: 700, fontSize: "18px", mb: 2 }}>
            Start Monetizing Today
          </Typography>
          <Box
            component="button"
            onClick={() => setOpenPopup(true)}
            sx={{
              bgcolor: "#2563eb",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "15px",
              px: isMobile ? 4 : 5,
              py: 1.5,
              borderRadius: "8px",
              textTransform: "none",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
              "&:hover": {
                bgcolor: "#1d4ed8",
                boxShadow: "0 6px 20px rgba(37, 99, 235, 0.4)",
              },
            }}
          >
            Get Started with Your Business Listing Website India
          </Box>
        </Box>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default ListingMonetization;
