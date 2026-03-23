import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";

// Helper CountUp Component
const CountUpNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract number from string (e.g., "1,000+" -> 1000)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, ""); // Keep +, M, etc.
  const hasComma = value.includes(",");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      let timer = setInterval(() => {
        start += Math.ceil(end / 100); // Step sizes for speed
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, Math.max(incrementTime, 20)); // Cap speed floor

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  const formatWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <span ref={ref}>
      {hasComma ? formatWithCommas(count) : count}
      {suffix}
    </span>
  );
};

const PortalStats = () => {
  return (
    <Box
      sx={{
        py: 12,
        background: "#fff", // Deep Blue
        color: "#000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background abstract arcs/rings */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          border: "1px solid rgba(59, 130, 246, 0.08)",
          borderRadius: "50%",
          top: "-50px",
          left: "20%",
          zIndex: 0,
          animation: "spin 20s linear infinite",
          "@keyframes spin": { "100%": { transform: "rotate(360deg)" } },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          border: "1px solid rgba(16, 185, 129, 0.05)",
          borderRadius: "50%",
          bottom: "-100px",
          right: "20%",
          zIndex: 0,
          animation: "spin-reverse 30s linear infinite",
          "@keyframes spin-reverse": { "100%": { transform: "rotate(-360deg)" } },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {[
            { value: "1,000+", title: "Solid Title", desc: "Gain confluent drives gain within capture systems." },
            { value: "250M+", title: "Description", desc: "Real-time metrics supporting asset scale triggers." },
            { value: "50+", title: "Stat Counter", desc: "Consolidated revenue graphs intuitively mapped." },
          ].map((stat, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                position: "relative",
                // Vertical divider wrapper
                "&:not(:last-child)::after": {
                  content: "''",
                  position: "absolute",
                  right: 0,
                  top: "20%",
                  height: "60%",
                  width: "1px",
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                  display: { xs: "none", md: "block" },
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                style={{ textAlign: "center", cursor: "pointer", padding: "20px" }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: "3rem", md: "4rem" },
                    color: "#3B82F6", // Primary Accent
                    mb: 1,
                    textShadow: "0 0 30px rgba(59,130,246,0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": { color: "#10B981", textShadow: "0 0 30px rgba(16,185,129,0.4)" }, // Accent Green Glow on hover
                  }}
                >
                  <CountUpNumber value={stat.value} />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    mb: 1,
                    letterSpacing: "0.5px",
                  }}
                >
                  {stat.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#000",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    maxWidth: "240px",
                    margin: "0 auto",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                >
                  {stat.desc}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortalStats;
