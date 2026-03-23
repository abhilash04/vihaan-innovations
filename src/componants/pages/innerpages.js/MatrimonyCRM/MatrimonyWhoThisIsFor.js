import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeIcon from '@mui/icons-material/Home';
import ShareIcon from '@mui/icons-material/Share';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const audiences = [
  { icon: <LocationCityIcon />, title: "Profile System" },
  { icon: <PublicIcon />, title: "Matchmaking AI" },
  { icon: <HandshakeIcon />, title: "Advanced Search" },
  { icon: <HomeIcon />, title: "Secure Messaging" },
  { icon: <ShareIcon />, title: "Admin Dashboard" },
  { icon: <FlightTakeoffIcon />, title: "Mobile Friendly" }
];

const AudienceCard = ({ icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "12px",
        bgcolor: "#ffffff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
        border: "1px solid rgba(0, 180, 216, 0.15)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 30px rgba(0, 180, 216, 0.1)",
          borderColor: "#00B4D8"
        }
      }}
    >
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", bgcolor: "transparent", transition: "all 0.3s", ".MuiPaper-root:hover &": { bgcolor: "#00B4D8" } }} />
      <Box
        sx={{
          width: 60, height: 60, borderRadius: "50%",
          bgcolor: "rgba(0, 180, 216, 0.1)",
          color: "#0B2046",
          mb: 2,
          display: "flex", justifyContent: "center", alignItems: "center",
          "& > svg": { fontSize: 28 }
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px", lineHeight: 1.4, whiteSpace: "pre-line" }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const MatrimonyWhoThisIsFor = () => {
  return (
    <Box sx={{ bgcolor: "#e3f2fd", pb: 12, pt: 6 }}> {/* Light sky blue */}
      <Container maxWidth="md">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box sx={{ display: "inline-block", mb: 2 }}>
            <Typography sx={{
              fontWeight: 800, color: "#0B2046", fontSize: "28px",
              display: "flex", alignItems: "center", gap: 1,
              justifyContent: "center"
            }}>
              Powerful Features Built by a Leading Matrimony Web Design Company
            </Typography>
          </Box>
          <Typography sx={{ color: "#666", fontSize: "16px", maxWidth: "800px", margin: "0 auto", mb: 2 }}>
            As an experienced matrimony web design company, we build advanced matchmaking platforms designed to simplify partner search, manage profiles efficiently, and deliver a secure experience for families and communities.
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
            Our matrimony platforms include intelligent matchmaking tools, powerful admin dashboards, and user-friendly interfaces that make the matchmaking process seamless.
          </Typography>
        </Box>

        {/* Audience Grid - 3x2 Layout exact match to image */}
        <Grid container spacing={3} justifyContent="center" rowSpacing={10}>
          {audiences.map((audience, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AudienceCard
                icon={audience.icon}
                title={audience.title}
                delay={index * 0.1}
              />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default MatrimonyWhoThisIsFor;
