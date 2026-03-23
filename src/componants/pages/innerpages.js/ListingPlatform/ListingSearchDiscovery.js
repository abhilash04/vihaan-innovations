import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import LayersIcon from '@mui/icons-material/Layers';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Mock UI for the Search & Maps feature
const FilterDropdownMock = ({ label }) => (
  <Box sx={{
    display: "flex", justifyContent: "space-between", alignItems: "center",
    p: 1.5, mb: 1, border: "1px solid #e2e8f0", borderRadius: "6px",
    bgcolor: "#ffffff"
  }}>
    <Typography sx={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>{label}</Typography>
    <KeyboardArrowDownIcon sx={{ fontSize: 16, color: "#94a3b8" }} />
  </Box>
);

const ListingSearchDiscovery = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: 8, overflow: "hidden" }}>

      {/* Top Header section that appears above the split */}
      <Container maxWidth="lg" sx={{ mb: 8, textAlign: "center" }}>
        <Typography sx={{ color: "#2563eb", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: 1, mb: 1 }}>
          Search & Discovery
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
          Advanced Search & Discovery for Business Listing Website India
        </Typography>
        <Typography sx={{ color: "#666", fontSize: "16px", mb: 1, maxWidth: "700px", margin: "0 auto" }}>
          Deliver a seamless search experience for every business listing website India with intelligent autocomplete, powerful filters, and location-based discovery that helps users find exactly what they need faster.
        </Typography>
      </Container>


      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">

          {/* Left Text Features */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "24px", mb: 2 }}>
                Search-Filtering Engine
              </Typography>

              <Typography sx={{ color: "#666", fontSize: "15px", mb: 4, lineHeight: 1.6 }}>
                The backbone of every business listing website India is a high-performance search engine designed for speed, accuracy, and personalized discovery.
              </Typography>

              <Box component="ul" sx={{
                pl: 0, m: 0, listStyle: "none",
                '& li': {
                  position: "relative",
                  pl: "24px",
                  mb: 2.5,
                  color: "#444",
                  fontSize: "15px",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "8px",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    bgcolor: "#3b82f6" // Blue bullet for listing mock
                  }
                }
              }}>
                <li><strong>Smart Autocomplete</strong><br />Instant suggestions with keyword predictions and category-based results.</li>
                <li><strong>Saved Searches & Suggestions</strong><br />Users can save searches and get personalized recommendations.</li>
                <li><strong>Advanced Filtering System</strong><br />Refine results using multiple dynamic filters for better discovery.</li>
                <li><strong>Monetization-Ready Search</strong><br />Promote featured listings within search results for higher visibility.</li>
                <li><strong>Map-Based Discovery</strong><br />Interactive map view for location-based listing exploration.</li>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Mockup Representation */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.05)",
                  bgcolor: "#f8fafc"
                }}
              >
                {/* Browser Top Bar */}
                <Box sx={{ bgcolor: "#f1f5f9", p: 1.5, display: "flex", alignItems: "center", borderBottom: "1px solid #e2e8f0" }}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#ef4444" }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#f59e0b" }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#22c55e" }} />
                  </Box>
                  <Box sx={{ mx: "auto", width: "50%", height: 24, bgcolor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0" }} />
                </Box>

                {/* Browser Content Split: Left Filters, Right Map */}
                <Box sx={{ display: "flex", height: "400px" }}>

                  {/* Left Filters Box */}
                  <Box sx={{ width: "35%", p: 3, borderRight: "1px solid #e2e8f0", bgcolor: "#ffffff" }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "14px", color: "#1a1a1a", mb: 3 }}>
                      Filters
                    </Typography>

                    <FilterDropdownMock label="Location" />
                    <FilterDropdownMock label="Autocomplete" />
                    <FilterDropdownMock label="Category" />
                    <FilterDropdownMock label="Price" />
                    <FilterDropdownMock label="Distance" />
                  </Box>

                  {/* Right Map Box */}
                  <Box sx={{ width: "65%", position: "relative", bgcolor: "#e2e8f0", overflow: "hidden" }}>
                    {/* SVG Map Roads Simulation */}
                    <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
                      <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 100 Q 200 150 400 50" stroke="#cbd5e1" strokeWidth="6" fill="none" />
                        <path d="M50 0 L 150 400" stroke="#cbd5e1" strokeWidth="8" fill="none" />
                        <path d="M250 0 L 200 400" stroke="#ffffff" strokeWidth="12" fill="none" />
                        <path d="M0 300 Q 200 250 400 350" stroke="#f1f5f9" strokeWidth="10" fill="none" />
                      </svg>
                    </Box>

                    {/* Overlay List UI Mock */}
                    <Box sx={{ position: "absolute", top: 20, right: 20, width: "180px", zIndex: 2 }}>
                      {[1, 2, 3].map((item) => (
                        <Paper key={item} elevation={2} sx={{ p: 1.5, mb: 1.5, borderRadius: "8px" }}>
                          <Box sx={{ width: "100%", height: "40px", bgcolor: "#f1f5f9", borderRadius: "4px", mb: 1 }} />
                          <Box sx={{ width: "60%", height: "10px", bgcolor: "#e2e8f0", borderRadius: "5px", mb: 0.5 }} />
                          <Box sx={{ width: "40%", height: "10px", bgcolor: "#e2e8f0", borderRadius: "5px" }} />
                        </Paper>
                      ))}
                    </Box>

                    {/* Animated Map Pins */}
                    <motion.div style={{ position: "absolute", top: "30%", left: "40%", zIndex: 3, color: "#3b82f6" }} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                      <LocationOnIcon sx={{ fontSize: 36, filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.2))' }} />
                    </motion.div>

                    <motion.div style={{ position: "absolute", top: "60%", left: "20%", zIndex: 3, color: "#ef4444" }} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}>
                      <LocationOnIcon sx={{ fontSize: 32, filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.2))' }} />
                    </motion.div>

                  </Box>

                </Box>
              </Paper>
            </motion.div>
          </Grid>

        </Grid>

        {/* Footer CTA */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography sx={{ color: "#1a1a1a", fontWeight: 700, fontSize: "18px", mb: 2 }}>
            Build a Smart Search Experience for Your Business Listing Website India
          </Typography>
          <Box
            component="button"
            sx={{
              bgcolor: "#2563eb",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "15px",
              px: { xs: 4, md: 5 },
              py: 1.5,
              borderRadius: "8px",
              textTransform: "none",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
              "&:hover": {
                bgcolor: "#1d4ed8",
                boxShadow: "0 6px 20px rgba(37, 99, 235, 0.4)",
              },
            }}
          >
            Request Demo
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ListingSearchDiscovery;
