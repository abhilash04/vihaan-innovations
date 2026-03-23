import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaymentIcon from '@mui/icons-material/Payment';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CheckInIcon from '@mui/icons-material/MeetingRoom';
import StarIcon from '@mui/icons-material/Star';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const steps = [
  { icon: SearchIcon, label: "Search and explore properties", color: "#0ea5e9" },
  { icon: CalendarTodayIcon, label: "Select dates and room type", color: "#0f766e" },
  { icon: PaymentIcon, label: "Book and make payment", color: "#d4a017" },
  { icon: ConfirmationNumberIcon, label: "Get instant booking confirmation", color: "#7c3aed" },
  { icon: CheckInIcon, label: "Quick and easy check-in", color: "#16a34a" },
  { icon: NightlightIcon, label: "Enjoy a comfortable in-stay experience", color: "#f97316" },
  { icon: ExitToAppIcon, label: "Simple and fast check-out", color: "#ec4899" },
  { icon: StarIcon, label: "Share reviews and access loyalty programs", color: "#d4a017" },
];

const HotelGuestJourney = () => (
  <Box sx={{ bgcolor: "#fffdf0", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography sx={{ color: "#d4a017", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>The Guest Journey</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>
          Seamless Experience from Booking to Checkout
        </Typography>
        <Typography sx={{ color: "#475569", fontSize: "16px", maxWidth: "600px", mx: "auto" }}>
          Designed with advanced hotel booking app development services to ensure a smooth journey for every guest.
        </Typography>
      </Box>

      {/* Horizontal scrollable steps */}
      <Box sx={{ overflowX: "auto", pb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", minWidth: "900px", gap: 0 }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <React.Fragment key={i}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Paper elevation={0} sx={{ p: 2.5, borderRadius: "16px", bgcolor: "#ffffff", border: `2px solid ${step.color}30`, textAlign: "center", width: "95%", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", transition: "all 0.3s", "&:hover": { transform: "translateY(-6px)", boxShadow: `0 10px 25px ${step.color}25`, borderColor: step.color } }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: "14px", bgcolor: `${step.color}15`, display: "flex", justifyContent: "center", alignItems: "center", color: step.color, mx: "auto", mb: 1.5 }}>
                      <Icon sx={{ fontSize: 24 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 700, color: "#1e293b", fontSize: "12px", lineHeight: 1.3 }}>{step.label}</Typography>
                  </Paper>
                </motion.div>
                {!isLast && (
                  <ArrowForwardIcon sx={{ color: "#94a3b8", fontSize: 18, flexShrink: 0, mx: 0.5 }} />
                )}
              </React.Fragment>
            );
          })}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default HotelGuestJourney;
