import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ApartmentIcon from '@mui/icons-material/Apartment';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CottageIcon from '@mui/icons-material/Cottage';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';
import HotelIcon from '@mui/icons-material/Hotel';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const propertyTypes = [
  { icon: ApartmentIcon, title: "Independent hotels\n& boutique stays", color: "#0f766e", bg: "#f0fdf4" },
  { icon: BeachAccessIcon, title: "Resorts & spa\nchains", color: "#0ea5e9", bg: "#f0f9ff" },
  { icon: CottageIcon, title: "Homestays &\nvacation rentals", color: "#d4a017", bg: "#fefce8" },
  { icon: AccountBalanceIcon, title: "Hotel chains &\nmanagement groups", color: "#7c3aed", bg: "#f5f3ff" },
  { icon: BusinessIcon, title: "Serviced apartments\n& corporate stays", color: "#1e3a5f", bg: "#eff6ff" },
  { icon: HotelIcon, title: "Hostels & budget\nstay providers", color: "#16a34a", bg: "#f0fdf4" },
  { icon: TempleHinduIcon, title: "Pilgrimage\nguest houses", color: "#dc2626", bg: "#fef2f2" },
  { icon: FlightTakeoffIcon, title: "Travel agencies\n(white-label booking portals)", color: "#f97316", bg: "#fff7ed" },
];

const PropertyCard = ({ icon: Icon, title, color, bg, delay }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }} style={{ height: "100%" }}>
    <Paper elevation={0} sx={{ p: 3, pt: 3.5, borderRadius: "18px", bgcolor: "#ffffff", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", border: `1.5px solid ${bg}`, boxShadow: "0 4px 16px rgba(0,0,0,0.04)", transition: "all 0.3s", "&:hover": { transform: "translateY(-6px)", boxShadow: `0 14px 35px ${color}22`, borderColor: color } }}>
      <Box sx={{ width: 60, height: 60, borderRadius: "16px", bgcolor: bg, display: "flex", justifyContent: "center", alignItems: "center", color, mb: 2, "& > svg": { fontSize: 30 } }}>
        <Icon />
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#1e293b", fontSize: "13px", lineHeight: 1.4, whiteSpace: "pre-line" }}>{title}</Typography>
    </Paper>
  </motion.div>
);

const HotelWhoThisIsFor = () => (
  <Box sx={{ bgcolor: "#ffffff", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "36px" }, mb: 2, lineHeight: 1.2 }}>
          The Perfect Solution for Every Property Type
        </Typography>
        <Typography sx={{ color: "#475569", fontSize: "18px", maxWidth: "600px", mx: "auto" }}>
          Built by a trusted hotel booking website development company, our solution supports all types of hospitality businesses.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {propertyTypes.map((pt, i) => (
          <Grid item xs={6} sm={3} key={i}><PropertyCard {...pt} delay={i * 0.08} /></Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default HotelWhoThisIsFor;
