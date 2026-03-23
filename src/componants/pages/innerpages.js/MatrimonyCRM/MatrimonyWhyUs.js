import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const diffs = [
  { num: "01", title: "Understand\nsensitivity/nuance:\nprivacy/trust built-in", icon: <EnhancedEncryptionIcon /> },
  { num: "02", title: "Fully custom\ncommunity filters\ncaste, gotra, etc.", icon: <DisplaySettingsIcon /> },
  { num: "03", title: "Scalable from\n500 to 500k+\nprofiles", icon: <GraphicEqIcon /> },
  { num: "04", title: "Admin tools\npowerful for 2\nor 50 ops team", icon: <SupervisedUserCircleIcon /> }
];

const MatrimonyWhyUs = () => {
  return (
    <Box sx={{ bgcolor: "#0B2046", py: 8 }}> {/* Light blue-gray background matching the previous flow sections */}
      <Container maxWidth="lg">

        {/* Why Us Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "inline-block", mb: 2 }}>
            <Typography sx={{
              fontWeight: 800, color: "#fff", fontSize: "28px",
              display: "flex", alignItems: "center", gap: 1,
              justifyContent: "center"
            }}>
              Why Vihaan Innovations
            </Typography>
          </Box>
          <Typography sx={{ color: "#fff", fontSize: "17px" }}>
            4 differentiators for matrimony context
          </Typography>
        </Box>

        {/* 4 Cards Grid */}
        <Grid container spacing={3} sx={{ mb: 12 }}>
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

        {/* Testimonial Section Header */}
        {/* <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "inline-block", mb: 1 }}>
            <Typography sx={{
              fontWeight: 800, color: "#0B2046", fontSize: "24px",
              display: "flex", alignItems: "center", gap: 1,
              justifyContent: "center"
            }}>
              <Box component="span" sx={{
                width: 28, height: 28, borderRadius: "50%",
                border: "2px solid #0B2046", display: "flex",
                alignItems: "center", justifyContent: "center", fontSize: "14px"
              }}>13</Box>
              Testimonial / Social Proof
            </Typography>
          </Box>
        </Box> */}

        {/* Full width quote block */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ position: "relative", maxWidth: "800px", mx: "auto", px: { xs: 2, md: 6 }, py: 4 }}>
            <FormatQuoteIcon sx={{ position: "absolute", top: 0, left: 0, fontSize: 60, color: "rgba(0, 180, 216, 0.2)" }} />

            <Typography sx={{ fontWeight: 600, color: "#1a1a1a", fontSize: { xs: "18px", md: "22px" }, lineHeight: 1.6, textAlign: "center", mb: 4, position: "relative", zIndex: 1 }}>
              The platform Vihaan built helped us double our matchmaking speed and build massive trust with families. Their admin tools are incredibly powerful and helped us manage 10,000 profiles with just 3 agents.
            </Typography>

            <FormatQuoteIcon sx={{ position: "absolute", bottom: 60, right: 0, fontSize: 60, color: "rgba(0, 180, 216, 0.2)", transform: "scaleX(-1)" }} />

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
              <Box sx={{ width: 50, height: 50, borderRadius: "50%", bgcolor: "#e0e0e0", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                <SupervisedUserCircleIcon sx={{ fontSize: 40, color: "#9e9e9e", mt: 1 }} />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 800, color: "#0B2046", fontSize: "15px" }}>
                  Priya Singh
                </Typography>
                <Typography sx={{ color: "#666", fontSize: "13px", fontWeight: 500 }}>
                  Founder<br />Hindu Matrimony Bureau
                </Typography>
              </Box>
            </Box>

          </Box>
        </motion.div> */}

      </Container>
    </Box>
  );
};

export default MatrimonyWhyUs;
