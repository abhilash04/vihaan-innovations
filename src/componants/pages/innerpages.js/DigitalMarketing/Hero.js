import React from "react";
import { Box, Container, Typography, Stack, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "#ffffff",
        pt: { xs: 12, md: 6 },
        position: "relative"
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={4}>
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
                <Box sx={{ bgcolor: "#f59e0b", color: "white", px: 1.5, py: 0.5, borderRadius: "100px", fontSize: "12px", fontWeight: 800 }}>GROWTH</Box>
                <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#475569" }}>Premium Digital Marketing Agency</Typography>
              </Box>

              <Typography
                variant="h1"
                component={motion.h1}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                sx={{
                  fontSize: { xs: "48px", md: "84px" },
                  fontWeight: 900,
                  color: "#0f172a",
                  lineHeight: 1.05,
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Dominate the <br />
                <Box component={motion.span} sx={{ color: "#2563eb", display: "inline-block" }}>Digital Skyline.</Box>
              </Typography>

              <Typography
                component={motion.p}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                sx={{
                  color: "#475569",
                  fontSize: { xs: "18px", md: "22px" },
                  lineHeight: 1.6,
                  maxWidth: "600px",
                  fontWeight: 500,
                }}
              >
                We don't just run ads. We engineer sustainable growth engine for ambitious brands through data-driven SEO, SEM, and social strategies.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#0f172a",
                    color: "white",
                    px: 6,
                    py: 2.5,
                    borderRadius: "14px",
                    fontSize: "16px",
                    fontWeight: 800,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#1e293b" },
                  }}
                >
                  Get Free Audit
                </Button>
                <Button
                  variant="outlined"
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    px: 6,
                    py: 2.5,
                    borderRadius: "14px",
                    borderColor: "#e2e8f0",
                    color: "#0f172a",
                    fontSize: "16px",
                    fontWeight: 800,
                    textTransform: "none",
                    "&:hover": { borderColor: "#cbd5e1", bgcolor: "#f8fafc" },
                  }}
                >
                  Our Portfolio
                </Button>
              </Stack>

              <Stack direction="row" spacing={6} sx={{ pt: 4 }}>
                 <Stack spacing={0.5}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", fontFamily: "'Syne', sans-serif" }}>1.2B+</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "13px", fontWeight: 600 }}>Impressions Generated</Typography>
                 </Stack>
                 <Stack spacing={0.5}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#2563eb", fontFamily: "'Syne', sans-serif" }}>350%</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "13px", fontWeight: 600 }}>Avg. ROI Growth</Typography>
                 </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              sx={{
                position: "relative",
                width: "100%",
                height: "500px",
                background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
                borderRadius: "40px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 40px 80px -20px rgba(15, 23, 42, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}
            >
               {/* growth chart visualization placeholder */}
               <Box sx={{ width: "80%", height: "60%", display: "flex", alignItems: "flex-end", gap: 2 }}>
                  {[40, 70, 50, 90, 60, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
                      style={{
                        flex: 1,
                        background: i === 5 ? "linear-gradient(to top, #2563eb, #06b6d4)" : "#e2e8f0",
                        borderRadius: "12px 12px 0 0"
                      }}
                    />
                  ))}
               </Box>
               
               <Box
                 component={motion.div}
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 sx={{
                   position: "absolute",
                   top: "20%",
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
                  <Box sx={{ p: 1, bgcolor: "rgba(22, 163, 74, 0.1)", borderRadius: "10px" }}>
                     <TrendingUp size={20} color="#16a34a" />
                  </Box>
                  <Box>
                     <Typography sx={{ fontSize: "11px", fontWeight: 800, color: "#64748b" }}>CONVERSIONS</Typography>
                     <Typography sx={{ fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>+124.5%</Typography>
                  </Box>
               </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
