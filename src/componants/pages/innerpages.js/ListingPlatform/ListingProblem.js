import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import SpeedIcon from '@mui/icons-material/Speed';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import img from "../../../../assets/the-problem1.png"
const GraphicBox = ({ icon: Icon, label, position, delay, iconColor = "#ef4444", alertIcon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, x: -20 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ position: 'absolute', ...position, zIndex: 2 }}
  >
    <Paper
      elevation={0}
      sx={{
        px: 3,
        py: 2,
        borderRadius: "12px",
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        border: "1px solid rgba(255,255,255,0.1)",
        minWidth: "150px"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, position: "relative" }}>
        {/* Search bar mock for 'Zero control' or just the icon */}
        {label === "Zero control" ? (
          <Box sx={{ width: 80, height: 24, bgcolor: "#f1f5f9", borderRadius: "12px", border: "1px solid #e2e8f0" }} />
        ) : null}

        <Icon sx={{ color: iconColor, fontSize: 28 }} />

        {/* Floating alert indicator */}
        {alertIcon && (
          <Box sx={{ position: "absolute", top: -10, right: -15, color: "#ef4444" }}>
            {alertIcon}
          </Box>
        )}
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px" }}>
        {label}
      </Typography>
    </Paper>
  </motion.div>
);

const ListingProblem = () => {
  return (
    <Box sx={{ bgcolor: "#242A38", py: 10, position: "relative", overflow: "hidden" }}> {/* Dark navy/grey from mock */}
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">

          {/* Left Graphic Side */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", height: "400px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

              {/* Background abstract shape */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', backgroundColor: '#ef4444', filter: 'blur(60px)', zIndex: 0 }}
              />

              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '20px' }} />

            </Box>
          </Grid>

          {/* Right Text Side */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "32px", md: "46px" }, mb: 2 }}>
                The Hidden Problems Behind Most Top Listing Sites
              </Typography>

              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", mb: 5, lineHeight: 1.6, maxWidth: "500px" }}>
                Many top listing sites look good on the surface but fail where it matters—performance, scalability, and revenue generation.
              </Typography>

              <Box component="ul" sx={{
                p: 0, m: 0, listStyle: "none", mb: 4,
                "& li": {
                  position: "relative",
                  paddingLeft: "30px",
                  marginBottom: "20px",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: 500,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "8px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#ef4444" // Red bullet
                  }
                }
              }}>
                <li>Limited control with plugin-based systems</li>
                <li>Spam and duplicate listings reduce trust</li>
                <li>Poor mobile experience affects user engagement</li>
                <li>Manual monetization with no automation</li>
                <li>Lack of analytics and performance insights</li>
              </Box>

              <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#ef4444",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "15px",
                    px: { xs: 4, md: 5 },
                    py: 1.5,
                    borderRadius: "8px",
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(239, 68, 68, 0.3)",
                    "&:hover": {
                      bgcolor: "#dc2626",
                      boxShadow: "0 6px 20px rgba(239, 68, 68, 0.4)",
                    },
                  }}
                >
                  Get Started
                </Button>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default ListingProblem;
