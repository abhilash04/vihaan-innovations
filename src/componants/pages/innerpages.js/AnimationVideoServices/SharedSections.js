import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Film, Users, Zap, Clock, Star } from "lucide-react";

const Counter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return controls.stop;
  }, [value, duration]);

  useEffect(() => {
    return rounded.onChange((latest) => setDisplayValue(latest));
  }, [rounded]);

  return <>{displayValue}</>;
};

export const ResultsImpact = () => {
  const stats = [
    { label: "Videos Produced", value: 400, suffix: "+", icon: Film },
    { label: "Happy Clients", value: 120, suffix: "+", icon: Users },
    { label: "Engagement Boost", value: 35, suffix: "%", icon: Zap },
    { label: "Industry Awards", value: 12, suffix: "+", icon: Star },
    { label: "Satisfaction", value: 98, suffix: "%", icon: Clock },
  ];

  return (
    <Box
      id="results-impact"
      sx={{
        py: 15,
        background: "#ffffff",
        borderTop: "1px solid #f1f5f9",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 10 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a", lineHeight: 1.1 }}>
            Impact of Our Creative Visuals
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "700px", fontSize: "18px", fontWeight: 500 }}>
            Our animation and video production services help brands stand out in a crowded digital landscape by delivering cinematic content that captures hearts and minds.
          </Typography>
        </Stack>
        <Grid container spacing={4} sx={{ textAlign: "center" }}>
          {stats.map((stat, i) => (
            <Grid item xs={12} sm={6} md={2.4} key={i}>
              <Box
                component={motion.div}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                sx={{ position: "relative" }}
              >
                <Stack spacing={2} alignItems="center">
                  <Box sx={{ color: "#7c3aed", mb: 1 }}>
                     <stat.icon size={36} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "40px", md: "52px" },
                      fontWeight: 800,
                      color: "#0f172a",
                      fontFamily: "'Syne', sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    <Counter value={stat.value} duration={2} />
                    {stat.suffix}
                  </Typography>
                  <Typography sx={{ color: "#64748b", fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px" }}>
                    {stat.label}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export const TechStack = () => {
  const technologies = [
     ["After Effects", "Cinema 4D", "Maya", "Houdini", "Blender", "Final Cut Pro", "DaVinci Resolve"],
     ["Toon Boom", "Harmony", "Dragonframe", "Photoshop", "Illustrator", "ZBrush", "Redshift"]
  ];

  return (
    <Box sx={{ py: 10, bgcolor: "#f1f5f9", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: 800, mb: 6 }}>Industry-Leading Creative Suite</Typography>
        <Stack spacing={4}>
           {technologies.map((row, i) => (
             <Box key={i} sx={{ display: "flex", gap: 3, whiteSpace: "nowrap" }}>
                <Box
                  component={motion.div}
                  animate={{ x: i === 0 ? [0, -500] : [-500, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  sx={{ display: "flex", gap: 3 }}
                >
                   {[...row, ...row].map((tech, j) => (
                     <Box
                       key={j}
                       sx={{
                         px: 4,
                         py: 2,
                         borderRadius: "100px",
                         bgcolor: "white",
                         border: "1px solid #e2e8f0",
                         fontWeight: 700,
                         fontSize: "14px",
                         color: "#1e293b"
                       }}
                     >
                        {tech}
                     </Box>
                   ))}
                </Box>
             </Box>
           ))}
        </Stack>
      </Container>
    </Box>
  );
};
