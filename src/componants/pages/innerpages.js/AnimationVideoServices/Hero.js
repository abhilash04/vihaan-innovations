import React from "react";
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronRight, Clapperboard, Film, Play, Layers, Video, Sparkles } from "lucide-react";

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
        pt: { xs: 8, md: 12 },
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "70%",
          height: "70%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <Grid container spacing={8} alignItems="center">
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
                      background: "rgba(124, 58, 237, 0.05)",
                      border: "1px solid rgba(124, 58, 237, 0.15)",
                      color: "#7c3aed",
                      fontSize: "14px",
                      fontWeight: 700,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Sparkles size={16} />
                    Premium Animation & Video Services
                  </Box>
                </motion.div>
              </Box>

              <Box sx={{ "& h1": { lineHeight: 1.1 } }}>
                {["Bringing Your", "Vision to Life with", "Creative Motion"].map((text, i) => (
                  <Box key={i} sx={{ overflow: "hidden" }}>
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
                        background: i === 2 ? "linear-gradient(90deg, #7c3aed, #ec4899)" : "none",
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
                Capture your audience's attention with high-end visual storytelling. Our studio specializes in custom 2D/3D animation, cinematic video editing, and result-driven explainer videos that help brands communicate complex ideas with clarity and impact.
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
                    background: "linear-gradient(90deg, #7c3aed, #ec4899)",
                    color: "white",
                    px: 5,
                    py: 2,
                    borderRadius: "100px",
                    fontWeight: 800,
                    fontSize: "16px",
                    textTransform: "none",
                    boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.4)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 25px 45px -10px rgba(124, 58, 237, 0.5)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  View Our Showreel
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
                  Get a Quote <ChevronRight size={20} style={{ marginLeft: 8 }} />
                </Button>
              </Stack>
            </Stack>
          </Grid>

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
              {/* Central Video Player Mockup */}
              <Box
                component={motion.div}
                animate={{
                  y: [-15, 15, -15],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                  width: { xs: "100%", md: "480px" },
                  aspectRatio: "16/9",
                  background: "#0f172a",
                  borderRadius: "24px",
                  boxShadow: "0 40px 80px -20px rgba(124, 58, 237, 0.3)",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "8px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Play Button Icon */}
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    border: "2px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Play fill="white" size={32} />
                </Box>

                {/* Video Controls Mockup */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  }}
                >
                  <Box sx={{ height: 4, width: "100%", bgcolor: "rgba(255,255,255,0.2)", borderRadius: 2, mb: 1.5 }}>
                    <motion.div
                      animate={{ width: ["10%", "85%", "10%"] }}
                      transition={{ duration: 15, repeat: Infinity }}
                      style={{ height: "100%", background: "#7c3aed", borderRadius: 2 }}
                    />
                  </Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Box sx={{ width: 60, height: 8, bgcolor: "rgba(255,255,255,0.3)", borderRadius: 1 }} />
                    <Box sx={{ width: 40, height: 8, bgcolor: "rgba(255,255,255,0.3)", borderRadius: 1 }} />
                  </Stack>
                </Box>
              </Box>

              {/* Floating Animation Elements */}
              {[
                { icon: Clapperboard, label: "Direction", color: "#7c3aed", top: "10%", left: "0%" },
                { icon: Layers, label: "3D VFX", color: "#ec4899", top: "20%", right: "-5%" },
                { icon: Film, label: "2D Motion", color: "#3b82f6", bottom: "15%", left: "-5%" },
                { icon: Video, label: "Editing", color: "#10b981", bottom: "10%", right: "5%" },
              ].map((item, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                  transition={{ delay: 1.2 + i * 0.2, duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
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

              <Box
                sx={{
                  position: "absolute",
                  width: "550px",
                  height: "550px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(124, 58, 237, 0.04) 0%, transparent 70%)",
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
