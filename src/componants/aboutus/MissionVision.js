import React from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';

export default function MissionVision() {
  const items = [
    {
      icon: <TrackChangesOutlinedIcon sx={{ fontSize: 40, color: "#00b4d8" }} />,
      title: "Our Mission",
      desc: "To empower enterprises by delivering custom-engineered, scalable software solutions that eliminate operational friction and accelerate sustainable digital growth.",
      gradient: "linear-gradient(135deg, rgba(0, 180, 216, 0.05) 0%, rgba(0, 119, 182, 0.05) 100%)",
      border: "rgba(0, 180, 216, 0.2)"
    },
    {
      icon: <VisibilityOutlinedIcon sx={{ fontSize: 40, color: "#f59e0b" }} />,
      title: "Our Vision",
      desc: "To be the globally recognized catalyst for technological innovation, where code meets business logic to create ecosystem-defining products.",
      gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(217, 119, 6, 0.05) 100%)",
      border: "rgba(245, 158, 11, 0.2)"
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 8 }, background: "#ffffff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {items.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box component={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }}>
                <Card elevation={0} sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: "20px",
                  background: item.gradient,
                  border: `1px solid ${item.border}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" }
                }}>
                  <Box sx={{ mb: 3 }}>{item.icon}</Box>
                  <Typography variant="h3" sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "28px", color: "#0f172a", mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#475569", lineHeight: 1.8 }}>
                    {item.desc}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
