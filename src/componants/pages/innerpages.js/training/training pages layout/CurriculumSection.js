import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const curriculum = [
  { month: "Month 1", title: "SEO Foundations", topics: ["Search Engine Mechanics", "Keyword Research Mastery", "Competitor Analysis", "SEO Toolset Setup (GSC/GA4)"] },
  { month: "Month 2", title: "On-Page Mastery", topics: ["Content Optimization & AI", "Meta Tags & Header Strategy", "Internal Linking Architecture", "E-E-A-T Implementation"] },
  { month: "Month 3", title: "Technical SEO", topics: ["Crawlability & Indexing", "Site Speed & Core Web Vitals", "Structured Data (Schema)", "Technical Site Audits"] },
  { month: "Month 4", title: "Off-Page & Authority", topics: ["Link Building Strategies", "Guest Posting & PR", "Brand Monitoring", "Broken Link Reclamation"] },
  { month: "Month 5", title: "Local & E-commerce SEO", topics: ["Google Business Profile", "Local Citation Building", "Product Page SEO", "Conversion Rate Optimization"] },
  { month: "Month 6", title: "Capstone & Career", topics: ["Live SEO Campaign", "Client Reporting & Dashboards", "Freelancing & Agency Skills", "Hiring Partner Interviews"] },
];

const CurriculumSection = ({ data = {} }) => {
  const { title, subtitle, badge, roadmap = [] } = data;
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#ffffff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{ color: "#00b4d8", fontWeight: 700, fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", mb: 2 }}
          >
            {badge || "Course Roadmap"}
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "48px" }, color: "#1e293b", mb: 2 }}
          >
            {title || (<>Your Roadmap to <span style={{ color: "#00b4d8" }}>Success.</span></>)}
          </Typography>
          <Typography sx={{ color: "#64748b", maxWidth: "600px", mx: "auto", fontSize: "18px" }}>
            {subtitle || "A structured, progressive learning path designed to make you an industry expert."}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {roadmap.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ height: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "75%",
                    borderRadius: "24px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#00b4d8",
                      background: "#ffffff",
                      boxShadow: "0 20px 40px rgba(0,180,216,0.06)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "14px"
                    }}>
                      {index + 1}
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#00b4d8", fontWeight: 700, fontSize: "12px", textTransform: "uppercase" }}>{item.month || item.period}</Typography>
                      <Typography sx={{ fontWeight: 800, color: "#1e293b", fontSize: "18px" }}>{item.title}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {(item.topics || []).map((topic, i) => (
                      <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#00b4d8", mt: 1, flexShrink: 0 }} />
                        <Typography sx={{ color: "#64748b", fontSize: "14px", lineHeight: 1.5 }}>{topic}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CurriculumSection;
