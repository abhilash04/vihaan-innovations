import React from "react";
import { Box, Typography, Button, Container, Grid, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { styled, keyframes } from "@mui/system";
import HeaderSec from "../common/HeaderSec";
import Footer from "../common/Footer";
import robot404 from "../../assets/404-robot.png";
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';

// Keyframes for animations
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const DecorativeIcon = styled(Box)(({ top, left, right, bottom, delay }) => ({
  position: "absolute",
  top,
  left,
  right,
  bottom,
  color: "#0b70e1",
  opacity: 0.1,
  fontSize: "2rem",
  animation: `${float} 8s ease-in-out infinite`,
  animationDelay: delay || "0s",
  zIndex: 0,
}));

const NotFound = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e6f1fb 0%, #b5d4f4 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      <HeaderSec />

      {/* Background Patterns */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(${isDark ? "rgba(255,140,0,0.05)" : "rgba(255,140,0,0.08)"} 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
          zIndex: 0,
        }}
      />

      <DecorativeIcon top="20%" left="10%" delay="0s"><CodeIcon sx={{ fontSize: "3rem" }} /></DecorativeIcon>
      <DecorativeIcon top="60%" right="5%" delay="2s"><SecurityIcon sx={{ fontSize: "4rem" }} /></DecorativeIcon>
      <DecorativeIcon bottom="20%" left="15%" delay="4s"><SettingsIcon sx={{ fontSize: "2.5rem" }} /></DecorativeIcon>

      <Container maxWidth="lg" sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        py: 8,
        mt: { xs: 8, md: 12 },
        position: "relative",
        zIndex: 1
      }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "6rem", md: "10rem" },
                  fontWeight: 900,
                  background: "linear-gradient(45deg, #0b70e1 30%, rgba(133, 198, 255, 1) 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 0.9,
                  mb: 1,
                  fontFamily: "'Fira Sans', sans-serif",
                }}
              >
                404
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: isDark ? "#fff" : "#2d2d2d",
                  fontSize: { xs: "1.8rem", md: "2.8rem" },
                  letterSpacing: "-0.5px"
                }}
              >
                Page Not Found
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 5,
                  fontSize: "1.2rem",
                  color: isDark ? "#bbb" : "#555",
                  maxWidth: "500px",
                  lineHeight: 1.7,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                The page you're looking for seems to have vanished into the digital void.
                Don't worry, even the best explorers get lost sometimes!
              </Typography>

              <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/")}
                  sx={{
                    background: "linear-gradient(90deg, #187aeaff 0%, #88c0ffff 100%)",
                    color: "#fff",
                    px: 6,
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    borderRadius: "50px",
                    textTransform: "none",
                    boxShadow: "0 10px 30px rgba(1, 73, 140, 0.4)",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 15px 40px rgba(26, 158, 234, 0.6)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg, transparent, rgba(119, 161, 189, 0.3), transparent)",
                      transition: "all 0.6s ease",
                    },
                    "&:hover::after": {
                      left: "100%",
                    },
                    transition: "all 0.4s ease",
                  }}
                >
                  Return to Home
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              style={{ position: "relative", zIndex: 2 }}
            >
              {/* Glowing Halo */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                  background: "radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: -1,
                  animation: `${pulse} 4s infinite`,
                }}
              />

              <Box
                component="img"
                src={robot404}
                alt="404 Error - Lost Robot"
                sx={{
                  width: "100%",
                  maxWidth: { xs: "350px", md: "520px" },
                  height: "auto",
                  filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.3))",
                  animation: `${float} 6s ease-in-out infinite`,
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default NotFound;
