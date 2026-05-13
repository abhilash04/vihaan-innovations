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
        maxWidth: "1750px",
        height: "800px",
        mx: "auto",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${bannerimg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#0a0a1a",
        color: "#fff",
        px: isMobile ? 3 : 10,
        mt: 10,
        overflow: "hidden",
      }}
    >
      {/* ===== Left Content ===== */}
      <Box sx={{ width: isMobile ? "100%" : "50%", zIndex: 2, textAlign: isMobile ? "center" : "left" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Build Your Brand <br />
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 1.5,
            fontSize: isMobile ? "16px" : "18px",
            color: "#d1d1d1",
            maxWidth: isMobile ? "100%" : "480px",
          }}
        >
          We are enabling digital transformation for our clients since 1999 by
          providing tailored solutions
        </Typography>

        <Breadcrumbs
          separator={
            <Typography sx={{ color: "#fff", mx: 0.5, fontSize: isMobile ? "18px" : "24px" }}>
              /
            </Typography>
          }
          aria-label="breadcrumb"
          sx={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}
        >
          <Link
            href="/"
            component="a"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Typography sx={{ color: "#fff", fontSize: isMobile ? "18px" : "24px" }}>
            Career Page:
          </Typography>
        </Breadcrumbs>

        <Button
          variant="contained"
          sx={{
            borderRadius: "30px",
            mt: 3.5,
            px: 4,
            py: 1.5,
            fontSize: "16px",
            fontWeight: 600,
            background: "linear-gradient(90deg, #ff9966, #ff5e62)",
            textTransform: "none",
          }}
        >
          View Showcase
        </Button>
      </Box>
    </Box>
  );
};

export default BlogBanner;
