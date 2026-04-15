import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const DevelopmentProcess = () => {
  const steps = [
    { title: "Discovery & Requirements", desc: "Understanding your vision and defining project scope.", position: "top", checks: ["User Personas", "Market Research", "Feature Roadmap"] },
    { title: "Architecture & Planning", desc: "Designing technical foundations for scalability.", position: "bottom", checks: ["Tech Stack Selection", "DB Schema Design", "API Specifications"] },
    { title: "UI/UX Design & Prototype", desc: "Creating intuitive and beautiful user experiences.", position: "top", checks: ["High-fidelity Designs", "Interactive Prototypes", "Design System"] },
    { title: "Development & Integration", desc: "Writing clean, efficient, and well-documented code.", position: "bottom", checks: ["Agile Sprints", "Unit Testing", "API Integration"] },
    { title: "Testing & QA", desc: "Ensuring every feature works perfectly as intended.", position: "top", checks: ["End-to-end Testing", "Security Audit", "Performance Tuning"] },
    { title: "Deployment & Support", desc: "Launching your product and ensuring the ongoing success of our website development services.", position: "bottom", checks: ["Cloud Deployment", "24/7 Monitoring", "Feature Updates"] },
  ];

  return (
    <Box id="development-process" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography sx={{ color: "#06b6d4", fontWeight: 800, letterSpacing: "0.2em", fontSize: "14px", textTransform: "uppercase" }}>
            OUR WEBSITE DEVELOPMENT SERVICES PROCESS
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a", lineHeight: 1.1 }}>
            How We Build Products <br />
            That Last
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "700px", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.5, fontWeight: 500, pb: 4 }}>
            We follow a structured, agile development process for all our website development services. This ensures transparency, quality, and timely delivery. Our website development services are optimized through a proven lifecycle that guarantees success.
          </Typography>
        </Stack>

        {/* Timeline Desktop */}
        <Box sx={{ position: "relative", display: { xs: "none", md: "block" }, py: 4 }}>
          {/* Horizontal Connecting Line */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "5%",
              right: "5%",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #cbd5e1 10%, #cbd5e1 90%, transparent)",
              zIndex: 0,
            }}
          />

          <Grid container spacing={0} sx={{ position: "relative", zIndex: 1 }}>
            {steps.map((step, i) => (
              <Grid item xs={2} key={i}>
                <Stack direction="column" alignItems="center" spacing={4} sx={{ position: "relative" }}>

                  {/* Top Layer (Card or Spacer) */}
                  <Box sx={{ height: "260px", display: "flex", alignItems: "flex-end", width: "100%", position: "relative" }}>
                    {step.position === "top" && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        style={{ width: "120%", zIndex: 20 }}
                      >
                        <Box
                          sx={{
                            p: 3.5,
                            background: "#ffffff",
                            borderRadius: "28px",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 15px 40px rgba(0,0,0,0.04)",
                            textAlign: "center",
                            position: "relative",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              bottom: "-40px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "1.5px",
                              height: "40px",
                              background: "linear-gradient(to bottom, #cbd5e1, transparent)"
                            }
                          }}
                        >
                          <Typography sx={{ color: "#0f172a", fontWeight: 800, mb: 1.5, fontSize: "16px", lineHeight: 1.2 }}>{step.title}</Typography>
                          <Typography sx={{ color: "#475569", fontSize: "13px", mb: 2.5, lineHeight: 1.5, fontWeight: 500 }}>{step.desc}</Typography>
                          <Stack spacing={1} alignItems="center">
                            {step.checks.map((check, ci) => (
                              <Stack direction="row" spacing={1} alignItems="center" key={ci}>
                                <Check size={14} color="#06b6d4" strokeWidth={3} />
                                <Typography sx={{ color: "#1e293b", fontSize: "12px", fontWeight: 700 }}>{check}</Typography>
                              </Stack>
                            ))}
                          </Stack>
                        </Box>
                      </motion.div>
                    )}
                  </Box>

                  {/* Node Dot Layer */}
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    sx={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "white",
                      border: "5px solid #06b6d4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0f172a",
                      fontWeight: 900,
                      zIndex: 10,
                      fontSize: "16px",
                      boxShadow: "0 0 20px rgba(6, 182, 212, 0.25)",
                    }}
                  >
                    {i + 1}
                  </Box>

                  {/* Bottom Layer (Card or Spacer) */}
                  <Box sx={{ height: "260px", display: "flex", alignItems: "flex-start", width: "100%", position: "relative" }}>
                    {step.position === "bottom" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        style={{ width: "120%", zIndex: 20 }}
                      >
                        <Box
                          sx={{
                            p: 3.5,
                            background: "#ffffff",
                            borderRadius: "28px",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 15px 40px rgba(0,0,0,0.04)",
                            textAlign: "center",
                            position: "relative",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: "-40px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "1.5px",
                              height: "40px",
                              background: "linear-gradient(to top, #cbd5e1, transparent)"
                            }
                          }}
                        >
                          <Typography sx={{ color: "#0f172a", fontWeight: 800, mb: 1.5, fontSize: "16px", lineHeight: 1.2 }}>{step.title}</Typography>
                          <Typography sx={{ color: "#475569", fontSize: "13px", mb: 2.5, lineHeight: 1.5, fontWeight: 500 }}>{step.desc}</Typography>
                          <Stack spacing={1} alignItems="center">
                            {step.checks.map((check, ci) => (
                              <Stack direction="row" spacing={1} alignItems="center" key={ci}>
                                <Check size={14} color="#06b6d4" strokeWidth={3} />
                                <Typography sx={{ color: "#1e293b", fontSize: "12px", fontWeight: 700 }}>{check}</Typography>
                              </Stack>
                            ))}
                          </Stack>
                        </Box>
                      </motion.div>
                    )}
                  </Box>

                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline Mobile */}
        <Stack spacing={4} sx={{ display: { xs: "flex", md: "none" } }}>
          {steps.map((step, i) => (
            <Box
              key={i}
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              sx={{
                p: 4,
                background: "#f8fafc",
                borderRadius: "24px",
                borderLeft: "5px solid #06b6d4",
                border: "1px solid #e2e8f0",
                borderLeftWidth: "5px"
              }}
            >
              <Typography sx={{ color: "#06b6d4", fontWeight: 800, mb: 1, letterSpacing: "0.1em" }}>STEP 0{i + 1}</Typography>
              <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 800, mb: 1, fontSize: "20px" }}>{step.title}</Typography>
              <Typography sx={{ color: "#475569", fontSize: "15px", mb: 2, fontWeight: 500 }}>{step.desc}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default DevelopmentProcess;
