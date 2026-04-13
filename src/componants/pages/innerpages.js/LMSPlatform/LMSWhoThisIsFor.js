import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const audiences = [
  { icon: CastForEducationIcon, title: "Coaching Centers", color: "#3b82f6", bg: "#eff6ff" },
  { icon: DevicesOtherIcon, title: "EdTech Startups & Groups", color: "#8b5cf6", bg: "#f5f3ff" },
  { icon: BusinessCenterIcon, title: "Corporate Training Programs", color: "#14b8a6", bg: "#f0fdfa" },
  { icon: AccountBalanceIcon, title: "Colleges & Universities", color: "#f59e0b", bg: "#fffbeb" },
  { icon: TrendingUpIcon, title: "Learning & Development Teams", color: "#22c55e", bg: "#f0fdf4" },
  { icon: VerifiedIcon, title: "Government & Certification Bodies", color: "#ef4444", bg: "#fef2f2" },
  { icon: SelfImprovementIcon, title: "Professional Training Institutes", color: "#0ea5e9", bg: "#f0f9ff" },
  { icon: WorkspacePremiumIcon, title: "Talent & Online Learning Platforms", color: "#f97316", bg: "#fff7ed" },
];

const AudienceCard = ({ icon: Icon, title, color, bg, delay }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }} style={{ height: "100%" }}>
    <Paper elevation={0} sx={{ p: 3, borderRadius: "16px", bgcolor: "#ffffff", border: `1.5px solid ${bg}`, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 4px 15px rgba(0,0,0,0.04)", transition: "all 0.3s", "&:hover": { transform: "translateY(-6px)", boxShadow: `0 12px 30px ${color}22`, borderColor: color } }}>
      <Box sx={{ width: 58, height: 58, borderRadius: "16px", bgcolor: bg, display: "flex", justifyContent: "center", alignItems: "center", color, mb: 2, "& > svg": { fontSize: 30 } }}>
        <Icon />
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#1e293b", fontSize: "14px", lineHeight: 1.3 }}>{title}</Typography>
    </Paper>
  </motion.div>
);

const LMSWhoThisIsFor = () => (
  <Box sx={{ bgcolor: "#ffffff", py: 6, mb: 3 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Who This Is For</Typography>
        <Typography sx={{ color: "#64748b", fontSize: "16px" }}>Custom LMS App Development solutions designed for different industries and learning needs.</Typography>
      </Box>
      <Grid container spacing={3} rowSpacing={10}>
        {audiences.map((a, i) => (
          <Grid item xs={6} sm={3} key={i}><AudienceCard {...a} delay={i * 0.08} /></Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default LMSWhoThisIsFor;
