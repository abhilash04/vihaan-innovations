import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const features = [
  { icon: FingerprintIcon, title: "Payroll", desc: "Automate payouts, simplify tax deductions, and process statements securely and efficiently.", color: "#f97316" },
  { icon: AccessTimeIcon, title: "Attendance", desc: "Tracks clock-in, breaks, and shifts effortlessly with real-time biometric integration.", color: "#3b82f6" },
  { icon: ConnectingAirportsIcon, title: "Leaves", desc: "Streamline leave requests, track balances, and manage approvals with transparent workflows.", color: "#10b981" },
  { icon: WorkOutlineIcon, title: "Recruitment", desc: "Track applicant pipelines, evaluate scores, and onboard talent seamlessly via automation triggers.", color: "#8b5cf6" },
  { icon: ShowChartIcon, title: "Performance", desc: "Set up KPI tracking, appraisal templates, and scorecards for data-driven analytics growth.", color: "#ec4899" },
  { icon: AnalyticsIcon, title: "Analytics", desc: "Gain predictive insights on workforce sizing, performance curves, and operational metrics dashboards.", color: "#06b6d4" },
];

const HRMFeatures = () => (
  <Box sx={{ background: "linear-gradient(180deg, #F8FAFC 0%, #E0F2FE 100%)", py: 8, position: "relative", overflow: "hidden" }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8, px: 2 }}>
        <Typography sx={{ color: "#f97316", fontWeight: 700, fontSize: "13px", mb: 1, letterSpacing: "1px" }}>HRM SOFTWARE FEATURES</Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 4, fontFamily: "Fira Sans" }}>
          Key Features of Our HRM Software
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ px: 2 }}>
        {features.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", height: "100%", transition: "all 0.3s", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", "&:hover": { borderColor: feat.color, boxShadow: `0 10px 25px ${feat.color}15`, transform: "translateY(-4px)" } }}>
                  <Box sx={{ width: 52, height: 52, borderRadius: "14px", bgcolor: `${feat.color}10`, display: "flex", justifyContent: "center", alignItems: "center", color: feat.color, mb: 2.5 }}>
                    <Icon sx={{ fontSize: 26 }} />
                  </Box>
                  <Typography sx={{ color: "#1A202C", fontWeight: 800, fontSize: "16px", mb: 1.5 }}>{feat.title}</Typography>
                  <Typography sx={{ color: "rgba(11, 32, 70, 0.7)", fontSize: "13px", lineHeight: 1.6 }}>{feat.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default HRMFeatures;
