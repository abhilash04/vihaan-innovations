import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const BuildWebsites = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#100d38",
        mb: 4,
        height: "55vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", py: 5 }}>
        <Grid
          container
          sx={{
            px: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: "2.6rem",
                mb: 2,
                color: "white",
                textAlign: "left",
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
                justifyContent: "flex-end",
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
                  padding: "12px 24px",
                  fontWeight: 600,
                  transition: "0.25s cubic-bezier(0, 0, 0.41, 1)",
                  fontSize: 16,
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
                  padding: "12px 24px",
                  fontWeight: 600,
                  fontSize: 16,
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
