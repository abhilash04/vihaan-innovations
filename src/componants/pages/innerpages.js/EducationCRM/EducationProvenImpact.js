import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const StatCard = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    style={{ height: '100%' }}
  >
    <Box sx={{ p: 3, textAlign: "center", borderRight: { md: "1px solid rgba(0,0,0,0.1)" }, height: "100%" }}>
      <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "26px", md: "52px" }, mb: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ color: "#0B2046", fontWeight: 600, fontSize: "14px", lineHeight: 1.4 }}>
        {label}
      </Typography>
    </Box>
  </motion.div>
);

const FeatureCard = ({ num, icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "16px",
        bgcolor: "#ffffff",
        boxShadow: "0 10px 30px rgba(0,180,216,0.05)",
        border: "1px solid rgba(0,180,216,0.1)",
        height: "100%"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography sx={{ color: "#00B4D8", fontSize: "24px", fontWeight: 800 }}>
          {num}
        </Typography>
        <Icon sx={{ fontSize: 32, color: "#0B2046" }} />
      </Box>
      <Typography sx={{ fontWeight: 600, color: "#1a1a1a", fontSize: "15px", lineHeight: 1.4 }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const EducationProvenImpact = () => {
  return (
    <Box sx={{ position: "relative", bgcolor: "#f8f9fe", pt: 14, pb: 12 }}>

      {/* Decorative arrow pointing to Proven Impact */}
      <Box sx={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)", zIndex: 1, display: { xs: 'none', md: 'block' } }}>
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 L20 70 M5 55 L20 70 L35 55" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "42px" }, mb: 2 }}>
            Proven Impact with Our Education CRM
          </Typography>
          <Typography variant="h5" sx={{ color: "#00B4D8", fontWeight: 700, fontSize: "20px" }}>
            Real results delivered through intelligent automation and scalable systems
          </Typography>
        </Box>

        {/* 4 Stat Cards */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: "24px",
            bgcolor: "#ffffff",
            boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.05)",
            overflow: "hidden",
            mb: 8
          }}
        >
          <Grid container>
            <Grid item xs={6} md={3}>
              <StatCard value="3x" label={<>Increase in<br />Lead-to-Site Visit<br />Conversion</>} delay={0.1} />
            </Grid>
            <Grid item xs={6} md={3}>
              <StatCard value="68%" label={<>Reduction in<br />Manual Follow-up<br />Effort</>} delay={0.2} />
            </Grid>
            <Grid item xs={6} md={3}>
              <StatCard value="40%" label={<>Faster Booking-<br />to-Registration<br />Cycle</>} delay={0.3} />
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ p: 3, textAlign: "center", height: "100%" }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "26px", md: "52px" }, mb: 1 }}>
                    90
                  </Typography>
                  <Typography sx={{ color: "#0B2046", fontWeight: 600, fontSize: "14px", lineHeight: 1.4 }}>
                    Average Days to<br />Full Platform<br />Launch
                  </Typography>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* 4 Additional Info Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              num="01"
              icon={CalendarMonthOutlinedIcon}
              title={<>Built Around Academic Cycles<br /><Typography sx={{ fontSize: "13px", mt: 1, fontWeight: 400, color: "#666" }}>Designed to align with admission seasons and academic calendars for maximum efficiency.</Typography></>}
              delay={0.5}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              num="02"
              icon={ArchitectureOutlinedIcon}
              title={<>Fully Custom-Built Solution<br /><Typography sx={{ fontSize: "13px", mt: 1, fontWeight: 400, color: "#666" }}>Our education crm is tailored specifically for your institution-not a one-size-fits-all SaaS.</Typography></>}
              delay={0.6}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              num="03"
              icon={AccountTreeOutlinedIcon}
              title={<>Multi-Branch Ready<br /><Typography sx={{ fontSize: "13px", mt: 1, fontWeight: 400, color: "#666" }}>Easily manage multiple campuses, teams, and operations from a single platform.</Typography></>}
              delay={0.7}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              num="04"
              icon={SupportAgentOutlinedIcon}
              title={<>Continuous Support<br /><Typography sx={{ fontSize: "13px", mt: 1, fontWeight: 400, color: "#666" }}>Get ongoing assistance and system optimization throughout every admission cycle.</Typography></>}
              delay={0.8}
            />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default EducationProvenImpact;
