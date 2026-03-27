import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const FeaturesSection = ({ data = {} }) => {
  const { title, subtitle, features = [] } = data;
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#deedfcff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{ color: "#00b4d8", fontWeight: 700, fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", mb: 2 }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "48px" }, color: "#1e293b", mb: 2 }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: "#64748b", maxWidth: "600px", mx: "auto", fontSize: "18px" }}>
            {subtitle}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((item, index) => (
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
                    p: 5,
                    height: "100%",
                    borderRadius: "24px",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#00b4d8",
                      boxShadow: "0 20px 40px rgba(0,180,216,0.06)",
                      transform: "translateY(-5px)",
                      "& .feature-icon": { color: "#00b4d8", transform: "scale(1.1)" },
                    },
                  }}
                >
                  <Box className="feature-icon" sx={{ color: "#94a3b8", mb: 3, transition: "all 0.3s ease" }}>
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 800, color: "#1e293b", mb: 2, fontSize: "20px" }}>{item.title}</Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "16px", lineHeight: 1.7 }}>{item.desc}</Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
