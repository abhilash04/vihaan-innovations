import React from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';

export default function OurExpertise() {
  const services = [
    { icon: <WebOutlinedIcon />, title: "Enterprise Software", desc: "Custom CRM, ERP, and bespoke portal development tailored to your business needs." },
    { icon: <DeveloperModeOutlinedIcon />, title: "Digital Products", desc: "Mobile applications, SaaS platforms, and MVP rapid development." },
    { icon: <ArchitectureOutlinedIcon />, title: "UI/UX Design", desc: "Human-centric interface design ensuring seamless, accessible user journeys." },
    { icon: <AnalyticsOutlinedIcon />, title: "Cloud & Data Consulting", desc: "Digital transformation strategy, cloud deployment, and business intelligence." }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 8 }, background: "#fafafa" }}>
      <Container maxWidth="lg">
        <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} sx={{ textAlign: "center", mb: 4 }}>
          <Typography sx={{ color: "#00b4d8", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "13px", mb: 2, fontFamily: "'Inter', sans-serif" }}>
            Our Expertise
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: { xs: "32px", md: "40px" }, color: "#0f172a", mb: 3 }}>
            Full-Stack Software Engineering
          </Typography>
          <Typography sx={{ fontFamily: "'Inter', sans-serif", color: "#64748b", fontSize: "16px", maxWidth: "600px", mx: "auto" }}>
            We provide end-to-end software development life cycle solutions, functioning as your dedicated technical partner from ideation to deployment.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {services.map((s, i) => (
            <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: "flex" }}>
              <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card elevation={0} sx={{
                  p: 4,
                  borderRadius: "16px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  background: "#ffffff",
                  height: "75%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#00b4d8",
                    boxShadow: "0 10px 30px rgba(0, 180, 216, 0.08)",
                    transform: "translateY(-5px)"
                  }
                }}>
                  <Box sx={{ width: 50, height: 50, borderRadius: "12px", background: "rgba(0, 180, 216, 0.1)", color: "#00b4d8", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    {React.cloneElement(s.icon, { sx: { fontSize: 26 } })}
                  </Box>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0f172a", mb: 1 }}>{s.title}</Typography>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>{s.desc}</Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
