// ImageSlider.js
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { styled } from "@mui/system";

import "swiper/css";
import "swiper/css/pagination";

// ✅ Importing images
import img1 from "../../../../assets/1-1.png";
import img2 from "../../../../assets/2.png";
import img3 from "../../../../assets/3.png";
import img4 from "../../../../assets/4.png";

// ✅ Array of images (6 total)
const images = [
  { src: img1, title: "Analytics Overview" },
  { src: img2, title: "Sales Performance" },
  { src: img3, title: "Customer Insights" },
  { src: img4, title: "Market Trends" },
  { src: img2, title: "Revenue Metrics" },
  { src: img1, title: "Operational Stats" },
];

// ✅ Styled Image Container
const ImageCard = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: "12px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",

  "&::before": {
    content: '""',
    position: "absolute",
    height: "100%",
    width: "100%",
    background: "#e3335f",
    opacity: 0,
    zIndex: 1,
    top: 0,
    left: 0,
    transition: "opacity 0.25s ease-in-out",
  },

  "&:hover::before": {
    opacity: 0.6,
  },

  "&:hover .slide-text": {
    transform: "translateY(0)",
    opacity: 1,
  },
}));

// ✅ Styled Caption Container
const Caption = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "10%",
  left: 0,
  width: "100%",
  zIndex: 2,
  textAlign: "center",
  color: "#fff",
  transition: "transform 0.4s ease, opacity 0.4s ease",
  transform: "translateY(100%)",
  opacity: 0,

  "& h6": {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "0.3rem",
  },

  "& span": {
    fontSize: "0.95rem",
    fontWeight: 500,
    letterSpacing: "1px",
  },
}));

const ImageSlider = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f2f9" }}>
      <Container maxWidth="lg" sx={{ maxWidth: "1100px", mx: "auto", py: 8 }}>
        {/* Heading Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: "2.6rem",
              color: "#313845",
              letterSpacing: ".5px",
              lineHeight: 1.3,
              mb: "1.5rem",
            }}
          >
            We've Done A Lot
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "16.5px",
              maxWidth: "35rem",
              mx: "auto",
              color: "rgba(49, 56, 69, 0.7)",
              lineHeight: 1.6,
            }}
          >
            Take control over your business by deploying an all-in-one business
            data monitoring solution for your business.
          </Typography>
        </Box>

        {/* Slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={3}
          loop={false}
          style={{ paddingBottom: "40px" }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <ImageCard>
                <Box
                  component="img"
                  src={img.src}
                  alt={`Slide ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
                <Caption className="slide-text">
                  <Typography component="h6">{img.title}</Typography>
                  <Typography component="span">PRODUCT</Typography>
                </Caption>
              </ImageCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default ImageSlider;
