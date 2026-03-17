import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";

const services = [
  { label: "Real Estate Technology Consulting", icon: <HomeOutlinedIcon /> },
  { label: "Property Management Software Development", icon: <StoreOutlinedIcon /> },
  { label: "Real Estate Vendor Management", icon: <BusinessCenterOutlinedIcon /> },
  { label: "Real Estate App Development", icon: <PhoneAndroidOutlinedIcon /> },
  { label: "Property Listing Marketplace", icon: <ApartmentOutlinedIcon /> },
  { label: "Construction Management Software", icon: <StoreOutlinedIcon /> },
  { label: "Real Estate Software Modernization", icon: <UpdateOutlinedIcon /> },
  { label: "Third-Party Integrations", icon: <LanOutlinedIcon /> },
];

function RealEstateServices() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        background:
          "linear-gradient(90deg, #f8fafb 0%, #bcd7f8 50%, #77bdfc 100%)",
        px: isMobile ? 3 : 6, // Add horizontal padding outside the boxes to limit left and right spacing
        py: isMobile ? 4 : 8,
        maxWidth: 1200,
        mx: "auto",
        padding: 2,
      }}
    >
      <Grid
        container
        direction="column"
        px={4}
        alignItems={isMobile ? "center" : "flex-start"}
      >
        <Grid item xs={12} sx={{ mb: isMobile ? 2 : 3 }}>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            fontWeight={700}
            color="#222"
            sx={{ mb: 2, textAlign: isMobile ? "center" : "left" }}
          >
            Comprehensive Real Estate Software Development Services
          </Typography>
          <Typography
            variant="body2"
            color="#222"
            sx={{ mb: isMobile ? 3 : 4, textAlign: isMobile ? "center" : "left" }}
          >
            <span style={{ fontWeight: 600 }}>
              Hire real-estate software developers
            </span>{" "}
            who understand the industry. Scale with the right talents every step
            of the way.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Grid
            container
            spacing={isMobile ? 2 : 3}
            justifyContent={isMobile ? "center" : "flex-start"}
            sx={{
              px: isMobile ? 0 : 2, // Add horizontal padding inside the grid container on desktop
            }}
          >
            {services.map((item, idx) => (
              <Grid
                item
                xs={isMobile ? 10 : 5} // Reduce size of inside boxes, smaller than full width
                sm={6}
                key={idx}
              >
                <Paper
                  elevation={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 1.5, // Reduced horizontal padding inside boxes
                    py: 1.5, // Reduced vertical padding inside boxes
                    borderRadius: 3,
                    background: "#fff",
                    boxShadow: "0 2px 8px #e6ebf8",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5, // smaller gap between icon and label
                    }}
                  >
                    <Box
                      sx={{
                        color: "#2250cc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24, // smaller icon size
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant={isMobile ? "body2" : "body1"}
                      sx={{ fontWeight: isMobile ? 500 : 600, color: "#222" }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                  <IconButton size="small">
                    <ArrowDropDownIcon sx={{ color: "#9bb2d0" }} />
                  </IconButton>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RealEstateServices;
