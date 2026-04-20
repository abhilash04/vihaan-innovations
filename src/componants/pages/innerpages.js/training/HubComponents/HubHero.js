import React from "react";
import { Box, Container, Typography, Stack, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, GraduationCap } from "lucide-react";

const HubHero = ({ 
  badge, 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA, 
  image, 
  stats, 
  themeColor = "#2563eb",
  visualElement: VisualElement // Optional: can be a custom component for the right side
}) => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "#ffffff",
        pt: { xs: 15, md: 10 },
        position: "relative"
      }}
    >
      {/* Background Decor Orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, ${themeColor}10 0%, transparent 70%)`,
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(15, 23, 42, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={4}>
              {/* Specialized Tag */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  px: 2,
                  py: 1,
                  bgcolor: "#f1f5f9",
                  borderRadius: "100px",
                  width: "fit-content",
                }}
              >
                <Box sx={{ bgcolor: themeColor, color: "white", px: 1.5, py: 0.5, borderRadius: "100px", fontSize: "12px", fontWeight: 800 }}>{badge.split(" ")[0].toUpperCase()}</Box>
                <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#475569" }}>{badge}</Typography>
              </Box>

              <Typography
                variant="h1"
                component={motion.h1}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                sx={{
                  fontSize: { xs: "38px", md: "58px" },
                  fontWeight: 900,
                  color: "#0f172a",
                  lineHeight: 1.1,
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {title.split(" ").map((word, i) => (
                    <span key={i} style={word.toLowerCase().includes("academy") || word.toLowerCase().includes("training") ? { color: themeColor } : {}}>
                      {word}{" "}
                    </span>
                  ))}
              </Typography>

              <Typography
                component={motion.p}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                sx={{
                  color: "#475569",
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: 1.6,
                  maxWidth: "600px",
                  fontWeight: 500,
                }}
              >
                {subtitle}
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#0f172a",
                    color: "white",
                    px: 6,
                    py: 2,
                    borderRadius: "14px",
                    fontSize: "16px",
                    fontWeight: 800,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#1e293b" },
                  }}
                >
                  {primaryCTA}
                </Button>
                <Button
                  variant="outlined"
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    px: 6,
                    py: 2,
                    borderRadius: "14px",
                    borderColor: "#e2e8f0",
                    color: "#0f172a",
                    fontSize: "16px",
                    fontWeight: 800,
                    textTransform: "none",
                    "&:hover": { borderColor: "#cbd5e1", bgcolor: "#f8fafc" },
                  }}
                >
                  {secondaryCTA}
                </Button>
              </Stack>

              <Stack direction="row" spacing={6} sx={{ pt: 4 }}>
                {stats && stats.map((stat, i) => (
                   <Stack spacing={0.5} key={i}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: i === 1 ? themeColor : "#0f172a", fontFamily: "'Syne', sans-serif" }}>{stat.value}</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "13px", fontWeight: 600 }}>{stat.label}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            {VisualElement ? (
              <VisualElement />
            ) : (
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "500px",
                    bgcolor: "#f8fafc",
                    borderRadius: "40px",
                    border: "1px solid #e2e8f0",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                    <Box component="img" src={image} sx={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} />
                    <Box
                      component={motion.div}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      sx={{
                        position: "absolute",
                        top: "15%",
                        right: "10%",
                        bgcolor: "#ffffff",
                        p: 2,
                        borderRadius: "20px",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        border: "1px solid #f1f5f9",
                        display: "flex",
                        alignItems: "center",
                        gap: 2
                      }}
                    >
                      <Box sx={{ p: 1, bgcolor: `${themeColor}10`, borderRadius: "10px" }}>
                        <GraduationCap size={20} color={themeColor} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: "11px", fontWeight: 800, color: "#64748b" }}>PLACEMENT</Typography>
                        <Typography sx={{ fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>95% +</Typography>
                      </Box>
                    </Box>
                </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HubHero;
