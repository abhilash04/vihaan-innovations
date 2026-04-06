import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Search, Map, Zap, Activity, Repeat } from "lucide-react";

const MarketingProcess = () => {
  const steps = [
    { icon: Search, title: "Audit & Analysis", desc: "We deep-dive into your existing presence and competitor landscape." },
    { icon: Map, title: "Strategy Roadmap", desc: "A custom blueprints designed for your specific business goals." },
    { icon: Zap, title: "Execution Blast", desc: "High-intensity deployment of campaigns across selected channels." },
    { icon: Activity, title: "Measure & Audit", desc: "Granular tracking of every interaction and conversion point." },
    { icon: Repeat, title: "Optimize & Scale", desc: "Continuous refinement to maximize ROI and expand market share." }
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 20 }, bgcolor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Stack spacing={4} sx={{ mb: 12, textAlign: "center", alignItems: "center" }}>
           <Typography variant="overline" sx={{ color: "#f59e0b", fontWeight: 800, letterSpacing: "0.2em" }}>OUR WORKFLOW</Typography>
           <Typography 
             variant="h2" 
             sx={{ 
               fontSize: { xs: "36px", md: "56px" }, 
               fontWeight: 900, 
               color: "#0f172a", 
               fontFamily: "'Syne', sans-serif" 
             }}
           >
             From Audit to <Box component="span" sx={{ color: "#f59e0b" }}>Abundance.</Box>
           </Typography>
        </Stack>

        <Grid container spacing={4}>
           {steps.map((step, i) => (
             <Grid item xs={12} md={2.4} key={i}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  sx={{
                    textAlign: "center",
                    position: "relative"
                  }}
                >
                   <Box
                     sx={{
                       width: "80px",
                       height: "80px",
                       borderRadius: "30px",
                       bgcolor: "#f8fafc",
                       border: "1px solid #e2e8f0",
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center",
                       mx: "auto",
                       mb: 3,
                       position: "relative",
                       zIndex: 2,
                       transition: "all 0.3s ease",
                       "&:hover": { bgcolor: "#f59e0b", borderColor: "#f59e0b", transform: "rotate(10deg)" },
                       "&:hover .icon": { color: "white" }
                     }}
                   >
                     <step.icon className="icon" size={32} color="#f59e0b" />
                   </Box>

                   {i < 4 && (
                     <Box
                       sx={{
                         display: { xs: "none", md: "block" },
                         position: "absolute",
                         top: "40px",
                         left: "calc(50% + 40px)",
                         width: "calc(100% - 80px)",
                         height: "2px",
                         borderTop: "2px dashed #e2e8f0",
                         zIndex: 1
                       }}
                     />
                   )}

                   <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "18px", mb: 1 }}>{step.title}</Typography>
                   <Typography sx={{ color: "#64748b", fontSize: "14px", fontWeight: 500, lineHeight: 1.6 }}>{step.desc}</Typography>
                </Box>
             </Grid>
           ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MarketingProcess;
