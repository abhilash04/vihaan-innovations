import React from "react";
import { Box, Typography, Container, Grid, Chip, Button, List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarsIcon from "@mui/icons-material/Stars";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

const courseContent = {
  title: "Master SEO & Organic Growth",
  subtitle: "Learn advanced SEO strategies to rank websites, increase traffic, and boost conversions.",
  duration: "3 Months",
  mode: "Live Training",
  projects: "10+ Real Websites",
  curriculum: [
    {
      title: "Technical SEO Mastery",
      skills: ["Site Architecture & Crawlability", "Sitemap & Robots.txt Optimization", "Core Web Vitals & Speed", "Schema Markup (JSON-LD)", "Canonical Tags & 404 Fixes"],
      color: "#00b4d8"
    },
    {
      title: "Content & On-Page SEO",
      skills: ["Advanced Keyword Research", "Semantic Content Optimization", "E-E-A-T Principles", "Internal Linking Strategy", "Competitor Gap Analysis"],
      color: "#16a34a"
    },
    {
      title: "Off-Page & Authority",
      skills: ["High-Quality Backlink Building", "Guest Posting & PR Outreach", "Social Signals & Local SEO", "GMB (Google Maps) Rank", "Link Audit & Recovery"],
      color: "#8b5cf6"
    }
  ]
};

const CoursesSection = ({ data = {} }) => {
  const { title, subtitle, duration, projects, courses = [] } = data;

  return (
    <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 3, md: 8 }, background: "#deedfcff" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 6 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Chip
              icon={<SearchIcon style={{ color: "inherit", fontSize: "16px" }} />}
              label="SKILLS YOU WILL MASTER"
              sx={{
                mb: 2,
                bgcolor: "rgba(0,180,216,0.1)",
                color: "#00b4d8",
                fontWeight: 800,
                borderRadius: "6px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                px: 1
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "32px", md: "52px" },
                color: "#1e293b",
                mb: 3,
                lineHeight: 1.1
              }}
            >
              {title || (<>Master the <span style={{ color: "#00b4d8" }}>Future</span> of Tech.</>)}
            </Typography>
            <Typography
              sx={{
                color: "#64748b",
                fontSize: { xs: "16px", md: "19px" },
                maxWidth: "750px",
                mx: "auto",
                lineHeight: 1.7
              }}
            >
              {subtitle || "Our hands-on training focuses on current industry trends and real-world project experience."}
            </Typography>
          </motion.div>
        </Box>

        {/* Feature Grid / Curriculum Breakdown */}
        <Grid container spacing={{ xs: 1, md: 4 }} alignItems="stretch">
          {courses.map((item, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ display: "flex", width: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 4 },
                    width: "90%",
                    height: "80%",
                    borderRadius: "24px",
                    bgcolor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.4s ease",
                    display: "flex",
                    mb: 0,
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(30, 41, 59, 0.08)",
                      borderColor: "#00b4d8"
                    }
                  }}
                >
                  <Box sx={{ mb: { xs: 1.5, md: 3 }, display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        bgcolor: "#00b4d8",
                        boxShadow: `0 0 10px #00b4d8`
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: "#1e293b",
                        fontSize: "18px",
                        letterSpacing: "-0.5px"
                      }}
                    >
                      {item.label || item.title}
                    </Typography>
                  </Box>

                  <List sx={{ pt: 0, mb: { xs: 1, md: 4 }, flexGrow: 1 }}>
                    {(item.frontEnd || item.skills || []).map((skill, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 0.8 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleOutlineIcon sx={{ color: "#16a34a", fontSize: "20px" }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={skill}
                          primaryTypographyProps={{
                            sx: { color: "#475569", fontWeight: 600, fontSize: "14.5px" }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* <Box
                    sx={{
                      pt: 3,
                      borderTop: "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <Typography sx={{ color: "#00b4d8", fontWeight: 800, fontSize: "12px", textTransform: "uppercase" }}>
                      Course Module
                    </Typography>
                    <TrendingUpIcon sx={{ color: "rgba(30, 41, 59, 0.1)" }} />
                  </Box> */}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Global Stats / Call to Action CTA Mini */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            sx={{
              m: { xs: 2.5, md: 6 },
              p: { xs: 3, md: 4 },
              borderRadius: "24px",
              background: "rgba(64, 87, 123, 0.02)",
              border: "1px dashed rgba(30, 41, 59, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 4
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ p: 1.5, borderRadius: "50%", bgcolor: "rgba(0,180,216,0.1)", color: "#00b4d8" }}>
                  <LanguageIcon />
                </Box>
                <Box>
                  <Typography sx={{ color: "#64748b", fontSize: "12px", fontWeight: 800, textTransform: "uppercase" }}>Duration</Typography>
                  <Typography sx={{ color: "#1e293b", fontWeight: 900, fontSize: "17px" }}>{duration || "Flexible"}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ p: 1.5, borderRadius: "50%", bgcolor: "rgba(234, 179, 8, 0.1)", color: "#eab308" }}>
                  <TrendingUpIcon />
                </Box>
                <Box>
                  <Typography sx={{ color: "#64748b", fontSize: "12px", fontWeight: 800, textTransform: "uppercase" }}>Case Studies</Typography>
                  <Typography sx={{ color: "#1e293b", fontWeight: 900, fontSize: "17px" }}>{projects || "Multiple"}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ p: 1.5, borderRadius: "50%", bgcolor: "rgba(22, 163, 74, 0.1)", color: "#16a34a" }}>
                  <CheckCircleOutlineIcon />
                </Box>
                <Box>
                  <Typography sx={{ color: "#64748b", fontSize: "12px", fontWeight: 800, textTransform: "uppercase" }}>Outcome</Typography>
                  <Typography sx={{ color: "#1e293b", fontWeight: 900, fontSize: "17px" }}>Job Ready</Typography>
                </Box>
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                background: "#00b4d8",
                color: "#fff",
                fontWeight: 800,
                borderRadius: "14px",
                px: 5,
                py: 2,
                fontSize: "16px",
                textTransform: "none",
                boxShadow: "0 10px 20px rgba(0,180,184,0.2)",
                "&:hover": { background: "#0077b6", transform: "translateY(-2px)" },
                transition: "all 0.3s ease"
              }}
            >
              Start Your Journey
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CoursesSection;
