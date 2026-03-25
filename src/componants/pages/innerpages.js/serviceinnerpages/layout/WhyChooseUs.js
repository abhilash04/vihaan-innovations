import React from "react";
import { Box, Typography, Grid, Container, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MemoryIcon from "@mui/icons-material/Memory";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const reasonCards = [
  {
    title: "Expert Team",
    icon: PeopleIcon,
    desc: "100+ Senior developers engineers sculpting scalable frames.",
    color: "#2563eb",
    number: "01"
  },
  {
    title: "On-Time Delivery",
    icon: AccessTimeIcon,
    desc: "Strict agile sprint cycles ensuring absolute launch timelines.",
    color: "#06b6d4",
    number: "02"
  },
  {
    title: "Cutting-Edge Tech",
    icon: MemoryIcon,
    desc: "Leveraging Next.js, AI workflows, cloud-native deployments.",
    color: "#4f46e5",
    number: "03"
  },
  {
    title: "24/7 Support",
    icon: HeadsetMicIcon,
    desc: "Continuous monitoring answering service tickets instant SLAs.",
    color: "#10b981",
    number: "04"
  }
];

const ReasonCard = styled(Paper)(({ theme, bordercolor }) => ({
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  borderTop: `3px solid ${bordercolor}`,
  borderRadius: "16px",
  padding: "32px",
  height: "100%",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-5px)",
    background: "rgba(255, 255, 255, 0.05)",
  },
}));

const Watermark = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "-30px",
  right: "-10px",
  fontSize: "120px",
  fontWeight: 900,
  color: "rgba(255, 255, 255, 0.02)",
  fontFamily: "Urbanist, sans-serif",
  userSelect: "none",
}));

const WhyChooseUs = () => {
  return (
    <Box sx={{ bgcolor: "#0a1628", py: { xs: 10, md: 14 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column - Heading & Stats */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 1.5 }}>
              <Typography sx={{ color: "#06b6d4", fontWeight: 600, fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>
                WHY VIHAAN
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "44px" }, fontFamily: "Urbanist, sans-serif", color: "#ffffff", mb: 2, lineHeight: 1.2 }}>
              Why Leading Businesses Trust Vihaan Innovations
            </Typography>
            <Typography sx={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8, mb: 4 }}>
              We engineering robust digital architectures bridging technical gaps efficiently. From product strategies mapping detailed timelines framing secure roll-out workflows safely.
            </Typography>

            <Box sx={{ borderBottom: "1px solid rgba(6, 182, 212, 0.3)", width: "60px", mb: 4 }} />

            {/* Stat Row */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {[
                { value: "500+", label: "Projects" },
                { value: "150+", label: "Clients" },
                { value: "10+", label: "Years" },
              ].map((stat, idx) => (
                <Grid item xs={4} key={idx}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#ffffff", fontFamily: "Urbanist, sans-serif" }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#06b6d4" }}>
                    {stat.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="text"
              sx={{
                color: "#06b6d4",
                fontWeight: 600,
                textTransform: "none",
                gap: 1,
                p: 0,
                "&:hover": { bgcolor: "transparent", color: "#ffffff" },
              }}
            >
              Read Our Story <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Button>
          </Grid>

          {/* Right Column - 2x2 Grid */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {reasonCards.map((card, i) => {
                const SvgIcon = card.icon;
                return (
                  <Grid item xs={12} sm={6} key={i}>
                    <ReasonCard bordercolor={card.color}>
                      <Box
                        sx={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          bgcolor: `${card.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: card.color,
                          mb: 3,
                        }}
                      >
                        <SvgIcon />
                      </Box>
                      <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 700, mb: 1, fontSize: "18px", fontFamily: "Urbanist, sans-serif" }}>
                        {card.title}
                      </Typography>
                      <Typography sx={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6 }}>
                        {card.desc}
                      </Typography>
                      <Watermark>{card.number}</Watermark>
                    </ReasonCard>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
