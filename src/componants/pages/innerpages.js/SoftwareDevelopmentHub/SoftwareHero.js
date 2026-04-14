import React from "react";
import { Box, Container, Typography, Button, Grid, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Code2, Rocket, ShieldCheck, Zap } from "lucide-react";

const SoftwareHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        pt: { xs: 15, md: 24 },
        pb: { xs: 10, md: 20 },
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                <Chip
                  label="Next-Gen Engineering"
                  sx={{
                    bgcolor: "rgba(59, 130, 246, 0.1)",
                    color: "#60a5fa",
                    borderColor: "rgba(59, 130, 246, 0.2)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                  }}
                  variant="outlined"
                />
              </Stack>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "38px", sm: "52px", md: "72px" },
                  fontWeight: 800,
                  fontFamily: "'Syne', sans-serif",
                  color: "white",
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                Software <br />
                <Box component="span" sx={{ color: "#3b82f6" }}>
                  Development.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#94a3b8",
                  fontSize: { xs: "18px", md: "22px" },
                  lineHeight: 1.6,
                  maxWidth: "600px",
                  mb: 5,
                  fontWeight: 500,
                }}
              >
                Innovative, future-proof software solutions. 
                We don't just build software; we engineer competitive advantages 
                built for global scale and local impact.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#3b82f6",
                    color: "white",
                    px: 4,
                    py: 2,
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#2563eb" },
                  }}
                >
                  Explore Our Stack
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "white",
                    borderColor: "rgba(255,255,255,0.2)",
                    px: 4,
                    py: 2,
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textTransform: "none",
                    "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.05)" },
                  }}
                >
                  View Case Studies
                </Button>
              </Stack>

              <Grid container spacing={3} sx={{ mt: 8 }}>
                {[
                  { icon: Code2, label: "Scalable Architecture" },
                  { icon: ShieldCheck, label: "Enterprise Security" },
                  { icon: Zap, label: "High Performance" },
                ].map((item, idx) => (
                  <Grid item key={idx}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "10px",
                          bgcolor: "rgba(59, 130, 246, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#3b82f6",
                        }}
                      >
                        <item.icon size={20} />
                      </Box>
                      <Typography sx={{ color: "white", fontWeight: 600, fontSize: "14px" }}>
                        {item.label}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
             <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "120%",
                    height: "120%",
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                    zIndex: -1,
                  }
                }}
             >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                    alt="Software Engineering"
                    sx={{
                      width: "100%",
                      borderRadius: "24px",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                </motion.div>
             </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SoftwareHero;
