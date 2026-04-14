import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Palette, PenTool, Layout, Image, ArrowRight } from "lucide-react";

export const BrandDesign = () => {
  const features = [
    { title: "Custom Logo Design", icon: Palette, desc: "Unique, memorable logos that define your brand's core essence." },
    { title: "Visual Identity Systems", icon: Layout, desc: "A cohesive look across all digital and print touchpoints." },
    { title: "Brand Guidelines", icon: PenTool, desc: "Standardized rules for typography, color, and asset usage." },
    { title: "Digital Graphic Design", icon: Image, desc: "High-impact assets for websites, socials, and marketing campaigns." },
  ];

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <Box
      id="brand-design"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 10 }}>
          <Typography
            sx={{
              color: "#7c3aed",
              fontWeight: 800,
              letterSpacing: "0.2em",
              fontSize: "14px",
              textTransform: "uppercase",
            }}
          >
            BRAND & GRAPHIC DESIGN
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", md: "42px" },
              fontWeight: 800,
              fontFamily: "'Syne', sans-serif",
              color: "#0f172a",
              maxWidth: "800px",
              lineHeight: 1.1,
            }}
          >
            Strategic Visual Identities <br />
            That Resonate and Convert
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "600px", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.7, fontWeight: 500 }}>
            We don't just create graphics; we build visual languages. Our design team blends strategy with creativity to deliver premium brand assets that capture attention and build long-term trust.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                component={motion.div}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -10, borderColor: "#7c3aed" }}
                sx={{
                  p: 4,
                  height: "100%",
                  background: "#ffffff",
                  borderRadius: "24px",
                  border: "1px solid rgba(15, 23, 42, 0.06)",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(124, 58, 237, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    color: "#7c3aed",
                  }}
                >
                  <feature.icon size={24} />
                </Box>
                <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 800, mb: 1.5, fontSize: "18px" }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: "15px", lineHeight: 1.6, fontWeight: 500 }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export const TwoDAnimation = () => {
  return (
    <Box
      id="2d-animation"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: "400px",
                bgcolor: "#f1f5f9",
                borderRadius: "32px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Abstract 2D Animation Visual */}
              <Box
                component={motion.div}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                sx={{
                  width: "200px",
                  height: "200px",
                  border: "2px dashed #7c3aed",
                  borderRadius: "50%",
                  position: "absolute",
                }}
              />
              <Box
                component={motion.div}
                animate={{ 
                  scale: [1, 1.2, 1],
                  borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                sx={{
                  width: "120px",
                  height: "120px",
                  background: "linear-gradient(45deg, #7c3aed, #ec4899)",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  color: "#ec4899",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  fontSize: "14px",
                }}
              >
                2D ANIMATION
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "32px", md: "42px" },
                  fontWeight: 800,
                  fontFamily: "'Syne', sans-serif",
                  color: "#0f172a",
                }}
              >
                Cinematic 2D Character <br />
                and Motion Storytelling
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: "18px", lineHeight: 1.7 }}>
                Bring your message to life with custom 2D animations. From character-driven narratives to sleek corporate explainers, we craft fluid animations that simplify concepts and create memorable emotional connections with your audience.
              </Typography>
              <Stack spacing={2}>
                {["Custom Character Design", "Storyboarding & Scripting", "Fluid Vector-Based Animation", "Sync'd Voiceover & Audio"].map((item, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#ec4899" }} />
                    <Typography sx={{ color: "#1e293b", fontWeight: 600 }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
