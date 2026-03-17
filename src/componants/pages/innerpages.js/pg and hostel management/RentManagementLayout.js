import React, { useState } from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import {
  CurrencyRupee,
  Notifications,
  Article,
  Assessment,
  Handshake,
  PersonAdd,
  Apartment,
} from "@mui/icons-material";

// Import 7 different images
import img1 from "../../../../assets/scoller-1.webp";
import img2 from "../../../../assets/scoller-2.webp";
import img3 from "../../../../assets/scoller-3.webp";
import img4 from "../../../../assets/scoller-4.webp";
import img5 from "../../../../assets/scoller-5.webp";
import img6 from "../../../../assets/scoller-6.webp";
import img7 from "../../../../assets/scoller-7.webp";

const featuresLeft = [
  {
    icon: <CurrencyRupee />,
    label: "Online Rent Collection",
    border: "#e3d600",
    hover: "#e3d600",
  },
  {
    icon: <Notifications />,
    label: "Auto Due Payment Remind",
    border: "#F36363",
    hover: "#F36363",
  },
  {
    icon: <Article />,
    label: "E-KYC/E-Agreement",
    border: "#2988E1;",
    hover: "#2988E1;",
  },
  {
    icon: <Assessment />,
    label: "All Reports Downloads",
    border: "#6454FC",
    hover: "#6454FC",
  },
  {
    icon: <Handshake />,
    label: "Find My PG",
    border: "#E3D600",
    hover: "#E3D600",
  },
  {
    icon: <PersonAdd />,
    label: "Police Verification",
    border: "#F36363",
    hover: "#F36363",
  },
  {
    icon: <Apartment />,
    label: "Property Management Services",
    border: "#2988E1",
    hover: "#2988E1",
  },
];

const featureDetails = [
  {
    heading: "Online Rent Collection",
    img: img1,
    content: [
      "Book Room/PG request",
      "Instant Booking Confirmation",
      "Inventory Management",
    ],
  },
  {
    heading: "Auto Due Rent Reminders",
    img: img2,
    content: [
      "Real-time Notification",
      "Dynamic Due Date Adjustment",
      "Multi Channel Communication",
      "Whats App alerts sent to Tenants",
    ],
  },
  {
    heading: "E-KYC / E-Agreement",
    img: img3,
    content: [
      "Online Tenant Registration",
      "Online Aadhaar Verification",
      "Online PAN Verification",
      "Digital Agreement templates",
      "Renewal & Expiry Alerts",
      "E-signature",
    ],
  },
  {
    heading: "All Reports Downloads",
    img: img4,
    content: [
      "Management & Download expense reports",
      "Hassle-Free 3 Tap complaint Management for Tenant",
      "Daily Closing & Opening Balances",
      "Daily/Weekly/Monthly Onboarding",
    ],
  },
  {
    heading: "Free Listing & Zero Brokerage",
    img: img5,
    content: [
      "Extensive Database: Locate PGs with ease.",
      "Customized Filters: Personalize search for precision.",
      "Real-Time Availability: Instant room status updates.",
      "Verified Reviews: Authentic feedback for confidence.",
    ],
  },
  {
    heading: "Police Verification",
    img: img6,
    content: ["E-Documents Submission", "Verification Status Updates"],
  },
  {
    heading: "Property Management System (PMS)",
    img: img7,
    content: [
      "App based complaint management & resolution",
      "Handyman services - Electrical + Plumbing + Carpentry + Water Supply Management ",
    ],
  },
];

export default function RentManagementLayout() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const handleFeatureClick = (index) => {
    setSelectedFeature(index);
  };

  const activeFeature = featureDetails[selectedFeature];

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2, my: 8 }}>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            {featuresLeft.map((item, index) => {
              const isActive = index === selectedFeature;
              return (
                <Grid item xs={6} key={index}>
                  <Paper
                    elevation={3}
                    onClick={() => handleFeatureClick(index)}
                    sx={{
                      p: 1.5,
                      border: `2px solid ${item.border}`,
                      textAlign: "center",
                      borderRadius: "20px",
                      minHeight: "90px",
                      cursor: "pointer",
                      transition: "0.3s",
                      backgroundColor: isActive ? item.hover : "white",
                      "&:hover": {
                        backgroundColor: item.hover,
                      },
                    }}
                  >
                    <Box sx={{ fontSize: "40px", lineHeight: 1 }}>
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: 1.3,
                        color: "#071e21;",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        {/* Center Column */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src={activeFeature.img}
            alt={activeFeature.heading}
            sx={{
              width: "100%",
              maxWidth: "280px",
              borderRadius: "10px",
              height: "80vh",
              transition: "0.4s",
            }}
          />
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#e4d700",
              borderRadius: 3,
              p: 3,
              mt: 5,
              transition: "0.3s",
            }}
          >
            <Typography
              sx={{ fontSize: "30px", lineHeight: 1.3, fontWeight: 700 }}
              mb={2}
            >
              {activeFeature.heading}
            </Typography>

            {activeFeature.content.map((point, i) => (
              <Box key={i} display="flex" alignItems="center" mb={1.5}>
                <Box component="span" mr={1} fontSize="20px">
                  ✅
                </Box>
                <Typography sx={{ fontSize: "16px", lineHeight: 1.8 }}>
                  {point}
                </Typography>
              </Box>
            ))}

            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "black",
                borderRadius: 2,
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                px: 3,
                py: 1,
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              SCHEDULE A DEMO NOW
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
