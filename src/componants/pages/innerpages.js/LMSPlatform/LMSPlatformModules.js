import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Tabs, Tab } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["What it does", "Live Class & Webinar Integration", "Assessment Engine", "Payments", "Admin Panel", "Analytics"];

const moduleContent = {
  0: {
    left: { title: "What it does", items: ["Upload structuring questions, quizzes, and drills", "Handle quizzes course categories and quizzes", "Support many question types: MCQ, Fill, Matching", "Timer mode", "Result grading", "Proctoring"] },
    right: { title: "Who uses it", items: ["Student", "Admin", "Instructor", "Results analyst per student and batch"] }
  },
  1: {
    left: { title: "What it does", items: ["Integrate Zoom, Google Meet, or custom RTMP", "Schedule and notify students and instructors", "Record and replay sessions", "Attendance tracking", "Live quiz during sessions"] },
    right: { title: "Who uses it", items: ["Instructors host", "Students join", "Admins monitor", "Parents review replays"] }
  },
  2: {
    left: { title: "What it does", items: ["MCQ, fill-blank, code questions", "Auto-grading and result dashboards", "Proctoring mode integration", "Certificate triggers on pass"] },
    right: { title: "Who uses it", items: ["Students attempt", "Instructors grade", "Admins analyze results"] }
  },
};
// Fill in remaining tabs
[3,4,5].forEach(i => {
  moduleContent[i] = {
    left: { title: "What it does", items: ["Custom module functionality", "API integrations", "Dashboard management", "Role-based controls"] },
    right: { title: "Who uses it", items: ["Admin", "Instructor", "Student", "Organisation"] }
  };
});

const LMSPlatformModules = () => {
  const [active, setActive] = useState(0);
  return (
    <Box sx={{ bgcolor: "#ffffff", py: 12 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Platform Modules – Tabbed Deep Dive</Typography>
        </Box>
        {/* Tab Bar */}
        <Tabs value={active} onChange={(_, v) => setActive(v)} variant="scrollable" scrollButtons="auto"
          sx={{ mb: 3, '& .MuiTabs-indicator': { display: "none" }, '& .MuiTab-root': { textTransform: "none", fontWeight: 600, fontSize: "13px", color: "#64748b", bgcolor: "#f1f5f9", borderRadius: "8px", mx: 0.5, minHeight: "38px", px: 3, py: 1 }, '& .Mui-selected': { color: "#ffffff !important", bgcolor: "#2563eb !important", boxShadow: "0 4px 12px rgba(37,99,235,0.3)" } }}>
          {tabs.map((t, i) => <Tab key={i} label={t} disableRipple />)}
        </Tabs>
        {/* Content */}
        <Paper elevation={0} sx={{ borderRadius: "16px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <Grid container>
                <Grid item xs={12} md={6} sx={{ p: 5, borderRight: { md: "1px solid #e2e8f0" }, bgcolor: "#fbfdff" }}>
                  <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "15px", mb: 3 }}>{moduleContent[active]?.left.title}</Typography>
                  <Box component="ul" sx={{ pl: 0, m: 0, listStyle: "none", '& li': { position: "relative", pl: "22px", mb: 2, color: "#475569", fontSize: "14px", "&::before": { content:'""', position:"absolute", left:0, top:"8px", width:"7px", height:"7px", borderRadius:"50%", backgroundColor:"#3b82f6" } } }}>
                    {moduleContent[active]?.left.items.map((it, i) => <li key={i}>{it}</li>)}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ p: 5, bgcolor: "#f8fafc" }}>
                  <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "15px", mb: 3 }}>{moduleContent[active]?.right.title}</Typography>
                  <Box component="ul" sx={{ pl: 0, m: 0, listStyle: "none", '& li': { position: "relative", pl: "22px", mb: 2, color: "#475569", fontSize: "14px", "&::before": { content:'""', position:"absolute", left:0, top:"8px", width:"7px", height:"7px", borderRadius:"50%", backgroundColor:"#22c55e" } } }}>
                    {moduleContent[active]?.right.items.map((it, i) => <li key={i}>{it}</li>)}
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Paper>
      </Container>
    </Box>
  );
};

export default LMSPlatformModules;
