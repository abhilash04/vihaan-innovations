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
  { icon: PersonAddAlt1Icon, title: "Patient Registration", desc: "OPD/IPD onboarding with automated queued slotting.", color: "#0A2D6E" },
  { icon: CalendarMonthIcon, title: "Doctor Scheduling", desc: "Dynamic rosters with live booking allocation.", color: "#10B981" },
  { icon: DescriptionIcon, title: "Electronic Records (EMR)", desc: "Secure digitized prescription pads and history.", color: "#00B4D8" },
  { icon: MedicationIcon, title: "Pharmacy Management", desc: "Live stock tracking and billing integrations.", color: "#7C3AED" },
  { icon: ScienceIcon, title: "Diagnostics & Labs", desc: "Sync barcode triggers with machine outputs.", color: "#F59E0B" },
  { icon: SingleBedIcon, title: "Ward Management", desc: "Live floor map occupancy donuts tracking wards.", color: "#EF4444" },
  { icon: InventoryIcon, title: "Inventory Control", desc: "Consumable tracking across surgery blocks.", color: "#3F51B5" },
  { icon: ReceiptLongIcon, title: "Insurance & Claims", desc: "Auto-approve claims with TPA webhook callbacks.", color: "#E11D48" },
  { icon: AnalyticsIcon, title: "Hospital Analytics", desc: "Heatmaps dashboard framing revenue curves dashboards.", color: "#EA580C" },
  { icon: SpeedIcon, title: "Fast Checkout", desc: "Consolidate consulting & testing bills instantly.", color: "#10B981" }
];

const HMSWhatWeBuild = () => {
  return (
    <Box sx={{ background: "#ffffff", py: 8, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ color: "#0A2D6E", fontWeight: 800, fontSize: "12px", mb: 1, letterSpacing: "1px" }}>OUR PLATFORM</Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            A Complete Hospital Management System
          </Typography>
          <Box sx={{ width: 60, height: "3px", bgcolor: "#0A2D6E", mx: "auto", borderRadius: "2px" }} />
        </Box>

        <Grid container spacing={3} sx={{ px: 2 }}>
          {features.map((feat, i) => {
            const Icon = feat.icon;
            let initialProps = { opacity: 0, y: 30 };
            let whileInViewProps = { opacity: 1, y: 0 };

            if (i >= 3 && i <= 6) { // Row 2
              initialProps = { opacity: 0, x: -30 };
              whileInViewProps = { opacity: 1, x: 0 };
            }

            return (
              <Grid item xs={12} md={i < 3 || i >= 7 ? 4 : 3} key={i}>
                <motion.div initial={initialProps} whileInView={whileInViewProps} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Paper elevation={0} sx={{ p: 3, borderRadius: "16px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", height: "100%", position: "relative", overflow: "hidden", transition: "all 0.3s ease", cursor: "pointer", "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 30px rgba(10,45,110,0.05)", "&::after": { width: "100%" }, "& .icon-box": { transform: "scale(1.15)", bgcolor: `${feat.color}15` } }, "&::after": { content: '""', position: "absolute", bottom: 0, left: 0, width: "0", height: "4px", bgcolor: feat.color, transition: "width 0.3s ease" } }}>
                    <Box className="icon-box" sx={{ width: 44, height: 44, borderRadius: "12px", bgcolor: `${feat.color}08`, display: "flex", justifyContent: "center", alignItems: "center", color: feat.color, mb: 1.8, transition: "all 0.3s" }}>
                      <Icon sx={{ fontSize: 20 }} />
                    </Box>
                    <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "15px", mb: 1 }}>{feat.title}</Typography>
                    <Typography sx={{ color: "#4A5568", fontSize: "12px", lineHeight: 1.5 }}>{feat.desc}</Typography>
                  </Paper>
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
