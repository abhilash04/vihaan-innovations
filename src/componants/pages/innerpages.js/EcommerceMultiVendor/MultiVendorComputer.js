import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";

// Dummy images - replace with actual assets if needed
import computerImg from "../../../../assets/multivendermobileapp.png";

const MultiVendorComputer = () => {
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box sx={{ py: 5, background: "linear-gradient(180deg, #ffffff 0%, #f0f8ff 100%)", overflow: "hidden" }}>
      <Container
        maxWidth="lg"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Right Section: Web App Image */}
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
            src={computerImg}
            alt="Web Application"
            sx={{
              width: "100%",
              maxWidth: "550px",
              height: "auto",
              position: "relative",
              zIndex: 2,
              filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.15))",
            }}
          />
          {/* Decorative Circle */}
          <Box
            sx={{
              position: "absolute",
              width: "350px",
              height: "350px",
              background: "radial-gradient(circle, rgba(27, 37, 168, 0.08) 0%, transparent 70%)",
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />
        </Box>

        {/* Left Section: Text Content */}
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
            Ecommerce Multi Vendor <span style={{ color: "#00bfff" }}>App Development</span>
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
            Build a powerful ecommerce multi vendor app that allows multiple sellers to list products while customers can browse, compare, and purchase easily from one platform.

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
              backgroundColor: '#ecf5ff',
              border: "1px solid #00bfff",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 40px rgba(0, 191, 255, 0.1)",
                borderColor: "#fff",
                bgcolor: "#ecf5ff",
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
                bgcolor: "#fff",
                color: "#1b25a8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
              }}
            >
              3
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
                Branded Multi Vendor Ecommerce App for Customers
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#5e6d7a",
                  lineHeight: 1.5,
                }}
              >
                Our multi vendor ecommerce app helps businesses increase engagement by providing customers with a smooth and convenient marketplace shopping experience.
              </Typography>
            </Box>
          </Paper>

          {/* Paper 2 */}
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
              backgroundColor: '#ecf5ff',
              border: "1px solid #00bfff",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 40px rgba(0, 191, 255, 0.1)",
                borderColor: "#fff",
                bgcolor: "#ecf5ff",
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
                bgcolor: "#fff",
                color: "#1b25a8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
              }}
            >
              4
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
                User-Friendly Ecommerce Multi Vendor App
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#5e6d7a",
                  lineHeight: 1.5,
                }}
              >
                We design fast and intuitive ecommerce multi vendor apps with easy navigation, secure checkout, and seamless product browsing to improve customer satisfaction.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default MultiVendorComputer;
