import React from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Check, ArrowRight, Mail, Send, Zap, Bot } from "lucide-react";

const EmailMarketing = () => {
  const lifecycleMap = [
    { label: "Welcome Series", status: "Active" },
    { label: "Abandoned Cart", status: "Active" },
    { label: "Post-Purchase", status: "Optimization" },
    { label: "Win-back Flow", status: "Draft" }
  ];

  return (
    <Box
      id="email-marketing"
      sx={{
        py: { xs: 10, md: 20 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#ffffff",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "5%",
          left: "2%",
          fontSize: { xs: "120px", md: "250px" },
          fontWeight: 900,
          color: "rgba(15, 23, 42, 0.03)",
          fontFamily: "'Syne', sans-serif",
          lineHeight: 1,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        05
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
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
                    EMAIL & AUTOMATION
                  </Typography>
                  <Typography
                    component="a"
                    href="/email-marketing"
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
                    fontSize: { xs: "36px", md: "52px" },
                    fontWeight: 800,
                    fontFamily: "'Syne', sans-serif",
                    color: "#0f172a",
                    lineHeight: 1.1,
                  }}
                >
                  Lifecycle Loyalty. <br />
                  <Box component="span" sx={{ color: "#f59e0b" }}>
                    Automated Growth.
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
                Email isn't dead; it's just becoming more personal. We design automated sequences that nurture leads and maximize customer lifetime value.
              </Typography>

              <Stack spacing={2}>
                {[
                  "Visual Flow Automation Builders",
                  "Advanced User Segmentation",
                  "A/B Subject Line & Copy Testing",
                  "Ecommerce Integrated Flows",
                ].map((item, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box sx={{ p: 1, bgcolor: "rgba(245, 158, 11, 0.1)", borderRadius: "10px" }}>
                       <Zap size={14} color="#f59e0b" fill="#f59e0b" />
                    </Box>
                    <Typography sx={{ color: "#1e293b", fontWeight: 600, fontSize: "15px" }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>

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
                  }}
                >
                  Start Your Automation <ArrowRight size={20} />
                </Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "500px",
              }}
            >
               {/* Email Flow Visualization */}
               <Stack spacing={4} sx={{ width: "100%", maxWidth: "400px" }}>
                  {lifecycleMap.map((flow, i) => (
                    <Box
                      key={i}
                      component={motion.div}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      sx={{
                        p: 3,
                        bgcolor: "white",
                        borderRadius: "20px",
                        border: "1px solid #f1f5f9",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        position: "relative"
                      }}
                    >
                       <Box sx={{ p: 1.5, bgcolor: i === 0 ? "rgba(37, 99, 235, 0.1)" : "#f8fafc", borderRadius: "12px" }}>
                          <Mail size={24} color={i === 0 ? "#2563eb" : "#94a3b8"} />
                       </Box>
                       <Box>
                          <Typography sx={{ fontWeight: 800, color: "#0f172a" }}>{flow.label}</Typography>
                          <Typography sx={{ fontSize: "12px", color: i < 2 ? "#16a34a" : "#64748b", fontWeight: 700 }}>{flow.status}</Typography>
                       </Box>
                       {i < 3 && (
                         <Box sx={{ position: "absolute", bottom: -30, left: 35, width: "2px", height: "30px", background: "linear-gradient(to bottom, #2563eb, transparent)" }} />
                       )}
                    </Box>
                  ))}
               </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EmailMarketing;
