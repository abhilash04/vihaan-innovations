import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import phone1 from "../../../../assets/foodiv_web_img.png";

const benefits = [
  "No commission",
  "Your brand",
  "Direct customer connection",
  "Full control of orders"
];

const ThirdPartyApps = () => {
  return (
    <Box sx={{ backgroundColor: "#1e1e2d", py: { xs: 4, md: 6 }, overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* Left Section: Text Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography sx={{
                  color: "#ff6f1e",
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  mb: 1
                }}>
                  Stop Paying Commission to Food Aggregators
                </Typography>
                <Typography variant="h2" sx={{
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: { xs: "32px", md: "46px" },
                  lineHeight: 1.2,
                  mb: 3
                }}>
                  Launch Your Own Food Delivery App & Keep Every Profit
                </Typography>
                <Typography sx={{ color: "#b0b0c0", fontSize: "18px", mb: 4, lineHeight: 1.6 }}>
                  With Vihaan Innovations you can build a commission-free online ordering system and serve customers directly. 100% commission-free business. Keep your profits with you.
                </Typography>
              </Box>

              {/* Benefits List */}
              <Grid container spacing={2} sx={{ mb: 5 }}>
                {benefits.map((benefit, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                      <Typography sx={{ color: '#e0e0e0', fontWeight: 500, fontSize: '16px' }}>
                        {benefit}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff6f1e",
                  color: "#fff",
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  fontSize: "16px",
                  fontWeight: "700",
                  textTransform: "none",
                  boxShadow: "0 10px 25px rgba(255, 111, 30, 0.4)",
                  "&:hover": {
                    backgroundColor: "#e65a10",
                    transform: "translateY(-2px)",
                    boxShadow: "0 15px 35px rgba(255, 111, 30, 0.5)",
                  },
                  transition: "all 0.3s ease"
                }}
              >
                Get Free Demo
              </Button>
            </motion.div>
          </Grid>

          {/* Right Section: Graphics */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", height: { xs: "350px", md: "550px" }, display: "flex", justifyContent: "center", alignItems: "center" }}>

              {/* Background Glow */}
              <Box sx={{
                position: 'absolute',
                width: '70%', height: '70%',
                bgcolor: 'rgba(255, 111, 30, 0.2)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                zIndex: 0
              }} />

              {/* Central Image (Mockup) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ zIndex: 2, position: 'relative', width: '100%', height: '100%' }}
              >
                <Box
                  component="img"
                  src={phone1}
                  alt="System Mockup"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))",
                  }}
                />
              </motion.div>

              {/* Animated Money Icons */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 100, scale: 0 }}
                  whileInView={{
                    opacity: [0, 1, 0],
                    y: [-20, -150],
                    scale: [0.5, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2.5 + Math.random() * 1.5,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "linear"
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: `${20 + (i * 15)}%`,
                    zIndex: 3,
                    color: '#4caf50',
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: '50%',
                    padding: '8px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                  }}
                >
                  <AttachMoneyIcon sx={{ fontSize: 30 }} />
                </motion.div>
              ))}

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default ThirdPartyApps;
