import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Analysis", desc: "Through dialogue and document review, evaluate existing workflows and data points setups." },
  { id: 2, title: "Customization", desc: "Scale modules and sync HRM systems customized right to client infrastructures." },
  { id: 3, title: "Engineering", desc: "Seamless HRM Software setups with engineered automated robust pipeline setups." },
  { id: 4, title: "Testing", desc: "Validate by strictly structured frameworks, simulated validations, stress testing." },
];

const HRMProcess = () => (
  <Box sx={{ background: "#0c0411", py: 12, position: "relative", overflow: "hidden" }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8, px: 2 }}>
        <Typography sx={{ color: "#f97316", fontWeight: 700, fontSize: "13px", mb: 1, letterSpacing: "1px" }}>OUR HRM DEVELOPMENT PROCESS</Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "28px", md: "36px" }, mb: 4, fontFamily: "Fira Sans" }}>
          Moduls in Using HRM Systems
        </Typography>
      </Box>

      {/* Central Line Vertical/Stacked Timeline for simple layout safety */}
      <Box sx={{ maxWidth: "600px", mx: "auto", position: "relative", px: 2 }}>
        {/* Central vertical line */}
        <Box sx={{ position: "absolute", left: { xs: "24px", md: "50%" }, top: 0, bottom: 0, width: "2px", bgcolor: "rgba(255,255,255,0.06)", transform: { md: "translateX(-50%)" } }} />

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
                      <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: "18px", mb: 1 }}>{step.title}</Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.6 }}>{step.desc}</Typography>
                    </>
                  )}
                </Grid>

                {/* Central Node Dot */}
                <Grid item xs={12} md={0} sx={{ display: "flex", justifyContent: "center", width: "100%", position: "absolute", left: { xs: "24px", md: "50%" }, transform: { xs: "translateX(-50%)", md: "translateX(-50%)" }, zIndex: 10 }}>
                  <Box sx={{ width: 14, height: 14, borderRadius: "50%", bgcolor: "#0c0411", border: "3px solid #f97316", boxShadow: "0 0 10px rgba(249,115,22,0.8)" }} />
                </Grid>

                {/* Desktop Right Side / Mobile Layout */}
                <Grid item xs={12} md={6} sx={{ pl: { xs: 5, md: isEven ? 0 : 5 }, pr: { xs: 0, md: isEven ? 5 : 0 }, textAlign: { xs: "left", md: isEven ? "left" : "left" } }}>
                  {(!isEven || true) && (
                    <Box sx={{ display: { xs: "block", md: isEven ? "none" : "block" } }}>
                      <Typography sx={{ color: "#f97316", fontWeight: 800, fontSize: "14px", mb: 0.5 }}>Step {step.id}</Typography>
                      <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: "18px", mb: 1 }}>{step.title}</Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.6 }}>{step.desc}</Typography>
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
