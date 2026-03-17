import React, { useState } from "react";
import { Box, Typography, Button, Tabs, Tab, Grid, Stack, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img1 from "../../assets/about-part-003.jpg"; // Re-using existing asset

const MobileITService = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box sx={{ bgcolor: "#ffffff", py: 6, px: 2 }}>
      {/* About Label */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, justifyContent: "center" }}>
        <Typography sx={{ color: "#0087c9", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>About Us</Typography>
        <Box component="span" sx={{ width: "20px", height: "1px", bgcolor: "#0087c9" }} />
      </Box>

      {/* Main Headline */}
      <Typography variant="h3" sx={{ fontWeight: 800, fontSize: "28px", lineHeight: 1.2, mb: 2, textAlign: "center", fontFamily: "Fira Sans", color: "#050748" }}>
        Your Trusted Partner for{" "}
        <Box component="span" sx={{ color: "#0087c9" }}>IT Services</Box> & Digital Innovation
      </Typography>

      <Typography sx={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.6, mb: 4, textAlign: "center" }}>
        Delivering reliable IT consulting, product development, and digital solutions that help businesses grow with confidence.
      </Typography>

      {/* Single Representative Image for Mobile */}
      <Box sx={{ position: "relative", mb: 4, textAlign: "center" }}>
        <Box component="img" src={img1} alt="About IT Service" sx={{ width: "100%", borderRadius: "16px", maxHeight: "200px", objectFit: "cover", boxShadow: "0 8px 25px rgba(0,0,0,0.06)" }} />
        {/* Floating Stat Badge */}
        <Paper elevation={3} sx={{ position: "absolute", bottom: -15, right: 15, bgcolor: "#005885", color: "#fff", px: 2, py: 1, borderRadius: "10px", textAlign: "left" }}>
          <Typography sx={{ fontWeight: 800, fontSize: "24px", lineHeight: 1 }}>20+</Typography>
          <Typography sx={{ fontSize: "10px", color: "rgba(255,255,255,0.8)" }}>Years Experience</Typography>
        </Paper>
      </Box>

      {/* Tabs */}
      <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)} variant="fullWidth" sx={{ mb: 2.5, "& .MuiTabs-indicator": { bgcolor: "#0087c9" }, "& .MuiTab-root": { fontWeight: 700, fontSize: "13px", textTransform: "none", color: "#64748b", "&.Mui-selected": { color: "#0087c9" } } }}>
        <Tab label="Mission" />
        <Tab label="Vision" />
        <Tab label="Values" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ minHeight: "80px", mb: 4 }}>
        <Typography sx={{ color: "#4b5563", fontSize: "13px", lineHeight: 1.6, textAlign: "center" }}>
          {tabValue === 0 && "Our mission is to empower businesses with smart, scalable, and secure technology solutions. We work to simplify IT, strengthen digital operations."}
          {tabValue === 1 && "Our vision is to build a future where businesses of all sizes can access modern, efficient, and innovative digital systems."}
          {tabValue === 2 && "We believe in delivering solutions with transparency, quality, and customer focus. Every project is guided by integrity and innovation."}
        </Typography>
      </Box>

      {/* Bullet Services */}
      <Grid container spacing={1.5} sx={{ mb: 4 }}>
        {["IT Consulting", "Product Development", "Digital Marketing", "Technical Support"].map((item, i) => (
          <Grid item xs={6} key={i}>
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircleIcon sx={{ color: "#0087c9", fontSize: 18 }} />
              <Typography sx={{ color: "#1f2937", fontSize: "13px", fontWeight: 600 }}>{item}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      {/* Contact Button Center */}
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" sx={{ bgcolor: "#0087c9", color: "#fff", fontWeight: 700, px: 4, py: 1.2, borderRadius: "25px", textTransform: "none", fontSize: "15px", "&:hover": { bgcolor: "#006cff" } }}>
          Contact Us →
        </Button>
      </Box>
    </Box>
  );
};

export default MobileITService;
