import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Smartphone, Check, ShoppingCart, Apple, Play, ArrowRight as LucideArrowRight } from "lucide-react";

const MobileApps = () => {
  const features = [
    "iOS & Android Website Development Services",
    "React Native & Flutter Cross-Platform",
    "Offline-First Architecture",
    "Push Notifications & Deep Linking",
    "App Store Optimisation & Submission",
    "Mobile Apps for Website Development Services",
    "Post-launch Analytics & Growth Support",
  ];

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.1;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
          opacity: { delay, duration: 0.1 },
        },
      };
    },
  };

  return (
    <Box
      id="mobile-apps"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >


      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left Column Visual */}
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
              <Stack direction="row" spacing={-12} alignItems="center">
                {/* Android Phone - Slate Light */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: -40, rotate: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -10 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  sx={{
                    width: "230px",
                    height: "470px",
                    bgcolor: "white",
                    borderRadius: "36px",
                    border: "2px solid #f1f5f9",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                  }}
                >
                  <Box sx={{ width: "100%", height: "45px", bgcolor: "#f8fafc", p: 1.5, display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9" }}>
                    <Box sx={{ width: 45, height: 10, bgcolor: "#e2e8f0", borderRadius: 1.5 }} />
                    <Box sx={{ width: 25, height: 10, bgcolor: "#e2e8f0", borderRadius: 1.5 }} />
                  </Box>
                  <Box sx={{ p: 2.5 }}>
                    <Box sx={{ width: "100%", height: "135px", background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", borderRadius: 4, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)" }} />
                    <Stack spacing={2} sx={{ mt: 4 }}>
                      {[1, 2, 3, 4].map(n => (
                        <Box key={n} sx={{ width: n === 1 ? "70%" : "100%", height: n === 1 ? 20 : 45, bgcolor: "#f8fafc", borderRadius: 2, border: "1px solid #f1f5f9" }} />
                      ))}
                    </Stack>
                  </Box>
                </Box>

                {/* iOS Phone - Deep Blue Accent/Slate 900 */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  animate={{ y: [-18, 18, -18] }}
                  transition={{
                    whileInView: { duration: 0.8 },
                    animate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  viewport={{ once: true }}
                  sx={{
                    width: "270px",
                    height: "540px",
                    bgcolor: "white",
                    borderRadius: "48px",
                    border: "10px solid #0f172a",
                    position: "relative",
                    zIndex: 2,
                    boxShadow: "0 60px 120px -30px rgba(15, 23, 42, 0.2)",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "130px", height: "32px", bgcolor: "#0f172a", borderBottomLeftRadius: "22px", borderBottomRightRadius: "22px", zIndex: 10 }} />

                  <Box sx={{ p: 4, pt: 8 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5, alignItems: "center" }}>
                      <Box sx={{ width: 50, height: 50, borderRadius: "16px", bgcolor: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#06b6d4" }}>
                        <Smartphone size={24} />
                      </Box>
                      <Box sx={{ width: 45, height: 45, borderRadius: "50%", bgcolor: "#f1f5f9", border: "2px solid #ffffff", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }} />
                    </Box>
                    <Box sx={{ height: 210, width: "100%", bgcolor: "#f8fafc", borderRadius: 6, mb: 4, border: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Box sx={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(37, 99, 235, 0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb" }}>
                        <Play size={20} fill="currentColor" />
                      </Box>
                    </Box>
                    <Box sx={{ height: 55, width: "100%", background: "linear-gradient(90deg, #2563eb, #06b6d4)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: "16px", boxShadow: "0 10px 20px rgba(37, 99, 235, 0.3)" }}>Get Started</Box>
                  </Box>

                  {/* Floating Notification - Light Mode */}
                  <Box
                    component={motion.div}
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    sx={{
                      position: "absolute",
                      top: "22%",
                      right: "-30px",
                      width: "200px",
                      background: "white",
                      border: "1px solid #f1f5f9",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      borderLeft: "4px solid #10b981",
                      borderRadius: "16px",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      zIndex: 10,
                    }}
                  >
                    <Box sx={{ bgcolor: "rgba(16, 185, 129, 0.08)", p: 1, borderRadius: 2, color: "#10b981" }}>
                      <ShoppingCart size={18} />
                    </Box>
                    <Stack spacing={0.2}>
                      <Typography sx={{ color: "#1e293b", fontSize: "12px", fontWeight: 800 }}>New Order!</Typography>
                      <Typography sx={{ color: "#64748b", fontSize: "10px", fontWeight: 500 }}>iPhone 15 Pro Max</Typography>
                    </Stack>
                  </Box>
                </Box>

                {/* Second Android - Partial Overlay */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: 40, rotate: 10 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 10 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  sx={{
                    width: "230px",
                    height: "470px",
                    bgcolor: "#f8fafc",
                    borderRadius: "36px",
                    border: "2px solid #f1f5f9",
                    position: "relative",
                    overflow: "hidden",
                    opacity: 0.6,
                  }}
                >
                  <Box sx={{ p: 3 }}>
                    <Box sx={{ width: "100%", height: 320, border: "2px dashed #e2e8f0", borderRadius: 4 }} />
                  </Box>
                </Box>
              </Stack>

              {/* Store Badges Floating - Light Accent */}
              <Stack
                direction="row"
                spacing={2.5}
                sx={{
                  position: "absolute",
                  bottom: "8%",
                  zIndex: 5,
                }}
              >
                <Box sx={{ px: 3, py: 1.5, border: "1px solid #f1f5f9", borderRadius: 3, display: "flex", alignItems: "center", gap: 1.5, bgcolor: "white", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
                  <Apple size={20} color="#0f172a" />
                  <Typography sx={{ color: "#0f172a", fontSize: "13px", fontWeight: 800 }}>App Store</Typography>
                </Box>
                <Box sx={{ px: 3, py: 1.5, border: "1px solid #f1f5f9", borderRadius: 3, display: "flex", alignItems: "center", gap: 1.5, bgcolor: "white", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
                  <Play size={20} color="#0f172a" />
                  <Typography sx={{ color: "#0f172a", fontSize: "13px", fontWeight: 800 }}>Play Store</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Stack spacing={3}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#06b6d4",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    MOBILE APPS
                  </Typography>
                  <Typography
                    component="a"
                    href="/mobile-app-development"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#06b6d4",
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" }
                    }}
                  >
                    View All <LucideArrowRight size={14} />
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
                  Seamless Apps for a <br />
                  <Box component="span" sx={{ color: "#06b6d4" }}>
                    Mobile-First World
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
                In an increasingly mobile-first world, your brand needs to live where your customers are. We build high-performance mobile applications that offer seamless speed, enterprise-grade security, and a premium user experience across iOS and Android platforms.
              </Typography>

              <Stack spacing={2.5}>
                {features.map((feature, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box
                      component="svg"
                      viewBox="0 0 24 24"
                      sx={{ width: 22, height: 22, flexShrink: 0 }}
                    >
                      <motion.path
                        d="M20 6L9 17L4 12"
                        fill="transparent"
                        strokeWidth="3"
                        stroke="#06b6d4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </Box>
                    <Typography sx={{ color: "#1e293b", fontSize: "16px", fontWeight: 600 }}>
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Box sx={{ pt: 2 }}>
                <Stack direction="row" spacing={4} alignItems="center">
                  <Box>
                    <Typography sx={{ color: "#0f172a", fontSize: "24px", fontWeight: 800 }}>4.9/5</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "12px", fontWeight: 600 }}>App Store Rating</Typography>
                  </Box>
                  <Box sx={{ width: "1px", height: "40px", bgcolor: "#e2e8f0" }} />
                  <Box>
                    <Typography sx={{ color: "#0f172a", fontSize: "24px", fontWeight: 800 }}>1M+</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "12px", fontWeight: 600 }}>Active Users</Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MobileApps;
