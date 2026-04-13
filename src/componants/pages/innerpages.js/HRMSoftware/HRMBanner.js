import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const glowStyle = {
  position: "absolute", borderRadius: "50%",
  filter: "blur(90px)", zIndex: 0
};

const HRMBanner = () => (
  <Box sx={{
    background: "linear-gradient(135deg, #0A1E3F 0%, #112A46 50%, #0A192F 100%)",
    position: "relative", overflow: "hidden",
    pt: { xs: 12, md: 16 }, pb: { xs: 6, md: 10 }
  }}>
    {/* Ambient Glows */}
    <Box sx={{ ...glowStyle, top: -60, left: "-5%", width: 400, height: 400, bgcolor: "rgba(249,115,22,0.12)" }} />
    <Box sx={{ ...glowStyle, top: "30%", right: "-5%", width: 350, height: 350, bgcolor: "rgba(139,92,246,0.08)" }} />

    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Grid container spacing={5} alignItems="center">
        {/* Left side text */}
        <Grid item xs={12} md={7}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Box sx={{ display: "inline-flex", px: 2, py: 0.6, bgcolor: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: "20px", mb: 3 }}>
              <Typography sx={{ color: "#f97316", fontSize: "12px", fontWeight: 700, letterSpacing: "1px" }}>HRM SOFTWARE SOLUTIONS</Typography>
            </Box>
            <Typography variant="h1" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "28px", md: "52px" }, lineHeight: 1.1, mb: 3, }}>
              “BUILDING THE FUTURE  <br />
              <Box component="span" sx={{ color: "#f97316", WebkitTextFillColor: "transparent", background: "linear-gradient(90deg, #f97316, #ec4899)", WebkitBackgroundClip: "text" }}>with HRM Software.”</Box>
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: 1.7, mb: 5, maxWidth: "500px" }}>
              Streamline operations and boost productivity with powerful HRM software that automates HR tasks, manages employees, and enhances workforce efficiency.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button variant="contained" sx={{ bgcolor: "#f97316", color: "#fff", fontWeight: 800, px: 4, py: 1.5, borderRadius: "25px", textTransform: "none", fontSize: "14px", boxShadow: "0 6px 20px rgba(249,115,22,0.4)", "&:hover": { bgcolor: "#ea580c" } }}>
                Get Started
              </Button>
              <Button variant="outlined" sx={{ borderColor: "rgba(255,255,255,0.2)", color: "#ffffff", fontWeight: 700, px: 4, py: 1.5, borderRadius: "25px", textTransform: "none", fontSize: "14px", "&:hover": { borderColor: "#fff" } }}>
                Explore More
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Side Cards float mockup */}
        <Grid item xs={12} md={5}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: "24px", background: "linear-gradient(145deg, rgba(255,255,255,0.02), rgba(255,255,255,0.06))", border: "1px solid rgba(255,255,255,0.05)", position: "relative", width: "100%", maxWidth: "420px", transform: "rotate(-5deg)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
                <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: 700, mb: 1 }}>WORKFORCE ANALYTICS</Typography>
                <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: "18px", mb: 3 }}>Dashboard Overview</Typography>
                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                  <Paper sx={{ flex: 1, p: 2, bgcolor: "rgba(249,115,22,0.1)", borderRadius: "12px", textAlign: "center", border: "1px solid rgba(249,115,22,0.2)" }}>
                    <Typography sx={{ color: "#f97316", fontWeight: 900, fontSize: "22px" }}>84%</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "10px" }}>Efficiency</Typography>
                  </Paper>
                  <Paper sx={{ flex: 1, p: 2, bgcolor: "rgba(139,92,246,0.1)", borderRadius: "12px", textAlign: "center", border: "1px solid rgba(139,92,246,0.2)" }}>
                    <Typography sx={{ color: "#8b5cf6", fontWeight: 900, fontSize: "22px" }}>240+</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "10px" }}>Staff Users</Typography>
                  </Paper>
                </Box>
                <Box sx={{ height: "4px", bgcolor: "#f97316", width: "70%", borderRadius: "2px", mb: 1.5 }} />
                <Box sx={{ height: "4px", bgcolor: "rgba(255,255,255,0.1)", width: "100%", borderRadius: "2px", mb: 3 }} />

                {/* Overlap nested phone mockup floating cards visual */}
                <Box sx={{ height: 100, bgcolor: "rgba(255,255,255,0.02)", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.05)" }} />
              </Paper>

              <Paper elevation={0} sx={{ p: 2, position: "absolute", bottom: -20, right: 10, bgcolor: "#ec4899", borderRadius: "16px", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", transform: "rotate(10deg)", boxShadow: "0 10px 30px rgba(236,72,153,0.3)" }}>
                <Typography sx={{ fontWeight: 800, fontSize: "13px" }}>Payroll Verified ✅</Typography>
              </Paper>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HRMBanner;
