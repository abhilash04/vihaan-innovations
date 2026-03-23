import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const DashboardMock = ({ theme, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <Paper elevation={0} sx={{ border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}>
      {/* Browser bar */}
      <Box sx={{ bgcolor: theme === 'light' ? "#f1f5f9" : "#1e293b", p: 1.5, display: "flex", alignItems: "center", gap: 1, borderBottom: "1px solid #e2e8f0" }}>
        <Box sx={{ display: "flex", gap: 0.7 }}>
          <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#ef4444" }} />
          <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#f59e0b" }} />
          <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#22c55e" }} />
        </Box>
        <Box sx={{ mx: "auto", width: "40%", height: 18, bgcolor: theme === 'light' ? "#ffffff" : "#334155", borderRadius: "10px" }} />
      </Box>

      {/* Dashboard content layout */}
      <Box sx={{ display: "flex", height: "220px", bgcolor: theme === 'light' ? "#ffffff" : "#0f172a" }}>
        
        {/* Left nav */}
        <Box sx={{ width: "25%", bgcolor: theme === 'light' ? "#f8fafc" : "#1e293b", p: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
          {[80, 60, 70, 55, 65].map((w, i) => (
            <Box key={i} sx={{ width: `${w}%`, height: "10px", bgcolor: theme === 'light' ? "#e2e8f0" : "#334155", borderRadius: "5px" }} />
          ))}
        </Box>

        {/* Main area */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          {/* Top stats */}
          <Grid container spacing={1} sx={{ mb: 2 }}>
            {["#3b82f6", "#22c55e", "#a855f7", "#f59e0b"].map((color, i) => (
              <Grid item xs={3} key={i}>
                <Box sx={{ bgcolor: theme === 'light' ? "#f8fafc" : "#1e293b", border: `1px solid ${theme === 'light' ? "#e2e8f0" : "#334155"}`, borderRadius: "8px", p: 1 }}>
                  <Box sx={{ width: "60%", height: "8px", bgcolor: color, borderRadius: "4px", mb: 0.5, opacity: 0.7 }} />
                  <Box sx={{ width: "80%", height: "14px", bgcolor: color, borderRadius: "4px", opacity: 0.9 }} />
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Table rows */}
          {[1, 2, 3, 4].map((i) => (
            <Box key={i} sx={{ display: "flex", gap: 1, mb: 1 }}>
              <Box sx={{ width: "35%", height: "10px", bgcolor: theme === 'light' ? "#e2e8f0" : "#334155", borderRadius: "5px" }} />
              <Box sx={{ width: "20%", height: "10px", bgcolor: theme === 'light' ? "#e2e8f0" : "#1e293b", borderRadius: "5px" }} />
              <Box sx={{ width: "25%", height: "10px", bgcolor: theme === 'light' ? "#f1f5f9" : "#0f172a", borderRadius: "5px" }} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Label below */}
      <Box sx={{ p: 2, textAlign: "center", bgcolor: theme === 'light' ? "#f8fafc" : "#1e293b" }}>
        <Typography sx={{ fontWeight: 700, color: theme === 'light' ? "#1a1a1a" : "#ffffff", fontSize: "13px" }}>
          {title}
        </Typography>
      </Box>
    </Paper>
  </motion.div>
);

const ListingMultiVertical = () => {
  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            Multi-vertical Capability
          </Typography>
        </Box>

        {/* Two dashboard mockups */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <DashboardMock theme="light" title="Job Portal Dashboard" delay={0.1} />
          </Grid>
          <Grid item xs={12} md={6}>
            <DashboardMock theme="dark" title="Real Estate Platform" delay={0.3} />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default ListingMultiVertical;
