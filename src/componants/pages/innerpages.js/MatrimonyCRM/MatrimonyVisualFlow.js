import React from "react";
import { Box, Typography } from "@mui/material";
import img from '../../../../assets/Matchmaking process flowchart in blue.png'

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
          }}>
            The Member Journey <span style={{ fontWeight: 600 }}>-</span> Visual Flow
          </Typography>
        </Box>

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
              // boxShadow: '0 8px 30px rgba(11, 32, 70, 0.08)'
            }}
          />
        </Box>

      </Box>
    </Box>
  );
};

export default MatrimonyVisualFlow;
