import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const stats = [
  {
    value: "100K+",
    label: "Properties",
    sub: "Listed on MLS",
  },
  {
    value: "5K+",
    label: "Condominium",
    sub: "Property Management",
  },
  {
    value: "50K+",
    label: "Work Order",
    sub: "Management",
  },
];

function RealEstateNumbers() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: "#fff",
        px: isMobile ? 2 : 8,
        py: isMobile ? 5 : 8,
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      <Typography
        variant={isMobile ? "h6" : "h4"}
        fontWeight={700}
        sx={{ mb: 2, color: "#222" }}
      >
        Real Estate Solutions in Numbers
      </Typography>
      <Typography
        variant="body1"
        color="#444"
        sx={{ mb: isMobile ? 4 : 6, maxWidth: 600 }}
      >
        We focus all our efforts on providing the best service and let numbers talk with you.
      </Typography>

      {/* Stat Cards */}
      <Grid
        container
        spacing={isMobile ? 4 : 0}
        alignItems="center"
        justifyContent={isMobile ? "center" : "flex-start"}
        sx={{ position: "relative" }}
      >
        {stats.map((item, idx) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={item.label}
            sx={{
              textAlign: isMobile ? "center" : "left",
              px: isMobile ? 0 : 2,
            }}
          >
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: "#2575ee",
                fontSize: isMobile ? "2.2rem" : "2.8rem",
                mb: 0.5,
              }}
            >
              {item.value}
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              sx={{ mb: 0.5, color: "#222" }}
            >
              {item.label}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
                mt: 1,
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#2575ee",
                  mb: 1,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#888",
                  fontSize: isMobile ? "0.98rem" : "1rem",
                  letterSpacing: "0.01em",
                }}
              >
                {item.sub}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Divider Line */}
      <Divider
        sx={{
          mt: isMobile ? 2 : 3,
          bgcolor: "#eaeaea",
          height: 2,
          display: { xs: "none", sm: "block" },
        }}
      />
    </Box>
  );
}

export default RealEstateNumbers;

