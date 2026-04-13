import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AssessmentIcon from '@mui/icons-material/Assessment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BusinessIcon from '@mui/icons-material/Business';

const corpFeatures = [
  { icon: AssessmentIcon, title: "Progress Reports & Analytics", desc: "Detailed reports for managers, HR teams, and departments" },
  { icon: ManageAccountsIcon, title: "Manager Dashboards", desc: "Track team progress, learning hours, and completion rates" },
  { icon: FactCheckIcon, title: "Compliance Tracking", desc: "Automatically monitor required courses and certifications" },
  { icon: BusinessIcon, title: "Multi-Department Structure", desc: "Separate dashboards for teams, batches, and locations" },
];

const LMSCorporate = () => (
  <Box sx={{ bgcolor: "#1e293b", py: 6, position: "relative", overflow: "hidden" }}>
    <Box sx={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)" }} />
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>Corporate LMS – Dedicated Sub-section</Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "15px" }}>Built for enterprise training, compliance, and HR departments.</Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {corpFeatures.map((f, i) => {
          const Icon = f.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: "flex" }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", height: "70%", textAlign: "center", transition: "all 0.3s", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                  <Icon sx={{ fontSize: 40, color: "#60a5fa", mb: 2 }} />
                  <Typography sx={{ fontWeight: 800, color: "#ffffff", fontSize: "14px", mb: 1 }}>{f.title}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.6 }}>{f.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default LMSCorporate;
