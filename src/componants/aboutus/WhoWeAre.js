import React from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';

export default function WhoWeAre() {
  const highlights = [
    { icon: <LightbulbOutlinedIcon sx={{ fontSize: 32, color: "#00b4d8" }} />, title: "Innovation Led", desc: "We anticipate market trends to deliver future-proof technology." },
    { icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 32, color: "#f59e0b" }} />, title: "Performance Obsidian", desc: "Every solution is built with speed, scalability, and security in mind." },
    { icon: <CodeOffOutlinedIcon sx={{ fontSize: 32, color: "#10b981" }} />, title: "Lean Execution", desc: "Agile methodologies ensure zero waste and maximum output." }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: "#fafafa" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box component={motion.div} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Typography sx={{ color: "#00b4d8", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "13px", mb: 2, fontFamily: "'Inter', sans-serif" }}>
                Company Overview
              </Typography>
              <Typography variant="h2" sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: { xs: "32px", md: "42px" }, color: "#0f172a", lineHeight: 1.2, mb: 3 }}>
                We Build Technology That Drives Actual Business Value.
              </Typography>
              <Typography sx={{ fontFamily: "'Inter', sans-serif", color: "#64748b", fontSize: "16px", lineHeight: 1.8, mb: 3 }}>
                Founded with a singular vision to bridge the gap between complex engineering and elegant business solutions, Vihan Innovations stands at the forefront of digital transformation. We don't just write code; we architect systems that scale with your ambitions.
              </Typography>
              <Typography sx={{ fontFamily: "'Inter', sans-serif", color: "#64748b", fontSize: "16px", lineHeight: 1.8, mb: 5 }}>
                From enterprise CRMs to proprietary AI models and dynamic SaaS products, we are the invisible engine powering the growth of modern businesses.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box sx={{ borderLeft: "3px solid #00b4d8", pl: 2 }}>
                    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "36px", fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>12+</Typography>
                    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#64748b", mt: 1, fontWeight: 500 }}>Years of Excellence</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ borderLeft: "3px solid #f59e0b", pl: 2 }}>
                    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "36px", fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>500+</Typography>
                    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#64748b", mt: 1, fontWeight: 500 }}>Global Clients</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box component={motion.div} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {highlights.map((h, i) => (
                  <Card key={i} elevation={0} sx={{ 
                    p: 3, 
                    borderRadius: "16px", 
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                    display: "flex",
                    gap: 3,
                    alignItems: "flex-start",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
                    }
                  }}>
                    <Box sx={{ width: 60, height: 60, borderRadius: "12px", background: "rgba(0, 180, 216, 0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {h.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0f172a", mb: 0.5 }}>{h.title}</Typography>
                      <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>{h.desc}</Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}