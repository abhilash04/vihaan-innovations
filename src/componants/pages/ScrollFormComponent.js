import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  IconButton,
  Divider,
  Paper,
  Container,
} from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SecurityIcon from "@mui/icons-material/Security";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import CodeIcon from '@mui/icons-material/Code';
import DnsIcon from '@mui/icons-material/Dns';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// ----------------------------------------------------------------------
// Keyframes & Styled Components
// ----------------------------------------------------------------------

const pulse = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(52, 211, 153, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const rotateClockwise = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const IconContainer = styled(Box)(({ color }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "12px",
  backgroundColor: `${color}15`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: color,
  transition: "all 0.3s ease",
}));

// ----------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------

const scrollItems = [
  {
    number: "01",
    line1: "Intelligent IT Solutions",
    line2: "That Drive Your",
    line3: "Business Forward",
    subtitle: "We provide intelligent, reliable, and cutting-edge IT solutions so your business can grow with confidence — from web platforms to enterprise systems.",
    services: [
      { label: "Professional Services", icon: BusinessCenterIcon, color: "#34D399" },
      { label: "Managed IT Solution", icon: SettingsIcon, color: "#EC4899" },
      { label: "Cyber & IT Security", icon: SecurityIcon, color: "#6366F1" },
    ],
  },
  {
    number: "02",
    line1: "Turning Big Ideas",
    line2: "Into Smart Digital",
    line3: "Solutions",
    subtitle: "We build intuitive, scalable custom web and mobile solutions to bring your vision into the modern market efficiently.",
    services: [
      { label: "Web Development", icon: CodeIcon, color: "#34D399" },
      { label: "CRM Solutions", icon: DnsIcon, color: "#EC4899" },
      { label: "Managed Support", icon: SettingsIcon, color: "#6366F1" },
    ],
  },
  {
    number: "03",
    line1: "Building Strong",
    line2: "Technology For A",
    line3: "Changing World",
    subtitle: "Secure and stable architectures for hosting enterprise logic ensuring maximum up-time and high security overlays.",
    services: [
      { label: "Cloud Services", icon: DnsIcon, color: "#34D399" },
      { label: "Enterprise Security", icon: SecurityIcon, color: "#EC4899" },
      { label: "DevOps Setup", icon: SettingsIcon, color: "#6366F1" },
    ],
  },
];

// ----------------------------------------------------------------------
// Helper Components
// ----------------------------------------------------------------------

const Counter = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/[^0-9]/g, ""));
    if (isNaN(end)) return;

    let totalMiliseconds = duration;
    let incrementTime = Math.max(totalMiliseconds / end, 20);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  const suffix = target.replace(/[0-9]/g, "");
  return <span>{count}{suffix}</span>;
};

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------

const ScrollFormComponent = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [pauseScroll, setPauseScroll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseScroll) {
        setScrollIndex((prev) => (prev + 1) % scrollItems.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [pauseScroll]);

  const handlePrev = () => {
    setScrollIndex((prev) => (prev - 1 + scrollItems.length) % scrollItems.length);
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev + 1) % scrollItems.length);
  };

  const item = scrollItems[scrollIndex];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #fff 100%)",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 6 },
      }}
    >
      {/* Dot Grid Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(rgba(0,108,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 1,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">

          {/* ----------------- Left Column ----------------- */}
          <Grid item xs={12} md={6.5}>
            <AnimatePresence mode="wait">
              <motion.div
                key={scrollIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setPauseScroll(true)}
                onMouseLeave={() => setPauseScroll(false)}
              >
                {/* Announcement Badge */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: "rgba(0, 108, 255, 0.08)",
                    px: 2,
                    py: 1,
                    borderRadius: "50px",
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      bgcolor: "#34D399",
                      borderRadius: "50%",
                      animation: `${pulse} 2s infinite`,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#006cff",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Now Serving 150+ Businesses Across India 🚀
                  </Typography>
                </Box>

                {/* Headline */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "32px", md: "64px" },
                      lineHeight: 1.05,
                      fontFamily: "Fira Sans",
                      color: "#0d1b3e",
                      mb: 0.5,
                    }}
                  >
                    {item.line1}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "32px", md: "64px" },
                      lineHeight: 1.05,
                      fontFamily: "Fira Sans",
                      color: "#0d1b3e",
                      mb: 0.5,
                    }}
                  >
                    {item.line2}
                  </Typography>
                  <Box sx={{ position: "relative", display: "inline-block" }}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: "32px", md: "64px" },
                        lineHeight: 1.05,
                        fontFamily: "Fira Sans",
                        color: "#006cff",
                        textShadow: "0 0 20px rgba(0,108,255,0.15)",
                      }}
                    >
                      {item.line3}
                    </Typography>
                    {/* Animated Underline */}
                    <Box
                      component={motion.div}
                      initial={{ width: 0 }}
                      animate={{ width: "200px" }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      sx={{
                        height: "3px",
                        bgcolor: "#006cff",
                        borderRadius: "2px",
                        mt: 1,
                      }}
                    />
                  </Box>
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    lineHeight: 1.8,
                    color: "rgb(106, 107, 126)",
                    maxWidth: "480px",
                    mb: 4,
                  }}
                >
                  {item.subtitle}
                </Typography>

                {/* CTA Buttons */}
                <Box sx={{ display: "flex", gap: 2, mb: 5, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#006cff",
                      color: "#fff",
                      fontWeight: 700,
                      px: 4,
                      py: 1.8,
                      borderRadius: "10px",
                      textTransform: "none",
                      fontSize: "15px",
                      boxShadow: "0 10px 25px rgba(0, 108, 255, 0.25)",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                        transition: "all 0.6s ease",
                      },
                      "&:hover": {
                        bgcolor: "#0052cc",
                        transform: "translateY(-2px)",
                        boxShadow: "0 15px 30px rgba(0, 108, 255, 0.35)",
                      },
                      "&:hover::after": {
                        left: "100%",
                      },
                    }}
                  >
                    Get Free Consultation
                    <ArrowForwardIosIcon
                      sx={{
                        fontSize: 14,
                        ml: 1,
                        transition: "transform 0.2s",
                        "&:hover": { transform: "translateX(4px)" },
                      }}
                    />
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#006cff",
                      color: "#006cff",
                      fontWeight: 700,
                      px: 4,
                      py: 1.8,
                      borderRadius: "10px",
                      textTransform: "none",
                      fontSize: "15px",
                      borderWidth: "2px",
                      "&:hover": {
                        borderWidth: "2px",
                        bgcolor: "rgba(0, 108, 255, 0.05)",
                      },
                    }}
                  >
                    View Our Services
                  </Button>
                </Box>

                {/* Service Capability Pills */}
                <Grid container spacing={2} sx={{ mb: 5 }}>
                  {item.services.map((service, index) => {
                    const SvgIcon = service.icon;
                    return (
                      <Grid item xs={12} sm={4} key={index}>
                        <Paper
                          elevation={0}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            p: 1.5,
                            borderRadius: "14px",
                            bgcolor: "#ffffff",
                            border: "1px solid rgba(0,0,0,0.04)",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                            transition: "all 0.3s",
                            "&:hover": {
                              transform: "translateY(-3px)",
                              boxShadow: `0 10px 25px ${service.color}15`,
                              borderColor: `${service.color}30`,
                            },
                          }}
                        >
                          <IconContainer color={service.color}>
                            <SvgIcon sx={{ fontSize: 20 }} />
                          </IconContainer>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#0d1b3e",
                            }}
                          >
                            {service.label}
                          </Typography>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>

                {/* Navigation Dots & Arrows */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  {/* Dots */}
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    {scrollItems.map((_, idx) => (
                      <Box
                        key={idx}
                        onClick={() => setScrollIndex(idx)}
                        sx={{
                          width: scrollIndex === idx ? 24 : 8,
                          height: 8,
                          bgcolor: scrollIndex === idx ? "#006cff" : "#d1d5db",
                          borderRadius: "10px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      />
                    ))}
                  </Box>

                  {/* Arrow Buttons */}
                  <Box sx={{ display: "flex", gap: 1.5 }}>
                    <IconButton
                      onClick={handlePrev}
                      sx={{
                        border: "2px solid #006cff",
                        color: "#006cff",
                        p: 1.2,
                        "&:hover": { bgcolor: "rgba(0,108,255,0.05)" },
                      }}
                    >
                      <ArrowBackIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                    <IconButton
                      onClick={handleNext}
                      sx={{
                        border: "2px solid #006cff",
                        color: "#006cff",
                        p: 1.2,
                        "&:hover": { bgcolor: "rgba(0,108,255,0.05)" },
                      }}
                    >
                      <ArrowForwardIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>

          {/* ----------------- Right Column (Animated Visual) ----------------- */}
          <Grid
            item
            xs={12}
            md={5.5}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "auto", md: 500 },
            }}
          >
            {/* Background Orbits */}
            <Box
              sx={{
                position: "absolute",
                width: 440,
                height: 440,
                borderRadius: "50%",
                border: "1.5px solid rgba(0, 108, 255, 0.08)",
                zIndex: 0,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: 520,
                height: 520,
                borderRadius: "50%",
                border: "1.5px dashed rgba(0, 108, 255, 0.05)",
                animation: `${rotateClockwise} 40s linear infinite`,
                zIndex: 0,
              }}
            />

            {/* Glowing Backdrop Mesh */}
            <Box
              sx={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0, 108, 255, 0.08) 0%, transparent 70%)",
                filter: "blur(60px)",
                zIndex: 0,
              }}
            />

            {/* Drifting Background Tech Icons */}
            <Box
              component={motion.div}
              animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              sx={{ position: "absolute", top: "15%", left: "10%", color: "#006cff", opacity: 0.07, zIndex: 0 }}
            >
              <CodeIcon sx={{ fontSize: 32 }} />
            </Box>
            <Box
              component={motion.div}
              animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              sx={{ position: "absolute", top: "20%", right: "10%", color: "#006cff", opacity: 0.07, zIndex: 0 }}
            >
              <SettingsIcon sx={{ fontSize: 28 }} />
            </Box>
            <Box
              component={motion.div}
              animate={{ y: [0, -10, 0], x: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }}
              sx={{ position: "absolute", bottom: "15%", right: "15%", color: "#006cff", opacity: 0.07, zIndex: 0 }}
            >
              <SecurityIcon sx={{ fontSize: 30 }} />
            </Box>

            {/* Main Dashboard Card */}
            <Paper
              elevation={0}
              sx={{
                width: "420px",
                borderRadius: "20px",
                bgcolor: "#ffffff",
                boxShadow: "0 20px 50px rgba(0, 108, 255, 0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
                overflow: "hidden",
                animation: `${float} 6s ease-in-out infinite`,
                zIndex: 1,
              }}
            >
              {/* Top Menu Bar */}
              <Box
                sx={{
                  bgcolor: "#f8fbff",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <Box sx={{ display: "flex", gap: 0.8 }}>
                  <Box sx={{ width: 10, height: 10, bgcolor: "#EF4444", borderRadius: "50%" }} />
                  <Box sx={{ width: 10, height: 10, bgcolor: "#F59E0B", borderRadius: "50%" }} />
                  <Box sx={{ width: 10, height: 10, bgcolor: "#10B981", borderRadius: "50%" }} />
                </Box>
                <Typography sx={{ fontSize: "12px", color: "rgb(106, 107, 126)", fontWeight: 600 }}>
                  Vihaan Dashboard
                </Typography>
                <Box sx={{ width: 30 }} />
              </Box>

              {/* Dashboard Content */}
              <Box sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={7}>
                    <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#0d1b3e", mb: 2 }}>
                      Active Support Channels
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                      {["Web Platform", "Custom CRM", "Security Shield", "Databases"].map((label, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Box sx={{ width: 6, height: 6, bgcolor: i === 2 ? "#EF4444" : "#10B981", borderRadius: "50%" }} />
                          <Typography sx={{ fontSize: "12px", color: "#4b5563" }}>{label}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={5} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    {/* Ring Chart */}
                    <Box sx={{ position: "relative", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="80" height="80" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="34" fill="none" stroke="#e0e7ff" strokeWidth="6" />
                        <circle cx="40" cy="40" r="34" fill="none" stroke="#10B981" strokeWidth="6" strokeDasharray="213" strokeDashoffset="21" strokeLinecap="round" />
                      </svg>
                      <Box sx={{ position: "absolute", textAlign: "center" }}>
                        <Typography sx={{ fontWeight: 800, fontSize: "16px", color: "#10B981", lineHeight: 1 }}>
                          98%
                        </Typography>
                        <Typography sx={{ fontSize: "9px", color: "rgb(106, 107, 126)" }}>
                          Uptime
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2.5, opacity: 0.6 }} />

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Paper elevation={0} sx={{ flex: 1, p: 1.5, bgcolor: "#f0f7ff", borderRadius: "12px", textAlign: "center" }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "#006cff" }}>
                      150+
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "rgb(106, 107, 126)", fontWeight: 500 }}>
                      Live Clients
                    </Typography>
                  </Paper>
                  <Paper elevation={0} sx={{ flex: 1, p: 1.5, bgcolor: "#f0fdf4", borderRadius: "12px", textAlign: "center" }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "#10B981" }}>
                      50+
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "rgb(106, 107, 126)", fontWeight: 500 }}>
                      Projects
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </Paper>

            {/* Floating Orbits Notification Cards */}
            <Paper
              elevation={4}
              sx={{
                position: "absolute",
                top: { xs: 20, md: 40 },
                left: { xs: -20, md: 0 },
                p: 1.8,
                borderRadius: "14px",
                bgcolor: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                borderLeft: "4px solid #10B981",
                animation: `${float} 5s ease-in-out infinite`,
                animationDelay: "0.5s",
                zIndex: 2,
              }}
            >
              <Box sx={{ width: 8, height: 8, bgcolor: "#10B981", borderRadius: "50%" }} />
              <Typography sx={{ fontWeight: 700, fontSize: "13px", color: "#0d1b3e" }}>
                New Project Started 🚀
              </Typography>
            </Paper>

            <Paper
              elevation={4}
              sx={{
                position: "absolute",
                top: { xs: "auto", md: 160 },
                right: { xs: -20, md: -10 },
                bottom: { xs: 40, md: "auto" },
                p: 1.8,
                borderRadius: "14px",
                bgcolor: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                borderLeft: "4px solid #006cff",
                animation: `${float} 5s ease-in-out infinite`,
                animationDelay: "1.8s",
                zIndex: 2,
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: "13px", color: "#0d1b3e" }}>
                Client Satisfaction 98% ⭐
              </Typography>
            </Paper>

            <Paper
              elevation={4}
              sx={{
                position: "absolute",
                bottom: { xs: 20, md: 60 },
                left: { xs: -20, md: 20 },
                p: 1.8,
                borderRadius: "14px",
                bgcolor: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                borderLeft: "4px solid #6366F1",
                animation: `${float} 5s ease-in-out infinite`,
                animationDelay: "3s",
                zIndex: 2,
              }}
            >
              <Box sx={{ width: 8, height: 8, bgcolor: "#EF4444", borderRadius: "50%", animation: `${pulse} 2s infinite` }} />
              <Typography sx={{ fontWeight: 700, fontSize: "13px", color: "#0d1b3e" }}>
                24/7 Support Active 🛡
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* ----------------- Bottom Trust Bar ----------------- */}
        <Box sx={{ mt: { xs: 2.5, md: 5 }, pt: 4, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  color: "rgb(106, 107, 126)",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Trusted by growing businesses and enterprises worldwide
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", justifyContent: { xs: "space-around", md: "space-between" }, alignItems: "center", flexWrap: "wrap", gap: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#006cff", mb: 0.5 }}>
                    <Counter target="150+" />
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "rgb(106, 107, 126)" }}>
                    Deployed Projects
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" } }} />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#006cff", mb: 0.5 }}>
                    <Counter target="50+" />
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "rgb(106, 107, 126)" }}>
                    Platforms Maintained
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" } }} />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#006cff", mb: 0.5 }}>
                    <Counter target="20+" />
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "rgb(106, 107, 126)" }}>
                    Countries Reached
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default ScrollFormComponent;
