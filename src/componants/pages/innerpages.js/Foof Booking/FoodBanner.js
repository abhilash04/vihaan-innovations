import React from "react";
import { Box, Typography, Stack, useMediaQuery, useTheme, Button, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import phone1 from "../../../../assets/dashbord.webp";
// You can replace these logic/icons with specific SVGs or actual image assets if available
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

const TrustBadge = ({ title, desc }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#ffffff99', backdropFilter: 'blur(5px)', p: 1, borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
    <VerifiedUserIcon color="primary" />
    <Box>
      <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>{title}</Typography>
      <Typography sx={{ fontSize: '11px', color: '#666' }}>{desc}</Typography>
    </Box>
  </Box>
);

const FoodBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const floatingIcons = [
    { Icon: LocalPizzaIcon, color: '#ff6b6b', top: '10%', left: '5%' },
    { Icon: FastfoodIcon, color: '#feca57', top: '70%', left: '10%' },
    { Icon: RestaurantMenuIcon, color: '#1dd1a1', top: '20%', right: '5%' },
    { Icon: EmojiFoodBeverageIcon, color: '#5f27cd', top: '65%', right: '15%' },
  ];

  return (
    <Box sx={{
      backgroundColor: "#eff6f7",
      pt: { xs: 8, md: 16 },
      pb: { xs: 8, md: 4 },
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            color: item.color,
            opacity: 0.2,
            zIndex: 0
          }}
        >
          <item.Icon sx={{ fontSize: '60px' }} />
        </motion.div>
      ))}

      {/* Content Container */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          px: 2,
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left Section: Text Content */}
        <Box sx={{ flex: 1, pr: { md: 4 }, mb: { xs: 4, md: 0 } }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography sx={{ fontWeight: 600, fontSize: "16px", mb: "15px", letterSpacing: "2px", color: '#ff6f1e' }}>
              INNOVATIVE DIGITAL SOLUTIONS FOR RESTAURANTS & STARTUPS
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '32px', md: '48px' }, mb: "20px", lineHeight: 1.2, color: '#1a1a1a' }}>
              Food Delivery App Development & Smart Digital Platforms
            </Typography>
            <Typography sx={{ color: '#585858', fontWeight: 500, fontSize: "16px", mb: "30px", lineHeight: 1.8, maxWidth: '600px' }}>
              We specialize in food delivery app development and advanced digital platforms including restaurant portals, multi-vendor marketplaces, admin dashboards, and CRM systems. Our scalable solutions help restaurants, startups, and enterprises launch, manage, and grow their online business efficiently.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff6f1e",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  fontSize: "16px",
                  fontWeight: "600",
                  boxShadow: "0 10px 20px rgba(255,111,30,0.3)",
                  "&:hover": { backgroundColor: "#e65a10", transform: 'translateY(-2px)' },
                  transition: 'all 0.3s ease'
                }}
              >
                Start Your Food Delivery Platform
              </Button>
            </Stack>

            {/* Trust Badges */}
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ display: 'flex' }}>
                {[1, 2, 3].map((i) => (
                  <Avatar key={i} src={`https://i.pravatar.cc/150?img=${i + 10}`} sx={{ width: 40, height: 40, border: '2px solid white', ml: i !== 1 ? '-15px' : 0 }} />
                ))}
              </Box>
              <Box>
                <Box sx={{ display: 'flex', color: '#ffc107' }}>
                  {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} fontSize="small" />)}
                </Box>
                <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#333' }}>Trusted by 100+ Businesses</Typography>
              </Box>
            </Stack>
          </motion.div>
        </Box>

        {/* Right Section: Graphics */}
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            display: "flex",
            justifyContent: "center",
            width: '100%',
            height: { xs: "350px", md: "500px" }
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            {/* Dashboard Mockup (Background) */}
            <Box
              component="img"
              src={phone1}
              alt="Dashboard Illustration"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: "absolute",
                zIndex: 2,
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
              }}
            />
            {/* You can add more absolute positioned floating UI elements here if needed */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'absolute', top: '10%', right: '-5%', zIndex: 3 }}
            >
              <TrustBadge title="Real-time Sync" desc="Cloud Server" />
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'absolute', bottom: '15%', left: '-5%', zIndex: 3 }}
            >
              <TrustBadge title="Secure Payments" desc="PCI Compliant" />
            </motion.div>
          </motion.div>
        </Box>
      </Box>

    </Box>
  );
};

export default FoodBanner;
