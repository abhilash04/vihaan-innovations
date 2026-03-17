import React from "react";
import { Box, Typography, Grid, Paper, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import centerImage from "../../../../assets/serve-your-customers-want-scaled-1.jpg";

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        px: 2,
        pt: 2,
        height: '100%',
        borderRadius: "24px",
        bgcolor: "#f0f8ff",
        boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        border: "1px solid rgba(0,0,0,0.03)",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
          borderColor: "#ff6f1e",
          "& .icon-wrapper": {
            bgcolor: "#ff6f1e",
            color: "#fff"
          }
        }
      }}
    >
      <Box
        className="icon-wrapper"
        sx={{
          width: 70,
          height: 70,
          borderRadius: "16px",
          bgcolor: "#ffffff",
          color: "#ff6f1e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          transition: "all 0.3s ease"
        }}
      >
        <Icon sx={{ fontSize: 35 }} />
      </Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: "#1a1a1a" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#666", fontSize: "15px", lineHeight: 1.4 }}>
        {description}
      </Typography>
    </Paper>
  </motion.div>
);

const CustomersWant = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 16 }, bgcolor: "#ffffff" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>

        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8, maxWidth: "800px", mx: "auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, mb: 2, color: "#1a1a1a" }}>
              Serve Your Customers the Smarter Way
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "#666", lineHeight: 1.4 }}>
              Built by the Best Food Delivery App Development Company
            </Typography>
          </motion.div>
        </Box>

        {/* Content Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 12 }}>

          {/* Top Row: Takeaway | Image | Delivery */}
          <Grid container spacing={4} alignItems="stretch" justifyContent="center">

            {/* Left Card: Takeaway */}
            <Grid item xs={12} md={4}>
              <ServiceCard
                icon={TakeoutDiningIcon}
                title="Takeaway Orders"
                description="Let customers place orders online and pick them up instantly. Our system built by the best food delivery app development company ensures fast and organized takeaway management."
                delay={0.1}
              />
            </Grid>

            {/* Center Image */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ width: '100%', display: 'flex' }}
              >
                <Box
                  component="img"
                  src={centerImage}
                  alt="Center Illustration"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '30px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                />
              </motion.div>
            </Grid>

            {/* Right Card: Delivery */}
            <Grid item xs={12} md={4}>
              <ServiceCard
                icon={DeliveryDiningIcon}
                title="Online Delivery"
                description="Manage deliveries smoothly with real-time tracking and automated order updates powered by the best food delivery app development company."
                delay={0.2}
              />
            </Grid>

          </Grid>
        </Box>
      </Box>
      {/* Bottom Row: QR Code centered and wider */}
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <ServiceCard
            icon={QrCodeScannerIcon}
            title="QR Code Dine-in"
            description="Customers scan, browse the menu, and order directly from their phones. A contactless experience created by the best food delivery app development company."
            delay={0.3}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomersWant;
