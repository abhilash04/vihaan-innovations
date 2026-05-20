import React, { useRef } from "react";
import { Box, Container, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { keyframes } from "@mui/system";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// ✅ Image Imports
import phone1 from "../../../../assets/grocery_screen_1.webp";
import phone2 from "../../../../assets/grocery_screen_2.webp";
import phone3 from "../../../../assets/grocery_screen_3.webp";
import phone4 from "../../../../assets/grocery_screen_4.webp";
import phone5 from "../../../../assets/grocery_screen_5.webp";
import phone6 from "../../../../assets/grocery_screen_6.webp";
import frame from "../../../../assets/mob.png";

const phoneImages = [phone1, phone2, phone3, phone4, phone5, phone6];

// --- Animations ---
const floatUp = keyframes`
  0% { transform: translateY(100vh) scale(0.3); opacity: 0; }
  20% { opacity: 0.5; }
  80% { opacity: 0.5; }
  100% { transform: translateY(-100px) scale(1); opacity: 0; }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 191, 255, 0.2); }
  50% { box-shadow: 0 0 30px rgba(0, 191, 255, 0.5); }
  100% { box-shadow: 0 0 10px rgba(0, 191, 255, 0.2); }
`;

const PhoneCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const swiperRef = useRef(null);

  return (
    <Box sx={{
      position: "relative",
      py: 4,
      background: "linear-gradient(180deg, #ffffff 0%, #f0f8ff 100%)",
      overflow: "hidden"
    }}>
      {/* Background Animated Bubbles */}
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            bottom: "-100px",
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            borderRadius: "50%",
            background: "rgba(0, 191, 255, 0.1)",
            backdropFilter: "blur(2px)",
            border: "1px solid rgba(0, 191, 255, 0.2)",
            animation: `${floatUp} ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
            zIndex: 1,
            pointerEvents: "none"
          }}
        />
      ))}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 5
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Navigation Buttons - Glassmorphism */}
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          width: isMobile ? "100%" : "110%",
          px: isMobile ? 2 : 0,
          top: "50%",
          left: isMobile ? "50%" : "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
          pointerEvents: "none"
        }}>
          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(10px)",
              color: "#1b25a8",
              border: "1px solid rgba(0, 191, 255, 0.3)",
              "&:hover": {
                backgroundColor: "#00bfff",
                color: "#fff",
                transform: "scale(1.1)"
              },
              boxShadow: "0 8px 32px rgba(0, 191, 255, 0.15)",
              width: isMobile ? 30 : 55,
              height: isMobile ? 30 : 55,
              transition: "all 0.3s ease",
              pointerEvents: "auto",
              "& svg": {
                fontSize: isMobile ? "1rem" : "1.5rem"
              }
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={() => swiperRef.current?.slideNext()}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(10px)",
              color: "#1b25a8",
              border: "1px solid rgba(0, 191, 255, 0.3)",
              "&:hover": {
                backgroundColor: "#00bfff",
                color: "#fff",
                transform: "scale(1.1)"
              },
              boxShadow: "0 8px 32px rgba(0, 191, 255, 0.15)",
              width: isMobile ? 30 : 55,
              height: isMobile ? 30 : 55,
              transition: "all 0.3s ease",
              pointerEvents: "auto",
              "& svg": {
                fontSize: isMobile ? "1rem" : "1.5rem"
              }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* Swiper with 3D Coverflow */}
        <Swiper
          modules={[Autoplay, Navigation, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          speed={1000}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: isMobile ? 100 : 150,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          loopedSlides={6}
          watchSlidesProgress={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          style={{ padding: "60px 0", width: "100%" }}
        >
          {phoneImages.map((img, index) => (
            <SwiperSlide key={index} style={{ width: "260px" }}>
              {({ isActive }) => (
                <Box
                  sx={{
                    position: "relative",
                    transition: "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)",
                    transform: isActive ? "scale(1.1)" : "scale(0.85)",
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  {/* Active Glow Effect */}
                  {isActive && (
                    <Box sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "85%",
                      height: "90%",
                      borderRadius: "36px",
                      background: "radial-gradient(circle, rgba(0, 191, 255, 0.4) 0%, transparent 70%)",
                      filter: "blur(20px)",
                      animation: `${pulseGlow} 3s infinite ease-in-out`,
                      zIndex: -1
                    }} />
                  )}

                  <Box
                    sx={{
                      position: "relative",
                      width: isMobile ? "180px" : "230px",
                      height: isMobile ? "373px" : "477px",
                      mx: "auto",
                      perspective: "1000px"
                    }}
                  >
                    {/* Phone Image */}
                    <Box
                      component="img"
                      src={img}
                      alt={`Phone ${index + 1}`}
                      sx={{
                        position: "absolute",
                        top: isMobile ? "8px" : "10px",
                        left: isMobile ? "8px" : "10px",
                        width: isMobile ? "164px" : "210px",
                        height: isMobile ? "357px" : "457px",
                        borderRadius: isMobile ? "24px" : "30px",
                        objectFit: "cover",
                        zIndex: 1
                      }}
                    />

                    {/* Frame Overlay */}
                    <Box
                      component="img"
                      src={frame}
                      alt="Frame"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: isMobile ? "180px" : "230px",
                        height: isMobile ? "373px" : "477px",
                        zIndex: 2,
                        filter: isActive ? "drop-shadow(0 10px 30px rgba(0, 191, 255, 0.2))" : "none",
                        transition: "all 0.5s ease"
                      }}
                    />
                  </Box>
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default PhoneCarousel;
