import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const learnerSteps = [
  "Browse Courses", "Sign Up & Make Payment", "Access Learning Dashboard", "Watch Video Lessons",
  "Take Quizzes & Tests", "Join Live Classes", "Complete the Course", "Download Certificate"
];
const instructorSteps = [
  "Create Course", "Upload Learning Content", "Set Batches & Pricing", "Publish Course",
  "Monitor Student Progress", "Conduct Live Sessions", "Review Assessments", "Issue Certificates", "Analyze Performance"
];

const StepBubble = ({ label, color, bg, delay }) => (
  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay }}>
    <Paper elevation={0} sx={{ px: 2.5, py: 1.5, borderRadius: "10px", bgcolor: bg, border: `1.5px solid ${color}`, textAlign: "center" }}>
      <Typography sx={{ fontWeight: 700, color: color, fontSize: "13px" }}>{label}</Typography>
    </Paper>
  </motion.div>
);

const FlowColumn = ({ steps, title, color, bg, titleColor }) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Typography sx={{ fontWeight: 800, color: titleColor || "#0f172a", fontSize: "16px", mb: 3, textAlign: "center" }}>{title}</Typography>
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <StepBubble label={step} color={color} bg={bg} delay={i * 0.08} />
        {i < steps.length - 1 && <ArrowDownwardIcon sx={{ color, opacity: 0.5, my: 1, fontSize: 20 }} />}
      </React.Fragment>
    ))}
  </Box>
);

const LMSLearningJourney = () => (
  <Box sx={{ bgcolor: "#eff6ff", py: 6 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
          The Learning Journey – Two Perspectives
        </Typography>
      </Box>
      <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: "24px", bgcolor: "#ffffff", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.05)" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <FlowColumn steps={learnerSteps} title="Learner Journey" color="#2563eb" bg="#eff6ff" />
          </Grid>
          {/* Divider */}
          <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ width: "1px", height: "100%", bgcolor: "#e2e8f0", display: { xs: "none", md: "block" } }} />
          </Grid>
          <Grid item xs={12} md={5}>
            <FlowColumn steps={instructorSteps} title="Instructor / Admin Journey" color="#7c3aed" bg="#f5f3ff" />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  </Box>
);

export default LMSLearningJourney;
