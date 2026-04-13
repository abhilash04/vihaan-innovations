import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import HotelIcon from '@mui/icons-material/Hotel';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const StatBadge = ({ value, label, icon: Icon, color, delay }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
    <Paper elevation={0} sx={{ px: 2, py: 1.5, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.9)", border: "1px solid rgba(212,160,23,0.2)", boxShadow: "0 6px 16px rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: 1.5, backdropFilter: "blur(10px)" }}>
      <Box sx={{ width: 36, height: 36, borderRadius: "10px", bgcolor: `${color}18`, display: "flex", justifyContent: "center", alignItems: "center", color, flexShrink: 0 }}>
        <Icon sx={{ fontSize: 18 }} />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 900, color: "#0f172a", fontSize: "16px", lineHeight: 1 }}>{value}</Typography>
        <Typography sx={{ color: "#64748b", fontSize: "10px", fontWeight: 500, mt: 0.2 }}>{label}</Typography>
      </Box>
    </Paper>
  </motion.div>
);

const HotelBanner = () => (
  <Box sx={{
    background: "linear-gradient(135deg, #fffdf5 0%, #fef9ec 50%, #f0faf8 100%)",
    position: "relative", overflow: "hidden",
    pt: { xs: 12, md: 6 }, pb: { xs: 10, md: 6 }
  }}>
    {/* Decorative blobs */}
    <Box sx={{ position: "absolute", top: -100, right: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 70%)" }} />
    <Box sx={{ position: "absolute", bottom: -80, left: -60, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(15,118,110,0.08) 0%, transparent 70%)" }} />

    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6.5}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h1" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "54px" }, lineHeight: 1.1, mb: 2 }}>
              Create Your Own Booking Platform<br />
              <Box component="span" sx={{ color: "#0f766e", fontSize: "40px", display: "block", mt: 1 }}>No commission. Full control.</Box>
            </Typography>
            <Typography sx={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, mb: 5, maxWidth: "480px" }}>
              Build a custom booking solution with our hotel booking app development services. We provide booking platforms, property management systems, and guest experience portals for hotels, resorts, homestays, and hospitality businesses.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
              <Button variant="contained" sx={{ bgcolor: "#d4a017", color: "#fff", fontWeight: 800, px: 4, py: 1.5, borderRadius: "10px", textTransform: "none", fontSize: "15px", boxShadow: "0 6px 20px rgba(212,160,23,0.4)", "&:hover": { bgcolor: "#b8891a", transform: "translateY(-2px)" }, transition: "all 0.3s" }}>
                View Demo
              </Button>
              <Button variant="outlined" sx={{ borderColor: "#0f766e", color: "#0f766e", fontWeight: 700, px: 4, py: 1.5, borderRadius: "10px", textTransform: "none", fontSize: "15px", "&:hover": { bgcolor: "rgba(15,118,110,0.06)" } }}>
                Explore Features
              </Button>
            </Box>
            {/* Stats */}
            <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5, flexWrap: "wrap", maxWidth: "100%" }}>
              <StatBadge value="99%" label="Increase in direct bookings" icon={TrendingUpIcon} color="#d4a017" delay={0.5} />
              <StatBadge value="0%" label="No Third-Party Fees" icon={AttachMoneyIcon} color="#0f766e" delay={0.65} />
              <StatBadge value="20%" label="Faster Check-in" icon={AccessTimeIcon} color="#3b82f6" delay={0.8} />
            </Box>
          </motion.div>
        </Grid>

        {/* Right Illustration */}
        <Grid item xs={12} md={5.5}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Paper elevation={0} sx={{ p: 5, borderRadius: "28px", bgcolor: "rgba(255,255,255,0.85)", border: "1px solid rgba(212,160,23,0.15)", backdropFilter: "blur(20px)", boxShadow: "0 25px 60px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: "400px", mx: "auto" }}>
                <HotelIcon sx={{ fontSize: 100, color: "#d4a017", mb: 2, opacity: 0.85 }} />
                <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "20px", mb: 1 }}>Hotel Dashboard</Typography>
                <Typography sx={{ color: "#64748b", fontSize: "14px", mb: 3 }}>PMS + Booking Engine + Channel Manager</Typography>
                {/* Mini dashboard mock */}
                <Box sx={{ bgcolor: "#f8fafc", borderRadius: "12px", p: 2.5, textAlign: "left" }}>
                  {["Rooms Available", "Today's Check-ins", "Today's Revenue"].map((label, i) => (
                    <Box key={i} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: i < 2 ? 1.5 : 0 }}>
                      <Typography sx={{ fontSize: "12px", color: "#64748b", fontWeight: 500 }}>{label}</Typography>
                      <Box sx={{ width: `${40 + i * 15}%`, height: "8px", borderRadius: "4px", bgcolor: i === 0 ? "#0f766e" : i === 1 ? "#d4a017" : "#3b82f6", opacity: 0.8 }} />
                    </Box>
                  ))}
                </Box>
                {/* Floating badge */}
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: "absolute", top: -15, right: -10 }}>
                  <Paper sx={{ px: 2, py: 1, borderRadius: "12px", bgcolor: "#0f766e", color: "#fff", fontWeight: 800, fontSize: "12px" }}>Live Sync ✓</Paper>
                </motion.div>
              </Paper>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HotelBanner;
