import React from "react";
import { Box, Typography } from "@mui/material";
import img from '../../../../assets/Matchmaking process flowchart in blue.png';

const MatrimonyVisualFlow = () => {
  return (
    <Box sx={{ bgcolor: "#eaf4fdff", py: 4, position: "relative", overflow: "hidden" }}>
      <Box sx={{ maxWidth: "1000px", mx: "auto", px: 3 }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography sx={{
            fontWeight: 800,
            color: "#0B2046",
            fontSize: { xs: "24px", md: "32px" },
            mb: 1
          }}>
            The Journey From Profile Creation to Perfect Match
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", maxWidth: "800px", margin: "0 auto", mb: 4 }}>
            Our matrimony app development platforms guide members through a seamless journey — from profile registration and verification to match discovery, communication, and successful marriage connections.
          </Typography>

          {/* Image Container */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <img
              src={img}
              alt="Matchmaking process flowchart in blue"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: '20px',
              }}
            />
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default MatrimonyVisualFlow;
