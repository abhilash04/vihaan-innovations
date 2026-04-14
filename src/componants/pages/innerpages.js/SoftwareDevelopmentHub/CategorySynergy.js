import React from "react";
import { Box, Container, Typography, Grid, Card, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { MonitorSmartphone, BarChart4, PlayCircle, ArrowRight } from "lucide-react";

const CategorySynergy = () => {
  const theme = useTheme();

  const synergyCards = [
    {
      title: "Engineering Excellence",
      subtitle: "The Foundation",
      description: "Robust, scalable, and secure backend architectures paired with pixel-perfect frontend implementations. We build the engine that drives your business forward.",
      icon: MonitorSmartphone,
      color: "#2563eb",
      bgColor: "rgba(37, 99, 235, 0.05)",
      features: ["Next.js & React Ecosystems", "Custom Enterprise Software", "Cloud-Native Infrastructure"]
    },
    {
      title: "Marketing Momentum",
      subtitle: "The Engine",
      description: "Software that doesn't convert is just code. We integrate technical SEO, high-performance tracking, and conversion funnels into every build.",
      icon: BarChart4,
      color: "#ec4899",
      bgColor: "rgba(236, 72, 153, 0.05)",
      features: ["Technical SEO Integration", "Performance Marketing Ready", "Data-Driven Funnels"]
    },
    {
      title: "Visual Impact",
      subtitle: "The Soul",
      description: "Bringing code to life through breathtaking motion graphics and 3D narratives. We ensure your digital experience is as beautiful as it is functional.",
      icon: PlayCircle,
      color: "#7c3aed",
      bgColor: "rgba(124, 58, 237, 0.05)",
      features: ["3D Narrative Integration", "Motion Design System", "VFX & Interactive Storytelling"]
    }
  ];

  return (
    <Box sx={{ py: 15, bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            sx={{
              color: "#3b82f6",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              mb: 2,
              fontSize: "0.9rem"
            }}
          >
            Integrated Digital Strategy
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 800,
              fontFamily: "'Syne', sans-serif",
              color: "#0f172a",
              mb: 3
            }}
          >
            The Power of <br />
            <Box component="span" sx={{ color: "#3b82f6" }}>Three Pillars Combined.</Box>
          </Typography>
          <Typography
            sx={{
              color: "#64748b",
              fontSize: "18px",
              maxWidth: "800px",
              mx: "auto",
              fontWeight: 500
            }}
          >
            True digital dominance requires the seamless fusion of engineering intelligence, marketing precision, and creative vision. We bridge these gaps to build experiences that resonate.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {synergyCards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    p: 5,
                    height: "100%",
                    borderRadius: "24px",
                    boxShadow: "none",
                    border: "1px solid #f1f5f9",
                    bgcolor: card.bgColor,
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
                      borderColor: card.color + "30",
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "16px",
                      background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}dd 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      mb: 4,
                      boxShadow: `0 10px 20px -5px ${card.color}40`
                    }}
                  >
                    <card.icon size={30} />
                  </Box>

                  <Typography
                    sx={{
                      color: card.color,
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      mb: 1
                    }}
                  >
                    {card.subtitle}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      fontSize: "24px",
                      color: "#1e293b",
                      mb: 2,
                      fontFamily: "'Syne', sans-serif"
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.7,
                      mb: 4,
                      fontSize: "15px"
                    }}
                  >
                    {card.description}
                  </Typography>

                  <Stack spacing={2}>
                    {card.features.map((feature, fIndex) => (
                      <Stack direction="row" spacing={1} alignItems="center" key={fIndex}>
                        <ArrowRight size={14} color={card.color} strokeWidth={3} />
                        <Typography sx={{ color: "#334155", fontWeight: 600, fontSize: "14px" }}>
                          {feature}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategorySynergy;
