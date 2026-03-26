import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const DashboardMock = ({ theme, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <Paper elevation={0} sx={{ border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}>
      {/* Browser bar */}
      <Box sx={{ bgcolor: theme === 'light' ? "#f1f5f9" : "#1e293b", p: 1.5, display: "flex", alignItems: "center", gap: 1, borderBottom: "1px solid #e2e8f0" }}>
        <Box sx={{ display: "flex", gap: 0.7 }}>
          <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#ef4444" }} />
          <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#f59e0b" }} />
          <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#22c55e" }} />
        </Box>
        <Box sx={{ mx: "auto", width: "40%", height: 18, bgcolor: theme === 'light' ? "#ffffff" : "#334155", borderRadius: "10px" }} />
      </Box>

      {/* Dashboard content layout */}
      <Box sx={{ display: "flex", height: "220px", bgcolor: theme === 'light' ? "#ffffff" : "#0f172a" }}>

        {/* Left nav */}
        <Box sx={{ width: "25%", bgcolor: theme === 'light' ? "#f8fafc" : "#1e293b", p: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
          {[80, 60, 70, 55, 65].map((w, i) => (
            <Box key={i} sx={{ width: `${w}%`, height: "10px", bgcolor: theme === 'light' ? "#e2e8f0" : "#334155", borderRadius: "5px" }} />
          ))}
        </Box>

        {/* Main area */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          {/* Top stats */}
          <Grid container spacing={1} sx={{ mb: 2 }}>
            {["#3b82f6", "#22c55e", "#a855f7", "#f59e0b"].map((color, i) => (
              <Grid item xs={3} key={i}>
                <Box sx={{ bgcolor: theme === 'light' ? "#f8fafc" : "#1e293b", border: `1px solid ${theme === 'light' ? "#e2e8f0" : "#334155"}`, borderRadius: "8px", p: 1 }}>
                  <Box sx={{ width: "60%", height: "8px", bgcolor: color, borderRadius: "4px", mb: 0.5, opacity: 0.7 }} />
                  <Box sx={{ width: "80%", height: "14px", bgcolor: color, borderRadius: "4px", opacity: 0.9 }} />
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Table rows */}
          {[1, 2, 3, 4].map((i) => (
            <Box key={i} sx={{ display: "flex", gap: 1, mb: 1 }}>
              <Box sx={{ width: "35%", height: "10px", bgcolor: theme === 'light' ? "#e2e8f0" : "#334155", borderRadius: "5px" }} />
              <Box sx={{ width: "20%", height: "10px", bgcolor: theme === 'light' ? "#e2e8f0" : "#1e293b", borderRadius: "5px" }} />
              <Box sx={{ width: "25%", height: "10px", bgcolor: theme === 'light' ? "#f1f5f9" : "#0f172a", borderRadius: "5px" }} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Label below */}
      <Box sx={{ p: 2, textAlign: "center", bgcolor: theme === 'light' ? "#f8fafc" : "#1e293b" }}>
        <Typography sx={{ fontWeight: 700, color: theme === 'light' ? "#1a1a1a" : "#ffffff", fontSize: "13px" }}>
          {title}
        </Typography>
      </Box>
    </Paper>
  </motion.div>
);

const ListingMultiVertical = () => {
  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
      <Container maxWidth="lg">

        <Grid container spacing={8} alignItems="center">

          {/* Left Text Content */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography sx={{ color: "#2563eb", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: 1, mb: 1 }}>
                Multi-vertical Capability
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
                Versatile Solutions for Every Business Listing Website India
              </Typography>
              <Typography sx={{ color: "#666", fontSize: "16px", mb: 4, lineHeight: 1.6 }}>
                Our platform supports multiple verticals-from job portals to real estate listings-enabling you to create tailored business listing website India solutions for diverse industries and use cases.
              </Typography>

              <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "16px", mb: 2 }}>INDUSTRIES WE SERVE</Typography>

              <Box component="ul" sx={{
                pl: 0, m: 0, listStyle: "none",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: 2,
                '& li': {
                  position: "relative",
                  pl: "20px",
                  mb: 2,
                  color: "#444",
                  fontSize: "14px",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "6px",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    bgcolor: "#a855f7"
                  }
                }
              }}>
                <li>Real Estate Portals</li>
                <li>B2B & B2C Directories</li>
                <li>Job & Recruitment Boards</li>
                <li>Food Delivery & Services</li>
                <li>Automotive & Dealership</li>
                <li>Events & Entertainment</li>
                <li>Healthcare & Booking</li>
                <li>Travel & Tourism</li>
              </Box>

              <Box sx={{ mt: 5 }}>
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
                  View Industry Solutions
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Mockups */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <DashboardMock theme="light" title="Job Portal Dashboard" delay={0.1} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DashboardMock theme="dark" title="Real Estate Platform" delay={0.3} />
              </Grid>
            </Grid>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
};

export default ListingMultiVertical;
