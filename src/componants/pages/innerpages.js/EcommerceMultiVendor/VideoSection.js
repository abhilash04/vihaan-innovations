// VideoSection.js
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import videoSrc from "../../../../assets/ecommerce-Banner-2.mp4";

const VideoSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        overflow: "hidden",
        position: "relative",
        height: { xs: "auto", md: "75vh" },
        minHeight: "500px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "#fff",
        }}
      >
        {/* 🎥 Background Video with Zoom-in Animation */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <Box
            component="video"
            autoPlay
            loop
            muted
            playsInline
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
        </motion.div>

        {/* ✨ Creative Sky-Blue Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(142, 227, 255, 0.7) 0%, rgba(38, 48, 54, 0.4) 50%, rgba(255, 255, 255, 0.1) 100%)",
            zIndex: 1,
          }}
        />

        {/* 💬 Animated Overlay Content */}
        <Container
          maxWidth="xl"
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{
            position: "relative",
            zIndex: 2,
            py: { xs: 8, md: 0 },
            px: { xs: 2, md: 5, lg: 8 },
            mx: { xs: "auto", md: 0 }, // Shift left on desktop
          }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.4rem", md: "46px" }, // Slightly larger
                lineHeight: 1.1,
                my: 3,
                maxWidth: "850px", // Increased width
                letterSpacing: "-0.02em",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Bangalore’s Leading <span style={{ color: "#00bfffff" }}>Multi-Vendor</span> eCommerce Website Development
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", md: "19px" }, // Slightly larger
                color: "#fff",
                mb: 2,
                maxWidth: "750px", // Increased width
                lineHeight: 1.4,
              }}
            >
              Create a powerful multi-vendor ecommerce platform where multiple sellers can manage products and customers buy everything in one place.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", md: "19px" }, // Slightly larger
                color: "#fff",
                mb: 6,
                maxWidth: "750px", // Increased width
                lineHeight: 1.4,
              }}
            >
              At <b>Vihaan Innovations</b>, we develop scalable <b>multi-vendor eCommerce platforms</b> with vendor dashboards, commission management, secure payments, and centralized admin control.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                textTransform: "none",
                backgroundColor: "#00bfffff",
                color: "#fff",
                borderRadius: "25px",
                px: 5,
                py: 1.6,
                fontWeight: 700,
                fontSize: "1.1rem",
                boxShadow: "0 10px 20px rgba(0, 191, 255, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#07b0e8ff",
                  boxShadow: "0 15px 30px rgba(0, 191, 255, 0.4)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Get Free Demo
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box >
  );
};

export default VideoSection;
