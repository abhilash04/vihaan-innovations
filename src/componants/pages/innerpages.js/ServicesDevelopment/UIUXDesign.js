import React from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const UIUXDesign = () => {
  const features = [
    "User Research & Persona Building",
    "Wireframing & Prototyping",
    "Visual Design & Design Systems",
    "Usability Testing & Iteration",
    "Accessibility & WCAG Compliance",
    "Handoff-ready Figma Deliverables",
    "UI/UX for Website Development Services",
  ];

  const tools = ["Figma", "Adobe XD", "Maze", "Hotjar", "Zeplin"];

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
      id="ui-ux"
      sx={{
        py: { xs: 10, md: 20 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#ffffff",
      }}
    >
      {/* Background Watermark */}
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
        01
      </Typography>

      {/* Unique Section Orb */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left Column Content */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#7c3aed",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    UI/UX & WEBSITE DEVELOPMENT SERVICES
                  </Typography>
                  <Typography
                    component="a"
                    href="/ui-ux-design"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#7c3aed",
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
                  Interfaces That Users <br />
                  <Box component="span" sx={{ color: "#7c3aed" }}>
                    Love to Use
                  </Box>
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "16px", md: "20px" },
                  lineHeight: 1.7,
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                We craft intuitive, beautiful digital experiences as the foundation of our website development services. Grounded in user research, accessibility, and conversion psychology, our website development services ensure that every pixel has a purpose and every interaction is seamless.
              </Typography>

              <Grid container spacing={2.5}>
                {features.map((feature, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        component="svg"
                        viewBox="0 0 24 24"
                        sx={{ width: 22, height: 22, flexShrink: 0 }}
                      >
                        <motion.path
                          d="M20 6L9 17L4 12"
                          fill="transparent"
                          strokeWidth="3"
                          stroke="#7c3aed"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          variants={draw}
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </Box>
                      <Typography sx={{ color: "#1e293b", fontSize: "15px", fontWeight: 600 }}>
                        {feature}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

              <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ pt: 2 }}>
                {tools.map((tool, i) => (
                  <Box
                    key={i}
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: "12px",
                      background: "#f8fafc",
                      border: "1px solid rgba(15, 23, 42, 0.08)",
                      color: "#475569",
                      fontSize: "13px",
                      fontWeight: 700,
                      boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                    }}
                  >
                    {tool}
                  </Box>
                ))}
              </Stack>

              <Box sx={{ pt: 2 }}>
                <Button
                  sx={{
                    color: "#7c3aed",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "17px",
                    p: 0,
                    gap: 1.5,
                    "&:hover": { bgcolor: "transparent", gap: 2 },
                    transition: "all 0.3s ease",
                  }}
                >
                  Start Your Design Project <ArrowRight size={20} />
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column Visual - Floating UI Components */}
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
              <Stack direction="row" spacing={-12} sx={{ position: "relative" }}>
                {/* Wireframe Phone */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: -50, rotate: -5 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -12 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  sx={{
                    width: "250px",
                    height: "500px",
                    bgcolor: "white",
                    borderRadius: "36px",
                    border: "2px solid #f1f5f9",
                    p: 2.5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                    zIndex: 1,
                  }}
                >
                  <Box sx={{ width: "45px", height: "5px", bgcolor: "#f1f5f9", mx: "auto", borderRadius: 3 }} />
                  <Box sx={{ width: "100%", height: "160px", border: "2px dashed #f1f5f9", borderRadius: 3 }} />
                  <Box sx={{ width: "85%", height: "24px", bgcolor: "#f8fafc", borderRadius: 1.5 }} />
                  <Box sx={{ width: "100%", height: "120px", border: "2px dashed #f1f5f9", borderRadius: 3 }} />
                  <Box sx={{ mt: "auto", width: "100%", height: "45px", border: "2px dashed #f1f5f9", borderRadius: 3 }} />
                </Box>

                {/* Final UI Phone */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ y: [-15, 15, -15] }}
                  transition={{
                    whileInView: { duration: 0.8 },
                    animate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  viewport={{ once: true }}
                  sx={{
                    width: "270px",
                    height: "540px",
                    background: "white",
                    borderRadius: "44px",
                    border: "8px solid #0f172a",
                    p: 3,
                    position: "relative",
                    zIndex: 3,
                    boxShadow: "0 60px 120px -20px rgba(15, 23, 42, 0.15)",
                    overflow: "hidden",
                  }}
                >
                  {/* Notch */}
                  <Box sx={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "110px", height: "28px", bgcolor: "#0f172a", borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px" }} />

                  <Box sx={{ mt: 3, width: "100%", height: "180px", borderRadius: 4, background: "linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)", p: 2.5, boxShadow: "0 10px 20px rgba(124, 58, 237, 0.2)" }}>
                    <Box sx={{ width: "45px", height: "45px", borderRadius: "14px", bgcolor: "rgba(255,255,255,0.25)", backdropFilter: "blur(5px)" }} />
                    <Box sx={{ mt: 2.5, width: "60%", height: "15px", bgcolor: "rgba(255,255,255,0.2)", borderRadius: 1 }} />
                  </Box>

                  <Stack spacing={2.5} sx={{ mt: 4 }}>
                    <Box sx={{ width: "75%", height: "20px", bgcolor: "#f1f5f9", borderRadius: 1.5 }} />
                    <Grid container spacing={2}>
                      {[1, 2, 3, 4].map((n) => (
                        <Grid item xs={6} key={n}>
                          <Box sx={{ width: "100%", height: "85px", bgcolor: "#f8fafc", borderRadius: 3, border: "1px solid #f1f5f9" }} />
                        </Grid>
                      ))}
                    </Grid>
                    <Box sx={{ mt: "auto", height: "50px", bgcolor: "#0f172a", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "14px" }}>
                      Continue
                    </Box>
                  </Stack>
                </Box>

                {/* Desktop Interface Card */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: 50, rotate: 5 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 12 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  sx={{
                    width: "280px",
                    height: "440px",
                    bgcolor: "white",
                    borderRadius: "28px",
                    border: "1px solid #f1f5f9",
                    p: 0,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
                    zIndex: 2,
                    overflow: "hidden",
                    mt: 10,
                  }}
                >
                   <Box sx={{ height: "40px", bgcolor: "#f8fafc", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", px: 2, gap: 1 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#cbd5e1" }} />
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#cbd5e1" }} />
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#cbd5e1" }} />
                   </Box>
                   <Box sx={{ p: 3 }}>
                      <Stack spacing={2}>
                         <Box sx={{ height: 120, bgcolor: "#f1f5f9", borderRadius: 3 }} />
                         <Box sx={{ height: 20, width: "60%", bgcolor: "#f1f5f9", borderRadius: 1 }} />
                         <Stack direction="row" spacing={1.5}>
                            <Box sx={{ height: 35, flex: 1, bgcolor: "#7c3aed15", borderRadius: 2 }} />
                            <Box sx={{ height: 35, flex: 1, bgcolor: "#f1f5f9", borderRadius: 2 }} />
                         </Stack>
                      </Stack>
                   </Box>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UIUXDesign;
