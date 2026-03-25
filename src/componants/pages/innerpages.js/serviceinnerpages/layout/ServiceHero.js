import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { motion } from "framer-motion";

const drift1 = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
  100% { transform: translate(0, 0); }
`;

const drift2 = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 30px); }
  100% { transform: translate(0, 0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Counter = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/[^0-9]/g, ""));
    if (isNaN(end)) return;

    let totalMiliseconds = duration;
    let incrementTime = Math.max(totalMiliseconds / end, 20);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  const suffix = target.replace(/[0-9]/g, "");
  return <span>{count}{suffix}</span>;
};

const ServiceHero = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0a1628",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      {/* ---------------- Background ---------------- */}
      {/* Radial Orb 1 */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: `${drift1} 8s infinite ease-in-out`,
          zIndex: 0,
        }}
      />
      {/* Radial Orb 2 */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: `${drift2} 8s infinite ease-in-out`,
          animationDelay: "2s",
          zIndex: 0,
        }}
      />

      {/* Dot Grid */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 0,
        }}
      />

      {/* ----------------- Content ----------------- */}
      <Container maxWidth="lg" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Animated Badge */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            bgcolor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            px: 3,
            py: 1,
            borderRadius: "50px",
            mb: 4,
            animation: `${float} 5s infinite ease-in-out`,
          }}
        >
          <Typography sx={{ color: "#06b6d4", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
            🚀 Building the Future of Technology
          </Typography>
        </Box>

        {/* H1 Headline */}
        <Box sx={{ mb: 3 }}>
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: "42px", md: "72px" }, fontFamily: "Urbanist, sans-serif", color: "#ffffff", lineHeight: 1.1 }}>
              Innovative Technology
            </Typography>
          </motion.div>

          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: "42px", md: "72px" }, fontFamily: "Urbanist, sans-serif", color: "#ffffff", lineHeight: 1.1 }}>
              Solutions That
            </Typography>
          </motion.div>

          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "42px", md: "72px" },
                fontFamily: "Urbanist, sans-serif",
                background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                backgroundClip: "text",
                textFillColor: "transparent",
                lineHeight: 1.1,
              }}
            >
              Transform Businesses
            </Typography>
          </motion.div>
        </Box>

        {/* Supporting Description */}
        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            color: "#94a3b8",
            maxWidth: "600px",
            mx: "auto",
            mb: 5,
            lineHeight: 1.8,
          }}
        >
          We build intuitive, scalable custom web and mobile solutions to bring your vision into the modern market efficiently.
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 8, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #2563eb, #06b6d4)",
              color: "#ffffff",
              fontWeight: 600,
              px: 4,
              py: 1.8,
              borderRadius: "50px",
              textTransform: "none",
              fontSize: "15px",
              boxShadow: "0 12px 32px rgba(37, 99, 235, 0.25)",
              transition: "all 0.3s ease",
              "&:hover": { transform: "scale(1.03)", boxShadow: "0 15px 40px rgba(37, 99, 235, 0.35)" },
            }}
          >
            Explore Our Services
          </Button>
          <Button
            variant="outlined"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              fontWeight: 600,
              px: 4,
              py: 1.8,
              borderRadius: "50px",
              textTransform: "none",
              fontSize: "15px",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.3)" },
            }}
          >
            Get Free Consultation
          </Button>
        </Box>

        {/* Floating Stat Counters */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          sx={{ mt: { xs: 4, md: 8 } }}
        >
          <Grid container spacing={3} justifyContent="center">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "150+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
              { value: "4.9★", label: "Client Rating" },
            ].map((stat, i) => (
              <Grid item xs={6} sm={3} key={i}>
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderTop: "3px solid #06b6d4",
                    p: 3,
                    borderRadius: "16px",
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 800, color: "#ffffff", mb: 1, fontFamily: "Urbanist, sans-serif" }}>
                    <Counter target={stat.value} />
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#94a3b8", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceHero;
