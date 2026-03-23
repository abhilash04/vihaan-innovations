import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const checklists = [
  "Customizable HRM Solutions",
  "Secure Employee Data",
  "Scalable HR Platform",
  "24/7 Support",
];

const HRMWhyUs = () => (
  <Box sx={{ background: "linear-gradient(135deg, #0A1E3F 0%, #0A192F 100%)", py: 8, position: "relative", overflow: "hidden" }}>
    <Container maxWidth="lg">
      <Grid container spacing={5} alignItems="center" sx={{ px: 2 }}>
        {/* Left Side stats photo placeholder */}
        <Grid item xs={12} md={6.5}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: "24px", background: "linear-gradient(145deg, rgba(249,115,22,0.08), rgba(139,92,246,0.08))", border: "1px solid rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: "#ffffff", fontSize: "36px", mb: 2, fontFamily: "Fira Sans" }}>
                Scalable HRM Tracking Development Services
              </Typography>
              <Typography sx={{ color: "rgba(255, 255, 255, 0.89)", fontSize: "18px", mb: 2, lineHeight: 1.6 }}>
                We develop custom scalable HRM solutions, Custom APIs integrations, Staff ERP dashboards accurately configured dashboard scalable tracking.
              </Typography>
              <Typography sx={{ color: "rgba(255, 255, 255, 0.89)", fontSize: "18px", mb: 4, lineHeight: 1.6 }}>
                Our HRM development services are designed to streamline HR operations, improve employee engagement, and enhance overall productivity.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <Button variant="contained" sx={{ bgcolor: "#f97316", color: "#fff", fontWeight: 800, px: 3, borderRadius: "20px", textTransform: "none" }}>Request Consulting</Button>
                <Button variant="outlined" sx={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff", px: 3, borderRadius: "20px", textTransform: "none" }}>See Case Studies</Button>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        {/* Right Side checklist trust vectors */}
        <Grid item xs={12} md={5.5}>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Typography sx={{ color: "#f97316", fontWeight: 700, fontSize: "13px", mb: 1, letterSpacing: "1px" }}>WHY CHOOSE OUR HRM SOLUTIONS</Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#ffffff", fontSize: "28px", mb: 4, fontFamily: "Fira Sans" }}>
              Why Choose Our HRM Solutions
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {checklists.map((item, i) => (
                <Paper key={i} elevation={0} sx={{ p: 2, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 2, transition: "all 0.3s", "&:hover": { bgcolor: "rgba(255,255,255,0.05)", transform: "translateX(4px)" } }}>
                  <CheckCircleOutlineIcon sx={{ color: "#f97316" }} />
                  <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "14px" }}>{item}</Typography>
                </Paper>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HRMWhyUs;
