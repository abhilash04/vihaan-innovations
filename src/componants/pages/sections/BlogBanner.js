import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Link,
  Breadcrumbs,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import bannerimg from "../../../assets/slider-1.jpg";
const BlogBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "300px" : "400px",
        mx: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bannerimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundColor: "#0a0a1a",
        color: "#fff",
        mt: 8,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)", // Slightly darker for even better contrast
          zIndex: 1,
        },
      }}
    >
      {/* ===== Centered Content ===== */}
      <Box sx={{ 
        width: "90%", 
        maxWidth: "900px", 
        zIndex: 2, 
        textAlign: "center",
        px: isMobile ? 2 : 4, // Added internal padding
        boxSizing: "border-box"
      }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            lineHeight: 1.2,
            fontSize: isMobile ? "1.8rem" : "2.4rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)", // Added text shadow
          }}
        >
          Build Your Brand <br />
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontSize: "15px",
            color: "#d1d1d1",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          We are enabling digital transformation for our clients since 1999 by
          providing tailored solutions
        </Typography>

        <Breadcrumbs
          separator={
            <Typography sx={{ color: "#fff", mx: 0.5, fontSize: "14px" }}>
              /
            </Typography>
          }
          aria-label="breadcrumb"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Link
            href="/"
            component="a"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontSize: "14px",
              textDecoration: "none",
              "&:hover": { color: "#ff9966" }
            }}
          >
            Home
          </Link>
          <Typography sx={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>
            Blog
          </Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default BlogBanner;
