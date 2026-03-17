import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EditNoteIcon from '@mui/icons-material/EditNote';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import QuizIcon from '@mui/icons-material/Quiz';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const features = [
  { icon: EditNoteIcon, title: "Course Builder & Content Management", desc: "Uploading categories site plans, course building modules, video, quizzes, scheduling.", color: "#3b82f6" },
  { icon: LiveTvIcon, title: "Live Class & Webinar Integration", desc: "Upcoming modules, planning per content with scheduling.", color: "#8b5cf6" },
  { icon: QuizIcon, title: "Assessment & Quiz Engine", desc: "More questions from MCQs, Q/A, Time Tools.", color: "#22c55e" },
  { icon: ShowChartIcon, title: "Student Progress Management", desc: "Compilation performance components and analytics.", color: "#f59e0b" },
  { icon: GroupWorkIcon, title: "Batch & Cohort Management", desc: "Group batches self-organized, auto manage.", color: "#06b6d4" },
  { icon: WorkspacePremiumIcon, title: "Certificate Generation Module", desc: "Auto-mint with unique Certificate IDs, QR-secured.", color: "#ec4899" },
  { icon: CreditCardIcon, title: "Subscription & Payment Management", desc: "Price plans, bundle plans, offline flows.", color: "#f97316" },
  { icon: PhoneAndroidIcon, title: "Mobile-first Learner App", desc: "Full native builds for iOS and Android.", color: "#14b8a6" },
  { icon: AdminPanelSettingsIcon, title: "Admin & Instructor Dashboard", desc: "Manage courses, students, revenue, certificates.", color: "#7c3aed" },
];

const LMSFeatures = () => (
  <Box sx={{ bgcolor: "#f8fafc", py: 14 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>What We Build – Feature Overview</Typography>
        <Typography sx={{ color: "#64748b", fontSize: "16px" }}>Dominant and capability of every feature and smaller vertices.</Typography>
      </Box>
      <Grid container spacing={3}>
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 3.5, borderRadius: "16px", bgcolor: "#ffffff", height: "100%", border: "1px solid rgba(0,0,0,0.07)", transition: "all 0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 12px 30px ${f.color}22`, borderColor: f.color } }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: "12px", bgcolor: `${f.color}18`, display: "flex", justifyContent: "center", alignItems: "center", color: f.color, flexShrink: 0 }}>
                      <Icon sx={{ fontSize: 24 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "14px", lineHeight: 1.3 }}>{f.title}</Typography>
                  </Box>
                  <Typography sx={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6 }}>{f.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default LMSFeatures;
