import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, IconButton, Button, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PopUps from "../../../common/PopUps";

import banner1 from "../../../../assets/Sales-dashboard.svg";
import banner2 from "../../../../assets/Payment-dashboard.svg";
import banner3 from "../../../../assets/Product-dashboard.svg";
import bgImage from "../../../../assets/homepage-banner2.3.png";

const EcommerceDashboard = () => {
  const [openPopup, setOpenPopup] = React.useState(false);
  const sliderRef = React.useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const bannerData = [
    { src: banner1, url: "/sales-demo" },
    { src: banner2, url: "/payment-demo" },
    { src: banner3, url: "/product-demo" },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        px: 2,
        py: 4,
        position: "relative",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "#333;", mb: 2, fontSize: { xs: "24px", md: "42px" } }}
        >
          All-in-One <span style={{ color: "#4da6ff" }}>CRM Software </span>for Smarter E-Commerce
          Management
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 1000,
            mx: "auto",
            color: "#333",
            textAlign: "justify",
            fontSize: { xs: "14px", md: "17px" },
          }}
        >
          Empower your business with a powerful omni-commerce CRM that manages orders, inventory,
          and customers in one smart platform. Work faster, reduce errors, and scale your e-commerce
          operations with advanced automation and a unified dashboard.
        </Typography>
      </Box>

      <Box sx={{ position: "relative", maxWidth: "1100px", mx: "auto" }}>
        {!isMobile && (
          <>
            <IconButton
              onClick={() => sliderRef.current?.slickPrev()}
              sx={{
                position: "absolute",
                top: "50%",
                left: -20,
                transform: "translateY(-50%)",
                zIndex: 2,
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.4)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={() => sliderRef.current?.slickNext()}
              sx={{
                position: "absolute",
                top: "50%",
                right: -20,
                transform: "translateY(-50%)",
                zIndex: 2,
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.4)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        )}

        <Slider {...settings} ref={sliderRef}>
          {bannerData.map((item, index) => (
            <div key={index}>
              <Box
                sx={{
                  position: "relative",
                  outline: "none",
                  px: 1,
                  overflow: "hidden",
                  "&:hover .dashboard-btn": { opacity: 1, transform: "translateX(-50%) translateY(0)" },
                  "&:hover img": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={`banner-${index}`}
                  sx={{
                    width: "100%",
                    borderRadius: 6,
                    maxHeight: { xs: "200px", md: "400px" },
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
                    display: "block",
                  }}
                />
                {/* <Box
                  component="button"
                  className="dashboard-btn"
                  onClick={() => window.open(item.url, "_blank")}
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "50%",
                    transform: isMobile ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(20px)",
                    opacity: isMobile ? 1 : 0,
                    backgroundColor: "#3f51b5",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    padding: isMobile ? "8px 20px" : "12px 32px",
                    fontSize: isMobile ? "13px" : "16px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    boxShadow: "0 8px 16px rgba(63, 81, 181, 0.3)",
                    whiteSpace: "nowrap",
                    zIndex: 2,
                    "&:hover": {
                      backgroundColor: "#283593",
                      boxShadow: "0 12px 24px rgba(63, 81, 181, 0.5)",
                      transform: "translateX(-50%) scale(1.05)",
                    },
                  }}
                >
                  Checkout Website
                </Box> */}
              </Box>
            </div>
          ))}
        </Slider>
      </Box>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          onClick={() => setOpenPopup(true)}
          endIcon={<ArrowForwardIcon />}
          sx={{
            background: "linear-gradient(to right, #025170, #5699c1)",
            color: "#fff",
            px: isMobile ? 4 : 6,
            py: 1.8,
            fontSize: isMobile ? "15px" : "18px",
            fontWeight: 700,
            borderRadius: "50px",
            textTransform: "none",
            boxShadow: "0 10px 20px rgba(2, 81, 112, 0.3)",
            transition: "all 0.4s ease",
            "&:hover": { transform: "scale(1.05)", boxShadow: "0 15px 30px rgba(2, 81, 112, 0.4)" },
          }}
        >
          Get Free Demo
        </Button>
      </Box>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default EcommerceDashboard;