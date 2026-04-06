import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Workflow, Settings, Zap, Shield, Search, BarChart, ArrowRight as LucideArrowRight } from "lucide-react";

const DevOpsAutomation = () => {
  const steps = [
    { label: "Plan", x: 200, y: 100 },
    { label: "Code", x: 350, y: 50 },
    { label: "Build", x: 500, y: 100 },
    { label: "Test", x: 650, y: 200 },
    { label: "Release", x: 500, y: 300 },
    { label: "Deploy", x: 350, y: 350 },
    { label: "Operate", x: 200, y: 300 },
    { label: "Monitor", x: 50, y: 200 },
  ];

  const features = [
    { title: "CI/CD Pipeline Setup", icon: Workflow },
    { title: "Docker & Kubernetes", icon: Settings },
    { title: "Infrastructure as Code", icon: Zap },
    { title: "Automated Testing", icon: Shield },
    { title: "Monitoring & Alerting", icon: Search },
    { title: "Security DevSecOps", icon: BarChart },
  ];

  const infinityPath = "M 350,200 C 500,200 650,50 650,200 C 650,350 500,200 350,200 C 200,200 50,50 50,200 C 50,350 200,200 350,200 Z";

  return (
    <Box id="devops" sx={{ py: { xs: 10, md: 20 }, bgcolor: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: { xs: "120px", md: "250px" },
          fontWeight: 900,
          color: "rgba(15, 23, 42, 0.03)",
          fontFamily: "'Syne', sans-serif",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        06
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 12 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end", width: "100%", position: "relative", mb: 2 }}>
            <Typography
              sx={{
                color: "#06b6d4",
                fontWeight: 800,
                letterSpacing: "0.2em",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              DEVOPS & AUTOMATION
            </Typography>
            <Typography
              component="a"
              href="/devops-services"
              sx={{
                position: "absolute",
                right: 0,
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#06b6d4",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" }
              }}
            >
              View All <LucideArrowRight size={14} />
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: "36px", md: "52px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a", lineHeight: 1.1 }}>
            Ship Faster. Break Nothing. <br />
            <Box component="span" sx={{ color: "#06b6d4" }}>Automate Everything.</Box>
          </Typography>
        </Stack>

        {/* DevOps Infinity Loop */}
        <Box sx={{ width: "100%", height: "400px", position: "relative", mb: 12, display: { xs: "none", md: "block" } }}>
           <svg width="700" height="400" viewBox="0 0 700 400" style={{ margin: "auto", display: "block", overflow: "visible" }}>
              <motion.path
                 d={infinityPath}
                 fill="none"
                 stroke="#06b6d4"
                 strokeWidth="4"
                 initial={{ pathLength: 0, opacity: 0 }}
                 whileInView={{ pathLength: 1, opacity: 1 }}
                 transition={{ duration: 2, ease: "easeInOut" }}
                 viewport={{ once: true }}
                 style={{ filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))" }}
              />
              
              {/* Traveling dot */}
              <motion.circle
                 r="6"
                 fill="#06b6d4"
                 style={{ filter: "drop-shadow(0 0 8px #06b6d4)" }}
              >
                 <animateMotion dur="10s" repeatCount="indefinite" path={infinityPath} rotate="auto" />
              </motion.circle>

              {steps.map((step, i) => (
                <g key={i}>
                    <motion.circle
                      cx={step.x}
                      cy={step.y}
                      r="14"
                      fill="#ffffff"
                      stroke="#06b6d4"
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1 + i * 0.2 }}
                      viewport={{ once: true }}
                      style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.05))" }}
                    />
                    <motion.text
                       x={step.x}
                       y={step.y + 35}
                       textAnchor="middle"
                       fill="#0f172a"
                       style={{ fontSize: "13px", fontWeight: 800, fontFamily: "'Syne', sans-serif" }}
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 1.2 + i * 0.2 }}
                       viewport={{ once: true }}
                    >
                      {step.label}
                    </motion.text>
                </g>
              ))}
           </svg>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
               <Box
                 component={motion.div}
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 whileHover={{ scale: 1.02 }}
                 sx={{
                   p: 5,
                   background: "#ffffff",
                   borderRadius: "32px",
                   border: "1px solid #e2e8f0",
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center",
                   textAlign: "center",
                   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                   boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                   "&:hover": {
                     borderColor: "#06b6d4",
                     transform: "translateY(-8px)",
                     boxShadow: "0 20px 40px rgba(6, 182, 212, 0.08)",
                   },
                 }}
               >
                 <Box sx={{ width: 60, height: 60, borderRadius: "18px", bgcolor: "rgba(6, 182, 212, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", mb: 3, color: "#06b6d4" }}>
                   <feature.icon size={28} />
                 </Box>
                 <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 800, fontSize: "18px" }}>
                   {feature.title}
                 </Typography>
               </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DevOpsAutomation;
