import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "20px",
        bgcolor: "#ffffff",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "130px",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)"
        }
      }}
    >
      <Box sx={{ color: "#00b4d8", mb: 1 }}>
        <Icon sx={{ fontSize: 24 }} />
      </Box>
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 0.5, fontSize: "36px" }}>
          {value}
        </Typography>
        <Typography sx={{ color: "#666", fontSize: "12px", fontWeight: 600, lineHeight: 1.2 }}>
          {label}
        </Typography>
      </Box>
    </Paper>
  </motion.div>
);

const RealEstateBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        bgcolor: "#0B1120", // Dark navy background
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        pt: { xs: 12, md: 0 },
        pb: { xs: 8, md: 0 }
      }}
    >
      {/* Background Teal Wave SVG */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <path d="M500,0 C800,300 1100,500 1440,400 L1440,800 L0,800 L0,200 C200,300 300,100 500,0 Z" fill="url(#paint0_linear)" opacity="0.15" />
          <path d="M700,0 C1000,400 1200,600 1440,500 L1440,800 L0,800 C200,700 400,600 700,0 Z" fill="url(#paint1_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B4D8" />
              <stop offset="1" stopColor="#90E0EF" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="1440" y1="100" x2="720" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B4D8" stopOpacity="0.8" />
              <stop offset="1" stopColor="#E0FBFC" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </Box>

      {/* Down Arrow pointing to the next section */}
      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              backdropFilter: "blur(10px)",
              bgcolor: "rgba(255,255,255,0.2)",
              borderRadius: "50%",
              color: "#fff",
              cursor: "pointer"
            }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <ExpandMoreIcon fontSize="large" />
          </Box>
        </motion.div>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Content Area */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography sx={{ color: "#00B4D8", fontWeight: 600, mb: 2, fontSize: "16px", letterSpacing: "0.5px" }}>
                Real Estate Technology
              </Typography>
              
              <Typography variant="h1" sx={{ color: "#ffffff", fontWeight: 800, fontSize: { xs: "40px", md: "56px" }, lineHeight: 1.1, mb: 3 }}>
                Digital platforms that close deals faster
              </Typography>
              
              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", lineHeight: 1.6, mb: 5, maxWidth: "500px" }}>
                We build custom CRMs, property portals, lead management systems, and agent dashboards — purpose-built for real estate businesses that want to scale.
              </Typography>
              
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(90deg, #00F2FE 0%, #4FACFE 100%)",
                    color: "#0a192f",
                    fontWeight: 700,
                    fontSize: "16px",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    textTransform: "none",
                    boxShadow: "0 10px 20px rgba(0, 242, 254, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #4FACFE 0%, #00F2FE 100%)",
                      boxShadow: "0 15px 25px rgba(0, 242, 254, 0.4)",
                    }
                  }}
                >
                  See a Live Demo
                </Button>
                
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "16px",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#ffffff",
                      bgcolor: "rgba(255,255,255,0.05)",
                    }
                  }}
                >
                  Explore Features
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Stats Grid Area */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", maxWidth: "450px", ml: "auto", mr: { xs: "auto", md: 0 } }}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <StatCard 
                    icon={TrendingUpIcon} 
                    value="3x" 
                    label={<>Lead<br/>Conversion Rate</>} 
                    delay={0.2} 
                  />
                </Grid>
                <Grid item xs={6}>
                  <StatCard 
                    icon={InsertChartOutlinedIcon} 
                    value="60%" 
                    label={<>Less<br/>Manual Work</>} 
                    delay={0.4} 
                  />
                </Grid>
                <Grid item xs={6}>
                  <StatCard 
                    icon={CalendarMonthOutlinedIcon} 
                    value="90" 
                    label={<>Days to Go<br/>Live</>} 
                    delay={0.6} 
                  />
                </Grid>
                <Grid item xs={6}>
                  <StatCard 
                    icon={AccessTimeOutlinedIcon} 
                    value="24/7" 
                    label={<>Self-serve<br/>Portal</>} 
                    delay={0.8} 
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default RealEstateBanner;
