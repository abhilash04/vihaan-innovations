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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLocation, Link as RouterLink } from "react-router-dom";

const InnerPageBanner = ({ title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const formatSegment = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const displayTitle = title || (pathnames.length > 0 ? formatSegment(pathnames[pathnames.length - 1]) : "Welcome");
  return (
    <Box
      sx={{
        position: "relative",
        height: isMobile ? "50vh" : "60vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${bannerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        mt: 10,
        px: isMobile ? 3 : 10,
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
          {displayTitle}
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
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontSize: isMobile ? "18px" : "24px",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const formattedValue = formatSegment(value);

            return isLast ? (
              <Typography key={to} sx={{ color: "#fff", fontSize: isMobile ? "18px" : "24px" }}>
                {formattedValue}
              </Typography>
            ) : (
              <Link
                component={RouterLink}
                to={to}
                key={to}
                sx={{
                  color: "#fff",
                  fontSize: isMobile ? "18px" : "24px",
                  textDecoration: "none",
                }}
              >
                {formattedValue}
              </Link>
            );
          })}
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

export default InnerPageBanner;
