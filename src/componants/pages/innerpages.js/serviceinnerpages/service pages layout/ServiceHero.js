import React, { useState } from "react";
import { Box, Typography, Button, Grid, Container, Paper, TextField, MenuItem } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { motion } from "framer-motion";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DevicesIcon from "@mui/icons-material/Devices";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LayersIcon from "@mui/icons-material/Layers";
import PopUps from "../../../../common/PopUps";


const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const rotateClockwise = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
`;

// Background container supporting exact image gradient
const HeroWrapper = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #fce7f3 0%, #e0f2fe 40%, #ccfbf1 100%)", // Pinkish to blue-teal
  minHeight: "95vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  paddingTop: "60px",
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(90deg, #5138c2 0%, #299bfc 100%)",
  color: "#ffffff",
  fontWeight: 700,
  textTransform: "none",
  borderRadius: "30px",
  padding: "12px 32px",
  fontSize: "14px",
  boxShadow: "0 8px 24px rgba(81, 56, 194, 0.25)",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
    animation: `${shimmer} 4s infinite`,
  },
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 32px rgba(81, 56, 194, 0.4)",
    opacity: 0.95,
  },
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInput-underline:before": { borderBottomColor: "rgba(0,0,0,0.08)" },
  "& .MuiInput-underline:after": { borderBottomColor: "#5138c2" },
  "& .MuiInputLabel-root": { color: "#94a3b8", fontSize: "14px" },
  "& .MuiInputBase-input": { color: "#334155", fontSize: "14px" },
}));

const listItems = [
  { icon: BusinessCenterIcon, text: "Client-Location Development" },
  { icon: PeopleOutlineIcon, text: "Reliable Support Team" },
  { icon: AccessTimeIcon, text: "On-Time Project Deliveries" },
  { icon: DevicesIcon, text: "Responsive for All Devices" },
  { icon: StarBorderIcon, text: "Premium Quality" },
  { icon: PsychologyOutlinedIcon, text: "Expert Development Team" },
];

const FloatingOrb = ({ size, color, delay, top, left, bottom, right }) => (
  <Box
    component={motion.div}
    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay }}
    sx={{ position: "absolute", width: size, height: size, borderRadius: "50%", background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, filter: "blur(40px)", top, left, bottom, right, opacity: 0.5, zIndex: 0 }}
  />
);

const ServiceHero = ({ data }) => {
  const {
    title = "Web Design And Development Services in Bangalore",
    subtitle = "Delivering Premium Websites at Affordable Price.",
    badgeText = "Grow Your Business Online!",
    buttonText = "Enquiry Now",
    features = listItems
  } = data || {};

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <HeroWrapper>
      {/* Background Orbs */}
      <FloatingOrb size="300px" color="rgba(219, 39, 119, 0.15)" top="-10%" left="5%" delay={0} />
      <FloatingOrb size="350px" color="rgba(6, 182, 212, 0.1)" bottom="10%" right="10%" delay={2} />
      <FloatingOrb size="200px" color="rgba(79, 70, 229, 0.1)" top="40%" left="40%" delay={4} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: 5 }}>
        <Grid container spacing={5} alignItems="center">

          {/* Left Column - Content */}
          <Grid item xs={12} md={6.5}>
            <Box component={motion.div} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "46px" }, fontFamily: "Urbanist, sans-serif", color: "#0a1628", lineHeight: 1.15, mb: 3 }}>
                {title}
              </Typography>

              <Typography component={motion.div} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} sx={{ color: "#3b4656ff", fontSize: "18px", fontWeight: 500, fontFamily: "Inter, sans-serif", mb: 4 }}>
                {subtitle}
              </Typography>

              {/* Grid List */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {features.map((item, index) => {
                  const SvgIcon = item.icon;
                  return (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box component={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.4 + index * 0.1 }} sx={{ display: "flex", alignItems: "center", gap: 1.2, transition: "transform 0.2s ease", "&:hover": { transform: "translateX(5px)", color: "#5138c2" } }}>
                        <SvgIcon sx={{ color: "#434e5fff", fontSize: 20, transition: "color 0.2s", "&:hover": { color: "#5138c2" } }} />
                        <Typography sx={{ color: "#434e5fff", fontSize: "15px", fontWeight: 500 }}>{item.text}</Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>

              <Typography component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }} sx={{ color: "#0a1628", fontWeight: 800, fontSize: "16px", mb: 2.5, fontFamily: "Urbanist, sans-serif" }}>
                {badgeText}
              </Typography>

              <GradientButton
                component={motion.div}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, delay: 1.3 }}
                onClick={() => setIsPopupOpen(true)}
              >
                {buttonText}
              </GradientButton>
            </Box>
          </Grid>

          {/* Right Column - Form Card */}
          <Grid item xs={12} md={5.5} sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>

            {/* Background Orbits */}
            <Box sx={{ position: "absolute", width: "480px", height: "480px", borderRadius: "50%", border: "1.5px dashed rgba(81, 56, 194, 0.08)", animation: `${rotateClockwise} 60s linear infinite`, zIndex: 0, display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", width: "420px", height: "420px", borderRadius: "50%", border: "1px solid rgba(81, 56, 194, 0.04)", zIndex: 0, display: { xs: "none", md: "block" } }} />

            {/* Drifting Tech Icons */}
            <Box component={motion.div} animate={{ y: [0, -15, 0], x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} sx={{ position: "absolute", top: "10%", left: "5%", color: "#5138c2", opacity: 0.12, zIndex: 0, display: { xs: "none", md: "block" } }}><CodeIcon sx={{ fontSize: 36 }} /></Box>
            <Box component={motion.div} animate={{ y: [0, 15, 0], x: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }} sx={{ position: "absolute", top: "15%", right: "5%", color: "#299bfc", opacity: 0.12, zIndex: 0, display: { xs: "none", md: "block" } }}><BrushIcon sx={{ fontSize: 32 }} /></Box>
            <Box component={motion.div} animate={{ y: [0, -12, 0], x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }} sx={{ position: "absolute", bottom: "10%", right: "15%", color: "#5138c2", opacity: 0.12, zIndex: 0, display: { xs: "none", md: "block" } }}><DataObjectIcon sx={{ fontSize: 34 }} /></Box>
            <Box component={motion.div} animate={{ y: [0, 12, 0], x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 11, ease: "easeInOut", delay: 3 }} sx={{ position: "absolute", bottom: "20%", left: "2%", color: "#299bfc", opacity: 0.12, zIndex: 0, display: { xs: "none", md: "block" } }}><LayersIcon sx={{ fontSize: 30 }} /></Box>

            {/* Floating Orbits Notification Cards */}
            <Paper
              elevation={4}
              sx={{
                position: "absolute",
                top: { xs: 20, md: 15 },
                left: { xs: -20, md: -20 },
                p: 1.8,
                borderRadius: "14px",
                bgcolor: "#ffffff",
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1.5,
                boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                borderLeft: "4px solid #299bfc",
                animation: `${float} 5s ease-in-out infinite`,
                animationDelay: "0.5s",
                zIndex: 2,
              }}
            >
              <Box sx={{ width: 8, height: 8, bgcolor: "#070808ff", borderRadius: "50%" }} />
              <Typography sx={{ fontWeight: 700, fontSize: "12px", color: "#0a1628" }}>
                New Project Started 🚀
              </Typography>
            </Paper>

            <Paper
              elevation={4}
              sx={{
                position: "absolute",
                bottom: { xs: 20, md: -30 },
                right: { xs: -20, md: -50 },
                p: 1.8,
                borderRadius: "14px",
                bgcolor: "#ffffff",
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1.5,
                boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                borderLeft: "4px solid #5138c2",
                animation: `${float} 5s ease-in-out infinite`,
                animationDelay: "3s",
                zIndex: 2,
              }}
            >
              <Box sx={{ width: 8, height: 8, bgcolor: "#EF4444", borderRadius: "50%", animation: `${pulse} 2s infinite` }} />
              <Typography sx={{ fontWeight: 700, fontSize: "12px", color: "#0a1628" }}>
                24/7 Support Active 🛡
              </Typography>
            </Paper>

            <Box component={motion.div} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} sx={{ animation: `${float} 6s infinite ease-in-out`, position: "relative", zIndex: 1 }}>
              <Paper elevation={4} sx={{ bgcolor: "#ffffff", borderRadius: "24px", p: { xs: 4, md: 5 }, boxShadow: "0 25px 60px rgba(0, 0, 0, 0.06)", border: "1px solid rgba(0,0,0,0.01)", transition: "all 0.4s ease", "&:hover": { boxShadow: "0 30px 70px rgba(0, 0, 0, 0.1)", transform: "scale(1.02)" }, maxWidth: "440px" }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#0a1628", mb: 4, fontFamily: "Urbanist, sans-serif", fontSize: "20px" }}>
                  Contact Our Experts Today!!
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}><StyledInput fullWidth placeholder="Enter Name" variant="standard" /></Grid>
                  <Grid item xs={12} sm={6}><StyledInput fullWidth placeholder="Enter Mobile" variant="standard" /></Grid>
                  <Grid item xs={12} sm={6}><StyledInput fullWidth placeholder="Enter Email" variant="standard" /></Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledInput fullWidth select defaultValue="Select Service" variant="standard">
                      <MenuItem value="" disabled>Select Service</MenuItem>
                      <MenuItem value="web">Web Design</MenuItem>
                      <MenuItem value="dev">Web Development</MenuItem>
                      <MenuItem value="seo">SEO Optimization</MenuItem>
                    </StyledInput>
                  </Grid>
                  <Grid item xs={12}><StyledInput fullWidth multiline rows={2} placeholder="Enter Your Message" variant="standard" /></Grid>
                  <Grid item xs={12} sx={{ mt: 2 }}><GradientButton fullWidth sx={{ py: 1.5, fontSize: "15px" }}>Submit</GradientButton></Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>

        </Grid>
      </Container>
      <PopUps open={isPopupOpen} handleClose={() => setIsPopupOpen(false)} />
    </HeroWrapper>
  );
};

export default ServiceHero;
