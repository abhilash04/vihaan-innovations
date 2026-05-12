import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const BuildWebsites = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: "#100d38",
        mb: 4,
        minHeight: isMobile ? "auto" : "55vh",
        py: isMobile ? 6 : 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", py: isMobile ? 2 : 5, px: 2 }}>
        <Grid
          container
          sx={{
            px: 2,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "center" : "flex-start",
            gap: isMobile ? 3 : 0,
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: isMobile ? "1.8rem" : "2.6rem",
                mb: 2,
                color: "white",
                textAlign: isMobile ? "center" : "left",
                lineHeight: 1.3,
              }}
            >
              Build Websites Rapidly With Trendkit Interface Blocks
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-end",
                gap: 2,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                sx={{
                  border: "2px solid #fff",
                  color: "white",
                  borderRadius: "5px",
                  padding: isMobile ? "10px 18px" : "12px 24px",
                  fontWeight: 600,
                  transition: "0.25s cubic-bezier(0, 0, 0.41, 1)",
                  fontSize: isMobile ? 14 : 16,
                  textTransform: "none",
                  mt: 2,
                }}
              >
                Check more
              </Button>
              <Button
                sx={{
                  background: "linear-gradient(45deg, #7bbed4ff, #00497eff)",
                  color: "#fff",
                  borderRadius: "5px",
                  padding: isMobile ? "10px 18px" : "12px 24px",
                  fontWeight: 600,
                  fontSize: isMobile ? 14 : 16,
                  textTransform: "none",
                  transition: "0.25s cubic-bezier(0, 0, 0.41, 1)",
                  mt: 2,
                  boxShadow: "0 14px 35px -11px #066e91ff",
                }}
              >
                Get trendkit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BuildWebsites;
