import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const diffs = [
  { num: "01", title: "Privacy & Trust", icon: <EnhancedEncryptionIcon /> },
  { num: "02", title: "Community Filters", icon: <DisplaySettingsIcon /> },
  { num: "03", title: "Scalable System", icon: <GraphicEqIcon /> },
  { num: "04", title: "Admin Control", icon: <SupervisedUserCircleIcon /> }
];

const MatrimonyWhyUs = () => {
  return (
    <Box sx={{ bgcolor: "#0B2046", py: 8 }}>
      <Container maxWidth="lg">

        {/* Why Us Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box sx={{ display: "inline-block", mb: 1 }}>
            <Typography sx={{
              fontWeight: 800, color: "#ffffff", fontSize: "28px",
              display: "flex", alignItems: "center", gap: 1,
              justifyContent: "center", mb: 2
            }}>
              Why Choose Vihaan Innovations for Matrimony Platform Development
            </Typography>
          </Box>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
            At Vihaan Innovations, we understand that matrimony platforms require more than just technology. They need trust, cultural sensitivity, and powerful management tools. Our solutions are designed to help matchmaking businesses scale while providing a secure and seamless experience for members.
          </Typography>
        </Box>

        {/* 4 Cards Grid */}
        <Grid container spacing={3}>
          {diffs.map((diff, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    pt: 6,
                    borderRadius: "16px",
                    bgcolor: "#ffffff",
                    border: "1px solid rgba(0, 180, 216, 0.2)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Floating Number Tag */}
                  <Box sx={{
                    position: "absolute", top: 15, left: 15,
                    color: "#0B2046", fontWeight: 800, fontSize: "24px", opacity: 0.5
                  }}>
                    {diff.num}
                  </Box>

                  <Box sx={{ color: "#00B4D8", "& > svg": { fontSize: 50 }, mb: 3 }}>
                    {diff.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px", lineHeight: 1.4, whiteSpace: "pre-line" }}>
                    {diff.title}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default MatrimonyWhyUs;
