import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import CheckIcon from '@mui/icons-material/Check';

const SectionWrapper = styled(Box)({
  paddingTop: "60px",
  paddingBottom: "60px",
  backgroundColor: "#ffffff",
  borderTop: "1px solid #f1f5f9",
});

const ComparisonCard = styled(motion.div)({
  padding: "60px",
  borderRadius: "32px",
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  boxShadow: "0 10px 40px rgba(37, 99, 235, 0.05)",
});

const StatItem = styled(motion.div)({
  padding: "24px 20px",
  borderRadius: "24px",
  backgroundColor: "#f0f9ff",
  textAlign: "center",
  border: "1px solid #e0f2fe",
  height: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "all 0.4s ease",
});

const ExploreComparison = ({ data }) => {
  if (!data) return null;
  const {
    subtitle = "Why Choose Us",
    title = "What Makes Us Different.",
    features = [],
    reasons = [],
    stats = []
  } = data;

  const displayItems = reasons.length > 0 ? reasons : features.map(f => ({ title: f }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center", mb: 4 }}
        >
          <Typography sx={{ color: "#2563eb", fontWeight: 800, fontSize: "14px", mb: 1.5, textTransform: "uppercase", letterSpacing: "2px", fontFamily: "Inter, sans-serif" }}>
            {subtitle}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", fontFamily: "Urbanist, sans-serif", letterSpacing: "-1px", fontSize: { xs: "32px", md: "48px" } }}>
            {title}
          </Typography>
        </Box>

        <ComparisonCard
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 5 }}
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {displayItems.map((item, i) => (
                  <Box
                    key={i}
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                    }}
                    sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}
                  >
                    <Box sx={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      bgcolor: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      mt: 0.5,
                      flexShrink: 0,
                      boxShadow: "0 4px 10px rgba(37, 99, 235, 0.3)"
                    }}>
                      <CheckIcon sx={{ fontSize: "18px" }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 900, color: "#0f172a", fontSize: "20px", mb: 0.5, fontFamily: "Urbanist, sans-serif", letterSpacing: "-0.3px" }}>
                        {item.title}
                      </Typography>
                      {item.desc && (
                        <Typography sx={{ color: "#475569", fontSize: "16px", lineHeight: 1.6, fontWeight: 500 }}>
                          {item.desc}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {stats.slice(0, 4).map((stat, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <StatItem
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
                      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.1)" }}
                    >
                      <Typography variant="h3" sx={{ fontWeight: 900, color: "#2563eb", mb: 1, fontFamily: "Urbanist, sans-serif", letterSpacing: "-1px" }}>
                        {stat.value}
                      </Typography>
                      <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "15px", mb: 0.5, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "Inter, sans-serif" }}>
                        {stat.label}
                      </Typography>
                      {stat.sub && (
                        <Typography sx={{ fontWeight: 800, color: "#0ea5e9", fontSize: "18px", fontFamily: "Urbanist, sans-serif" }}>
                          {stat.sub}
                        </Typography>
                      )}
                    </StatItem>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </ComparisonCard>
      </Container>
    </SectionWrapper>
  );
};

export default ExploreComparison;
