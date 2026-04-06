import React from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, PieChart, Activity, Globe, MousePointer2 } from "lucide-react";

const MarketingAnalytics = () => {
  return (
    <Box
      id="analytics"
      sx={{
        py: { xs: 10, md: 20 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#f8fafc",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "5%",
          right: "2%",
          fontSize: { xs: "120px", md: "250px" },
          fontWeight: 900,
          color: "rgba(15, 23, 42, 0.03)",
          fontFamily: "'Syne', sans-serif",
          lineHeight: 1,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        06
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "550px",
              }}
            >
               {/* Analytics Dashboard Visualization */}
               <Box
                 component={motion.div}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 sx={{
                   width: "100%",
                   maxWidth: "500px",
                   bgcolor: "#ffffff",
                   borderRadius: "32px",
                   boxShadow: "0 40px 80px -20px rgba(15, 23, 42, 0.1)",
                   border: "1px solid #e2e8f0",
                   overflow: "hidden"
                 }}
               >
                  <Box sx={{ p: 4, borderBottom: "1px solid #f1f5f9" }}>
                     <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" spacing={2} alignItems="center">
                           <Box sx={{ p: 1, bgcolor: "#2563eb", borderRadius: "10px" }}>
                              <BarChart3 size={20} color="white" />
                           </Box>
                           <Typography sx={{ fontWeight: 800, color: "#0f172a" }}>Acquisition Analytics</Typography>
                        </Stack>
                        <Typography sx={{ fontSize: "12px", color: "#64748b", fontWeight: 700 }}>Last 30 Days</Typography>
                     </Stack>
                  </Box>

                  <Box sx={{ p: 4 }}>
                     <Stack spacing={4}>
                        <Grid container spacing={2}>
                           {[
                              { label: "New Users", val: "42,850", growth: "+15%" },
                              { label: "Avg. Session", val: "4m 12s", growth: "+8%" }
                           ].map((stat, i) => (
                             <Grid item xs={6} key={i}>
                                <Box sx={{ p: 2, bgcolor: "#f8fafc", borderRadius: "16px", border: "1px solid #f1f5f9" }}>
                                   <Typography sx={{ fontSize: "11px", fontWeight: 800, color: "#64748b", mb: 0.5 }}>{stat.label}</Typography>
                                   <Typography sx={{ fontSize: "20px", fontWeight: 900, color: "#0f172a" }}>{stat.val}</Typography>
                                   <Typography sx={{ fontSize: "11px", color: i === 0 ? "#16a34a" : "#2563eb", fontWeight: 800 }}>{stat.growth}</Typography>
                                </Box>
                             </Grid>
                           ))}
                        </Grid>

                        <Box sx={{ height: "150px", position: "relative", pt: 2 }}>
                           {/* animated line chart placeholder */}
                           <svg width="100%" height="100%" viewBox="0 0 400 150">
                              <motion.path
                                d="M0,130 Q50,110 100,120 T200,80 T300,90 T400,20"
                                fill="none"
                                stroke="#2563eb"
                                strokeWidth="4"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                              />
                              <motion.path
                                d="M0,140 Q50,130 100,135 T200,110 T300,120 T400,60"
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="4"
                                opacity="0.3"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                              />
                           </svg>
                        </Box>
                     </Stack>
                  </Box>
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
                      color: "#2563eb",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    MARKETING ANALYTICS
                  </Typography>
                  <Typography
                    component="a"
                    href="/data-analytics"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#2563eb",
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
                    fontSize: { xs: "36px", md: "52px" },
                    fontWeight: 800,
                    fontFamily: "'Syne', sans-serif",
                    color: "#0f172a",
                    lineHeight: 1.1,
                  }}
                >
                  Data Insights. <br />
                  <Box component="span" sx={{ color: "#2563eb" }}>
                    Growth Engineers.
                  </Box>
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: "18px",
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                We don't guess; we measure. Our analytics-first approach ensures every marketing dollar spent is trackable and contributes to your bottom line.
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1.5}>
                 {["GA4 Migration", "Looker Studio Dashboards", "Multi-touch Attribution", "Conversion Tracking", "Heatmap Analysis"].map((tag, i) => (
                   <Box key={i} sx={{ px: 2, py: 0.8, bgcolor: "rgba(37, 99, 235, 0.05)", border: "1px solid rgba(37, 99, 235, 0.1)", borderRadius: "8px", color: "#2563eb", fontSize: "14px", fontWeight: 700 }}>
                      {tag}
                   </Box>
                 ))}
              </Stack>

              <Box sx={{ pt: 2 }}>
                <Button
                  sx={{
                    color: "#2563eb",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "17px",
                    p: 0,
                    gap: 1.5,
                    "&:hover": { bgcolor: "transparent", gap: 2 },
                  }}
                >
                  See Your Data Dashboard <ArrowRight size={20} />
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MarketingAnalytics;
