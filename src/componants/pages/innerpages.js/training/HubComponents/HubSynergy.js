import React from "react";
import { Box, Container, Typography, Grid, Card, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HubSynergy = ({ title, subtitle, categories, themeColor = "#2563eb" }) => {
  return (
    <Box sx={{ py: 15, bgcolor: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{
              color: themeColor,
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              mb: 2,
              display: "block"
            }}
          >
            Specialized Masterclasses
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#0f172a",
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 3,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#64748b",
              fontSize: "1.1rem",
              maxWidth: "800px",
              mx: "auto",
              fontWeight: 500,
              lineHeight: 1.6
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  sx={{
                    height: "80%",
                    bgcolor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "28px",
                    p: 4.5,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    boxShadow: "0 10px 40px -10px rgba(15, 23, 42, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: `0 30px 60px -15px ${themeColor}15`,
                      borderColor: `${themeColor}30`,
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "18px",
                      bgcolor: `${themeColor}08`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: themeColor,
                      mb: 4,
                      border: `1px solid ${themeColor}15`
                    }}
                  >
                    <Icon size={30} />
                  </Box>

                  <Typography variant="h5" sx={{ color: "#0f172a", fontWeight: 800, mb: 2, fontSize: "1.4rem" }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ color: "#64748b", fontSize: "0.95rem", mb: 4, flexGrow: 1, lineHeight: 1.7, fontWeight: 500 }}>
                    {item.desc}
                  </Typography>

                  <Stack
                    component={Link}
                    to={item.href}
                    direction="row"
                    alignItems="center"
                    spacing={1.5}
                    sx={{
                      color: themeColor,
                      textDecoration: "none",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      "& svg": { transition: "transform 0.3s ease" },
                      "&:hover svg": { transform: "translateX(8px)" }
                    }}
                  >
                    <span>View Curriculum</span>
                    <ArrowRight size={18} />
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HubSynergy;
