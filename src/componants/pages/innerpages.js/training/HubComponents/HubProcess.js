import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, Laptop, Rocket, GraduationCap } from "lucide-react";

const HubProcess = ({ themeColor = "#2563eb" }) => {
  const steps = [
    {
      title: "Enrollment & Orientation",
      icon: GraduationCap,
      desc: "Begin your journey with a structured roadmap and personal career counseling from expert mentors.",
      details: ["Career path assessment", "Industry skill mapping", "Personalized study plan"],
      position: "top"
    },
    {
      title: "Interactive Live Training",
      icon: BookOpen,
      desc: "Deep dive into core modules with live instructor-led sessions, workshops, and case studies.",
      details: ["Real-time doubt clearing", "Capstone workshops", "Practical lab exercises"],
      position: "bottom"
    },
    {
      title: "Portfolio Development",
      icon: Laptop,
      desc: "Apply your skills on live industry projects to build a professional-grade portfolio that recruiters love.",
      details: ["Real client briefings", "Technical critiques", "Resume building"],
      position: "top"
    },
    {
      title: "Placement Support",
      icon: Rocket,
      desc: "Final push for career success with mock interviews, specialized hiring drives, and direct referrals.",
      details: ["One-on-one mock calls", "Soft skills coaching", "Hiring drive access"],
      position: "bottom"
    }
  ];

  return (
    <Box sx={{ py: 20, bgcolor: "#ffffff", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 12, textAlign: "center" }}>
          <Typography sx={{ color: themeColor, fontWeight: 800, fontSize: "14px", letterSpacing: "3px", mb: 2 }}>
            LEARNING METHODOLOGY
          </Typography>
          <Typography variant="h2" sx={{ color: "#0f172a", fontWeight: 900, mb: 3, fontFamily: "'Syne', sans-serif" }}>
            The Path to Career Mastery
          </Typography>
          <Typography sx={{ color: "#64748b", maxWidth: "700px", mx: "auto", fontSize: "1.1rem", fontWeight: 500 }}>
             A comprehensive, step-by-step roadmap designed to bridge the gap between academic learning and industry expectations.
          </Typography>
        </Box>

        {/* Desktop Timeline */}
        <Box sx={{ display: { xs: "none", md: "block" }, position: "relative", px: 4, py: 10 }}>
          {/* Central Line */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 40,
              right: 40,
              height: "2px",
              background: `linear-gradient(to right, ${themeColor}10, ${themeColor}40, ${themeColor}10)`,
              zIndex: 0,
            }}
          />

          <Grid container spacing={0}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Grid item xs={3} key={i} sx={{ position: "relative" }}>
                  {/* Stem */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      top: step.position === "top" ? "50%" : "auto",
                      bottom: step.position === "bottom" ? "50%" : "auto",
                      width: "1px",
                      height: "100px",
                      background: `linear-gradient(to ${step.position === "top" ? "bottom" : "top"}, ${themeColor}, transparent)`,
                      transform: "translateX(-50%)",
                    }}
                  />

                  {/* Marker */}
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    sx={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      bgcolor: "#ffffff",
                      border: `2px solid ${themeColor}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: themeColor,
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                      boxShadow: `0 10px 30px ${themeColor}20`,
                    }}
                  >
                    <Icon size={24} />
                  </Box>

                  {/* Card */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: step.position === "top" ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    sx={{
                      position: "absolute",
                      top: step.position === "top" ? "auto" : "calc(50% + 60px)",
                      bottom: step.position === "top" ? "calc(50% + 60px)" : "auto",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "260px",
                      p: 4,
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "24px",
                      textAlign: "center",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Typography sx={{ color: "#0f172a", fontWeight: 800, mb: 1, fontSize: "1.1rem" }}>{step.title}</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "0.85rem", mb: 3, lineHeight: 1.6, fontWeight: 500 }}>{step.desc}</Typography>
                    <Stack spacing={1.5}>
                      {step.details.map((detail, j) => (
                        <Box key={j} sx={{ display: "flex", alignItems: "center", gap: 1.5, justifyContent: "center" }}>
                          <CheckCircle2 size={14} style={{ color: themeColor }} />
                          <Typography sx={{ color: "#334155", fontSize: "0.8rem", fontWeight: 600 }}>{detail}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Mobile View */}
        <Stack spacing={3} sx={{ display: { xs: "flex", md: "none" }, px: 2 }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  gap: 3,
                  p: 4,
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "14px",
                    bgcolor: `${themeColor}08`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: themeColor,
                    flexShrink: 0,
                    border: `1px solid ${themeColor}10`
                  }}
                >
                  <Icon size={26} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 800, mb: 1 }}>{step.title}</Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>{step.desc}</Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default HubProcess;
