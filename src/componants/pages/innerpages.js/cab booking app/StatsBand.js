import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { Gauge } from "lucide-react";

// Hook for counting up number
const CountUp = ({ value, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.toString().replace(/\D/g, ""));
      if (start === end) return;

      const incrementTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  // Adjust display for floats or large numbers to append suffix properly
  const displayValue = count + suffix;

  return <span ref={ref}>{displayValue}</span>;
};

const StatsBand = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 4, md: 8 },
        background: "linear-gradient(135deg, #f78361 0%, #fd544e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Watermark Speedometer */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "140%",
          height: "140%",
          opacity: 0.04,
          pointerEvents: "none",
          zIndex: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Gauge size={600} strokeWidth={0.5} color="#111" />
      </Box>

      {/* Stats Grid */}
      <Grid
        container
        spacing={4}
        sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}
      >
        {[
          { number: "10000", label: "Cars Available", suffix: "+" },
          { number: "50", label: "Cities Covered", suffix: "+" },
          { number: "500", label: "Happy Riders", suffix: "K+" },
          { number: "48", label: "Average App Rating", suffix: "★", isRating: true }, // handles rating with decimal separately if needed
        ].map((stat, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              borderRight: { md: index !== 3 ? "1px solid rgba(0,0,0,0.1)" : "none" },
              borderBottom: { xs: index !== 3 ? "1px solid rgba(0,0,0,0.1)" : "none", md: "none" },
              pb: { xs: 3, md: 0 },
            }}
          >
            <Typography
              sx={{
                color: "#1a1a1a", // dark charcoal text for high contrast
                fontWeight: 800,
                fontSize: { xs: "36px", md: "48px" },
                mb: 0.5,
                lineHeight: 1,
              }}
            >
              {stat.isRating ? (
                 <>
                   <CountUp value="4" duration={1000} />
                   .
                   <CountUp value="8" duration={1500} />
                   {stat.suffix}
                 </>
              ) : (
                <CountUp value={stat.number} suffix={stat.suffix} />
              )}
            </Typography>
            <Typography
              sx={{
                color: "rgba(26,26,26,0.7)",
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsBand;
