import React from "react";
import { Box, Container, Typography, Grid, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Cloud, Server, Database, Shield, Zap, RefreshCw, Cpu, Layers, ArrowRight } from "lucide-react";

const CloudDevelopment = () => {
  const features = [
    "AWS / GCP / Azure Architecture Design",
    "Microservices & Serverless Development",
    "Cloud Migration & Modernization",
    "Auto-Scaling & Load Balancing",
    "Cloud Cost Optimisation",
    "Multi-Cloud Strategy",
  ];

  const providers = ["AWS", "GCP", "Azure", "Vercel", "Netlify", "Cloudflare"];

  return (
    <Box id="cloud-dev" sx={{ py: { xs: 10, md: 20 }, bgcolor: "#ffffff", position: "relative", overflow: "hidden" }}>
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: { xs: "120px", md: "250px" },
          fontWeight: 900,
          color: "rgba(15, 23, 42, 0.03)",
          fontFamily: "'Syne', sans-serif",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        05
      </Typography>

      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#3b82f6",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    CLOUD DEVELOPMENT
                  </Typography>
                  <Typography
                    component="a"
                    href="/cloud-computing"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#3b82f6",
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
                  Scalable Cloud Solutions Built for Tomorrow
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.7, fontWeight: 500 }}>
                  We design and implement robust cloud architectures that ensure high availability, scalability, and security for your digital assets.
                </Typography>
              
              <Stack spacing={2} sx={{ pt: 2 }}>
                {features.map((feature, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box sx={{ p: 0.5, bgcolor: "rgba(59, 130, 246, 0.1)", borderRadius: 1 }}>
                      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }}>
                        <Zap size={16} color="#3b82f6" />
                      </motion.div>
                    </Box>
                    <Typography sx={{ color: "#1e293b", fontWeight: 600 }}>{feature}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ pt: 4 }}>
                {providers.map((provider, i) => (
                  <Chip
                    key={i}
                    label={provider}
                    sx={{
                      bgcolor: "white",
                      border: "1px solid #e2e8f0",
                      color: "#1e293b",
                      fontWeight: 700,
                      boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column - Infrastructure Diagram */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 4, md: 8 },
                background: "#f8fafc",
                borderRadius: "40px",
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.02)",
              }}
            >
               {/* CDN / Load Balancer */}
               <Box
                 component={motion.div}
                 initial={{ y: -20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 sx={{
                   px: 4,
                   py: 2,
                   background: "#0f172a",
                   borderRadius: "16px",
                   display: "flex",
                   alignItems: "center",
                   gap: 2,
                   color: "white",
                   boxShadow: "0 10px 25px rgba(15, 23, 42, 0.3)",
                 }}
               >
                 <Layers size={22} color="#06b6d4" />
                 <Typography sx={{ fontWeight: 800, fontSize: "15px" }}>CDN / Load Balancer</Typography>
               </Box>

               {/* App Servers */}
               <Stack direction="row" spacing={3} sx={{ position: "relative" }}>
                  {[1, 2, 3].map((n) => (
                    <Box
                      key={n}
                      component={motion.div}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + n * 0.2 }}
                      sx={{
                        p: 2.5,
                        background: "white",
                        border: "1px solid #e2e8f0",
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1.5,
                        color: "#1e293b",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
                      }}
                    >
                      <Server size={22} color="#3b82f6" />
                      <Typography sx={{ fontSize: "12px", fontWeight: 700 }}>Server {n}</Typography>
                    </Box>
                  ))}
               </Stack>

               {/* Database Cluster */}
               <Box
                 component={motion.div}
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 1.2 }}
                 sx={{
                   px: 4,
                   py: 2,
                   background: "white",
                   border: "1px solid #e2e8f0",
                   borderRadius: "16px",
                   display: "flex",
                   alignItems: "center",
                   gap: 2,
                   color: "#1e293b",
                   boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
                 }}
               >
                  <Database size={22} color="#7c3aed" />
                  <Typography sx={{ fontWeight: 800, fontSize: "15px" }}>Database Cluster</Typography>
               </Box>

               <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -1 }}>
                  <svg width="100%" height="100%" style={{ position: "absolute" }}>
                    <motion.path
                      d="M250 80 L250 140"
                      stroke="#e2e8f0"
                      strokeWidth="2"
                      fill="none"
                    />
                    <motion.path
                      d="M250 220 L250 280"
                      stroke="#e2e8f0"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
               </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CloudDevelopment;
