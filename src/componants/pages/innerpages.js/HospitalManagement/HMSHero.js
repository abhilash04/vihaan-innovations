import React from "react";
import { Box, Container, Typography, Button, Grid, Paper, Divider } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import img from '../../../../assets/hms-banner.png'
const HMSHero = () => {
  return (
    <Box sx={{ background: "radial-gradient(circle at top right, #F5F7FA 0%, #FFFFFF 100%)", pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}>
      {/* Background Watermark */}
      <Box sx={{ position: "absolute", right: "5%", top: "40%", width: "40%", height: "40%", opacity: 0.04, pointerEvents: "none" }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <rect x="45" y="10" width="10" height="80" fill="#0A2D6E" />
          <rect x="10" y="45" width="80" height="10" fill="#0A2D6E" />
        </svg>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "left" }}>
              {/* Badge */}
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 2, py: 0.8, bgcolor: "rgba(10, 45, 110, 0.05)", borderRadius: "20px", mb: 3 }}>
                  <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <FiberManualRecordIcon sx={{ fontSize: 10, color: "#10B981" }} />
                  </motion.div>
                  <Typography sx={{ color: "#0A2D6E", fontWeight: 800, fontSize: "12px", letterSpacing: "0.5px" }}>Healthcare Technology Solutions</Typography>
                </Box>
              </motion.div>

              {/* Headline */}
              <Typography variant="h1" sx={{ fontWeight: 900, color: "#1A1A1A", fontSize: { xs: "36px", md: "52px" }, lineHeight: 1.15, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.25 }}>Run a Smarter Hospital with</motion.span><br />
                <Box component="span" sx={{ color: "#0A2D6E", position: "relative", display: "inline-block", fontSize: { xs: "24px", md: "38px" }, lineHeight: 1.15, }}>
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.55 }}>Advanced HMS Software</motion.span>
                  {/* Underline SVG */}
                  <Box component="svg" viewBox="0 0 100 10" preserveAspectRatio="none" sx={{ position: "absolute", bottom: -5, left: 0, width: "100%", height: "8px", pointerEvents: "none", }}>
                    <motion.path d="M0 5 Q 50 2 100 5" fill="none" stroke="#0A2D6E" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.8 }} />
                  </Box>
                </Box>
              </Typography>

              {/* Description */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                <Typography sx={{ color: "#4A5568", fontSize: "15px", mb: 4, maxWidth: "480px", lineHeight: 1.8 }}>
                  Our intelligent hospital management software streamlines patient queues, simplifies EMR tracking, and enables predictive daily analytics all within a secure and unified platform designed for modern healthcare providers.
                </Typography>
              </motion.div>

              {/* Buttons */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.85 }}>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                  <Button variant="contained" endIcon={<ArrowForwardIcon sx={{ transition: "0.15s", ".MuiButton-root:hover &": { transform: "translateX(4px)" } }} />} sx={{ bgcolor: "#0A2D6E", color: "#fff", fontWeight: 800, px: 3.5, py: 1.5, borderRadius: "25px", textTransform: "none", boxShadow: "0 4px 15px rgba(10, 45, 110, 0.2)", "&:hover": { bgcolor: "#0e3b8a" } }}>
                    Get Free Demo
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: "#0A2D6E", color: "#0A2D6E", fontWeight: 800, px: 3.5, py: 1.5, borderRadius: "25px", textTransform: "none", borderWidth: "2px", "&:hover": { borderWidth: "2px", bgcolor: "rgba(10, 45, 110, 0.03)" } }}>
                    View Features
                  </Button>
                </Box>
              </motion.div>

              {/* Stats Row */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 3, borderTop: "1px solid rgba(0,0,0,0.06)", pt: 3 }}>
                  {[{ value: "50+", label: "Hospitals" }, { value: "98.5%", label: "Accuracy" }, { value: "24/7", label: "Support" }, { value: "3x", label: "Speed" }].map((stat, i) => (
                    <React.Fragment key={i}>
                      <Box>
                        <Typography sx={{ color: "#0A2D6E", fontWeight: 900, fontSize: "20px" }}>{stat.value}</Typography>
                        <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: "11px", fontWeight: 600 }}>{stat.label}</Typography>
                      </Box>
                      {i < 3 && <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(0,0,0,0.08)" }} />}
                    </React.Fragment>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Grid>

          {/* Right Visual Floating Mockups */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* Outer Glow */}
              <Box sx={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", background: "rgba(10, 45, 110, 0.03)", filter: "blur(40px)", zIndex: 0 }} />

              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} style={{ zIndex: 1, width: '100%' }}>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <Paper elevation={0} sx={{ p: 1.5, borderRadius: "24px", bgcolor: "#FFFFFF", backdropFilter: "blur(20px)", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 20px 40px rgba(0,0,0,0.06)", position: "relative" }}>
                    <Box component="img" src={img} alt="Hospital Dashboard Mockup" sx={{ width: "100%", height: "auto", borderRadius: "16px" }} />

                    {/* Floating Notifications */}
                    {/* Note 1 */}
                    <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }} style={{ position: "absolute", top: -15, right: -10, zIndex: 10 }}>
                      <Paper elevation={0} sx={{ p: 1.2, borderRadius: "12px", bgcolor: "#fff", border: "1px solid rgba(0,0,0,0.03)", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ color: "#10B981", fontSize: "14px" }}>✓</Typography>
                        <Typography sx={{ color: "#1A1A1A", fontSize: "10px", fontWeight: 700 }}>New Patient Registered</Typography>
                      </Paper>
                    </motion.div>

                    {/* Note 2 */}
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} style={{ position: "absolute", bottom: 15, left: -15, zIndex: 10 }}>
                      <Paper elevation={0} sx={{ p: 1.2, borderRadius: "12px", bgcolor: "#fff", border: "1px solid rgba(0,0,0,0.03)", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ fontSize: "12px" }}>🧪</Typography>
                        <Typography sx={{ color: "#1A1A1A", fontSize: "10px", fontWeight: 700 }}>Lab Report Ready</Typography>
                      </Paper>
                    </motion.div>

                    {/* Note 3 */}
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3.0 }} style={{ position: "absolute", top: "45%", right: -25, zIndex: 10 }}>
                      <Paper elevation={0} sx={{ p: 1.2, borderRadius: "12px", bgcolor: "#fff", border: "1px solid rgba(0,0,0,0.03)", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ fontSize: "12px" }}>🛏</Typography>
                        <Typography sx={{ color: "#1A1A1A", fontSize: "10px", fontWeight: 700 }}>Bed 204 Occupied</Typography>
                      </Paper>
                    </motion.div>

                  </Paper>
                </motion.div>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HMSHero;
