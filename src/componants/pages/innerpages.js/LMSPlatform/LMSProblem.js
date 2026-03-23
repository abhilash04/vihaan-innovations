import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import LaptopIcon from '@mui/icons-material/Laptop';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyIcon from '@mui/icons-material/Psychology';

const problemCards = [
  { icon: <LaptopIcon sx={{ fontSize: 40, color: "#3b82f6" }} />, title: "Course Creation\nPlatforms", sub: "Limited admin control and lack of access in many LMS Software Development systems" },
  { icon: <VideocamIcon sx={{ fontSize: 40, color: "#22c55e" }} />, title: "Live Classes &\nWebinar Integration", sub: "Trainers spend extra time handling manual setup and content management" },
  { icon: <GroupsIcon sx={{ fontSize: 40, color: "#f59e0b" }} />, title: "Corporate Training\n& L&D Teams", sub: "Disconnected payment systems and difficulty in tracking compliance" },
];

const LMSProblem = () => (
  <Box sx={{ bgcolor: "#1e3a5f", py: 8, position: "relative", overflow: "hidden" }}>
    <Box sx={{ position: "absolute", top: "20%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "28px", md: "38px" }, mb: 2 }}>The Problem</Typography>
      </Box>
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {problemCards.map((card, i) => (
          <Grid item xs={12} md={4} key={i}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", textAlign: "center", height: "100%" }}>
                <Box sx={{ mb: 2 }}>{card.icon}</Box>
                <Typography sx={{ fontWeight: 800, color: "#ffffff", fontSize: "16px", mb: 1.5, whiteSpace: "pre-line" }}>{card.title}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.6 }}>{card.sub}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      {/* Pain point bullets */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
              {["Confusing learning experience", "No proper progress tracking", "Generic platforms with limited local support", "High manual work for instructors", "Lack of compliance tracking", "Revenue loss due to inefficient systems"].map((pt, i) => (
                <Paper key={i} elevation={0} sx={{ px: 3, py: 1.5, borderRadius: "30px", bgcolor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#ef4444", flexShrink: 0 }} />
                  <Typography sx={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>{pt}</Typography>
                </Paper>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default LMSProblem;
