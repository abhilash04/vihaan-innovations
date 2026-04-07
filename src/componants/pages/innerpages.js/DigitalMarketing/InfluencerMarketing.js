import React from "react";
import { Box, Container, Typography, Grid, Stack, Button, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Users, Star, ArrowRight, Heart, Share2, Instagram, Twitter } from "lucide-react";

const InfluencerMarketing = () => {
  const influencers = [
    { name: "Sarah J.", role: "Lifestyle Influencer", followers: "1.2M", color: "#fef2f2", accent: "#ef4444" },
    { name: "Mark T.", role: "Tech Reviewer", followers: "850K", color: "#eff6ff", accent: "#3b82f6" },
    { name: "Elena V.", role: "Fitness Coach", followers: "2.5M", color: "#f5f3ff", accent: "#8b5cf6" }
  ];

  return (
    <Box
      id="influencer"
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
                minHeight: "550px",
              }}
            >
              {/* Influencer Profile Grid */}
              <Stack spacing={3} sx={{ width: "100%", maxWidth: "450px" }}>
                {influencers.map((inf, i) => (
                  <Box
                    key={i}
                    component={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    sx={{
                      p: 3,
                      bgcolor: "white",
                      borderRadius: "24px",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                      border: "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      "&:hover": { borderColor: inf.accent, transform: "scale(1.02)" },
                      transition: "all 0.3s ease"
                    }}
                  >
                    <Avatar sx={{ width: 64, height: 64, bgcolor: inf.color, color: inf.accent, fontSize: "20px", fontWeight: 800 }}>{inf.name[0]}</Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontWeight: 800, color: "#0f172a" }}>{inf.name}</Typography>
                      <Typography sx={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>{inf.role}</Typography>
                      <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                        <Typography sx={{ fontSize: "13px", fontWeight: 800, color: inf.accent }}>{inf.followers} Followers</Typography>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Star size={12} color="#f59e0b" fill="#f59e0b" />
                          <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#64748b" }}>4.9 Rating</Typography>
                        </Stack>
                      </Stack>
                    </Box>
                    <Box sx={{ p: 1, bgcolor: "#f8fafc", borderRadius: "10px" }}>
                      <Share2 size={18} color="#64748b" />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Stack spacing={4}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#8b5cf6",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    INFLUENCER & AFFILIATE
                  </Typography>
                  <Typography
                    component="a"
                    href="/influencer-affiliate-marketing"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#8b5cf6",
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
                  Real Voices. <br />
                  <Box component="span" sx={{ color: "#8b5cf6" }}>
                    Real Results.
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
                People buy from people they trust. We connect your brand with creators who genuinely align with your values, driving real awareness and measurable conversions.
              </Typography>

              <Grid container spacing={2.5}>
                {[
                  "Verified Influencer Network",
                  "Fraud & Bot Detection Screening",
                  "Full Campaign Management",
                  "Affiliate Tracking & Payouts"
                ].map((text, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Users size={18} color="#8b5cf6" />
                      <Typography sx={{ fontWeight: 700, color: "#1e293b", fontSize: "14px" }}>{text}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ pt: 2 }}>
                <Button
                  sx={{
                    color: "#8b5cf6",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "17px",
                    p: 0,
                    gap: 1.5,
                    "&:hover": { bgcolor: "transparent", gap: 2 },
                  }}
                >
                  Find Your Brand Voice <ArrowRight size={20} />
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InfluencerMarketing;
