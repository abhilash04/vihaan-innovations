import React from "react";
import { Box, Typography, Container, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentsIcon from "@mui/icons-material/Payments";
import LanguageIcon from "@mui/icons-material/Language";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const LifeAtVihan = () => {
  const benefits = [
    {
      icon: <RocketLaunchIcon />,
      title: "High impact work",
      description: "Every project you ship reaches real learners and businesses across India. Your work matters from day one.",
      color: "#fef3c7", // Light yellow for icon bg
      iconColor: "#d97706",
    },
    {
      icon: <SchoolIcon />,
      title: "Learn continuously",
      description: "Access to all our training programs, paid learning budget, and weekly knowledge sessions with industry experts.",
      color: "#dcfce7", // Light green
      iconColor: "#16a34a",
    },
    {
      icon: <GroupsIcon />,
      title: "Collaborative culture",
      description: "Flat hierarchy, open feedback culture, and a team that genuinely supports each others' growth.",
      color: "#eff6ff", // Light blue
      iconColor: "#2563eb",
    },
    {
      icon: <PaymentsIcon />,
      title: "Competitive pay",
      description: "Market-aligned salaries, performance bonuses, and flexible term arrangements for the right candidates.",
      color: "#f3e8ff", // Light purple
      iconColor: "#7c3aed",
    },
    {
      icon: <LanguageIcon />,
      title: "Bengaluru & remote",
      description: "Hybrid-friendly. Work from our Bengaluru office or remotely — we care about output, not location.",
      color: "#ecfeff", // Light cyan
      iconColor: "#0891b2",
    },
    {
      icon: <WorkspacePremiumIcon />,
      title: "Recognition & growth",
      description: "Clear career progression, regular performance reviews, and recognition programs for outstanding work.",
      color: "#fff7ed", // Light orange
      iconColor: "#ea580c",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#d0f2ffff" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              color: "#00b4d8",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Our Culture
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "32px", md: "48px" },
              color: "#1e293b",
            }}
          >
            Life at Vihan Innovations
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    border: "1px solid #f1f5f9",
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(0, 180, 216, 0.2)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      background: benefit.color,
                      color: benefit.iconColor,
                    }}
                  >
                    {React.cloneElement(benefit.icon, { fontSize: "small" })}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#1e293b",
                      mb: 2,
                      fontSize: "1.1rem",
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LifeAtVihan;
