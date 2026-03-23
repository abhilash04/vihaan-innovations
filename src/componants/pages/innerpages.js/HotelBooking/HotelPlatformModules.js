import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import HouseIcon from '@mui/icons-material/House';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import BarChartIcon from '@mui/icons-material/BarChart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PaymentIcon from '@mui/icons-material/Payment';

const modules = [
  { icon: HouseIcon, title: "Front Desk & Reception", color: "#0f766e" },
  { icon: SyncAltIcon, title: "Channel Manager Integration", color: "#d4a017" },
  { icon: LocalOfferIcon, title: "Promotions & Packages", color: "#3b82f6" },
  { icon: CleaningServicesIcon, title: "Housekeeping Management", color: "#16a34a" },
  { icon: BarChartIcon, title: "Revenue & Analytics", color: "#7c3aed" },
  { icon: RateReviewIcon, title: "Guest Reviews & Feedback", color: "#ec4899" },
  { icon: ConfirmationNumberIcon, title: "Booking & Reservation Engine", color: "#f97316" },
  { icon: PaymentIcon, title: "Billing & Invoice Module", color: "#0ea5e9" },
];

const HotelPlatformModules = () => (
  <Box sx={{ bgcolor: "#ffffff", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography sx={{ color: "#0f766e", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Platform Modules</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Explore Our Full Suite of Modules</Typography>
      </Box>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {modules.map((mod, i) => {
          const Icon = mod.icon;
          return (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <Paper elevation={0} sx={{ p: 3.5, borderRadius: "18px", bgcolor: "#f8fafc", border: `1.5px solid ${mod.color}20`, textAlign: "center", transition: "all 0.3s", "&:hover": { transform: "translateY(-6px)", bgcolor: "#ffffff", boxShadow: `0 10px 28px ${mod.color}20`, borderColor: mod.color } }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: "14px", bgcolor: `${mod.color}18`, display: "flex", justifyContent: "center", alignItems: "center", color: mod.color, mx: "auto", mb: 2 }}>
                    <Icon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: "#1e293b", fontSize: "13px", lineHeight: 1.3 }}>{mod.title}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default HotelPlatformModules;
