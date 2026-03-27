import React, { useState } from "react";
import { Box, Typography, Container, Grid, Tabs, Tab, Button, Chip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TerminalIcon from "@mui/icons-material/Terminal";
import HistoryIcon from "@mui/icons-material/History";

const jobOpenings = [
  {
    id: 1,
    category: "Engineering",
    title: "Full Stack Web Developer",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    dept: "Engineering",
    experience: "2-4 years exp",
    description: "Build and maintain web applications for our learning platform and client projects. You'll work across the stack using React, Node.js, and SQL — mentoring interns and leading agile sprint teams.",
    salary: "₹8L – ₹14L",
    salaryLabel: "per annum • CTC",
    featured: true,
    posted: "30 Apr 2026",
  },
  {
    id: 2,
    category: "Design",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Bengaluru (Remote)",
    dept: "Design",
    experience: "1-3 years exp",
    description: "Design intuitive, beautiful interfaces for our course platform, marketing pages, and client mandates. From user research and wireframes to high-fidelity prototypes, working closely with developers to bring designs to life.",
    salary: "₹4L – ₹7L",
    salaryLabel: "per annum • CTC",
    featured: false,
    posted: "15 Apr 2026",
  },
  {
    id: 3,
    category: "Training",
    title: "Web Development Trainer",
    type: "Full-time",
    location: "Bengaluru (On-site)",
    dept: "Training",
    experience: "3+ years exp",
    description: "Deliver hands-on training sessions in HTML, CSS, JavaScript, React, and Node.js to batches of 15-20 students. You'll mentor learners, build curriculum materials, and help students launch their developer roles.",
    salary: "₹5L – ₹8L",
    salaryLabel: "per annum • CTC",
    featured: false,
    posted: "10 Mar 2026",
  },
];

const CurrentVacancies = () => {
  const [activeTab, setActiveTab] = useState(0);
  const categories = ["All roles", "Engineering", "Design", "Training", "Marketing", "Sales"];

  const filteredJobs = activeTab === 0
    ? jobOpenings
    : jobOpenings.filter(job => job.category === categories[activeTab]);

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#eff7ffff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "left", mb: 6 }}>
          <Typography
            sx={{
              color: "#00b4d8",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Open Positions
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "32px", md: "48px" },
              color: "#1e293b",
              mb: 4,
            }}
          >
            Current vacancies
          </Typography>

          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 6 }}>
            <Tabs
              value={activeTab}
              onChange={(e, v) => setActiveTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#64748b",
                  minWidth: "auto",
                  mr: 4,
                  px: 0,
                  "&.Mui-selected": { color: "#00b4d8" },
                },
                "& .MuiTabs-indicator": { backgroundColor: "#00b4d8", height: 3 },
              }}
            >
              {categories.map((cat, i) => (
                <Tab key={i} label={cat} />
              ))}
            </Tabs>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <Box
                key={job.id}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                layout
                sx={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  p: { xs: 3, md: 5 },
                  border: job.featured ? "2px solid rgba(0, 180, 216, 0.3)" : "1px solid #f1f5f9",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                  transition: "all 0.3s ease",
                  "&:hover": { boxShadow: "0 20px 40px rgba(0,0,0,0.05)", transform: "translateY(-4px)" },
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={8}>
                    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                      {job.featured && (
                        <Chip
                          label="FEATURED"
                          size="small"
                          sx={{
                            background: "rgba(0, 180, 216, 0.1)",
                            color: "#00b4d8",
                            fontWeight: 700,
                            fontSize: "10px",
                            borderRadius: "4px"
                          }}
                        />
                      )}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 800, fontSize: { xs: "22px", md: "28px" }, color: "#1e293b", mb: 2 }}
                    >
                      {job.title}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
                      {[
                        { icon: <BusinessCenterIcon fontSize="small" />, text: job.type },
                        { icon: <LocationOnIcon fontSize="small" />, text: job.location },
                        { icon: <TerminalIcon fontSize="small" />, text: job.dept },
                        { icon: <HistoryIcon fontSize="small" />, text: job.experience },
                      ].map((meta, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748b", background: "#f8fafc", px: 1.5, py: 0.5, borderRadius: "6px" }}>
                          {React.cloneElement(meta.icon, { sx: { fontSize: "16px", color: "#94a3b8" } })}
                          <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>{meta.text}</Typography>
                        </Box>
                      ))}
                    </Box>

                    <Typography sx={{ color: "#64748b", lineHeight: 1.7, fontSize: "15px", maxWidth: "800px" }}>
                      {job.description}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: { xs: "left", md: "right" }, borderTop: { xs: "1px solid #f1f5f9", md: "none" }, pt: { xs: 3, md: 0 } }}>
                      <Typography sx={{ fontSize: "24px", fontWeight: 800, color: "#1e293b" }}>{job.salary}</Typography>
                      <Typography sx={{ fontSize: "12px", color: "#94a3b8", mb: 3 }}>{job.salaryLabel}</Typography>
                      <Button
                        variant="contained"
                        sx={{
                          background: "#ffffff",
                          color: "#1e293b",
                          fontWeight: 700,
                          fontSize: "14px",
                          borderRadius: "10px",
                          border: "1px solid #e2e8f0",
                          px: 4,
                          py: 1,
                          textTransform: "none",
                          "&:hover": { background: "#f8fafc", borderColor: "#cbd5e1" },
                          mb: 1
                        }}
                      >
                        Apply Now
                      </Button>
                      <Typography sx={{ fontSize: "11px", color: "#94a3b8" }}>Closed: {job.posted}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};

export default CurrentVacancies;
