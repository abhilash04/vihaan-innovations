import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AboutProgram = ({ data = {} }) => {
  const { title, description1, description2, highlights = [], stats = [] } = data;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#ffffff", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Side: Content */}
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "28px", md: "42px" },
                  mb: 4,
                  color: "#0f172a",
                  lineHeight: 1.2,
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: 1.8,
                  color: "#475569",
                  mb: 4,
                }}
              >
                {description1}
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: 1.8,
                  color: "#475569",
                  mb: 6,
                }}
              >
                {description2}
              </Typography>

              <Grid container spacing={3}>
                {highlights.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <CheckCircleIcon sx={{ color: "#00b4d8" }} />
                      <Typography sx={{ fontWeight: 600, color: "#1e293b" }}>{item}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Side: Quick Specs Card */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  borderRadius: "32px",
                  bgcolor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  position: "relative",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, color: "#0f172a" }}>
                  Program Highlights
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {stats.map((stat, index) => (
                    <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: 2, borderBottom: "1px solid #e2e8f0" }}>
                      <Typography sx={{ color: "#64748b", fontWeight: 500 }}>{stat.label}</Typography>
                      <Typography sx={{ fontWeight: 700, color: "#0f172a" }}>{stat.value}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutProgram;
