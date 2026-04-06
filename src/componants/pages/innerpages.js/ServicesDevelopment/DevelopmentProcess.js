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
    { title: "Deployment & Support", desc: "Launching your product and ensuring ongoing success.", position: "bottom", checks: ["Cloud Deployment", "24/7 Monitoring", "Feature Updates"] },
  ];

  return (
    <Box id="development-process" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#ffffff", position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 12 }}>
          <Typography sx={{ color: "#06b6d4", fontWeight: 800, letterSpacing: "0.2em", fontSize: "14px", textTransform: "uppercase" }}>
            OUR PROCESS
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a", lineHeight: 1.1 }}>
            How We Build Products <br />
            That Last
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "700px", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.7, fontWeight: 500, pb: 4 }}>
            We follow a structured, agile development process that ensures transparency, quality, and timely delivery of your digital products.
          </Typography>
        </Stack>

        {/* Timeline Desktop */}
        <Box sx={{ position: "relative", display: { xs: "none", md: "block" }, minHeight: "200px", pt: 10 }}>
          <Grid container spacing={0}>
            {steps.map((step, i) => (
              <Grid item xs={2} key={i}>
                <Box sx={{ position: "relative", height: "100%" }}>
                  {/* Node Dot */}
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.3 }}
                    viewport={{ once: true }}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 800,
                      zIndex: 10,
                      boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
                    }}
                  >
                    0{i + 1}
                  </Box>

                  {/* Step Card */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: step.position === "top" ? -50 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.3 }}
                    viewport={{ once: true }}
                    sx={{
                      position: "absolute",
                      top: step.position === "top" ? "auto" : "60%",
                      bottom: step.position === "top" ? "60%" : "auto",
                      left: "-50%",
                      right: "-50%",
                      p: 3,
                      background: "#ffffff",
                      borderRadius: "24px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                      textAlign: "center",
                    }}
                  >
                    <Typography sx={{ color: "#0f172a", fontWeight: 800, mb: 1, fontSize: "16px" }}>{step.title}</Typography>
                    <Typography sx={{ color: "#475569", fontSize: "13px", mb: 2, lineHeight: 1.5, fontWeight: 500 }}>{step.desc}</Typography>
                    <Stack spacing={0.5} alignItems="center">
                      {step.checks.map((check, ci) => (
                        <Stack direction="row" spacing={1} alignItems="center" key={ci}>
                          <Check size={14} color="#06b6d4" strokeWidth={3} />
                          <Typography sx={{ color: "#1e293b", fontSize: "12px", fontWeight: 700 }}>{check}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Box>
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
