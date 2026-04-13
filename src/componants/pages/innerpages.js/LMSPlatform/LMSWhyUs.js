import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from '@mui/icons-material/Download';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import SpeedIcon from '@mui/icons-material/Speed';
import ScaleIcon from '@mui/icons-material/Scale';

const reasons = [
  { icon: DownloadIcon, num: "01", title: "Proven EdTech Solutions", desc: "Built and launched multiple platforms through expert LMS Application Development for edtech companies, coaching institutes, and corporate training teams.", color: "#3b82f6" },
  { icon: BrandingWatermarkIcon, num: "02", title: "Fully Custom Platform", desc: "Get a branded platform with your domain and data, delivered as a complete white-label solution without external branding.", color: "#22c55e" },
  { icon: SpeedIcon, num: "03", title: "Fast & Scalable Technology", desc: "Reliable and scalable system supporting from 100 to 1,00,000+ users, with enterprise-ready infrastructure from the start.", color: "#f59e0b" },
  { icon: ScaleIcon, num: "04", title: "Scales with Your Growth", desc: "Designed to handle increasing users, courses, and content as your learning platform expands.", color: "#8b5cf6" },
];

const LMSWhyUs = () => (
  <Box sx={{ bgcolor: "#ffffff", py: 6 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Why Vihaan Innovations</Typography>
      </Box>
      <Grid container spacing={3}>
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "#f8fafc", height: "75%", border: "1px solid #e2e8f0", transition: "all 0.3s", "&:hover": { transform: "translateY(-6px)", boxShadow: `0 15px 35px ${r.color}20`, borderColor: r.color } }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                    <Typography sx={{ fontWeight: 800, color: "rgba(0,0,0,0.08)", fontSize: "30px", lineHeight: 1 }}>{r.num}</Typography>
                    <Icon sx={{ color: r.color, fontSize: 28 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "15px", mb: 1.5 }}>{r.title}</Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6 }}>{r.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default LMSWhyUs;
