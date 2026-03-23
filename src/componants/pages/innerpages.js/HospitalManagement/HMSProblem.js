import React from "react";
import { Box, Container, Typography, Grid, Paper, Divider } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const problems = [
  { title: "Manual Billing Leaks", desc: "Siloed billing causes prescription leaks and lost revenue buffers." },
  { title: "Overloaded OPD Queues", desc: "Lack of digital slotting leads to staff burnout and cancels." },
  { title: "Siloed Department Data", desc: "Diagnostics and pharmacy records don't sync, delaying care." },
  { title: "Paper Lab Reports", desc: "Reports degrade, get lost, or take hours to fetch safely." },
  { title: "Disconnected Staff Scheduling", desc: "Inefficient duty rosters cause coverage gaps packs." },
  { title: "Zero Data Insights", desc: "No real-time analytics on bed occupancy or daily revenue curves." },
  { title: "Inventory Wastage", desc: "Consumables overstocking causes wastage leakage buffers." },
  { title: "Delayed Insurance Claims", desc: "Manual TPA reconciliation delays settlements triggers triggers." }
];

const HMSProblem = () => {
  return (
    <Box sx={{ background: "#0A2D6E", py: 8, position: "relative", overflow: "hidden" }}>
      {/* Background Watermark Faint */}
      <Box sx={{ position: "absolute", left: -50, top: "20%", width: "40%", height: "40%", opacity: 0.05, pointerEvents: "none" }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <rect x="45" y="10" width="10" height="80" fill="#ffffff" />
          <rect x="10" y="45" width="80" height="10" fill="#ffffff" />
        </svg>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ px: 2 }} alignItems="center">
          {/* Left Column intro */}
          <Grid item xs={12} md={5}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Typography sx={{ color: "#F87171", fontWeight: 800, fontSize: "12px", mb: 1, letterSpacing: "1px" }}>THE CHALLENGE</Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Why Hospitals Struggle Without a Unified System
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", mb: 4, lineHeight: 1.6 }}>
                Every department working in silos creates delays, increases revenue leaks, and leads to patient frustration.
              </Typography>

              {/* Bottom Callout box list */}
              <Paper elevation={0} sx={{ p: 2, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", transition: "all 0.3s", "&:hover": { bgcolor: "rgba(255,255,255,0.06)", "& .arrow-icon": { transform: "translateX(4px)" } } }}>
                <Typography sx={{ color: "#ffffff", fontSize: "13px", fontWeight: 700 }}>Sound familiar? Here's how we solve every one of these.</Typography>
                <ArrowForwardIcon className="arrow-icon" sx={{ color: "#10B981", fontSize: 20, transition: "0.2s" }} />
              </Paper>
            </motion.div>
          </Grid>

          {/* Right Column List grid */}
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {problems.map((prob, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.12 }}>
                  <Box sx={{ p: 2, borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "flex-start", gap: 1.5, transition: "all 0.2s", cursor: "pointer", "&:hover": { bgcolor: "rgba(255,255,255,0.03)", borderLeft: "4px solid #F59E0B" } }}>
                    <ReportProblemIcon sx={{ color: "#F59E0B", fontSize: 18, mt: 0.3 }} />
                    <Box>
                      <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "14px", mb: 0.5 }}>{prob.title}</Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>{prob.desc}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HMSProblem;
