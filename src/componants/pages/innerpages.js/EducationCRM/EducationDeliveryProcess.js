import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding admissions bottlenecks and scoping requirements.", icon: <SearchIcon /> },
  { num: "02", title: "Design", desc: "Crafting student dashboard visuals and mobile responsive layouts.", icon: <DesignServicesIcon /> },
  { num: "03", title: "Development", desc: "Building secure vaults, payment hooks and routing pipelines.", icon: <CodeIcon /> },
  { num: "04", title: "Testing & QA", desc: "Extensive bug tracing and security integrity auditing limits.", icon: <BugReportOutlinedIcon /> },
  { num: "05", title: "Training & UAT", desc: "Formulary triggers for counsellor workflows and student adoptions.", icon: <SchoolOutlinedIcon /> },
  { num: "06", title: "Launch & Support", desc: "Live deployment with passive monitoring releases.", icon: <RocketLaunchIcon /> }
];

const Bubble = ({ size, color, top, left, right, bottom, delay }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
      filter: "blur(50px)",
      top, left, right, bottom,
      zIndex: 0,
      pointerEvents: "none"
    }}
  />
);

const FeatureCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 3.5,
        height: "100%",
        borderRadius: "20px",
        bgcolor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          bgcolor: "rgba(255, 255, 255, 0.05)",
          borderColor: "rgba(0, 180, 216, 0.3)",
          boxShadow: "0 15px 35px rgba(0, 180, 216, 0.1)"
        }
      }}
    >
      <Box
        sx={{
          width: 45, height: 45, borderRadius: "12px",
          bgcolor: "rgba(0, 180, 216, 0.15)", color: "#00B4D8",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, mt: 0.5
        }}
      >
        {item.icon}
      </Box>
      <Box>
        <Typography sx={{ color: "#00B4D8", fontWeight: 700, fontSize: "14px", mb: 0.5 }}>
          STEP {item.num}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800, color: "#ffffff", fontSize: "18px", mb: 1 }}>
          {item.title}
        </Typography>
        <Typography sx={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "14px", lineHeight: 1.5 }}>
          {item.desc}
        </Typography>
      </Box>
    </Paper>
  </motion.div>
);

const EducationDeliveryProcess = () => {
  return (
    <Box sx={{ py: 8, background: "linear-gradient(135deg, #0B2046 0%, #001D4A 100%)", position: "relative", overflow: "hidden" }}>

      {/* Floating Bubbles */}
      <Bubble size={300} color="rgba(0, 180, 216, 0.25)" top="10%" left="-10%" delay={0} />
      <Bubble size={250} color="rgba(16, 185, 129, 0.15)" bottom="10%" right="-5%" delay={1} />
      <Bubble size={400} color="rgba(59, 130, 246, 0.15)" top="40%" left="40%" delay={0.5} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#00B4D8", fontWeight: 700, mb: 1, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Our Sprint Process
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "28px", md: "42px" }, lineHeight: 1.2, mb: 2 }}>
            Our Process From Idea to Launch
          </Typography>
          <Typography variant="h5" sx={{ color: "#00B4D8", fontWeight: 700, mb: 2, fontSize: "20px" }}>
            A structured sprint approach to build, test, and launch your custom digital solution faster
          </Typography>
        </Box>

        {/* 2 Equal Columns Split list */}
        <Grid container spacing={4}>
          {/* Left Column: Steps 1-3 */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} direction="column">
              {steps.slice(0, 3).map((item, index) => (
                <Grid item xs={12} key={item.num}>
                  <FeatureCard item={item} index={index} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column: Steps 4-6 */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} direction="column">
              {steps.slice(3, 6).map((item, index) => (
                <Grid item xs={12} key={item.num}>
                  <FeatureCard item={item} index={index + 3} /> {/* Offset delay for sequential stagger */}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default EducationDeliveryProcess;
