import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Audit", desc: "Assess workflows for hospital management software setup", side: "top" },
  { id: 2, title: "Config", desc: "Customize and configure modules", side: "bottom" },
  { id: 3, title: "Train", desc: "Quick staff training for smooth adoption", side: "top" },
  { id: 4, title: "Sync", desc: "Secure data migration and integration", side: "bottom" },
  { id: 5, title: "Live", desc: "Go-live with full support", side: "top" }
];

const HMSProcess = () => {
  return (
    <Box sx={{ background: "#FAFAF8", py: 8, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#0A2D6E", fontWeight: 800, fontSize: "12px", mb: 1, letterSpacing: "1px" }}>OUR PROCESS</Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            From Discovery to Go-Live with Hospital Management Software
          </Typography>
        </Box>

        <Box sx={{ position: "relative", minHeight: { xs: "auto", md: "280px" } }}>
          {/* SVG Dash Connections for Desktop */}
          <Box component="svg" sx={{ position: "absolute", top: "50px", left: "5%", width: "90%", height: "4px", display: { xs: "none", md: "block" }, zIndex: 0 }}>
            <motion.path d="M 0 2 L 1000 2" fill="none" stroke="#0A2D6E" strokeWidth="2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
          </Box>

          <Grid container spacing={2} sx={{ position: "relative", zIndex: 1, justifyContent: "space-between", flexWrap: { xs: "wrap", md: "nowrap" } }}>
            {steps.map((step, i) => (
              <Grid item xs={12} sm={6} md={2} key={step.id} sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: step.side === "bottom" ? { xs: 0, md: 16 } : 0, mb: step.side === "top" ? { xs: 3, md: 0 } : 0 }}>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.15 }}>
                  <Box sx={{ position: "relative", mb: 2 }}>
                    <Box component={motion.div} animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} sx={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", border: "2px solid #10B981" }} />
                    <Paper elevation={0} sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#ffffff", border: "3px solid #0A2D6E", display: "flex", alignItems: "center", justifyContent: "center", color: "#0A2D6E", fontWeight: 800, fontSize: "15px", boxShadow: "0 4px 12px rgba(10,45,110,0.1)" }}>
                      {step.id}
                    </Paper>
                  </Box>

                  <Paper elevation={0} sx={{ p: 1.8, borderRadius: "12px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.03)", textAlign: "center", width: "100%", maxWidth: "150px", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", transition: "all 0.3s", "&:hover": { borderLeft: "3px solid #0A2D6E", transform: "translateY(-4px)" } }}>
                    <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "13px", mb: 0.5 }}>{step.title}</Typography>
                    <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: "11px", lineHeight: 1.4 }}>{step.desc}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HMSProcess;
