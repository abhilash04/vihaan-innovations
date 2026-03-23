import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Tabs, Tab } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Live Classes", "Assessment Engine", "Payments", "Admin Panel", "Analytics"];

const moduleContent = {
  0: {
    left: { title: "What it does", items: ["Run live classes and webinars in one place", "Schedule sessions and send reminders", "Allow live chat and interaction during sessions", "Record classes for later viewing", "Easily connect with video meeting tools"] },
    right: { title: "Who uses it", items: ["Students", "Teachers", "Admins", "View attendance and simple reports"] }
  },
  1: {
    left: { title: "What it does", items: ["Create quizzes, tests, and practice exams easily", "Add different question types like MCQ and fill-in-the-blanks", "Set timers for tests", "Automatically check answers and give scores", "Monitor online exams for fairness"] },
    right: { title: "Who uses it", items: ["Students", "Teachers", "Admins", "Organisations"] }
  },
  2: {
    left: { title: "What it does", items: ["Accept online payments for courses and services", "Support multiple payment methods (UPI, cards, net banking)", "Generate invoices and payment receipts", "Track all transactions in one place", "Ensure secure payment processing"] },
    right: { title: "Who uses it", items: ["Students", "Admins", "View payment history and reports"] }
  },
  3: {
    left: { title: "What it does", items: ["Manage users, courses, and content easily", "Control access and permissions", "Monitor platform activity", "Update and organise system settings", "Handle support and user issues"] },
    right: { title: "Who uses it", items: ["Admins", "Get full control over the platform"] }
  },
  4: {
    left: { title: "What it does", items: ["Track student performance and activity", "View course progress and engagement", "Generate simple reports and insights", "Identify trends and improvements", "Make better decisions using data"] },
    right: { title: "Who uses it", items: ["Admins", "Teachers", "Access detailed performance reports"] }
  }
};

const LMSPlatformModules = () => {
  const [active, setActive] = useState(0);
  return (
    <Box sx={{ bgcolor: "#ffffff", py: 12 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Platform Modules – Tabbed Deep Dive</Typography>
          <Typography variant="body1"sx={{ color: "#64748b", fontSize: { xs:"14px", md: "16px"} }}>Built by an expert LMS Application Development team, offering powerful modules for complete learning management.</Typography>
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
