import React from "react";
import { Box, Typography, Container, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const highlights = [
  "Advanced Search Engine Optimization (SEO) Masterclass",
  "Live Projects with Real Website Rankings",
  "Master Tools: Ahrefs, SEMrush, Moz & Google Console",
  "Content Strategy & Copywriting for Search",
  "Personalized Mentorship & 100% Placement Support",
];

const AboutProgram = ({ data = {} }) => {
  const { title, description1, description2, badge, highlights = [], stats = [] } = data;
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#ffffff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Chip
                label={badge || "Specialized Training"}
                sx={{ mb: 2, bgcolor: "rgba(0,180,216,0.1)", color: "#00b4d8", fontWeight: 700, borderRadius: "5px" }}
              />
              <Typography variant="h3" sx={{ fontWeight: 800, color: "#1e293b", mb: 3, lineHeight: 1.2 }}>
                {title || "Advanced SEO & Digital Marketing — Dominate Search Results"}
              </Typography>
              <Typography sx={{ color: "#64748b", fontSize: "17px", lineHeight: 1.8, mb: 3 }}>
                {description1 || "Our SEO academy is built for marketers, business owners, and graduates who want to master the art and science of organic growth. Learn how to rank websites on page #1 of Google from day one."}
              </Typography>
              <Typography sx={{ color: "#64748b", fontSize: "17px", lineHeight: 1.8, mb: 3 }}>
                {description2}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {highlights.map((h, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <CheckCircleOutlineIcon sx={{ color: "#16a34a", fontSize: "22px" }} />
                    <Typography sx={{ fontWeight: 600, color: "#1e293b", fontSize: "15px" }}>{h}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Grid container spacing={3}>
                {stats.map((item, i) => (
                  <Grid item xs={6} key={i}>
                    <Box
                      sx={{
                        p: 4,
                        background: "#e7f2ffff",
                        borderRadius: "20px",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "#00b4d8",
                          background: "#ffffff",
                          boxShadow: "0 10px 30px rgba(0,180,216,0.08)",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: "12px", color: "#64748b", fontWeight: 700, mb: 1, textTransform: "uppercase" }}>{item.label}</Typography>
                      <Typography sx={{ fontSize: "18px", fontWeight: 800, color: "#1e293b" }}>{item.value}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutProgram;
