import React from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

function ManagementFeatures() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const features = [
    {
      icon: <LocationCityOutlinedIcon sx={{ fontSize: 32 }} />,
      title: "Building Management",
      description: `Our PG management software helps you manage multiple buildings. `,
      points: [
        "Multiple building support",
        "Bulk room creation",
        "Admin permission management",
        "Quick building switching",
      ],
    },
    {
      icon: <AttachMoneyOutlinedIcon sx={{ fontSize: 32 }} />,
      title: "Rent Collection",
      description: `Simplify rent collection with our PG software.`,
      points: [
        "Mobile payment tracking",
        "Auto-generated receipts",
        "SMS payment reminders",
        "Offline payment recording",
      ],
    },
    {
      icon: <PersonOutlineIcon sx={{ fontSize: 32 }} />,
      title: "Tenant Management",
      description: `Keep complete tenant records with our PG management software.`,
      points: [
        "Complete tenant records",
        "Complaint portal",
        "Room transfer facility",
        "Bulk Excel import/export",
      ],
    },
    {
      icon: <HotelOutlinedIcon sx={{ fontSize: 32 }} />,
      title: "Bed Availability Tracking",
      description: `Real-time monitoring of bed availability.`,
      points: [
        "Real-time bed monitoring",
        "Occupancy status tracking",
        "Efficient room allocation",
        "Availability dashboard",
      ],
    },
    {
      icon: <ReceiptLongOutlinedIcon sx={{ fontSize: 32 }} />,
      title: "Expense Management",
      description: `Track all expenses including electricity bills, employee salaries.`,
      points: [
        "Bill tracking & storage",
        "Employee salary management",
        "Operational cost monitoring",
        "Digital document storage",
      ],
    },
    {
      icon: <BarChartOutlinedIcon sx={{ fontSize: 32 }} />,
      title: "Reports & Analytics",
      description: `Generate detailed reports with our PG software. `,
      points: [
        "Transaction reports",
        "Profit & loss statements",
        "Due payment reports",
        "PDF/Excel export",
      ],
    },
  ];

  return (
    <Box
      sx={{
        mt: 6,
        mb: 6,
        mx: { xs: 2, md: 10 },
      }}
      maxWidth="2000"
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 700, color: "#232738", mb: 2 }}
      >
        Comprehensive PG Management Software Features
      </Typography>

      <Typography
        variant="h6"
        align="center"
        sx={{ color: "#757884", mb: 6, fontWeight: 400 }}
      >
        Our PG software includes all the tools you need to manage your
        <br />
        paying guest business efficiently
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        {features.map((card) => (
          <Grid item xs={12} md={4} key={card.title} display="flex">
            <Paper
              elevation={5}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                minHeight: 200,
                width: "100%",
                m: isMobile ? 1 : 1,
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    bgcolor: "#6C63FF",
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {card.icon}
                </Box>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {card.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </Typography>

              <Box component="ul" sx={{ m: 0, pl: 3 }}>
                {card.points.map((text) => (
                  <Box
                    component="li"
                    key={text}
                    sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                  >
                    <CheckOutlinedIcon
                      color="success"
                      sx={{ fontSize: 20, mr: 1 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ fontSize: isMobile ? "0.85rem" : "0.95rem" }}
                    >
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ManagementFeatures;
