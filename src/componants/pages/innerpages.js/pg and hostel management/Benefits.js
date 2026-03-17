import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InsightsIcon from "@mui/icons-material/Insights";
import SecurityIcon from "@mui/icons-material/Security";

const BENEFITS = [
  {
    icon: <AccessTimeIcon sx={{ fontSize: 36, color: "#234" }} />,
    title: "24/7 Operational Visibility",
    desc: "Manage your PG from anywhere using a cloud-based dashboard.",
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 36, color: "#234" }} />,
    title: "Save Time & Reduce Manual Work",
    desc: "Automate rent reminders, payments, and tenant onboarding to cut hours of admin tasks.",
  },
  {
    icon: <ErrorOutlineIcon sx={{ fontSize: 36, color: "#234" }} />,
    title: "Improve Accuracy & Avoid Errors",
    desc: "Digital records eliminate the risk of misplaced documents or wrong calculations.",
  },
  {
    icon: <InsightsIcon sx={{ fontSize: 36, color: "#234" }} />,
    title: "Real-Time Insights & Reports",
    desc: "Track occupancy, revenue, and pending dues instantly for better decision-making.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 36, color: "#234" }} />,
    title: "Enhanced Security & Data Safety",
    desc: "Store tenant data, agreements, and financial records securely in the cloud.",
  },
];

function Benefits() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        px: { xs: 2, md: 4 },
        py: {xs:1, md:4},
        maxWidth: "1000px",
        mx: "auto",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 4,
          fontSize: { xs: 22, md: 34 },
          lineHeight: 1.3,
        }}
      >
        Benefits of Your PG Operations Fully Automated
      </Typography>

      <Grid
        container
        spacing={isMobile ? 1.5 : 3}
        alignItems="stretch"
      >
        {BENEFITS.map((item) => (
          <Grid
            key={item.title}
            item xs={12} sm={6} md={4}   
            display="flex"
            justifyContent="center"
          >
            <Paper
              elevation={3}
              sx={{
                borderRadius: 2,
                px: { xs: 1.5, md: 2 },
                py: { xs: 2, md: 2.5 },
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                width: "100%",
                maxWidth: isMobile ? "75%" : 340,
                mx: "auto",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  minWidth: 40,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  mt: 0.4,
                }}
              >
                {item.icon}
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    mb: 0.5,
                    fontSize: { xs: 15, md: 16 },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.grey[700],
                    fontSize: { xs: 13, md: 14 },
                    lineHeight: 1.45,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Benefits;
