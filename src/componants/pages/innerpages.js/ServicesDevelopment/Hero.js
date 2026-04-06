import React from "react";
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronRight, Code2, Rocket, Zap, Cloud } from "lucide-react";

const Hero = () => {
  const lineReveal = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const badgeVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.5 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "#ffffff",
        pt: { xs: 12, md: 6 },
      }}
    >
      {/* Background Elements - Abstract Mesh & Glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "70%",
          height: "70%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "60%",
          height: "60%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* Grid Pattern Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* Decorative SVG Mesh (Light) */}
      <Box
        component="svg"
        viewBox="0 0 1000 1000"
        sx={{
          position: "absolute",
          top: "50%",
          right: "-10%",
          width: "800px",
          height: "800px",
          transform: "translateY(-50%)",
          opacity: 0.2,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <defs>
          <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 100,500 Q 250,200 400,500 T 700,500 T 900,500"
          fill="none"
          stroke="url(#meshGradient)"
          strokeWidth="1"
          animate={{
            d: [
              "M 100,500 Q 250,200 400,500 T 700,500 T 900,500",
              "M 100,500 Q 250,800 400,500 T 700,500 T 900,500",
              "M 100,500 Q 250,200 400,500 T 700,500 T 900,500"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left Column Content */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Box>

                <motion.div variants={badgeVariants} initial="hidden" animate="visible">
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1.5,
                      px: 2.5,
                      py: 1,
                      borderRadius: "100px",
                      background: "rgba(37, 99, 235, 0.05)",
                      border: "1px solid rgba(37, 99, 235, 0.15)",
                      color: "#2563eb",
                      fontSize: "14px",
                      fontWeight: 700,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Box component="span" sx={{ fontSize: "18px" }}>🚀</Box>
                    Premium Website Development Services
                  </Box>
                </motion.div>
              </Box>

              <Box sx={{ "& h1": { lineHeight: 1.05 } }}>
                {["We Build Digital", "Products That", "Scale Globally"].map((text, i) => (
                  <Box key={i} sx={{ overflow: "hidden", mb: 0.5 }}>
                    <Typography
                      component={motion.h1}
                      variants={lineReveal}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.2 + i * 0.15 }}
                      variant="h1"
                      sx={{
                        fontSize: { xs: "42px", md: "64px" },
                        fontWeight: 800,
                        fontFamily: "'Syne', sans-serif",
                        color: i === 2 ? "transparent" : "#011e38",
                        background: i === 2 ? "linear-gradient(90deg, #2563eb, #06b6d4)" : "none",
                        WebkitBackgroundClip: i === 2 ? "text" : "none",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography
                component={motion.p}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                sx={{
                  color: "#475569",
                  fontSize: { xs: "16px", md: "20px" },
                  lineHeight: 1.6,
                  maxWidth: "540px",
                  fontWeight: 500,
                }}
              >
                From UI/UX design to AI automation — our website development services cover every layer of your product. We provide comprehensive website development services that go beyond just writing code; we architect solutions that grow with your business. Let our website development services elevate your brand today.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2.5}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(90deg, #2563eb, #06b6d4)",
                    color: "white",
                    px: 5,
                    py: 2,
                    borderRadius: "100px",
                    fontWeight: 800,
                    fontSize: "16px",
                    textTransform: "none",
                    boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 25px 45px -10px rgba(37, 99, 235, 0.5)",
                    },
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  Explore All Services
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(15, 23, 42, 0.15)",
                    color: "#0f172a",
                    px: 5,
                    py: 2,
                    borderRadius: "100px",
                    fontWeight: 700,
                    fontSize: "16px",
                    textTransform: "none",
                    background: "white",
                    "&:hover": {
                      borderColor: "#0f172a",
                      background: "#f8fafc",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Talk to an Expert <ChevronRight size={20} style={{ marginLeft: 8 }} />
                </Button>
              </Stack>

              <Stack
                direction="row"
                flexWrap="wrap"
                gap={2}
                component={motion.div}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                sx={{ pt: 3 }}
              >
                {[
                  { label: "10 Services", color: "#2563eb" },
                  { label: "500+ Projects", color: "#06b6d4" },
                  { label: "50+ Techs", color: "#7c3aed" },
                  { label: "100% Success", color: "#10b981" },
                ].map((badge, i) => (
                  <Box
                    key={i}
                    component={motion.div}
                    variants={fadeInUp}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      px: 2.5,
                      py: 1,
                      borderRadius: "50px",
                      background: "white",
                      border: "1px solid rgba(15, 23, 42, 0.08)",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1e293b",
                    }}
                  >
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: badge.color }} />
                    {badge.label}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column Visual - Floating Premium Dashboard */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "550px",
              }}
            >
              {/* Main Visual - Light Dashboard Card */}
              <Box
                component={motion.div}
                animate={{
                  y: [-15, 15, -15],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                  width: { xs: "100%", md: "460px" },
                  height: "320px",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 1)",
                  borderRadius: "32px",
                  boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.15)",
                  p: 4,
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" spacing={1.2}>
                    <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f57" }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#febc2e" }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#28c840" }} />
                  </Stack>
                  <Box sx={{ px: 2, py: 0.5, borderRadius: 1, bgcolor: "#f1f5f9", color: "#64748b", fontSize: "10px", fontWeight: 800 }}>https://vihaan.ai/dashboard</Box>
                </Stack>

                <Stack direction="row" spacing={3} sx={{ flex: 1 }}>
                  <Box sx={{ width: "100px", borderRight: "1px solid #f1f5f9", pr: 3 }}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Box key={n} sx={{ height: 10, width: "100%", bgcolor: n === 1 ? "#e2e8f0" : "#f8fafc", mb: 2, borderRadius: 1 }} />
                    ))}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ height: 24, width: "70%", background: "linear-gradient(90deg, #2563eb15, transparent)", mb: 3, borderRadius: 1, borderLeft: "4px solid #2563eb" }} />
                    <Grid container spacing={2}>
                      {[1, 2, 3, 4].map((n) => (
                        <Grid item xs={6} key={n}>
                          <Box sx={{ height: 40, width: "100%", bgcolor: "#f8fafc", borderRadius: 2, border: "1px solid #f1f5f9" }} />
                        </Grid>
                      ))}
                    </Grid>
                    <Box sx={{ mt: 4, height: 6, width: "100%", bgcolor: "#f1f5f9", borderRadius: 3, overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 2, delay: 1 }}
                        style={{ height: "100%", background: "linear-gradient(90deg, #2563eb, #06b6d4)" }}
                      />
                    </Box>
                  </Box>
                </Stack>
              </Box>

              {/* Orbiting Elements - Floating Feature Badges */}
              {[
                { icon: Code2, label: "Website Development Services", color: "#2563eb", top: "5%", left: "5%", delay: 0 },
                { icon: Rocket, label: "Fast Performance", color: "#06b6d4", top: "15%", right: "-2%", delay: 1 },
                { icon: Zap, label: "AI Powered", color: "#7c3aed", bottom: "12%", left: "-5%", delay: 2 },
                { icon: Cloud, label: "Cloud Native", color: "#10b981", bottom: "8%", right: "5%", delay: 3 },
              ].map((item, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                  transition={{ delay: 1.2 + i * 0.2, duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  sx={{
                    position: "absolute",
                    top: item.top,
                    bottom: item.bottom,
                    left: item.left,
                    right: item.right,
                    px: 2.5,
                    py: 1.5,
                    background: "white",
                    border: `1px solid ${item.color}20`,
                    boxShadow: `0 15px 30px -10px ${item.color}15`,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    zIndex: 3,
                  }}
                >
                  <item.icon size={18} color={item.color} />
                  <Typography sx={{ color: "#1e293b", fontSize: "14px", fontWeight: 700 }}>{item.label}</Typography>
                </Box>
              ))}

              {/* Decorative Background Glows */}
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                sx={{
                  position: "absolute",
                  width: "550px",
                  height: "550px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(37, 99, 235, 0.03) 0%, transparent 70%)",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
