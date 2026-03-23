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
<<<<<<< Updated upstream
        py: 8,
        background: "#fff", // Deep Blue
        color: "#000",
=======
        py: 12,
        background: "#F8F6F2", // Light Background matching other sections
        color: "#1a1a1a",
>>>>>>> Stashed changes
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
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "2.8rem" },
                mb: 1.5,
                color: "#1a1a1a",
              }}
            >
              Real Estate Solutions in Numbers
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                color: "#4a5568",
                maxWidth: "700px",
                margin: "0 auto",
                fontSize: "1.05rem",
              }}
            >
              Our expertise in real estate technology is reflected in the results we deliver. From property listings to management platforms, our solutions help businesses scale efficiently while improving operational performance.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {[
            { value: "100K+", title: "Properties Listed on MLS", desc: "Supporting large-scale property listings with advanced MLS integrations and intelligent search features." },
            { value: "5K+", title: "Condominium Properties Managed", desc: "Helping property managers streamline condominium operations through powerful management software." },
            { value: "50K+", title: "Work Orders Managed", desc: "Automating property maintenance and service requests through smart work order management systems." },
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
                  bgcolor: "rgba(0, 0, 0, 0.08)",
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
                    textShadow: "0 0 10px rgba(59,130,246,0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": { color: "#10B981", textShadow: "0 0 10px rgba(16,185,129,0.2)" }, // Accent Green Glow on hover
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
                    color: "#1a1a1a",
                  }}
                >
                  {stat.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#4a5568",
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                    maxWidth: "280px",
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
