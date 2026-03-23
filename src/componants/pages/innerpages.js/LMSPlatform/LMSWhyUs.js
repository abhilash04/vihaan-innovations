import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from '@mui/icons-material/Download';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import SpeedIcon from '@mui/icons-material/Speed';
import ScaleIcon from '@mui/icons-material/Scale';

const reasons = [
  { icon: DownloadIcon, num: "01", title: "Download EdTech Portals", desc: "Over X EdTech Portals (Your Brand Domain, Data). Built and launched for edtech companies, coaching institutes and corporate L&D teams.", color: "#3b82f6" },
  { icon: BrandingWatermarkIcon, num: "02", title: "Custom Platform", desc: "Provide platform (Your Brand Domain, Data). Completely white-label delivery, zero Vihaan branding.", color: "#22c55e" },
  { icon: SpeedIcon, num: "03", title: "Fast Assessment & Technology", desc: "Scalable from 100 to 1,00,000+ Certificates. Enterprise-ready infrastructure from day one.", color: "#f59e0b" },
  { icon: ScaleIcon, num: "04", title: "Scalable from 100 to 1,00,000+", desc: "Scalable from 100 to 1,00,000+ courses and students. We grow with you.", color: "#8b5cf6" },
];

const LMSWhyUs = () => (
  <Box sx={{ bgcolor: "#ffffff", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Why Vihaan Innovations</Typography>
      </Box>
      <Grid container spacing={3}>
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "#f8fafc", height: "100%", border: "1px solid #e2e8f0", transition: "all 0.3s", "&:hover": { transform: "translateY(-6px)", boxShadow: `0 15px 35px ${r.color}20`, borderColor: r.color } }}>
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
