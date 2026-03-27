import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const CareerHero = () => {
  const stats = [
    { label: "open roles", value: "3" },
    { label: "team members", value: "50+" },
    { label: "years building", value: "5+" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        pt: { xs: 15, md: 25 },
        pb: { xs: 10, md: 15 },
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Background Large Text "CAREERS" */}
      <Typography
        sx={{
          position: "absolute",
          top: { xs: "50px", md: "20px" },
          left: "50%",
          transform: "translateX(-15%)", // Slight offset to match image
          fontSize: { xs: "80px", sm: "120px", md: "220px" },
          fontWeight: 900,
          color: "rgba(0,0,0,0.03)", // Very faint background text
          whiteSpace: "nowrap",
          zIndex: 0,
          userSelect: "none",
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "-0.05em",
        }}
      >
        CAREERS
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: 2,
              py: 0.5,
              mb: 3,
              borderRadius: "50px",
              background: "rgba(0, 180, 216, 0.05)",
              border: "1px solid rgba(0, 180, 216, 0.2)",
              color: "#00b4d8",
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            We are hiring
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "40px", sm: "56px", md: "80px" },
              color: "#1e293b",
              lineHeight: 1.1,
              mb: 4,
              maxWidth: "900px",
            }}
          >
            Build the future <br />
            with <span style={{ color: "#6bcef6ff" }}>Vihan Innovations</span>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              color: "#64748b",
              maxWidth: "600px",
              lineHeight: 1.7,
              mb: 8,
            }}
          >
            Join a team of passionate builders, designers, and educators shaping the next generation of web technology — right from Bengaluru.
          </Typography>

          <Grid container spacing={8}>
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "36px", md: "48px" },
                      fontWeight: 800,
                      color: "#1e293b",
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#94a3b8",
                      fontWeight: 500,
                      textTransform: "lowercase",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CareerHero;
