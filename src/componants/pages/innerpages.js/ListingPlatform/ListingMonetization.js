import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const strategies = [
  {
    title: "Featured Listing tiers",
    desc: "Feature directories entries, endorsements via notifications...  \nFeatured Listing Tiers",
    icon: <MonetizationOnIcon />,
    color: "#eab308" // Gold/Yellow
  },
  {
    title: "Banner Ad placements",
    desc: "Banners ad placement metrics for monetization plans...  \n- Banner Ad placements",
    icon: <WebAssetIcon />,
    color: "#22c55e" // Green
  },
  {
    title: "Banno Ties",
    desc: "Subscription plans placements max used monetization listing plans.",
    icon: <CreditCardIcon />,
    color: "#3b82f6" // Blue
  },
  {
    title: "Subscription plans",
    desc: "Stripe, Razorpay plans integrations on time advanced transaction management.\nSubscription plans via Stripe/Razorpay",
    icon: <LocalAtmIcon />,
    color: "#6366f1" // Indigo
  }
];

const MoneyCard = ({ title, desc, icon, color, delay }) => (
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
        p: 4,
        borderRadius: "16px",
        bgcolor: "#ffffff",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        gap: 3,
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
        "& > svg": { fontSize: 32 } 
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
  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 14 }}> {/* Light grayish background */}
      <Container maxWidth="lg">
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            Monetization & Revenue
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px" }}>
            Monetization and representations gross networks and conditions.
          </Typography>
        </Box>

        {/* 2x2 Grid */}
        <Grid container spacing={4}>
          {strategies.map((strategy, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MoneyCard {...strategy} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default ListingMonetization;
