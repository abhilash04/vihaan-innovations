import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const SectionWrapper = styled(Box)({
  paddingTop: "60px",
  paddingBottom: "60px",
  backgroundColor: "#f0f9ff",
});

const ResultCard = styled(Paper)(({ theme }) => ({
  padding: "48px 40px",
  borderRadius: "32px",
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
  textAlign: "left",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  height: "70%",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    borderColor: "#2563eb",
    boxShadow: "0 20px 40px rgba(37, 99, 235, 0.1)",
    transform: "translateY(-10px)",
  },
}));

const Sparkline = ({ color = "#2563eb" }) => (
  <svg width="100%" height="40" viewBox="0 0 200 40" preserveAspectRatio="none">
    <path
      d="M0 35 Q 25 30, 50 32 T 100 20 T 150 25 T 200 5"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const ExploreResults = ({ data }) => {
  const {
    subtitle = "Results & Outcomes",
    title = "Measurable SEO Success.",
    items = []
  } = data || {};

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#2563eb", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", mb: 1.5, fontFamily: "Inter, sans-serif" }}>
            {subtitle}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", fontFamily: "Urbanist, sans-serif", letterSpacing: "-1px", fontSize: { xs: "32px", md: "48px" } }}>
            {title}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {items.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <ResultCard
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 2, fontFamily: "Urbanist, sans-serif", fontSize: "24px", letterSpacing: "-0.5px" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "16px", mb: 4, lineHeight: 1.6, fontWeight: 500 }}>
                  {item.desc}
                </Typography>

                <Box sx={{ mt: "auto" }}>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {item.metrics?.map((metric, j) => (
                      <Grid item xs={6} key={j}>
                        <Box sx={{ p: 2, bgcolor: "rgba(37, 99, 235, 0.03)", borderRadius: "16px", border: "1px solid rgba(37, 99, 235, 0.05)" }}>
                          <Typography sx={{ color: "#2563eb", fontWeight: 900, fontSize: "20px", fontFamily: "Urbanist, sans-serif" }}>
                            {metric.value}
                          </Typography>
                          <Typography sx={{ color: "#64748b", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
                            {metric.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  <Sparkline color={item.color || "#2563eb"} />
                </Box>
              </ResultCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ExploreResults;
