import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import KingBedIcon from '@mui/icons-material/KingBed';
import PeopleIcon from '@mui/icons-material/People';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const features = [
  {
    icon: BookOnlineIcon, color: "#d4a017",
    title: "Direct Booking Engine",
    desc: "Commission-free white-label booking engine on your domain. Real-time availability calendar, instant confirmation, coupon codes, and multi-room bookings.",
  },
  {
    icon: DashboardIcon, color: "#0f766e",
    title: "Property Management System (PMS)",
    desc: "Centralized reservation management, front desk operations, check-in/check-out, folio billing, and room assignment automation.",
  },
  {
    icon: SyncAltIcon, color: "#3b82f6",
    title: "Channel Manager",
    desc: "Two-way sync with Booking.com, Airbnb, Expedia, MakeMyTrip, Agoda, and more. No overbooking. Live rate updates across all OTAs.",
  },
  {
    icon: KingBedIcon, color: "#7c3aed",
    title: "Room & Rate Management",
    desc: "Flexible rate plans, room categories, seasonal pricing, early-bird discounts, and length-of-stay restrictions via a single panel.",
  },
  {
    icon: PeopleIcon, color: "#ec4899",
    title: "Guest Profile & CRM",
    desc: "Unified guest history, loyalty points, preference tags, automated birthday/anniversary messages, and post-stay review requests.",
  },
  {
    icon: RestaurantIcon, color: "#f97316",
    title: "Restaurant & In-room Dining",
    desc: "Digital menu, table reservations, QR-code ordering, in-room food delivery tracking, and kitchen display integration.",
  },
];

const HotelFeatures = () => (
  <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography sx={{ color: "#0f766e", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Feature Overview</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
          Our Core Capabilities for Hospitality Excellence
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <Grid item xs={12} md={6} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "#ffffff", height: "100%", display: "flex", gap: 3, border: "1px solid rgba(0,0,0,0.06)", transition: "all 0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 14px 35px ${f.color}20`, borderColor: `${f.color}40` } }}>
                  <Box sx={{ width: 54, height: 54, borderRadius: "14px", bgcolor: `${f.color}15`, display: "flex", justifyContent: "center", alignItems: "center", color: f.color, flexShrink: 0, mt: 0.5 }}>
                    <Icon sx={{ fontSize: 28 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "16px", mb: 1 }}>{f.title}</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "14px", lineHeight: 1.7 }}>{f.desc}</Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default HotelFeatures;
