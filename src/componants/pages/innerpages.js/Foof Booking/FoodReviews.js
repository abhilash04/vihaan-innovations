import React from "react";
import { Box, Typography, Container, Avatar, Rating, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Restaurant Owner",
    title: "Amazing Food Delivery Platform",
    text: "Vihaan Innovations built a powerful mobile app and website for our restaurant. Their expertise as a food ordering & delivery app development company helped us increase our online orders and improve customer experience.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Neha Verma",
    role: "Cloud Kitchen Founder",
    title: "Highly Professional Team",
    text: "Working with Vihaan Innovations was smooth and efficient. They truly stand out as a reliable food delivery app development company in India delivering scalable and user-friendly solutions.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Arjun Patel",
    role: "Food Startup Founder",
    title: "Best Solution for Restaurant Businesses",
    text: "Our restaurant needed a custom food ordering platform, and Vihaan Innovations delivered exactly what we wanted. Their experience as a food ordering & delivery app development company made the process seamless.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Karthik Reddy",
    role: "Restaurant Chain Manager",
    title: "Great Support & Development",
    text: "Vihaan Innovations helped us launch a modern food delivery system with real-time tracking and online payments. They are truly a dependable food delivery app development company in India.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=15"
  },
  {
    name: "Priya Nair",
    role: "Cloud Kitchen Owner",
    title: "Perfect Technology Partner",
    text: "From design to deployment, the team at Vihaan Innovations provided excellent service. Their expertise as a food ordering & delivery app development company helped our business grow online.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9"
  }
];

const ReviewCard = ({ review }) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 3, md: 4 },
      borderRadius: "24px",
      bgcolor: "#ffffff",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      border: "1px solid rgba(0,0,0,0.03)",
      height: "80%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
      "&:hover": {
        transform: "translateY(-15px)",
        boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
        borderColor: "#ff6f1e",
        "& .avatar-container": {
          transform: "scale(1.1)",
          boxShadow: "0 10px 20px rgba(255, 111, 30, 0.3)",
        }
      }
    }}
  >
    {/* Decorative Quote Icon Background */}
    <Typography
      sx={{
        position: 'absolute',
        top: '10px',
        right: '25px',
        fontSize: '120px',
        color: 'rgba(255,111,30,0.05)',
        fontFamily: 'serif',
        lineHeight: 1,
        pointerEvents: 'none'
      }}
    >
      "
    </Typography>

    <Rating value={review.rating} readOnly sx={{ mb: 2, color: "#ffc107" }} size="small" />

    <Typography variant="h6" sx={{ fontWeight: 700, color: "#1a1a1a", mb: 2 }}>
      “{review.title}”
    </Typography>

    <Typography sx={{ color: "#555", fontSize: "15px", lineHeight: 1.8, flexGrow: 1, mb: 4 }}>
      {review.text}
    </Typography>

    <Box sx={{ display: "flex", alignItems: "center", mt: "auto", borderTop: "1px solid rgba(0,0,0,0.05)", pt: 3 }}>
      <Box
        className="avatar-container"
        sx={{
          mr: 2,
          borderRadius: "50%",
          padding: "3px",
          border: "2px solid #ff6f1e",
          transition: "all 0.4s ease"
        }}
      >
        <Avatar src={review.avatar} sx={{ width: 56, height: 56 }} />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "16px" }}>
          {review.name}
        </Typography>
        <Typography sx={{ color: "#ff6f1e", fontSize: "13px", fontWeight: 600 }}>
          {review.role}
        </Typography>
      </Box>
    </Box>
  </Paper>
);

const FoodReviews = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: "#fafafc", overflow: 'hidden' }}>
      <Container maxWidth="lg">

        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8, maxWidth: "1000px", mx: "auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography sx={{ color: "#ff6f1e", fontWeight: 600, letterSpacing: 1.5, mb: 2, textTransform: 'uppercase' }}>
              Testimonials
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "28px", md: "38px" }, fontWeight: 800, mb: 3, color: "#1a1a1a" }}>
              What Our Clients Say About Vihaan Innovations
            </Typography>
            <Typography sx={{ fontSize: "17px", color: "#666", lineHeight: 1.4 }}>
              Trusted by businesses across the country for building scalable food ordering platforms, mobile apps, and restaurant websites that help startups grow their digital business.
            </Typography>
          </motion.div>
        </Box>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            style={{ paddingBottom: "60px", paddingTop: "20px" }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} style={{ height: "auto" }}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

          <style>
            {`
              .swiper-pagination-bullet {
                background-color: #b0b0b0;
                opacity: 0.5;
              }
              .swiper-pagination-bullet-active {
                background-color: #ff6f1e;
                opacity: 1;
              }
            `}
          </style>
        </motion.div>

      </Container>
    </Box>
  );
};

export default FoodReviews;
