import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import BarChartIcon from '@mui/icons-material/BarChart';

const SectionWrapper = styled(Box)({
  paddingTop: "60px",
  paddingBottom: "60px",
  backgroundColor: "#f9fafb",
});

const OutcomeCard = styled(motion.div)({
  height: "100%",
});

const CardInner = styled(Paper)({
  padding: "30px",
  borderRadius: "24px",
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  boxShadow: "none",
  height: "100%",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
    borderColor: "#0d9488",
  }
});

const OutcomeIcon = styled(Box)({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  backgroundColor: "#f1f5f9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#0d9488",
  marginBottom: "24px",
});

const ExploreOutcomes = ({ data }) => {
  if (!data) return null;
  const {
    subtitle = "◆ Measurable Results",
    title = "SEO Results That Drive Growth",
    categories = []
  } = data;

  const icons = [TrendingUpIcon, BarChartIcon, SpeedIcon];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
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
          transition={{ duration: 0.7 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography sx={{ color: "#0d9488", fontWeight: 700, fontSize: "14px", mb: 1.5, textTransform: "uppercase", letterSpacing: "1.5px" }}>
            {subtitle}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#0f172a", fontFamily: "Urbanist, sans-serif", letterSpacing: "-0.5px" }}>
            {title}
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Grid item xs={12} md={4} key={i}>
                <OutcomeCard variants={itemVariants}>
                  <CardInner>
                    <OutcomeIcon>
                      <Icon />
                    </OutcomeIcon>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", mb: 2, fontFamily: "Urbanist, sans-serif" }}>
                      {cat.title}
                    </Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "15px", mb: 4, lineHeight: 1.6 }}>
                      {cat.desc}
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                      {cat.stats.map((stat, j) => (
                        <Box key={j} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                          <Box sx={{ width: "20px", height: "20px", borderRadius: "50%", bgcolor: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", mt: 0.2 }}>
                            <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", bgcolor: "#0d9488" }} />
                          </Box>
                          <Typography sx={{ fontWeight: 700, color: "#334155", fontSize: "14px" }}>
                            {stat}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardInner>
                </OutcomeCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ExploreOutcomes;
