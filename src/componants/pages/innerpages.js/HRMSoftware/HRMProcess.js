import React from "react";
import { Box, Container, Typography, Grid, } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Analysis", desc: "Evaluate existing workflows, employee data, and system requirements to build a strong foundation for human resource management software development." },
  { id: 2, title: "Customization", desc: "Configure modules and seamlessly integrate with your current tools and IT infrastructure for optimized performance." },
  { id: 3, title: "Engineering", desc: "Develop advanced automations and high-performance systems to streamline HR operations and improve efficiency." },
  { id: 4, title: "Testing", desc: "Ensure quality and reliability through rigorous testing, performance checks, and secure validation processes." },
];

const HRMProcess = () => (
  <Box sx={{ background: "#ffffff", py: 8, position: "relative", overflow: "hidden" }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 6, px: 2 }}>
        <Typography sx={{ color: "#f97316", fontWeight: 700, fontSize: "13px", mb: 1, letterSpacing: "1px" }}>OUR HRM DEVELOPMENT PROCESS</Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Fira Sans" }}>
          Human Resource Management Software Development Process
        </Typography>
        <Typography sx={{ color: "rgba(11, 32, 70, 0.7)", fontSize: "15px", maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}>
          Our human resource management software development approach ensures efficient, scalable, and reliable HR solutions tailored to your business needs.
        </Typography>
      </Box>

      {/* Central Line Vertical/Stacked Timeline for simple layout safety */}
      <Box sx={{ maxWidth: "600px", mx: "auto", position: "relative", px: 2 }}>
        {/* Central vertical line */}
        <Box sx={{ position: "absolute", left: { xs: "24px", md: "50%" }, top: 0, bottom: 0, width: "2px", bgcolor: "rgba(11,32,70,0.1)", transform: { md: "translateX(-50%)" } }} />

        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div key={step.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ marginBottom: "40px" }}>
              <Grid container alignItems="center">
                {/* Desktop Left side */}
                <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" }, pr: isEven ? 5 : 0, pl: isEven ? 0 : 5, textAlign: isEven ? "right" : "left" }}>
                  {isEven && (
                    <>
                      <Typography sx={{ color: "#f97316", fontWeight: 800, fontSize: "14px", mb: 0.5 }}>Step {step.id}</Typography>
                      <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "18px", mb: 1 }}>{step.title}</Typography>
                      <Typography sx={{ color: "rgba(11, 32, 70, 0.7)", fontSize: "13px", lineHeight: 1.6 }}>{step.desc}</Typography>
                    </>
                  )}
                </Grid>

                {/* Central Node Dot */}
                <Grid item xs={12} md={0} sx={{ display: "flex", justifyContent: "center", width: "100%", position: "absolute", left: { xs: "24px", md: "50%" }, transform: { xs: "translateX(-50%)", md: "translateX(-50%)" }, zIndex: 10 }}>
                  <Box sx={{ width: 14, height: 14, borderRadius: "50%", bgcolor: "#ffffff", border: "3px solid #f97316", boxShadow: "0 0 10px rgba(249,115,22,0.4)" }} />
                </Grid>

                {/* Desktop Right Side / Mobile Layout */}
                <Grid item xs={12} md={6} sx={{ pl: { xs: 5, md: isEven ? 0 : 5 }, pr: { xs: 0, md: isEven ? 5 : 0 }, textAlign: { xs: "left", md: isEven ? "left" : "left" } }}>
                  {(!isEven || true) && (
                    <Box sx={{ display: { xs: "block", md: isEven ? "none" : "block" } }}>
                      <Typography sx={{ color: "#f97316", fontWeight: 800, fontSize: "14px", mb: 0.5 }}>Step {step.id}</Typography>
                      <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "18px", mb: 1 }}>{step.title}</Typography>
                      <Typography sx={{ color: "rgba(11, 32, 70, 0.7)", fontSize: "13px", lineHeight: 1.6 }}>{step.desc}</Typography>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </motion.div>
          );
        })}
      </Box>
    </Container>
  </Box>
);

export default HRMProcess;
