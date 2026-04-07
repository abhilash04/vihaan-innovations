import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Rocket } from "lucide-react";

const ResultsImpact = () => {
  const stats = [
    { icon: TrendingUp, label: "Avg. ROAS", val: "450%", desc: "Return on every rupee of ad spend." },
    { icon: Users, label: "Budget Managed", val: "$15M+", desc: "Media spend optimized across channels." },
    { icon: Target, label: "Lead Growth", val: "3.2x", desc: "Average jump in qualified inbound leads." },
    { icon: Rocket, label: "Market Reach", val: "100M+", desc: "Total audience impressions delivered." }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f1f5f9", position: "relative", overflow: "hidden" }}>
      {/* Decorative Watermark */}
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: { xs: "120px", md: "350px" },
          fontWeight: 900,
          color: "rgba(37, 99, 235, 0.03)",
          fontFamily: "'Syne', sans-serif",
          whiteSpace: "nowrap",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        IMPACT
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Typography
                variant="overline"
                sx={{ color: "#2563eb", fontWeight: 800, letterSpacing: "0.2em" }}
              >
                NUMBERS THAT MATTER
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "32px", md: "42px" },
                  fontWeight: 900,
                  color: "#0f172a",
                  lineHeight: 1.1,
                  fontFamily: "'Syne', sans-serif"
                }}
              >
                We Deliver <br />
                <Box component="span" sx={{ color: "#2563eb" }}>Measurable Growth.</Box>
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: { xs: "16px", md: "20px" }, fontWeight: 500 }}>
                Our performance is tied to your bottom line. We focus on revenue, not vanity metrics — and these numbers prove it.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {stats.map((stat, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    sx={{
                      p: 4,
                      bgcolor: "white",
                      borderRadius: "32px",
                      boxShadow: "0 20px 40px rgba(15, 23, 42, 0.05)",
                      border: "1px solid #e2e8f0",
                      height: "75%"
                    }}
                  >
                    <Box sx={{ p: 1.5, bgcolor: "rgba(37, 99, 235, 0.1)", borderRadius: "14px", width: "fit-content", mb: 3 }}>
                      <stat.icon size={28} color="#2563eb" />
                    </Box>
                    <Typography sx={{ fontSize: "13px", fontWeight: 800, color: "#64748b", mb: 1 }}>{stat.label}</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", mb: 2, fontFamily: "'Syne', sans-serif" }}>{stat.val}</Typography>
                    <Typography sx={{ fontSize: "14px", color: "#475569", fontWeight: 500 }}>{stat.desc}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResultsImpact;
