import React from "react";
import { Grid, Typography, Paper, Box, useTheme, useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";

const cardData = [
  {
    icon: <HomeIcon style={{ fontSize: "40px", color: "#0056d6" }} />,
    title: "Mortgage Calculation",
    text: "A mortgage calculator on your software can give your customers a better idea of their purchase. Let our experts help you develop mortgage calculators that add to your customer service while improving sales. ",
  },
  {
    icon: <ApartmentIcon style={{ fontSize: "40px", color: "#0056d6" }} />,
    title: "Condominium Management",
    text: "Manage the hassles of shared condominium spaces from a single centralized dashboard. Create the ideal condominium management solution that helps you skillfully manage your amenities and resources.",
  },
  {
    icon: <GroupsIcon style={{ fontSize: "40px", color: "#0056d6" }} />,
    title: "Brokers Management",
    text: "Managing brokers has never been easy without the right tools and technologies. We will provide you with all the right tools and technologies to ensure effective broker management at all times.",
  },
  {
    icon: <PersonIcon style={{ fontSize: "40px", color: "#0056d6" }} />,
    title: "Tenant Management",
    text: "Leverage the potential of advanced technologies for seamless tenant management. Our tenant management solutions bring you all the essential features and functionalities to drive better growth.",
  },
  {
    icon: <BusinessIcon style={{ fontSize: "40px", color: "#0056d6" }} />,
    title: "Real Estate CRM With MLS",
    text: "Ensure your real estate clients get superior experiences with our CRM and MLS integration. Understand your client’s needs and recommend specific properties that best cater to their needs and requirements.",
  },
  {
    icon: <DevicesOtherIcon style={{ fontSize: "40px", color: "#0056d6" }} />,
    title: "Smart Home Automation",
    text: "Ensure your real estate clients get superior experiences with our CRM and MLS integration. Understand your client’s needs and recommend specific properties that best cater to their needs and requirements.",
  },
];

function RealEstateSolutions() {
  const theme = useTheme(); 
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        fontFamily: "Arial, sans-serif",
        px: isMobile ? 1 : 2,
        py: isMobile ? 4 : 6,
        backgroundColor: "#fff",
        maxWidth: "1200px",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#1a1a1a",
          mb: 1,
          textAlign: "center",
          fontSize: isMobile ? "24px" : undefined,
        }}
      >
        Top Real-estate Solutions For Varied Business Needs
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#666",
          fontSize: isMobile ? "14px" : "16px",
          mb: 5,
          textAlign: "center",
          maxWidth: isMobile ? "100%" : 800,
        }}
      >
        You name your real estate business’s needs, and we will provide you with
        the best solutions available.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: "10px",
                border: "1px solid #ddd",
                transition: "transform 0.3s, box-shadow 0.3s",
                textAlign: "center",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                },
                margin: isMobile ? "10px 0" : 0,
              }}
            >
              {card.icon}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  my: 1.2,
                  color: "#1a1a1a",
                }}
              >
                {card.title}
              </Typography>
              <Typography sx={{ color: "#555", fontSize: "15px" }}>
                {card.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RealEstateSolutions;
