import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";

// Dummy images - replace with actual assets if needed
import phone1 from "../../../../assets/multivenderweb.png";

const MultiVendorMobileApps = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box sx={{ py: 5, background: "linear-gradient(180deg, #f8faff 0%, #e0f2ff 100%)", overflow: "hidden" }}>
      <Container
        maxWidth="lg"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Left Section: Mobile App Images */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={phone1}
            alt="Mobile App 1"
            sx={{
              height: { xs: "350px", md: "500px" },
              position: "relative",
              zIndex: 2,
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
            }}
          />

          {/* Creative Background Shape */}
          <Box
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, rgba(0,191,255,0.15) 0%, transparent 70%)",
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />
        </Box>

        {/* Right Section: Text Content */}
        <Box
          component={motion.div}
          variants={textVariants}
          sx={{ flex: 1 }}
        >
          {/* Heading */}
          <Typography
            sx={{
              color: "#1d1d1f",
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2rem" },
              mb: 2,
              lineHeight: 1.2
            }}
          >
            Powerful Multi Vendor Ecommerce Website Platform <span style={{ color: "#00bfff" }}>Website Platform </span>
          </Typography>

          {/* Subheading */}
          <Typography
            sx={{
              color: "#435963",
              mb: 4,
              lineHeight: 1.4,
              fontSize: "18px",
              maxWidth: "100%",
            }}
          >
            A scalable multi vendor ecommerce website designed for smooth shopping with secure architecture and high performance.

          </Typography>

          {/* Paper 1 */}
          <Paper
            elevation={0}
            sx={{
              p: 2,
              mb: 3,
              borderRadius: "20px",
              display: "flex",
              gap: 3,
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              position: "relative",
              alignItems: "flex-start",
              bgcolor: "#fff",
              border: "1px solid rgba(0, 191, 255, 0.1)",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 40px rgba(0, 191, 255, 0.1)",
                borderColor: "#00bfff",
                "& .icon-box": {
                  bgcolor: "#00bfff",
                  color: "#fff"
                }
              },
            }}
          >
            <Box
              className="icon-box"
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                bgcolor: "#f0f7ff",
                color: "#00bfff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.3s ease",
              }}
            >
              1
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: "1.2rem",
                  color: "#1d1d1f",
                }}
              >
                Unified Marketplace Storefront
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#5e6d7a",
                  lineHeight: 1.5,
                }}
              >
                Our multi vendor ecommerce website development displays products from multiple vendors in one marketplace, making shopping simple for customers.
              </Typography>
            </Box>
          </Paper>

          {/* Paper 2 */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: "20px",
              display: "flex",
              gap: 3,
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              position: "relative",
              alignItems: "flex-start",
              bgcolor: "#fff",
              border: "1px solid rgba(0, 191, 255, 0.1)",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 40px rgba(0, 191, 255, 0.1)",
                borderColor: "#00bfff",
                "& .icon-box": {
                  bgcolor: "#00bfff",
                  color: "#fff"
                }
              },
            }}
          >
            <Box
              className="icon-box"
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                bgcolor: "#f0f7ff",
                color: "#00bfff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.3s ease",
              }}
            >
              2
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: "1.2rem",
                  color: "#1d1d1f",
                }}
              >
                Complete Multi Vendor Ecommerce Website Development Solution
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#5e6d7a",
                  lineHeight: 1.5,
                }}
              >
                Advanced multi vendor ecommerce website development that helps businesses manage vendors, expand product listings, and improve customer experience.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default MultiVendorMobileApps;
