import React, { useRef } from "react";
import { Box, Container, IconButton, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import phone1 from "../../../../assets/grocery_screen_1.webp";
import phone2 from "../../../../assets/grocery_screen_2.webp";
import phone3 from "../../../../assets/grocery_screen_3.webp";
import phone4 from "../../../../assets/grocery_screen_4.webp";
import phone5 from "../../../../assets/grocery_screen_5.webp";
import phone6 from "../../../../assets/grocery_screen_6.webp";
import frame from "../../../../assets/mob.png";

const phoneImages = [phone1, phone2, phone3, phone4, phone5, phone6];

const features = [
  { label: "Live Order Tracking", top: "20%", left: "-60%" },
  { label: "Secure Checkout", top: "45%", right: "-60%" },
  { label: "Smart Menu Browsing", top: "70%", left: "-60%" },
  { label: "Delivery Notifications", top: "85%", right: "-60%" },
];

const FloatingLabel = ({ label, top, left, right }) => (
  <Box
    sx={{
      position: 'absolute',
      top,
      left,
      right,
      bgcolor: 'rgba(255, 255, 255, 0.95)',
      p: 1.5,
      borderRadius: '12px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      gap: 1,
      zIndex: 20,
      width: 'max-content',
      animation: 'float 4s ease-in-out infinite',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        [left ? 'right' : 'left']: '-20px',
        transform: 'translateY(-50%)',
        width: '20px',
        height: '2px',
        bgcolor: '#ff6f1e',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        [left ? 'right' : 'left']: '-24px',
        transform: 'translateY(-50%)',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        bgcolor: '#ff6f1e',
      }
    }}
  >
    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4caf50' }} />
    <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#1a1a1a' }}>{label}</Typography>
    <style>
      {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}
    </style>
  </Box>
);

const FoodBookingPhoneCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <Box sx={{
      position: "relative",
      py: { xs: 4, md: 6 },
      backgroundColor: "#f9f9fc",
      overflow: "hidden"
    }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 5 }}>

        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8, maxWidth: "800px", mx: "auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "28px", md: "42px" }, fontWeight: 800, mb: 3, color: "#1a1a1a" }}>
              Powerful Food Ordering Apps <br /> Built for Modern Restaurants
            </Typography>
            <Typography sx={{ fontSize: "17px", color: "#666", lineHeight: 1.4 }}>
              Crafted by Vihaan Innovations, a leading food ordering & delivery app development company in India.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ position: 'relative', width: '100%', maxWidth: '1200px', mx: 'auto' }}>
          {/* Navigation Buttons */}
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            width: "120%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 20,
            pointerEvents: "none"
          }}>
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "#ff6f1e",
                border: "1px solid rgba(255, 111, 30, 0.3)",
                "&:hover": { backgroundColor: "#ff6f1e", color: "#fff" },
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                width: 55, height: 55, transition: "all 0.3s ease", pointerEvents: "auto"
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "#ff6f1e",
                border: "1px solid rgba(255, 111, 30, 0.3)",
                "&:hover": { backgroundColor: "#ff6f1e", color: "#fff" },
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                width: 55, height: 55, transition: "all 0.3s ease", pointerEvents: "auto"
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Navigation]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            speed={600}
            spaceBetween={30}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            loopedSlides={phoneImages.length}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            style={{ padding: "40px 0", width: "100%" }}
            breakpoints={{
              320: { slidesPerView: 1 },
              600: { slidesPerView: 3 },
              1000: { slidesPerView: 5 },
            }}
          >
            {phoneImages.map((img, index) => (
              <SwiperSlide key={index} style={{ width: "260px" }}>
                {({ isActive }) => (
                  <Box
                    sx={{
                      position: "relative",
                      transition: "all 0.6s cubic-bezier(0.2, 1, 0.3, 1)",
                      transform: isActive ? "scale(1.15)" : "scale(0.85)",
                      opacity: 1, // Always visible
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    <Box sx={{ position: "relative", width: "230px", height: "477px", mx: "auto" }}>

                      {/* Only show floating labels on the active slide */}
                      {isActive && features.map((feat, i) => (
                        <FloatingLabel key={i} {...feat} />
                      ))}

                      {/* Phone Screen Image (Always Visible) */}
                      <Box
                        component="img"
                        src={img}
                        alt={`App Screen ${index + 1}`}
                        sx={{
                          position: "absolute",
                          top: "10px", left: "10px",
                          width: "210px", height: "457px",
                          borderRadius: "30px",
                          objectFit: "cover",
                          zIndex: 1,
                          opacity: 1
                        }}
                      />
                      {/* Phone Frame */}
                      <Box
                        component="img"
                        src={frame}
                        alt="Phone Frame"
                        sx={{
                          position: "absolute",
                          top: 0, left: 0,
                          width: "230px", height: "477px",
                          zIndex: 2,
                          filter: isActive ? "drop-shadow(0 20px 40px rgba(0,0,0,0.2))" : "none",
                          transition: "all 0.5s ease"
                        }}
                      />
                    </Box>
                  </Box>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default FoodBookingPhoneCarousel;
