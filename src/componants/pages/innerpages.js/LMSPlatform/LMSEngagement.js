import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CampaignIcon from '@mui/icons-material/Campaign';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const features = [
  { icon: LocalFireDepartmentIcon, title: "Streak tracking count", color: "#f97316", bg: "#fff7ed" },
  { icon: EmojiEventsIcon, title: "Badge collection", color: "#f59e0b", bg: "#fffbeb" },
  { icon: AutoAwesomeIcon, title: "Personalised path recommendations", color: "#8b5cf6", bg: "#f5f3ff" },
  { icon: WhatsAppIcon, title: "WhatsApp reminders", color: "#22c55e", bg: "#f0fdf4" },
  { icon: CampaignIcon, title: "Instructor announcements", color: "#2563eb", bg: "#eff6ff" },
  { icon: PlayCircleIcon, title: "Interactive video with embedded questions", color: "#06b6d4", bg: "#ecfeff" },
];

const LMSEngagement = () => (
  <Box sx={{ bgcolor: "#fafbff", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Engagement & Retention Features</Typography>
      </Box>
      <Grid container spacing={3}>
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "#ffffff", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: 3, transition: "all 0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 12px 30px ${f.color}22`, borderColor: f.color } }}>
                  <Box sx={{ width: 54, height: 54, borderRadius: "14px", bgcolor: f.bg, display: "flex", justifyContent: "center", alignItems: "center", color: f.color, flexShrink: 0 }}>
                    <Icon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: "15px", lineHeight: 1.3 }}>{f.title}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default LMSEngagement;
