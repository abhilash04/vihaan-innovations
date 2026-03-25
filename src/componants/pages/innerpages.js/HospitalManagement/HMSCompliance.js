import React from "react";
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import LockIcon from '@mui/icons-material/Lock';

const satelliteBadges = [
  { label: "NABH Aligned", angle: 0 },
  { label: "HIPAA", angle: 60 },
  { label: "AES-256", angle: 120 },
  { label: "Audit Trail", angle: 180 },
  { label: "RBAC", angle: 240 },
  { label: "HL7/FHIR", angle: 300 }
];

const points = [
  { title: "Zero Trust Architecture", desc: "Every access request is strictly verified to prevent unauthorized entry." },
  { title: "Real-Time Auditing", desc: "Monitor and track every data change with full transparency." },
  { title: "Encrypted Backups", desc: "Secure daily backups across multiple locations for maximum safety." }
];

const HMSCompliance = () => {
  return (
    <Box sx={{ background: "#1A1A2E", py: 8, position: "relative", overflow: "hidden" }}>
      <style>
        {`
          @keyframes orbitBadge {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes counterOrbitBadge {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}
      </style>

      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center" sx={{ px: 2 }}>
          {/* Left: Orbit badges */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", width: "100%", height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* Central Badge */}
              <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "50%", bgcolor: "#0A2D6E", color: "#ffffff", width: 120, height: 120, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "4px solid #10B981", boxShadow: "0 0 30px rgba(16,185,129,0.3)" }}>
                  <Typography sx={{ fontWeight: 900, fontSize: "14px" }}>ABDM</Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#10B981" }}>READY</Typography>
                </Paper>
              </motion.div>

              {/* Orbiting Elements */}
              <Box sx={{ position: "absolute", width: "240px", height: "240px", animation: "orbitBadge 30s infinite linear" }}>
                {satelliteBadges.map((badge, m) => (
                  <Box key={m} sx={{ position: "absolute", width: "100%", height: "100%", transform: `rotate(${badge.angle}deg)` }}>
                    <Box sx={{ position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)" }}>
                      <Box sx={{ animation: "counterOrbitBadge 30s infinite linear" }}>
                        <Paper elevation={0} sx={{ p: 0.8, px: 1.5, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
                          <Typography sx={{ color: "#ffffff", fontSize: "10px", fontWeight: 800, whiteSpace: "nowrap" }}>{badge.label}</Typography>
                        </Paper>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
              {/* Connect Dashed line circle */}
              <Box sx={{ position: "absolute", width: "240px", height: "240px", borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.15)" }} />
            </Box>
          </Grid>

          {/* Right: Text & List points */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Typography sx={{ color: "#10B981", fontWeight: 800, fontSize: "12px", mb: 1, letterSpacing: "1px" }}>TRUST & COMPLIANCE</Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "28px", md: "38px" }, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Your Data is Secure with Our Hospital Management Software System
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", mb: 4 }}>
                Protect sensitive patient records with a robust hospital management software system built on global security standards, ensuring privacy, compliance, and complete data integrity.
              </Typography>

              <List sx={{ p: 0, mb: 4 }}>
                {points.map((p, i) => (
                  <ListItem key={i} sx={{ p: 0, mb: 2, alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: "32px", color: "#10B981" }}>
                      <LockIcon sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={p.title} secondary={p.desc} primaryTypographyProps={{ sx: { color: "#ffffff", fontSize: "14px", fontWeight: 700 } }} secondaryTypographyProps={{ sx: { color: "rgba(255,255,255,0.5)", fontSize: "12px" } }} />
                  </ListItem>
                ))}
              </List>

              <Paper elevation={0} sx={{ p: 2, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderLeft: "4px solid #10B981" }}>
                <Typography sx={{ color: "#ffffff", fontSize: "13px", fontWeight: 600 }}>
                  Our hospital management software system comes with built-in NABH documentation and ABDM integration, ensuring your hospital is compliant from day one-not as an afterthought.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HMSCompliance;
