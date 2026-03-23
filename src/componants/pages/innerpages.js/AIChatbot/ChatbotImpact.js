import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const bigStats = [
  { value: "80%", label: "of routine queries handled without human agents", color: "#06b6d4", size: "72px" },
  { value: "3×", label: "more leads captured from website visitors outside business hours", color: "#8b5cf6", size: "72px" },
  { value: "60%", label: "reduction in repetitive support workload", color: "#22c55e", size: "72px" },
  { value: "2–3 weeks", label: "Bots go live in as little as 2–3 weeks", color: "#f59e0b", size: "48px" },
];

const ChatbotImpact = () => (
  <Box sx={{ background: "linear-gradient(135deg, #060d1a 0%, #0a1628 100%)", py: 8, position: "relative", overflow: "hidden" }}>
    <Box sx={{ position: "absolute", top: "40%", left: "-5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "26px", md: "36px" }, mb: 2 }}>Results & Impact Numbers</Typography>
      </Box>
      <Grid container spacing={4}>
        {bigStats.map((stat, i) => (
          <Grid item xs={6} md={3} key={i}>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: "24px", bgcolor: "rgba(255,255,255,0.04)", border: `1.5px solid ${stat.color}30`, textAlign: "center", backdropFilter: "blur(10px)", transition: "all 0.3s", "&:hover": { borderColor: stat.color, boxShadow: `0 0 40px ${stat.color}20`, transform: "translateY(-6px)" } }}>
                <Typography sx={{ fontWeight: 900, color: stat.color, fontSize: stat.size, lineHeight: 1, mb: 2 }}>{stat.value}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.5 }}>{stat.label}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Response time comparison */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
        <Paper elevation={0} sx={{ mt: 5, p: 5, borderRadius: "24px", bgcolor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <AccessTimeIcon sx={{ fontSize: 48, color: "#06b6d4", mb: 1 }} />
              <Typography sx={{ fontWeight: 900, color: "#06b6d4", fontSize: "56px", lineHeight: 1 }}>3s</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", mt: 1 }}>Average response time — AI bot</Typography>
            </Grid>
            <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
              <Typography sx={{ fontWeight: 900, color: "#64748b", fontSize: "32px" }}>VS</Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Typography sx={{ fontWeight: 900, color: "#64748b", fontSize: "56px", lineHeight: 1 }}>6h+</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", mt: 1 }}>Average wait for human reply</Typography>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Container>
  </Box>
);

export default ChatbotImpact;
