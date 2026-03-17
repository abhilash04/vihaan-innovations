import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Link,
  Breadcrumbs,
} from "@mui/material";
import bannerimg from "../../../assets/slider-1.jpg";
const BlogBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${bannerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        px: { xs: 3, md: 10 },
        mt: 10,
      }}
    >
      {/* ===== Left Content ===== */}
      <Box sx={{ width: { xs: "100%", md: "50%" }, zIndex: 2 }}>
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
            fontSize: "18px",
            color: "#d1d1d1",
            maxWidth: "480px",
          }}
        >
          We are enabling digital transformation for our clients since 1999 by
          providing tailored solutions
        </Typography>

        <Breadcrumbs
          separator={
            <Typography sx={{ color: "#fff", mx: 0.5, fontSize: "24px" }}>
              /
            </Typography>
          }
          aria-label="breadcrumb"
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
          <Typography sx={{ color: "#fff", fontSize: "24px" }}>
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
