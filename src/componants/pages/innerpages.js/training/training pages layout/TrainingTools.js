import React from "react";
import { Box, Typography, Container, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";

const tools = [
  { name: "Google Search Console", color: "#4285F4" },
  { name: "Google Analytics 4", color: "#F4B400" },
  { name: "Ahrefs", color: "#007ACC" },
  { name: "SEMrush", color: "#FF642D" },
  { name: "Screaming Frog", color: "#4DB33D" },
  { name: "Moz Pro", color: "#00B4D8" },
  { name: "PageSpeed Insights", color: "#DB4437" },
  { name: "Canva / Figma", color: "#7D2AE8" },
];

const TrainingTools = ({ data = [] }) => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{ color: "#00b4d8", fontWeight: 700, fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase", mb: 1 }}
          >
            Mastery Tools
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "40px" }, color: "#1e293b", mb: 2 }}
          >
            Industry-Standard Tools You'll Master
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
          {data.map((t, i) => (
            <Box
              key={i}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card
                elevation={0}
                sx={{
                  px: 4,
                  py: 2.5,
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  background: "#ffffff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: t.color,
                    boxShadow: `0 10px 30px ${t.color}15`,
                  },
                }}
              >
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: t.color }} />
                <Typography sx={{ fontWeight: 800, color: "#1e293b", fontSize: "15px" }}>{t.name}</Typography>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TrainingTools;
