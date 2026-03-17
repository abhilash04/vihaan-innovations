import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";

const GetTheApp = () => {
  const apps = [
    {
      label: "Android Apps",
      icon: <AndroidIcon sx={{ fontSize: 40, color: "#ffffff" }} />,
    },
    {
      label: "Web Apps",
      icon: <LanguageIcon sx={{ fontSize: 40, color: "#ffffff" }} />,
    },
    {
      label: "Mobile Apps",
      icon: <PublicIcon sx={{ fontSize: 40, color: "#ffffff" }} />,
    },
  ];

  return (
    <Box sx={{ maxWidth: "1000px", mx: "auto", textAlign: "center", py: 2 }}>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: "130px",
          fontWeight: 800,
          letterSpacing: "-3px",
          color: "#f6f6f6",
        }}
      >
        APP
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize:'43px',
          color: "#333333",
          lineHeight:'1.2em',
          mt: -4,
          mb: 10,
        }}
      >
        Get The App
      </Typography>

      {/* Grid */}
      <Grid container spacing={3} justifyContent="center" mb={4}>
        {apps.map((app, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 2,
                px: 2,
                py: 4,
                borderBottom: "6px solid #eb3552",
                boxShadow:'0px 6px 29px 4px rgba(245,245,245,1)',
                // backgroundColor: "#c7c7c7",
                transition: "0.3s",
                
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#c7c7c7",
                  width: "94px",
                  height: "94px",
                  lineHeight:'94px',
                  display: "flex",
                  alignItems: "center",
                  fontSize:'44px',
                  justifyContent: "center",
                  "&:hover": {
                  backgroundColor: "#eb3552",
                },
                  
                }}
              >
                {app.icon}
              </Box>
              <Typography
                sx={{ fontSize: "18px", fontWeight: 500 ,color:'#333333'}}
              >
                {app.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GetTheApp;
