import React, { useState } from "react";
import { Box, Container, Typography, Grid, Card, Stack, useTheme } from "@mui/material";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MonitorSmartphone, BarChart4, PlayCircle, ArrowRight, Sparkles } from "lucide-react";

const SynergyCard = ({ card, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Grid item xs={12} md={4}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.8 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ height: "80%", perspective: 1000 }}
      >
        <motion.div style={{ rotateX, rotateY, height: "100%" }}>
          <Card
            sx={{
              p: 5,
              height: "100%",
              borderRadius: "32px",
              background: "rgba(255, 255, 255, 0.7)", // Light glass
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(15, 23, 42, 0.08)", // Darker border
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.3s ease",
              "&:hover": {
                borderColor: `${card.color}40`,
              }
            }}
          >
            {/* Hover Glow Effect */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${card.color}10 0%, transparent 70%)`,
                opacity: 0,
              }}
              whileHover={{ opacity: 1 }}
            />

            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "20px",
                background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}cc 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                mb: 4,
                boxShadow: `0 15px 30px -5px ${card.color}40`,
                position: "relative",
              }}
            >
              <card.icon size={32} />
              <Box
                sx={{
                  position: "absolute",
                  inset: -2,
                  borderRadius: "22px",
                  border: `1px solid ${card.color}40`
                }}
              />
            </Box>

            <Typography
              sx={{
                color: card.color,
                fontWeight: 800,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: 2,
                mb: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1
              }}
            >
              <Sparkles size={14} /> {card.subtitle}
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                fontSize: "28px",
                color: "#0f172a", // Dark title
                mb: 2.5,
                fontFamily: "'Syne', sans-serif",
                lineHeight: 1.2
              }}
            >
              {card.title}
            </Typography>

            <Typography
              sx={{
                color: "#475569", // Darker description
                lineHeight: 1.6,
                mb: 5,
                fontSize: "16px",
                fontWeight: 500
              }}
            >
              {card.description}
            </Typography>

            <Box sx={{ mt: "auto" }}>
              <Stack spacing={2.5}>
                {card.features.map((feature, fIndex) => (
                  <Stack direction="row" spacing={1.5} alignItems="center" key={fIndex}>
                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: card.color }} />
                    <Typography sx={{ color: "#1e293b", fontWeight: 700, fontSize: "14px" }}>
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Card>
        </motion.div>
      </motion.div>
    </Grid>
  );
};

const CategorySynergy = () => {
  const synergyCards = [
    {
      title: "Engineering Excellence",
      subtitle: "The Foundation",
      description: "Robust, scalable, and secure backend architectures paired with pixel-perfect frontend implementations. We build the engine that drives your business forward.",
      icon: MonitorSmartphone,
      color: "#3b82f6",
      features: ["Next.js & React Ecosystems", "Custom Enterprise Software", "Cloud-Native Infrastructure"]
    },
    {
      title: "Marketing Momentum",
      subtitle: "The Engine",
      description: "Software that doesn't convert is just code. We integrate technical SEO, high-performance tracking, and conversion funnels into every build.",
      icon: BarChart4,
      color: "#f43f5e",
      features: ["Technical SEO Integration", "Performance Marketing Ready", "Data-Driven Funnels"]
    },
    {
      title: "Visual Impact",
      subtitle: "The Soul",
      description: "Bringing code to life through breathtaking motion graphics and 3D narratives. We ensure your digital experience is as beautiful as it is functional.",
      icon: PlayCircle,
      color: "#8b5cf6",
      features: ["3D Narrative Integration", "Motion Design System", "VFX & Interactive Storytelling"]
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#f8fafc", position: "relative", overflow: "hidden" }}>
      {/* Background Decorative Rings */}
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "800px", border: "1px solid rgba(15, 23, 42, 0.03)", borderRadius: "50%" }} />
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "1200px", height: "1200px", border: "1px solid rgba(15, 23, 42, 0.02)", borderRadius: "50%" }} />
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              sx={{
                color: "#3b82f6",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 4,
                mb: 3,
                fontSize: "0.85rem"
              }}
            >
              Integrated Digital Strategy
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "36px", md: "64px" },
                fontWeight: 900,
                fontFamily: "'Syne', sans-serif",
                color: "#0f172a", // Changed to dark
                mb: 2,
                lineHeight: 1
              }}
            >
              The Synergy of <br />
              <Box component="span" sx={{ color: "#3b82f6" }}>Performance & Vision.</Box>
            </Typography>
            <Typography
              sx={{
                color: "#475569", // Changed to darker slate
                fontSize: { xs: "18px", md: "22px" },
                maxWidth: "840px",
                mx: "auto",
                fontWeight: 500,
                lineHeight: 1.4
              }}
            >
              True digital dominance requires the seamless fusion of engineering intelligence, marketing precision, and creative vision.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={5}>
          {synergyCards.map((card, index) => (
            <SynergyCard key={index} card={card} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategorySynergy;
