import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import MedicationIcon from '@mui/icons-material/Medication';
import ScienceIcon from '@mui/icons-material/Science';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InventoryIcon from '@mui/icons-material/Inventory';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SpeedIcon from '@mui/icons-material/Speed';

const features = [
  { icon: PersonAddAlt1Icon, title: "Patient Registration", desc: "Quick, seamless onboarding with smart queue management.", color: "#0A2D6E" },
  { icon: CalendarMonthIcon, title: "Doctor Scheduling", desc: "Optimize appointments with real-time availability.", color: "#10B981" },
  { icon: DescriptionIcon, title: "Electronic Medical Records (EMR)", desc: "Secure, centralized patient data at your fingertips.", color: "#00B4D8" },
  { icon: MedicationIcon, title: "Pharmacy Management", desc: "Track stock and billing with zero errors.", color: "#7C3AED" },
  { icon: ScienceIcon, title: "Diagnostics & Labs", desc: "Automate reports with fast, accurate results.", color: "#F59E0B" },
  { icon: SingleBedIcon, title: "Ward Management", desc: "Monitor bed occupancy and patient flow live.", color: "#EF4444" },
  { icon: InventoryIcon, title: "Inventory Control", desc: "Reduce wastage with smart inventory tracking.", color: "#3F51B5" },
  { icon: ReceiptLongIcon, title: "Insurance & Claims", desc: "Faster approvals with automated claim processing.", color: "#E11D48" },
  { icon: AnalyticsIcon, title: "Hospital Analytics", desc: "Actionable insights to improve performance.", color: "#EA580C" },
  { icon: SpeedIcon, title: "Fast Checkout", desc: "Speed up billing with integrated payments.", color: "#10B981" }
];

/* ---------- CARD UI ---------- */
const CardUI = ({ feat, Icon }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      borderRadius: "16px",
      bgcolor: "#ffffff",
      border: "1px solid rgba(0,0,0,0.04)",

      flex: 1,
      height: "100%",   // ✅ FIX

      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",

      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      cursor: "pointer",

      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 12px 30px rgba(10,45,110,0.05)",
        "&::after": { width: "100%" },
        "& .icon-box": {
          transform: "scale(1.15)",
          bgcolor: `${feat.color}15`
        }
      },

      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "0",
        height: "4px",
        bgcolor: feat.color,
        transition: "width 0.3s ease"
      }
    }}
  >
    <Box
      className="icon-box"
      sx={{
        width: 44,
        height: 44,
        borderRadius: "12px",
        bgcolor: `${feat.color}08`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: feat.color,
        mb: 1.8,
        transition: "all 0.3s"
      }}
    >
      <Icon sx={{ fontSize: 30 }} />
    </Box>

    <Typography sx={{ fontWeight: 800, fontSize: "16px", mt: 1 }}>
      {feat.title}
    </Typography>

    <Typography sx={{ fontSize: "12px", color: "#4A5568", mt: 1 }}>
      {feat.desc}
    </Typography>
  </Paper>
);

/* ---------- MAIN COMPONENT ---------- */
const HMSWhatWeBuild = () => {
  const topRow = features.slice(0, 3);
  const middleRow = features.slice(3, 7);
  const bottomRow = features.slice(7, 10);

  return (
    <Box sx={{ background: "#ffffff", py: 8 }}>
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ fontWeight: 800, fontSize: "12px", mb: 1 }}>
            OUR PLATFORM
          </Typography>

          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            Built by a Leading Hospital Software Company
          </Typography>

          <Typography sx={{ maxWidth: "800px", mx: "auto", mb: 3 }}>
            We provide an all-in-one hospital system that simplifies operations.
          </Typography>
        </Box>

        {/* TOP ROW */}
        <Grid container spacing={3} sx={{ px: 2, mb: { xs: 8, md: 10 } }}>
          {topRow.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <Grid item xs={12} md={4} key={i} sx={{ display: "flex" }}>
                <motion.div style={{ width: "100%", display: "flex" }}>
                  <CardUI feat={feat} Icon={Icon} />
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* MIDDLE ROW */}
        <Grid container spacing={3} sx={{ px: 2, mb: { xs: 8, md: 10 } }}>
          {middleRow.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <Grid item xs={12} md={3} key={i} sx={{ display: "flex" }}>
                <motion.div style={{ width: "100%", display: "flex" }}>
                  <CardUI feat={feat} Icon={Icon} />
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* BOTTOM ROW */}
        <Grid container spacing={3} sx={{ px: 2, mb: { xs: 8, md: 10 } }}>
          {bottomRow.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <Grid item xs={12} md={4} key={i} sx={{ display: "flex" }}>
                <motion.div style={{ width: "100%", display: "flex" }}>
                  <CardUI feat={feat} Icon={Icon} />
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

      </Container>
    </Box>
  );
};

export default HMSWhatWeBuild;