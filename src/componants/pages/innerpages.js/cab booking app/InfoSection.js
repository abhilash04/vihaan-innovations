import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import StoreIcon from "@mui/icons-material/Store";
import SettingsIcon from "@mui/icons-material/Settings";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Image from "../../../../assets/mobile-3.png";

const InfoSection = () => {
  const cardData = [
    {
      icon: <CloudDownloadIcon sx={{ fontSize: 40, color: "#eb3552" }} />,
      title: "Download The App",
      description: "Provide a robust synopsis for high level overviews.",
      number: 1,
    },
    {
      icon: <StoreIcon sx={{ fontSize: 40, color: "#eb3552" }} />,
      title: "Connect Your Store",
      description: "Provide a robust synopsis for high level overviews.",
      number: 2,
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 40, color: "#eb3552" }} />,
      title: "Easy to Customize",
      description: "Provide a robust synopsis for high level overviews.",
      number: 3,
    },
    {
      icon: <ThumbUpAltIcon sx={{ fontSize: 40, color: "#eb3552" }} />,
      title: "Enjoy Our App",
      description: "Provide a robust synopsis for high level overviews.",
      number: 4,
    },
  ];

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", py: 8, px: 2 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Grid - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Image}
            alt="App Preview"
            sx={{ width: "75%", borderRadius: 4 }}
          />
        </Grid>

        {/* Right Grid - Text and Cards */}
        <Grid item xs={12} md={6}>
          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              fontSize: "130px",
              fontWeight: 800,
              letterSpacing: "-3px",
              color: "#f6f6f6",
            }}
          >
            WORK
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "43px",
              color: "#333333",
              lineHeight: "1.2em",
              mt: -6,
              mb: 6,
            }}
          >
            Anytime, AnyWhere
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: "#666666",
              mb: "50px",
              fontWeight: 500,
              mt: "20px",
              fontSize: "14px",
              lineHeight: "1.9em",
            }}
          >
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </Typography>

          {/* Cards */}
          <Grid container spacing={4}>
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    boxShadow: "0px 6px 29px 4px rgba(245,245,245,1)",
                    position: "relative", // needed for absolute child
                    gap: 1.5,
                  }}
                >
                  {/* Icon & Large Number Container */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Icon */}
                    {card.icon}

                    {/* Large Number */}
                    <Typography
                      variant="h2"
                      sx={{
                        position: "absolute",
                        right: 16,
                        top: 16,
                        fontSize: "72px",
                        fontWeight: 800,
                        letterSpacing: "-3px",
                        color: "#f6f6f6",
                        lineHeight: "0.8em",
                        pointerEvents: "none", // so it doesn't block interactions
                        userSelect: "none",
                      }}
                    >
                      {card.number}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#333333",
                      lineHeight: "1.6em",
                    }}
                  >
                    {card.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#666666",
                      lineHeight: "2em",
                    }}
                  >
                    {card.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoSection;
