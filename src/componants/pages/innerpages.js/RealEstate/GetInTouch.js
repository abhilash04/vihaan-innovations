import React from "react";
import { Box, Grid, Typography, Button, } from "@mui/material";

function GetInTouch() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(108deg, #1884ef 0%, #216ef9 100%)",
        position: "relative",
        overflow: "hidden",
        py:3,
        maxWidth:1200,
        mx:"auto "
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.09)",
          left: -250,
          top: -200,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.09)",
          right: -250,
          bottom: -190,
          zIndex: 0,
        }}
      />
      <Grid container direction="column" alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              color: "#fff",
              textAlign: "center",
              fontSize: { xs: "2.1rem", md: "3.2rem" },
              mb: 2
            }}
          >
            Real Estate Solutions that Modernize Your Operations
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              color: "#dce9ff",
              mb: 5,
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.25rem" }
            }}
          >
            Transform your business to gain a competitive edge today.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              background: "#fff",
              color: "#0361e4",
              borderRadius: "2em",
              fontSize: { xs: 16, md: 19 },
              py: 1,
              px: 4,
              minWidth: 220,
              fontWeight: 700,
              boxShadow: 2,
              "&:hover": {
                background: "#eaf2fa"
              }
            }}
          >
            Get in touch now!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GetInTouch;
