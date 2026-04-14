import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingFallback = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        bgcolor: "background.default",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <CircularProgress size={60} thickness={4} sx={{ color: "primary.main", mb: 2 }} />
      <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 500 }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingFallback;
