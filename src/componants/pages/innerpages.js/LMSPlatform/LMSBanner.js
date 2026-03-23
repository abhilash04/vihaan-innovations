import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DevicesIcon from '@mui/icons-material/Devices';

const StatCard = ({ icon: Icon, value, label, color, delay }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box sx={{ width: 48, height: 48, borderRadius: "12px", bgcolor: `${color}20`, display: "flex", justifyContent: "center", alignItems: "center", color }}>
        <Icon sx={{ fontSize: 24 }} />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "22px", lineHeight: 1 }}>{value}</Typography>
        <Typography sx={{ color: "#666", fontSize: "13px", fontWeight: 500 }}>{label}</Typography>
      </Box>
    </Box>
  </motion.div>
);

const LMSBanner = () => {
  return (
    <Box sx={{
      background: "linear-gradient(135deg, #e8f4fd 0%, #dbeafe 40%, #eff6ff 100%)",
      position: "relative", overflow: "hidden",
      pt: { xs: 10, md: 12 }, pb: { xs: 10, md: 14 }
    }}>
      {/* Background blobs */}
      <Box sx={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }} />
      <Box sx={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)" }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">

          {/* Left Text */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Typography variant="h1" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "34px", md: "50px" }, lineHeight: 1.15, mb: 3 }}>
                Build a Learning Platform Your Students Love to Use
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, mb: 5, maxWidth: "500px" }}>
                We offer custom LMS website development services, including e-learning platforms and training management systems, designed for edtech startups, coaching institutes, corporate training teams, and universities.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button variant="contained" sx={{ bgcolor: "#2563eb", color: "#fff", fontWeight: 700, px: 4, py: 1.5, borderRadius: "10px", textTransform: "none", fontSize: "15px", boxShadow: "0 6px 20px rgba(37,99,235,0.35)", "&:hover": { bgcolor: "#1d4ed8", transform: "translateY(-2px)" }, transition: "all 0.3s" }}>
                  Start Building
                </Button>
                <Button variant="outlined" sx={{ borderColor: "#2563eb", color: "#2563eb", fontWeight: 600, px: 4, py: 1.5, borderRadius: "10px", textTransform: "none", fontSize: "15px", "&:hover": { bgcolor: "rgba(37,99,235,0.05)" } }}>
                  Explore Features
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Illustration */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Central illustration placeholder */}
                <Paper elevation={0} sx={{ p: 5, borderRadius: "24px", bgcolor: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,1)", backdropFilter: "blur(20px)", boxShadow: "0 20px 60px rgba(0,0,0,0.08)", textAlign: "center" }}>
                  <DevicesIcon sx={{ fontSize: 80, color: "#2563eb", mb: 2 }} />
                  <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <EmojiEventsIcon key={i} sx={{ fontSize: 20, color: i < 4 ? "#f59e0b" : "#e2e8f0" }} />
                    ))}
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: "18px" }}>Smart Learning Dashboard</Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "13px", mt: 1 }}>Easy-to-use, works on all devices, delivers better learning results</Typography>

                  {/* Floating badges */}
                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }}
                    style={{ position: "absolute", top: -15, right: -10 }}>
                    <Paper sx={{ px: 2, py: 1, borderRadius: "12px", bgcolor: "#22c55e", color: "#fff", fontWeight: 800, fontSize: "12px" }}>
                      5,000+ Students 🎓
                    </Paper>
                  </motion.div>
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
                    style={{ position: "absolute", bottom: -15, left: -10 }}>
                    <Paper sx={{ px: 2, py: 1, borderRadius: "12px", bgcolor: "#3b82f6", color: "#fff", fontWeight: 800, fontSize: "12px" }}>
                      40% Completion ↑
                    </Paper>
                  </motion.div>
                </Paper>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom Stats Row */}
        <Box sx={{ mt: 10, pt: 6, borderTop: "1px solid rgba(37,99,235,0.15)" }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <StatCard icon={PeopleIcon} value="5,000+" label="Students Enrolled" color="#2563eb" delay={0.5} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatCard icon={TrendingUpIcon} value="40%" label="Course Completion Rate" color="#22c55e" delay={0.6} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatCard icon={AccessTimeIcon} value="10 Hours/Week" label="Time Saved for Trainers" color="#f59e0b" delay={0.7} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LMSBanner;
