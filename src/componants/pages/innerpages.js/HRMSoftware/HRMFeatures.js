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
  { icon: FingerprintIcon, title: "Payroll", desc: "Automate payouts, tax deductions, and pay slip processing payouts dashboards.", color: "#f97316" },
  { icon: AccessTimeIcon, title: "Attendance", desc: "Tracks clock-in, break breaks setups, integrate leaves workflows analytics dashboard.", color: "#3b82f6" },
  { icon: ConnectingAirportsIcon, title: "Leaves", desc: "Tracks available buckets balance setup flow analytics transparency setups.", color: "#10b981" },
  { icon: WorkOutlineIcon, title: "Recruitment", desc: "Track applicant pipelines profiles scores dashboards accurately workflow triggers.", color: "#8b5cf6" },
  { icon: ShowChartIcon, title: "Performance", desc: "KPI tracking appraisal scoring templates dashboard layout accuracy analytics.", color: "#ec4899" },
  { icon: AnalyticsIcon, title: "Analytics", desc: "Workforce sizing predictive dashboard insights data records triggers dashboard.", color: "#06b6d4" },
];

const HRMFeatures = () => (
  <Box sx={{ background: "#12081a", py: 12, position: "relative", overflow: "hidden" }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8, px: 2 }}>
        <Typography sx={{ color: "#f97316", fontWeight: 700, fontSize: "13px", mb: 1, letterSpacing: "1px" }}>HRM SOFTWARE FEATURES</Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "28px", md: "36px" }, mb: 4, fontFamily: "Fira Sans" }}>
          Key Features of Our HRM Software
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ px: 2 }}>
        {features.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", height: "100%", transition: "all 0.3s", "&:hover": { bgcolor: "rgba(255,255,255,0.06)", borderColor: feat.color, boxShadow: `0 0 30px ${feat.color}15` } }}>
                  <Box sx={{ width: 52, height: 52, borderRadius: "14px", bgcolor: `${feat.color}15`, display: "flex", justifyContent: "center", alignItems: "center", color: feat.color, mb: 2.5 }}>
                    <Icon sx={{ fontSize: 26 }} />
                  </Box>
                  <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "16px", mb: 1.5 }}>{feat.title}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.6 }}>{feat.desc}</Typography>
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
