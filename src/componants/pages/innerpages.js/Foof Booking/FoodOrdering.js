import React from "react";
import { Box, Typography, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import PeopleIcon from "@mui/icons-material/People";
import InsightsIcon from "@mui/icons-material/Insights";

// Background Food Icons
const bgIcons = ["🍕", "🍔", "🥗", "🍜"];

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    style={{ height: "100%" }}
  >
    <Paper
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        borderRadius: "20px",
        p: 3,
        height: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "translateY(-12px)",
          boxShadow: "0 22px 40px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "#f0f8ff",
          p: 1.5,
          borderRadius: "50%",
          mb: 2,
          color: "#ff6f1e"
        }}
      >
        <Icon sx={{ fontSize: 35 }} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "#1a1a1a", fontSize: "18px" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#666", fontSize: "14px", lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Paper>
  </motion.div>
);

const FoodOrdering = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const ecosystemNodes = [
    { icon: <SmartphoneIcon sx={{ fontSize: isMobile ? 30 : 40 }} />, label: "Customer Ordering App", delay: 0 },
    { icon: <RestaurantMenuIcon sx={{ fontSize: isMobile ? 30 : 40 }} />, label: "Restaurant Panel", delay: 0.2 },
    { icon: <DashboardIcon sx={{ fontSize: isMobile ? 30 : 40 }} />, label: "Admin Dashboard", delay: 0.4 },
    { icon: <DeliveryDiningIcon sx={{ fontSize: isMobile ? 30 : 40 }} />, label: "Delivery App", delay: 0.6 },
    { icon: <PeopleIcon sx={{ fontSize: isMobile ? 30 : 40 }} />, label: "CRM System", delay: 0.8 },
  ];

  return (
    <Box sx={{ py: isMobile ? 4 : 6, position: "relative", overflow: "hidden", bgcolor: "#fafafa" }}>
      {/* Floating Background Icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 20, -20, 0]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            fontSize: `${Math.random() * 40 + 30}px`,
            opacity: 0.1,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 90}%`,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          {bgIcons[i % bgIcons.length]}
        </motion.div>
      ))}

      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3, position: "relative", zIndex: 1 }}>

        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 4, maxWidth: "800px", mx: "auto" }}>
          <Typography variant="h2" sx={{ fontSize: isMobile ? "28px" : "42px", fontWeight: 800, mb: 3, color: "#1a1a1a" }}>
            Next-Generation Digital Food Platforms
          </Typography>
          <Typography sx={{ fontSize: "17px", color: "#666", lineHeight: 1.4 }}>
            Transform your restaurant into a fully automated online ordering platform with our intelligent food delivery apps design, built to manage orders, customers, payments, and delivery operations seamlessly.
          </Typography>
        </Box>

        {/* Central Ecosystem Layout */}
        <Box sx={{ mb: 6 }}>
          {isMobile ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', maxWidth: '400px', mx: 'auto', }}>
              {/* Vertical Connecting Line */}
              <Box sx={{
                position: 'absolute',
                left: '50px',
                top: '35px',
                bottom: '35px',
                width: '2px',
                bgcolor: '#e0e0e0',
                zIndex: 0
              }} />

              {ecosystemNodes.map((node, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: node.delay }}
                  style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px', position: 'relative', zIndex: 1 }}
                >
                  <Box sx={{
                    width: 70, height: 70, borderRadius: '50%', bgcolor: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)', color: '#ff6f1e',
                    border: '2px solid #f0f8ff', flexShrink: 0
                  }}>
                    {node.icon}
                  </Box>
                  <Box sx={{
                    bgcolor: '#fff',
                    px: 3,
                    py: 2,
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    flex: 1,
                    border: '1px solid #f0f0f0',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: '-8px',
                      top: '50%',
                      transform: 'translateY(-50%) rotate(45deg)',
                      width: '16px',
                      height: '16px',
                      bgcolor: '#fff',
                      borderLeft: '1px solid #f0f0f0',
                      borderBottom: '1px solid #f0f0f0',
                    }
                  }}>
                    <Typography sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '15px' }}>{node.label}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          ) : (
            <Box sx={{ position: 'relative', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Central connecting line */}
              <Box sx={{ position: 'absolute', width: '80%', height: '2px', bgcolor: '#e0e0e0', top: '42%', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative', zIndex: 1 }}>
                {ecosystemNodes.map((node, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: node.delay }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}
                  >
                    <Box sx={{
                      width: 80, height: 80, borderRadius: '50%', bgcolor: '#f0f8ff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)', color: '#ff6f1e', mb: 2,
                      border: '4px solid #fff'
                    }}>
                      {node.icon}
                    </Box>
                    <Typography sx={{ fontWeight: 600, textAlign: 'center', color: '#444' }}>{node.label}</Typography>
                  </motion.div>
                ))}
              </Box>
            </Box>
          )}
        </Box>

        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 700, mb: 4, color: '#333' }}>
          Powerful Food Delivery Apps Design Ecosystem
        </Typography>

        {/* Feature Cards Grid */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          rowGap: isMobile ? "80px" : "80px",
          columnGap: isMobile ? "20px" : "30px",
          mb: isMobile ? 6 : 8,
        }}>
          <FeatureCard
            icon={SmartphoneIcon}
            title="Customer Food Ordering App"
            description="Allow customers to browse menus, place orders, track delivery, and make secure payments through beautifully designed mobile apps built with our food delivery apps design expertise."
            delay={0.1}
          />
          <FeatureCard
            icon={RestaurantMenuIcon}
            title="Restaurant Order Management"
            description="Restaurants can easily manage incoming orders, update menus, track sales, and handle customers through an intuitive restaurant dashboard."
            delay={0.2}
          />
          <FeatureCard
            icon={DashboardIcon}
            title="Smart Admin Dashboard"
            description="Monitor orders, restaurant performance, delivery operations, and revenue analytics with a powerful centralized admin system."
            delay={0.3}
          />
          <FeatureCard
            icon={DeliveryDiningIcon}
            title="Delivery Partner App"
            description="Real-time delivery management with route optimization, order notifications, and live tracking for efficient delivery operations."
            delay={0.4}
          />
          <FeatureCard
            icon={PeopleIcon}
            title="CRM & Customer Engagement"
            description="Advanced CRM tools help restaurants manage customer data, loyalty programs, promotions, and personalized marketing campaigns."
            delay={0.5}
          />
          <FeatureCard
            icon={InsightsIcon}
            title="Business Analytics & Reports"
            description="Gain valuable insights into your restaurant's performance with detailed sales, customer, and marketing reports to make data-driven decisions."
            delay={0.6}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FoodOrdering;
