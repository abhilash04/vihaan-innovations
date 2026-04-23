import React from "react";
import { Box, Typography, Grid, Container, Paper, } from "@mui/material";
import { styled } from "@mui/system";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MemoryIcon from "@mui/icons-material/Memory";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
  background: "#ffffff",
  border: "1px solid rgba(0, 0, 0, 0.04)",
  borderTop: `4px solid ${bordercolor}`,
  borderRadius: "16px",
  padding: "24px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.015)",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.03)",
  },
}));

// const Watermark = styled(Typography)(({ theme }) => ({
//   position: "absolute",
//   bottom: "-30px",
//   right: "-10px",
//   fontSize: "120px",
//   fontWeight: 900,
//   color: "rgba(0, 0, 0, 0.02)",
//   fontFamily: "Urbanist, sans-serif",
//   userSelect: "none",
// }));

const WhyChooseUs = ({ data }) => {
  const {
    subtitle = "WHY VIHAAN",
    title = "Why Leading Businesses Trust Vihaan Innovations",
    description = "We engineering robust digital architectures bridging technical gaps efficiently. From product strategies mapping detailed timelines framing secure roll-out workflows safely.",
    stats = [
      { value: "500+", label: "Projects" },
      { value: "150+", label: "Clients" },
      { value: "10+", label: "Years" },
    ],
    reasons = reasonCards
  } = data || {};

  return (
    <Box sx={{ bgcolor: "#f1f5f9", py: { xs: 4, md: 6 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* Left Column - Heading & Stats */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 1.5 }}>
              <Typography sx={{ color: "#0087c9", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>
                {subtitle}
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "40px" }, fontFamily: "Urbanist, sans-serif", color: "#0a2233", mb: 2, lineHeight: 1.2 }}>
              {title}
            </Typography>
            <Typography sx={{ color: "#475569", fontSize: "16px", lineHeight: 1.8, mb: 4 }}>
              {description}
            </Typography>

            <Box sx={{ borderBottom: "2px solid #0087c9", width: "40px", mb: 4 }} />

            {/* Stat Row */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {stats.map((stat, idx) => (
                <Grid item xs={4} key={idx}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#0a2233", fontFamily: "Urbanist, sans-serif" }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#0087c9", fontWeight: 600 }}>
                    {stat.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            {/* <Button
              variant="text"
              sx={{
                color: "#0087c9",
                fontWeight: 700,
                textTransform: "none",
                gap: 1,
                p: 0,
                "&:hover": { bgcolor: "transparent", color: "#005885" },
              }}
            >
              Read Our Story <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Button> */}
          </Grid>

          {/* Right Column - 2x2 Grid */}
          <Grid item xs={12} md={7} >
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 4, gridAutoRows: "1fr" }}>
              {reasons.map((card, i) => {
                const SvgIcon = card.icon;
                return (
                  <ReasonCard key={i} bordercolor={card.color}>
                    <Box
                      sx={{
                        width: "48px",
                        height: "32px",
                        borderRadius: "12px",
                        bgcolor: `${card.color}10`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: card.color,

                      }}
                    >
                      <SvgIcon />
                    </Box>
                    <Typography variant="h6" sx={{ color: "#0a2233", fontWeight: 800, mb: 1, fontSize: "17px", fontFamily: "Urbanist, sans-serif" }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6 }}>
                      {card.desc}
                    </Typography>
                    {/* <Watermark>{card.number}</Watermark> */}
                  </ReasonCard>
                );
              })}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
