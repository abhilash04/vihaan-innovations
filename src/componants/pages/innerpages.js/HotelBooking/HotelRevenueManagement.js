import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CompareIcon from '@mui/icons-material/Compare';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import UpcomingIcon from '@mui/icons-material/Upcoming';

const revenueFeatures = [
  { icon: TrendingUpIcon, title: "Dynamic Pricing Policy", desc: "Adjust rates automatically based on occupancy, demand, and season.", color: "#d4a017" },
  { icon: CalendarMonthIcon, title: "Revenue Plans", desc: "Frequency spend, length of stay & early bird discount strategies.", color: "#0f766e" },
  { icon: CompareIcon, title: "Competitor Rate Monitoring", desc: "Real-time parity checks across Booking.com, Airbnb, and Expedia.", color: "#3b82f6" },
  { icon: CardGiftcardIcon, title: "Package Builder", desc: "Build meal plans, spa combos, and seasonal packages effortlessly.", color: "#7c3aed" },
  { icon: PriceChangeIcon, title: "Upsell Prompts", desc: "Smart mid-booking upsell for room upgrades, early check-in, etc.", color: "#f97316" },
  { icon: UpcomingIcon, title: "Competitor Real Monitoring", desc: "Auto alert when competitor rates drop below your floor price.", color: "#ec4899" },
];

const HotelRevenueManagement = () => (
  <Box sx={{ bgcolor: "#fffdf0", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography sx={{ color: "#d4a017", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Revenue Management</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>
          Revenue Management Features
        </Typography>
        <Typography sx={{ color: "#64748b", fontSize: "16px" }}>Maximize RevPAR with Smart Pricing and End Business</Typography>
      </Box>
      <Grid container spacing={3} sx={{ mt: 5 }}>
        {revenueFeatures.map((f, i) => {
          const Icon = f.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "18px", bgcolor: "#ffffff", height: "100%", border: `1.5px solid ${f.color}20`, transition: "all 0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 12px 30px ${f.color}25`, borderColor: f.color } }}>
                  <Box sx={{ width: 50, height: 50, borderRadius: "14px", bgcolor: `${f.color}18`, display: "flex", justifyContent: "center", alignItems: "center", color: f.color, mb: 2 }}>
                    <Icon sx={{ fontSize: 26 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "15px", mb: 1 }}>{f.title}</Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6 }}>{f.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default HotelRevenueManagement;
