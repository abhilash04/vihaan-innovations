import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const whyPoints = [
  { num: "01", title: "100+\nEducation Clients", icon: <DomainOutlinedIcon /> },
  { num: "02", title: "5M+ Student\nEnquiries Managed", icon: <TrackChangesOutlinedIcon /> },
  { num: "03", title: "24/7\nExpert Support", icon: <SupportAgentOutlinedIcon /> },
  { num: "04", title: "Modular & Scalable\nArchitecture", icon: <HandshakeOutlinedIcon /> }
];

const EducationWhyUs = () => {
  return (
    <Box sx={{ position: "relative", bgcolor: "#f8f9fe", pt: 6, pb: 6 }}>
      {/* Continuing faint background gradient if needed, but keeping it clean like the mock */}

      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "46px" }, mb: 2 }}>
            Why Choose Our CRM?
          </Typography>
          <Typography variant="h6" sx={{ color: "#0B2046", fontWeight: 700, mb: 1, fontSize: "20px" }}>
            Trusted by schools, colleges, and consultants to power their admissions and growth
          </Typography>
        </Box>

        <Grid container spacing={8} alignItems="center">

          {/* Left Grid of 4 Points */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              {whyPoints.map((point, index) => (
                <Grid item xs={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box sx={{ color: "#00B4D8", "& > svg": { fontSize: 32 } }}>
                        {point.icon}
                      </Box>
                      <Box>
                        <Typography sx={{ color: "#00B4D8", fontSize: "14px", fontWeight: 800 }}>
                          {point.num}
                        </Typography>
                        <Typography sx={{ color: "#1a1a1a", fontWeight: 700, fontSize: "15px", whiteSpace: "pre-line", lineHeight: 1.3 }}>
                          {point.title}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Testimonial Card */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  p: { xs: 4, md: 5 },
                  borderRadius: "24px",
                  bgcolor: "#ffffff",
                  boxShadow: "0 20px 60px rgba(0, 180, 216, 0.1)",
                  border: "1px solid rgba(0, 180, 216, 0.2)"
                }}
              >
                {/* Decorative Quote Icon Overhang */}
                <Box sx={{
                  position: "absolute", top: -20, left: 30,
                  bgcolor: "#0B2046", color: "#ffffff",
                  width: 50, height: 50, borderRadius: "50%",
                  display: "flex", justifyContent: "center", alignItems: "center",
                  boxShadow: "0 10px 20px rgba(11, 32, 70, 0.2)"
                }}>
                  <FormatQuoteIcon sx={{ fontSize: 30 }} />
                </Box>

                <Typography sx={{ color: "#1a1a1a", fontSize: "16px", lineHeight: 1.8, fontStyle: "italic", mb: 4, pt: 2 }}>
                  Their education CRM software has completely transformed our admission process. We’ve seen a 3x increase in admissions and a significant reduction in manual work.
                </Typography>

                <Box sx={{ position: "relative" }}>
                  <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "15px", mb: 0.5 }}>
                    — Admissions Director,
                  </Typography>
                  <Typography sx={{ color: "#666", fontSize: "14px" }}>
                    Leading International School
                  </Typography>

                  {/* Small decorative sparkle */}
                  <Box sx={{ position: "absolute", right: 0, bottom: 0, color: "#f9a826", fontSize: "24px" }}>
                    ✦
                  </Box>
                </Box>

              </Paper>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default EducationWhyUs;
