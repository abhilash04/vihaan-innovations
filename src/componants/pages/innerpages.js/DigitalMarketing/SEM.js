import React from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Check, ArrowRight, Target, MousePointer2, Calculator, Zap } from "lucide-react";

const SEM = () => {
  const features = [
    "Google Search & Display Ads",
    "Meta Ads & Retargeting Funnels",
    "Smart Keyword Bidding",
    "Landing Page Conversion Design",
    "Multi-variant A/B Testing",
    "Negative Keyword Management",
  ];

  const tools = ["Google Ads Editor", "Keyword Planner", "HubSpot", "Unbounce"];

  return (
    <Box
      id="sem"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#f8fafc",
      }}
    >


      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "500px",
              }}
            >
              {/* SEM Visualization: Ad Performance Dashboard */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  bgcolor: "white",
                  borderRadius: "32px",
                  boxShadow: "0 40px 80px -20px rgba(15, 23, 42, 0.1)",
                  border: "1px solid #e2e8f0",
                  p: 4
                }}
              >
                <Stack spacing={4}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography sx={{ fontWeight: 800, color: "#0f172a" }}>Campaign Performance</Typography>
                    <Box sx={{ px: 1.5, py: 0.5, bgcolor: "rgba(22, 163, 74, 0.1)", color: "#16a34a", borderRadius: "100px", fontSize: "12px", fontWeight: 800 }}>LIVE</Box>
                  </Stack>

                  <Grid container spacing={3}>
                    {[
                      { label: "ROAS", val: "4.8x", color: "#2563eb" },
                      { label: "CPA", val: "$12.4", color: "#f59e0b" }
                    ].map((stat, i) => (
                      <Grid item xs={6} key={i}>
                        <Box sx={{ p: 2, bgcolor: "#f8fafc", borderRadius: "20px", border: "1px solid #f1f5f9" }}>
                          <Typography sx={{ fontSize: "11px", fontWeight: 800, color: "#64748b", mb: 1 }}>{stat.label}</Typography>
                          <Typography sx={{ fontSize: "24px", fontWeight: 900, color: stat.color }}>{stat.val}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Box sx={{ height: "180px", width: "100%", display: "flex", alignItems: "flex-end", gap: 1.5, pt: 2 }}>
                    {[30, 45, 35, 60, 80, 70, 95].map((h, i) => (
                      <Box key={i} sx={{ flex: 1, position: "relative" }}>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                          style={{
                            background: i === 6 ? "linear-gradient(to top, #2563eb, #06b6d4)" : "#f1f5f9",
                            borderRadius: "8px 8px 0 0",
                            width: "100%"
                          }}
                        />
                      </Box>
                    ))}
                  </Box>

                  <Button fullWidth sx={{ py: 1.5, bgcolor: "#0f172a", color: "white", borderRadius: "12px", fontWeight: 800, "&:hover": { bgcolor: "#1e293b" } }}>
                    Optimize Budget
                  </Button>
                </Stack>
              </Box>

              {/* Floating Element: Target cursor */}
              <Box
                component={motion.div}
                animate={{
                  x: [0, 50, -20, 0],
                  y: [0, -30, 40, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                sx={{ position: "absolute", zIndex: 3 }}
              >
                <MousePointer2 size={32} color="#2563eb" fill="#2563eb" style={{ filter: "drop-shadow(0 10px 20px rgba(37, 99, 235, 0.4))" }} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Stack spacing={4}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#f59e0b",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    SEARCH ENGINE MARKETING
                  </Typography>
                  <Typography
                    component="a"
                    href="/sem-services"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#f59e0b",
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" }
                    }}
                  >
                    View All <ArrowRight size={14} />
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "32px", md: "42px" },
                    fontWeight: 800,
                    fontFamily: "'Syne', sans-serif",
                    color: "#0f172a",
                    lineHeight: 1.1,
                  }}
                >
                  Maximize ROAS. <br />
                  <Box component="span" sx={{ color: "#f59e0b" }}>
                    Minimize Waste.
                  </Box>
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "16px", md: "20px" },
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                Paid advertising is about precision, not just volume. We architect high-conversion SEM campaigns that target buyers at the exact moment of intent, ensuring every dollar of your ad spend is optimized for maximum return on investment.
              </Typography>

              <Grid container spacing={2.5}>
                {features.map((feature, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ p: 0.5, bgcolor: "rgba(245, 158, 11, 0.1)", borderRadius: "6px" }}>
                        <Zap size={16} color="#f59e0b" fill="#f59e0b" />
                      </Box>
                      <Typography sx={{ color: "#1e293b", fontSize: "15px", fontWeight: 600 }}>
                        {feature}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ pt: 2 }}>
                <Button
                  sx={{
                    color: "#f59e0b",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "17px",
                    p: 0,
                    gap: 1.5,
                    "&:hover": { bgcolor: "transparent", gap: 2 },
                    transition: "all 0.3s ease",
                  }}
                >
                  Calculate Your Potential ROI <ArrowRight size={20} />
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SEM;
