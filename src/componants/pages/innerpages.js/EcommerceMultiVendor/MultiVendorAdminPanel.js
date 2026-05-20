import React from "react";
import { Box, Typography, Paper, Container, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

// Dummy images - replace with actual assets if needed
import adminImg from "../../../../assets/mutilvendor-dashboard.png";

const MultiVendorAdmin = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        {/* Left Section: Admin Dashboard Image */}
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
            src={adminImg}
            alt="Super Admin Panel"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              position: "relative",
              zIndex: 2,
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
            }}
          />
          {/* Decorative Shape */}
          <Box
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              background: "linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, transparent 100%)",
              borderRadius: "40px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
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
            Multi Vendor Marketplace <span style={{ color: "#00bfff" }}>Admin Dashboard</span>
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
            A powerful admin panel for managing your multi vendor ecommerce website with centralized control over products, vendors, and commissions.
          </Typography>

          {/* Paper 1 */}
          <Paper
            elevation={0}
            sx={{
              p: isMobile ? 3 : 2,
              mb: 3,
              borderRadius: "20px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 2 : 3,
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              position: "relative",
              alignItems: "flex-start",
              bgcolor: "#fff",
              border: "1px solid rgba(0, 191, 255, 0.1)",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 40px rgba(0, 191, 255, 0.1)",
                borderColor: "#00bfff",
                "& .icon-number": {
                  bgcolor: "#00bfff",
                  color: "#fff"
                }
              },
            }}
          >
            {isMobile ? (
              <>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                  <Box
                    className="icon-number"
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      bgcolor: "#f0f7ff",
                      color: "#00bfff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontWeight: 800,
                      transition: "all 0.3s ease",
                    }}
                  >
                    5
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#1d1d1f",
                    }}
                  >
                    Advanced Platform Settings
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#5e6d7a",
                    lineHeight: 1.5,
                    textAlign: "left"
                  }}
                >
                  The super admin gets complete control to manage settings, features, and configurations across the entire marketplace.
                </Typography>
              </>
            ) : (
              <>
                <Box
                  className="icon-number"
                  sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    bgcolor: "#f0f7ff",
                    color: "#00bfff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontWeight: 800,
                    transition: "all 0.3s ease",
                  }}
                >
                  5
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
                    Advanced Platform Settings
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#5e6d7a",
                      lineHeight: 1.5,
                    }}
                  >
                    The super admin gets complete control to manage settings, features, and configurations across the entire marketplace.
                  </Typography>
                </Box>
              </>
            )}
          </Paper>

          {/* Paper 2 */}
          <Paper
            elevation={0}
            sx={{
              p: isMobile ? 3 : 2,
              borderRadius: "20px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 2 : 3,
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              position: "relative",
              alignItems: "flex-start",
              bgcolor: "#fff",
              border: "1px solid rgba(0, 191, 255, 0.1)",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 40px rgba(0, 191, 255, 0.1)",
                borderColor: "#00bfff",
                "& .icon-number": {
                  bgcolor: "#00bfff",
                  color: "#fff"
                }
              },
            }}
          >
            {isMobile ? (
              <>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                  <Box
                    className="icon-number"
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      bgcolor: "#f0f7ff",
                      color: "#00bfff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontWeight: 800,
                      transition: "all 0.3s ease",
                    }}
                  >
                    6
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#1d1d1f",
                    }}
                  >
                    Smart Vendor Management
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#5e6d7a",
                    lineHeight: 1.5,
                    textAlign: "left"
                  }}
                >
                  Monitor vendor activities, track performance, and manage commissions easily through the centralized admin dashboard.
                </Typography>
              </>
            ) : (
              <>
                <Box
                  className="icon-number"
                  sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    bgcolor: "#f0f7ff",
                    color: "#00bfff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontWeight: 800,
                    transition: "all 0.3s ease",
                  }}
                >
                  6
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
                    Smart Vendor Management
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#5e6d7a",
                      lineHeight: 1.5,
                    }}
                  >
                    Monitor vendor activities, track performance, and manage commissions easily through the centralized admin dashboard.
                  </Typography>
                </Box>
              </>
            )}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default MultiVendorAdmin;
