import React from "react";
import { Box, Container, Typography, Button, Grid, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Code2, ShieldCheck, Zap, ChevronRight, Play } from "lucide-react";

// Concentric Circles Pattern Segment
const ConcentricCircles = ({ sx }) => (
  <Box
    sx={{
      position: "absolute",
      opacity: 0.1,
      pointerEvents: "none",
      ...sx,
    }}
  >
    {[...Array(6)].map((_, i) => (
      <Box
        key={i}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: `${(i + 1) * 150}px`,
          height: `${(i + 1) * 150}px`,
          border: "1px dashed rgba(255,255,255,0.2)",
          borderRadius: "50%",
        }}
      />
    ))}
  </Box>
);

const SoftwareHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "#0a0f1e", // Deep midnight base
        minHeight: { xs: "auto", md: "90vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        maxWidth: "1300px",
        mx: 'auto',
        pt: { xs: 15, md: 10 },
        pb: { xs: 10, md: 10 },
      }}
    >
      {/* Background Layer */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* Glowing Orbs */}
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
            right: "20%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "35%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Concentric Circles */}
        <ConcentricCircles sx={{ bottom: "-10%", left: "-10%" }} />
        <Box sx={{ position: "absolute", bottom: 40, right: 40, opacity: 0.3 }}>
          {/* Sparkle Icon */}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
            <path d="M12 3v18M3 12h18M18.36 5.64l-12.72 12.72M18.36 18.36L5.64 5.64" />
          </svg>
        </Box>

        {/* Floating Design Elements */}
        <Box sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Typography sx={{ position: "absolute", top: "15%", left: "55%", color: "rgba(255,255,255,0.15)", fontFamily: "monospace", fontSize: "14px" }}>{"<Code />"}</Typography>
          <Typography sx={{ position: "absolute", top: "25%", left: "45%", color: "rgba(255,255,255,0.2)", fontFamily: "monospace", fontSize: "14px" }}>{"const system = {}"}</Typography>
          <Typography sx={{ position: "absolute", top: "12%", left: "80%", color: "rgba(255,255,255,0.15)", fontFamily: "monospace", fontSize: "14px" }}>{"git push"}</Typography>
          <Typography sx={{ position: "absolute", top: "20%", left: "75%", color: "rgba(255,255,255,0.2)", fontFamily: "monospace", fontSize: "14px" }}>{"fetch()"}</Typography>
          <Typography sx={{ position: "absolute", top: "35%", left: "88%", color: "rgba(255,255,255,0.15)", fontFamily: "monospace", fontSize: "14px" }}>{"npm start"}</Typography>
          <Typography sx={{ position: "absolute", top: "45%", left: "48%", color: "rgba(255,255,255,0.1)", fontFamily: "monospace", fontSize: "14px" }}>{"010110"}</Typography>
        </Box>

        {/* Subtle Grid dots */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    px: 2.5,
                    py: 1,
                    mb: 4,
                    borderRadius: "12px",
                    background: "rgba(59, 130, 246, 0.05)",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#60a5fa",
                      fontWeight: 800,
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                    }}
                  >
                    NEXT-GEN SOFTWARE ENGINEERING
                  </Typography>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "52px", sm: "72px", md: "84px" },
                    fontWeight: 900,
                    fontFamily: "'Syne', sans-serif",
                    color: "white",
                    lineHeight: 1,
                    mb: 3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Software <br />
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Engineering.
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: { xs: "16px", md: "19px" },
                    lineHeight: 1.6,
                    maxWidth: "540px",
                    mb: 5,
                    fontWeight: 500,
                  }}
                >
                  Architecting resilient digital ecosystems. We blend technical mastery with strategic vision to build software that scales globally.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} sx={{ mb: 10 }}>
                  <Button
                    variant="contained"
                    endIcon={<ChevronRight size={18} />}
                    sx={{
                      bgcolor: "#1d4ed8",
                      color: "white",
                      px: 4,
                      py: 1.8,
                      borderRadius: "14px",
                      fontWeight: 700,
                      textTransform: "none",
                      fontSize: "15px",
                      boxShadow: "0 10px 25px rgba(29, 78, 216, 0.3)",
                      "&:hover": { bgcolor: "#1e40af" }
                    }}
                  >
                    Explore Our Stack
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderColor: "rgba(255,255,255,0.2)",
                      px: 4,
                      py: 1.8,
                      borderRadius: "14px",
                      fontWeight: 700,
                      textTransform: "none",
                      fontSize: "15px",
                      "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.05)" }
                    }}
                  >
                    View Case Studies
                  </Button>
                </Stack>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Grid container spacing={4}>
                  {[
                    { icon: Code2, label: "Scalable Core", color: "#3b82f6" },
                    { icon: ShieldCheck, label: "Enterprise Trust", color: "#22c55e" },
                    { icon: Zap, label: "Hyper-Growth", color: "#f59e0b" },
                  ].map((feature, idx) => (
                    <Grid item key={idx}>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Box sx={{ color: feature.color }}>
                          <feature.icon size={22} />
                        </Box>
                        <Typography sx={{ color: "white", fontWeight: 700, fontSize: "15px" }}>
                          {feature.label}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Column - Image Frame */}
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "600px",
                ml: "auto",
              }}
            >
              {/* Background Dotted Design behind image */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-5%",
                  left: "-10%",
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                  opacity: 0.4
                }}
              >
                <ConcentricCircles />
              </Box>

              {/* Main Image Container */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(15, 23, 42, 0.5)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                  zIndex: 1,
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Software Team"
                  sx={{
                    width: "100%",
                    height: { xs: "350px", md: "520px" },
                    objectFit: "cover",
                    opacity: 0.9,
                  }}
                />

                {/* Status Pill Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 24,
                    right: 24,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1,
                    background: "rgba(15, 23, 42, 0.7)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "100px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#22c55e", boxShadow: "0 0 10px #22c55e" }} />
                  <Typography sx={{ color: "white", fontSize: "13px", fontWeight: 700 }}>System Active</Typography>
                </Box>

                {/* Bottom Blur Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "150px",
                    background: "linear-gradient(to top, #0a0f1e, transparent)",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SoftwareHero;
