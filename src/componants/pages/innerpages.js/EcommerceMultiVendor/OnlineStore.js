import React, { useState, useRef, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

// ✅ Importing images
import img1 from "../../../../assets/1-1.png";
import img2 from "../../../../assets/2.png";
import img3 from "../../../../assets/3.png";
import img4 from "../../../../assets/4.png";

// ✅ Array of images (6 total)
const images = [
  { src: img1, title: "Modern Dashboard" },
  { src: img2, title: "Vendor Portal" },
  { src: img3, title: "Customer View" },
  { src: img4, title: "Analytics Engine" },
  { src: img2, title: "Product Management" },
  { src: img1, title: "Global Marketplace" },
];

const OnlineStore = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <Box
      sx={{ background: "linear-gradient(180deg, #f0f7ff 0%, #dbeeff 100%)", py: 6 }}
      ref={containerRef}
    >
      <Container maxWidth="lg" sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Heading Section */}
        <Box
          sx={{ textAlign: "center", mb: 8 }}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.4rem" },
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
              mb: 2,
            }}
          >
            Powerful Solutions Built for <span style={{ color: "#00bfff" }}>Growing Businesses</span>
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "16px",
              maxWidth: "600px",
              mx: "auto",
              color: "#435963",
              lineHeight: 1.2,
            }}
          >
            Transform the way you manage your business with an integrated platform that helps you monitor data, track performance, and streamline operations effortlessly.
          </Typography>
        </Box>

        {/* Slider */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={3}
            loop={false}
            style={{ paddingBottom: "60px" }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
            speed={1000}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "24px",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(0, 191, 255, 0.15)",
                      "& .glass-overlay": {
                        opacity: 1,
                        transform: "translateY(0)"
                      }
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={img.src}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  {/* Glassmorphism Title Overlay */}
                  <Box
                    className="glass-overlay"
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                      right: 20,
                      padding: "15px",
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "15px",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition: "all 0.4s ease",
                      textAlign: "center"
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>
                      {img.title}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Progress indicator */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: index === activeIndex ? 24 : 8,
                height: 8,
                borderRadius: "4px",
                mx: 0.5,
                bgcolor: index === activeIndex ? "#00bfff" : "rgba(0, 191, 255, 0.2)",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OnlineStore;
