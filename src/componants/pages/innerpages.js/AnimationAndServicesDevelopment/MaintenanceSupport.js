import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, LifeBuoy, Terminal, Clock, Users, CheckCircle2, Activity, ArrowRight as LucideArrowRight } from "lucide-react";

const MaintenanceSupport = () => {
  const features = [
    "24/7 System Monitoring & Alerts",
    "Bug Fixing & Patch Management",
    "Performance Optimisation",
    "Security Audits & Updates",
    "Feature Enhancements & Roadmap",
    "Continuous Website Development Services",
    "SLA-backed Response Times",
  ];

  const slaBadges = [
    { label: "99.9% Uptime SLA", icon: ShieldCheck },
    { label: "< 2hr Response Time", icon: Clock },
    { label: "Dedicated Account Manager", icon: Users },
  ];

  return (
    <Box id="maintenance-support" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#f8fafc", position: "relative", overflow: "hidden" }}>

      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(22, 163, 74, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
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
                    color: "#16a34a",
                    fontWeight: 800,
                    letterSpacing: "0.2em",
                    fontSize: "14px",
                    display: "block",
                  }}
                >
                  MAINTENANCE & WEBSITE DEVELOPMENT SERVICES
                </Typography>
                <Typography
                  component="a"
                  href="/app-maintenance"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#16a34a",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" }
                  }}
                >
                  View All <LucideArrowRight size={14} />
                </Typography>
              </Box>
              <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a", lineHeight: 1.1 }}>
                We're With You Long <br />
                <Box component="span" sx={{ color: "#16a34a" }}>After Launch Day</Box>
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.7, fontWeight: 500 }}>
                Software isn't a one-time delivery — it's a living product. As part of our elite website development services, our support team monitors, maintains, and evolves your platform. Our website development services ensure your digital presence is always up-to-date and performing at its peak.
              </Typography>

              <Stack spacing={2} sx={{ pt: 2 }}>
                {features.map((feature, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box sx={{ p: 0.5, bgcolor: "rgba(22, 163, 74, 0.08)", borderRadius: 1 }}>
                      <CheckCircle2 size={18} color="#16a34a" />
                    </Box>
                    <Typography sx={{ color: "#0f172a", fontWeight: 700, fontSize: "15px" }}>{feature}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ pt: 4 }}>
                {slaBadges.map((badge, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      px: 2.5,
                      py: 1.5,
                      borderRadius: "14px",
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                      color: "#16a34a",
                      fontSize: "13px",
                      fontWeight: 800,
                    }}
                  >
                    <badge.icon size={18} />
                    {badge.label}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column - Support Dashboard */}
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              sx={{
                p: 4,
                background: "#ffffff",
                backdropFilter: "blur(20px)",
                borderRadius: "40px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 40px 80px -20px rgba(15, 23, 42, 0.1)",
              }}
            >
              <Stack spacing={4}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                      component={motion.div}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#16a34a" }}
                    />
                    <Typography sx={{ color: "#0f172a", fontWeight: 700 }}>System Health: Optimal</Typography>
                  </Stack>
                  <Terminal size={20} color="#94a3b8" />
                </Stack>

                <Grid container spacing={2}>
                  {["API", "DB", "CDN", "AUTH"].map((service, i) => (
                    <Grid item xs={3} key={i}>
                      <Box sx={{ p: 2, borderRadius: 2, bgcolor: "#f1f5f9", textAlign: "center", border: "1px solid #e2e8f0" }}>
                        <Typography sx={{ color: "#94a3b8", fontSize: "10px", fontWeight: 800, mb: 1 }}>{service}</Typography>
                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#16a34a", mx: "auto" }} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* Uptime Mini Chart */}
                <Box sx={{ height: 100, display: "flex", alignItems: "flex-end", gap: 0.8 }}>
                  {[85, 90, 95, 92, 98, 100, 99, 100, 98, 100, 100, 99].map((val, i) => (
                    <Box
                      key={i}
                      component={motion.div}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${val}%` }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                      sx={{ flex: 1, bgcolor: i === 11 ? "#16a34a" : "rgba(22, 163, 74, 0.3)", borderRadius: "4px 4px 0 0" }}
                    />
                  ))}
                </Box>

                <Stack direction="row" justifyContent="space-between">
                  <Stack spacing={0.5}>
                    <Typography sx={{ color: "#94a3b8", fontSize: "11px", fontWeight: 600 }}>Active Tickets</Typography>
                    <Typography sx={{ color: "#0f172a", fontSize: "20px", fontWeight: 800 }}>0</Typography>
                  </Stack>
                  <Stack spacing={0.5} alignItems="flex-end">
                    <Typography sx={{ color: "#94a3b8", fontSize: "11px", fontWeight: 600 }}>Last Deployment</Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography sx={{ color: "#0f172a", fontSize: "14px", fontWeight: 700 }}>2 hours ago</Typography>
                      <CheckCircle2 size={14} color="#16a34a" />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>

              {/* Floating Reliability Badges */}
              <Box sx={{ position: "absolute", top: -15, right: -15, p: 1.5, bgcolor: "rgba(22, 163, 74, 0.1)", border: "1px solid rgba(22,163,74,0.2)", borderRadius: 2, color: "#16a34a" }}>
                <Activity size={20} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MaintenanceSupport;
