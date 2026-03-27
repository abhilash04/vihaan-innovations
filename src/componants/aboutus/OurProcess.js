import React from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";

export default function OurProcess() {
  const steps = [
    { num: "01", title: "Discovery & Strategy", desc: "We map out your business objectives, technical requirements, and define the master blueprint." },
    { num: "02", title: "Design & Prototyping", desc: "Creating high-fidelity UI/UX mockups and interactive prototypes for stakeholder alignment." },
    { num: "03", title: "Engineering & Dev", desc: "Iterative, agile sprints building the robust software architecture and frontend logic." },
    { num: "04", title: "QA & Deployment", desc: "Rigorous quality assurance testing, followed by a seamless, zero-downtime deployment." }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#fafafa" }}>
      <Container maxWidth="lg">
        <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ color: "#00b4d8", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "13px", mb: 2, fontFamily: "'Inter', sans-serif" }}>
            The Framework
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: { xs: "32px", md: "40px" }, color: "#0f172a", mb: 3 }}>
            Our Execution Process
          </Typography>
          <Typography sx={{ fontFamily: "'Inter', sans-serif", color: "#64748b", fontSize: "16px", maxWidth: "600px", mx: "auto" }}>
            A structured, repeatable methodology ensuring transparency, speed, and uncompromising quality on every build.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {steps.map((step, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card elevation={0} sx={{ 
                  p: 4, 
                  borderRadius: "16px", 
                  border: "1px solid rgba(0,0,0,0.05)",
                  background: "#ffffff",
                  height: "100%",
                  position: "relative",
                  overflow: "visible"
                }}>
                  <Typography sx={{ position: "absolute", top: -20, left: 24, fontSize: "48px", fontWeight: 900, color: "rgba(0, 180, 216, 0.1)", fontFamily: "'Inter', sans-serif" }}>
                    {step.num}
                  </Typography>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0f172a", mt: 2, mb: 1.5 }}>
                    {step.title}
                  </Typography>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>
                    {step.desc}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
