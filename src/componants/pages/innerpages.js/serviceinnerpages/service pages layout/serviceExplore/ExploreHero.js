import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const HeroWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  backgroundImage: `
    linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%),
    url("/assets/images/hero-bg.png")
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  paddingTop: "140px",
  paddingBottom: "60px",
  textAlign: "center",
  borderBottom: "1px solid #e2e8f0",
  position: "relative",
  overflow: "hidden",
}));

const Badge = styled(motion.div)({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 20px",
  backgroundColor: "rgba(37, 99, 235, 0.05)",
  borderRadius: "100px",
  border: "1px solid rgba(37, 99, 235, 0.1)",
  marginBottom: "40px",
  backdropFilter: "blur(10px)",
});

const StatBox = styled(motion.div)({
  textAlign: "center",
  padding: "32px 24px",
  borderRadius: "24px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#2563eb",
    boxShadow: "0 20px 40px rgba(37, 99, 235, 0.1)",
    transform: "translateY(-5px)",
  }
});

const HighlightText = styled("span")({
  position: "relative",
  color: "#2563eb",
  display: "inline-block",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: 0,
    width: "100%",
    height: "12px",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='12' viewBox='0 0 100 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 9C15 9 10 2 25 2C40 2 35 9 50 9C65 9 60 2 75 2C90 2 85 9 100 9' stroke='%232563eb' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    zIndex: -1,
  }
});

const ExploreHero = ({ data }) => {
  const {
    title = "Complete Search Engine Optimization Services",
    subtitle = "We improve your rankings, drive real organic traffic, and turn search visibility into measurable business growth.",
    description = "",
    badgeText = "Trusted by 200+ businesses",
    primaryCTA = "Get a Free Consultation ↗",
    secondaryCTA = "View Portfolio",
    stats = []
  } = data || {};

  // Simple logic to highlight the last word or 'Services'
  const titleParts = title.split(" ");
  const lastWord = titleParts.pop();
  const mainTitle = titleParts.join(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <HeroWrapper>
      {/* Decorative background elements */}
      <Box sx={{ position: "absolute", top: "10%", right: "10%", width: "300px", height: "300px", bgcolor: "#2563eb", opacity: 0.03, filter: "blur(100px)", borderRadius: "50%", zIndex: 0 }} />
      <Box sx={{ position: "absolute", bottom: "10%", left: "10%", width: "400px", height: "400px", bgcolor: "#0ea5e9", opacity: 0.02, filter: "blur(100px)", borderRadius: "50%", zIndex: 0 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Badge
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: 800, color: "#2563eb", textTransform: "uppercase", letterSpacing: "2px", fontFamily: "Inter, sans-serif" }}>
              {badgeText}
            </Typography>
          </Badge>

          <Typography
            component={motion.h1}
            variants={itemVariants}
            variant="h1"
            sx={{
              fontSize: { xs: "42px", md: "68px" },
              fontWeight: 900,
              lineHeight: { xs: 1.2, md: 1 },
              mb: 3,
              fontFamily: "Urbanist, sans-serif",
              color: "#0f172a",
              letterSpacing: "-2px",
              maxWidth: "1000px",
              mx: "auto"
            }}
          >
            {mainTitle} <HighlightText>{lastWord}</HighlightText>
          </Typography>

          <Typography
            component={motion.p}
            variants={itemVariants}
            variant="h5"
            sx={{
              fontSize: { xs: "22px", md: "26px" },
              fontWeight: 800,
              color: "#334155",
              maxWidth: "800px",
              mx: "auto",
              mb: 2,
              lineHeight: 1.3,
              fontFamily: "Urbanist, sans-serif"
            }}
          >
            {subtitle}
          </Typography>

          {description && (
            <Typography
              component={motion.p}
              variants={itemVariants}
              sx={{
                fontSize: "18px",
                color: "#64748b",
                maxWidth: "750px",
                mx: "auto",
                mb: 4,
                lineHeight: 1.7,
                fontWeight: 500
              }}
            >
              {description}
            </Typography>
          )}

          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 8, flexWrap: "wrap" }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2563eb",
                color: "white",
                px: 5,
                py: 2.2,
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: 900,
                fontSize: "18px",
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
                fontFamily: "Urbanist, sans-serif",
                "&:hover": { bgcolor: "#1d4ed8", transform: "translateY(-2px)", boxShadow: "0 25px 50px rgba(37, 99, 235, 0.25)" }
              }}
            >
              {primaryCTA}
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#2563eb",
                color: "#2563eb",
                px: 5,
                py: 2.2,
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: 900,
                fontSize: "18px",
                borderWidth: "2.5px",
                fontFamily: "Urbanist, sans-serif",
                "&:hover": { borderColor: "#1d4ed8", bgcolor: "rgba(37, 99, 235, 0.05)", borderWidth: "2.5px", transform: "translateY(-2px)" }
              }}
            >
              {secondaryCTA}
            </Button>
          </Box>
        </motion.div>

        {stats.length > 0 && (
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ borderTop: "1px solid #f1f5f9", }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {stats.map((stat, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <StatBox>
                  <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", mb: 1, fontFamily: "Urbanist, sans-serif", letterSpacing: "-1px" }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#64748b", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "Inter, sans-serif" }}>
                    {stat.label}
                  </Typography>
                </StatBox>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </HeroWrapper>
  );
};

export default ExploreHero;
