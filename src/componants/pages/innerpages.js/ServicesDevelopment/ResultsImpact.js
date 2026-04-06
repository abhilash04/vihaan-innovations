import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Rocket, Smile, Code2, Award, Star } from "lucide-react";

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

const ResultsImpact = () => {
  const stats = [
    { label: "Projects Delivered", value: 500, suffix: "+", icon: Rocket },
    { label: "Happy Clients", value: 150, suffix: "+", icon: Smile },
    { label: "Technologies", value: 50, suffix: "+", icon: Code2 },
    { label: "Years Experience", value: 10, suffix: "+", icon: Award },
    { label: "Satisfaction", value: 99.9, suffix: "%", icon: Star, isDecimal: true },
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
      {/* Background Watermark */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.03,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
         <svg width="400" height="400" viewBox="0 0 24 24" fill="#0f172a">
            <path d="M13 21h-2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm-5 0H6a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm10 0h-2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" />
         </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} sx={{ textAlign: "center" }}>
          {stats.map((stat, i) => (
            <Grid item xs={12} sm={6} md={2.4} key={i}>
              <Box
                component={motion.div}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                sx={{
                   position: "relative",
                   "&::after": {
                      content: i < stats.length - 1 ? '""' : "none",
                      position: "absolute",
                      right: "-15%",
                      top: "20%",
                      height: "60%",
                      width: "1px",
                      bgcolor: "#e2e8f0",
                      display: { xs: "none", md: "block" }
                   }
                }}
              >
                <Stack spacing={2} alignItems="center">
                  <Box sx={{ color: "#2563eb", mb: 1 }}>
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

export default ResultsImpact;
