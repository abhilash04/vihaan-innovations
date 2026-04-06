import React from "react";
import { Box, Container, Typography, Stack, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Code, Database, Globe, Network, Server, Cpu, ArrowRight } from "lucide-react";

const CustomApps = () => {
  const features = [
    "Enterprise-Grade Scalability",
    "Tailored Business Logic",
    "Seamless API Integrations",
    "Modern Security Standards",
    "Microservices Architecture",
    "Legacy System Modernization",
  ];

  const tiers = [
    { name: "Frontend Layer", icon: Globe, color: "#06b6d4" },
    { name: "API / Logic Layer", icon: Cpu, color: "#3b82f6" },
    { name: "Database Layer", icon: Database, color: "#7c3aed" },
  ];

  return (
    <Box id="custom-apps" sx={{ py: { xs: 10, md: 20 }, bgcolor: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: { xs: "120px", md: "250px" },
          fontWeight: 900,
          color: "rgba(15, 23, 42, 0.03)",
          fontFamily: "'Syne', sans-serif",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        04
      </Typography>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          component={motion.div}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            p: { xs: 5, md: 8 },
            background: "#ffffff",
            borderRadius: "40px",
            border: "1px solid rgba(15, 23, 42, 0.06)",
            boxShadow: "0 40px 100px -20px rgba(15, 23, 42, 0.08)",
          }}
        >
          <Grid container spacing={8}>
            {/* Left Content */}
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#7c3aed",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    CUSTOM SOFTWARE
                  </Typography>
                  <Typography
                    component="a"
                    href="/web-development"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#7c3aed",
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" }
                    }}
                  >
                    View All <ArrowRight size={14} />
                  </Typography>
                </Box>
                <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a", lineHeight: 1.1 }}>
                  Software Built Exactly for Your Business
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.7, fontWeight: 500 }}>
                  Off-the-shelf software often fails to meet unique business needs. We build custom applications from the ground up, designed to solve your specific challenges.
                </Typography>
                
                <Grid container spacing={2.5}>
                  {features.map((feature, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ width: 20, height: 20, borderRadius: "50%", bgcolor: "rgba(124, 58, 237, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#7c3aed" }} />
                        </Box>
                        <Typography sx={{ color: "#1e293b", fontSize: "15px", fontWeight: 600 }}>{feature}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ pt: 2 }}>
                   <Button variant="contained" sx={{ bgcolor: "#7c3aed", px: 4, py: 1.5, borderRadius: "100px", textTransform: "none", fontWeight: 700 }}>
                     Request Technical Proposal
                   </Button>
                </Box>
              </Stack>
            </Grid>

            {/* Right Architecture Diagram */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", py: 4 }}>
                <Stack spacing={4} alignItems="center">
                  {tiers.map((tier, i) => (
                    <Box key={i} sx={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
                      <Box
                        component={motion.div}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.3 }}
                        viewport={{ once: true }}
                        sx={{
                          width: "85%",
                          py: 3,
                          px: 4,
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          borderLeft: `6px solid ${tier.color}`,
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          position: "relative",
                          zIndex: 2,
                          boxShadow: "0 10px 20px rgba(0,0,0,0.02)",
                          "&:hover": {
                             borderColor: tier.color,
                             transform: "translateY(-5px)",
                             transition: "all 0.3s ease"
                          }
                        }}
                      >
                         <Box sx={{ color: tier.color }}><tier.icon size={28} /></Box>
                         <Typography sx={{ color: "#1e293b", fontWeight: 800, fontSize: "18px" }}>{tier.name}</Typography>
                      </Box>
                      
                      {/* Connection Line */}
                      {i < tiers.length - 1 && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            width: "2px",
                            height: "40px",
                            bgcolor: "#e2e8f0",
                            zIndex: 1,
                          }}
                        >
                          <motion.div
                             animate={{ y: [0, 40] }}
                             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                             style={{
                               width: "100%",
                               height: "12px",
                               background: `linear-gradient(to bottom, transparent, ${tier.color})`,
                             }}
                          />
                        </Box>
                      )}
                    </Box>
                  ))}
                </Stack>
                
                {/* Floating Microicons */}
                <Box sx={{ position: "absolute", top: "10%", right: 0, opacity: 0.3, color: "#06b6d4" }}><Code size={32} /></Box>
                <Box sx={{ position: "absolute", bottom: "10%", left: 0, opacity: 0.3, color: "#7c3aed" }}><Network size={32} /></Box>
                <Box sx={{ position: "absolute", top: "50%", right: "-20px", opacity: 0.3, color: "#3b82f6" }}><Server size={32} /></Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomApps;
