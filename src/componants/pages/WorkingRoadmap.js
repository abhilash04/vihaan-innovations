import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  Stack,
  Badge,
} from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { motion } from "framer-motion";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SearchIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import ListAltIcon from "@mui/icons-material/ListAlt";
import StorageIcon from "@mui/icons-material/Storage";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CampaignIcon from "@mui/icons-material/Campaign";
import bgimage from "../../assets/curve-line.png";
import img from "../../assets/curve-arrow-white.png";

// Sample avatars for client reviews
const avatars = [
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/43.jpg",
  "https://randomuser.me/api/portraits/women/45.jpg",
];

// Colors based on your image
const colors = {
  blue: "#0a306aff", // Deep midnight
  darkBlue: "#0a2342ff",
  teal: "#106f9cff", // Amber accent
  pink: "#068f62ff", // Emerald
  darkGray: "#2d3f5dff",
};

// Rotate icon animation on hover
const rotateRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
`;

// Styled Badge for numbering
const NumberBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: "2px solid #171b44",
    padding: "0 6px",
    fontWeight: 600,
    fontSize: "0.75rem",
    background: colors.blue,
    color: "#fff",
    borderRadius: "50%",
    minWidth: 24,
    height: 24,
  },
}));

const leftRight = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-20px); } 
  100% { transform: translateX(0); }
`;

// Circle container
const Circle = styled(Box)(({ bgcolor }) => ({
  backgroundColor: bgcolor,
  borderRadius: "50%",
  width: 171,
  height: 171,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  position: "relative",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    "& svg": {
      animation: `${rotateRight} 0.5s forwards`,
    },
  },
}));

export default function WorkingRoadmap() {
  const roadmapItems = [
    {
      id: 1,
      label: "Brainstorming",
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      bgColor: colors.blue,
    },
    {
      id: 2,
      label: "UX Research",
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      bgColor: colors.darkGray,
    },
    {
      id: 3,
      label: "Product Designing",
      icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
      bgColor: colors.teal,
    },
    {
      id: 4,
      label: "Front-End Development",
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      bgColor: colors.darkGray,
    },
    {
      id: 5,
      label: "Usability Testing",
      icon: <ListAltIcon sx={{ fontSize: 40 }} />,
      bgColor: colors.darkGray,
    },
    {
      id: 6,
      label: "Back-End Development",
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      bgColor: colors.pink,
    },
    {
      id: 7,
      label: "SEO Optimization",
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      bgColor: colors.blue,
    },
    {
      id: 8,
      label: "Digital Marketing",
      icon: <CampaignIcon sx={{ fontSize: 40 }} />,
      bgColor: colors.teal,
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 1400,
        mx: "auto",
        px: 6,
        py: 8,
        backgroundColor: "#0A1628",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left side */}
        <Grid item md={5} >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "flex-end", // align right horizontally
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={img}
              alt="curve-arrow-white"
              sx={{
                height: "100px",
                width: "100px",
                animation: `${leftRight} 1s ease-in-out infinite`,
              }}
            />
          </Box>
          <Box sx={{ my: 2, }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#332d57",
                textTransform: "none",
                fontSize: 12,
                borderRadius: "20px",
                padding: "6px 14px",
                fontWeight: 600,
                lineHeight: 1.04,
              }}
            >
              What We Do
            </Button>
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.1,
            }}
          >
            Our Smart Workflow for Building Powerful Digital Solutions
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#a3abc8",
              lineHeight: 1.7,
              mb: 5,
              maxWidth: 440,
            }}
          >
            At Vihaan Innovations, we follow a structured and strategic workflow to create innovative digital solutions.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: colors.blue,
                textTransform: "none",
                borderRadius: "30px",
                px: 5,
                py: 1.5,
                fontWeight: 700,
                fontSize: 18, // Main text size
                lineHeight: 1.2, // Adjusts spacing between lines
                boxShadow: "0 4px 15px rgba(0,102,255,0.5)",
                "&:hover": { backgroundColor: "#0046bb" },
                display: "flex",
                flexDirection: "column", // Aligns text vertically
                alignItems: "center",
              }}
            >
              Get Started
              <Box
                component="span"
                sx={{
                  fontSize: 10,
                  fontWeight: 400,
                  opacity: 0.9,
                  mt: 0.5
                }}
              >
                With Vihaan Innovations
              </Box>
            </Button>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Stack direction="row" spacing={-1}>
                {avatars.map((src, i) => (
                  <Avatar
                    key={i}
                    src={src}
                    sx={{ width: 38, height: 38, border: "2px solid #171b44" }}
                  />
                ))}
              </Stack>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    lineHeight: 1,
                    color: "#fff",
                  }}
                >
                  2.3M+
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "#9bb5ff",
                    fontWeight: 600,
                  }}
                >
                  5000+ Client reviews
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right side */}
        <Grid item md={7}>
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {roadmapItems.map((item, idx) => (
              <Grid
                item
                xs={6}
                sm={3}
                key={item.id}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <NumberBadge
                    badgeContent={item.id}
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                  >
                    <Circle bgcolor={item.bgColor}>
                      {item.icon}
                      <Typography
                        sx={{
                          mt: 1,
                          fontWeight: 600,
                          fontSize: "1rem",
                          textAlign: "center",
                          lineHeight: 1.2,
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Circle>
                  </NumberBadge>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          height: { md: "20vh", xs: "10vh" },
          width: "100%",
          position: "relative",
          color: "#fff",
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          zIndex: 0,
          display: "flex", // Use flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          textAlign: "center", // Center text inside
          px: 2, // Padding horizontal, optional
        }}
      />
    </Box>
  );
}
