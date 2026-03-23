import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Search, Car, Calendar, CreditCard, History, MapPin } from "lucide-react";

const tabs = [
  { id: "home", label: "Home Screen", icon: Home },
  { id: "search", label: "Search & Filter", icon: Search },
  { id: "detail", label: "Car Detail Page", icon: Car },
  { id: "booking", label: "Booking Flow", icon: Calendar },
  { id: "payment", label: "Payment Screen", icon: CreditCard },
  { id: "bookings", label: "My Bookings", icon: History },
];

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const phoneFrameStyle = {
    width: { xs: "280px", sm: "320px" },
    height: { xs: "560px", sm: "640px" },
    background: "#0d0d0d", // dark bezel keeps it looking like a phone
    borderRadius: "36px",
    border: "12px solid #1a1a1a",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 0 20px rgba(0,0,0,0.8)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  };

  const ScreenContent = ({ type }) => {
    const headerStyle = {
      p: 2,
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      alignItems: "center",
      gap: 1,
      background: "#fdfdfd",
    };

    if (type === "home") {
      return (
        <Box sx={{ flex: 1, p: 2, background: "#ffffff" }}>
          <Box sx={headerStyle}>
            <Home size={18} color="#fd544e" />
            <Typography sx={{ color: "#222", fontWeight: 700, fontSize: "14px" }}>
              Explore Cars
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ color: "#111", fontSize: "15px", fontWeight: 800, mb: 1.5 }}>
              Premium Rides
            </Typography>
            {[1, 2, 3].map((_, i) => (
              <Box
                key={i}
                sx={{
                  background: "#f9f9f9",
                  p: 1.5,
                  borderRadius: "12px",
                  mb: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  border: "1px solid rgba(0,0,0,0.03)",
                }}
              >
                <Box sx={{ width: 60, height: 40, background: "#eee", borderRadius: "8px" }} />
                <Box>
                  <Typography sx={{ color: "#222", fontSize: "12px", fontWeight: 700 }}>
                    Sedan model {i + 1}
                  </Typography>
                  <Typography sx={{ color: "#666", fontSize: "10px" }}>
                    From ₹1500/day
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      );
    }
    if (type === "search") {
      return (
        <Box sx={{ flex: 1, p: 2, background: "#ffffff" }}>
          <Box sx={headerStyle}>
            <Search size={18} color="#f78361" />
            <Typography sx={{ color: "#222", fontWeight: 700, fontSize: "14px" }}>
              Search Results
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Box sx={{ background: "#f9f9f9", p: 1, borderRadius: "8px", mb: 2, border: "1px solid rgba(0,0,0,0.05)" }}>
              <Typography sx={{ color: "#666", fontSize: "12px" }}>
                Filter: AC • SUV • Manual
              </Typography>
            </Box>
            <Box sx={{ height: 120, background: "#f0f0f0", borderRadius: "12px", mb: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <MapPin size={24} color="#888" />
            </Box>
            <Box sx={{ background: "#f9f9f9", p: 1.5, borderRadius: "12px" }}>
              <Typography sx={{ color: "#111", fontSize: "12px", fontWeight: 700 }}>
                SUV XUV700
              </Typography>
              <Typography sx={{ color: "#fd544e", fontSize: "12px", fontWeight: 800 }}>
                ₹2500/day
              </Typography>
            </Box>
          </Box>
        </Box>
      );
    }
    return (
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        <Typography sx={{ color: "#222", fontSize: "14px", fontWeight: 600 }}>{type} View</Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        py: 12,
        px: 4,
        background: "#f9f9f9", // Off-white dividing band
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(253, 84, 78, 0.04) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#fd544e",
            fontWeight: 600,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Section 5
        </Typography>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", color: "#1a1a1a", fontWeight: 800, mb: 2 }}
        >
          App Showcase
        </Typography>
        <Typography
          sx={{ textAlign: "center", color: "#666", maxWidth: 600, mx: "auto", mb: 6 }}
        >
          Explore our sleek mobile application interface that makes booking effortless
        </Typography>
      </motion.div>

      {/* Tabs */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1.5,
          mb: 8,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === index;
          return (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              sx={{
                background: isActive
                  ? "linear-gradient(135deg, #f78361 0%, #fd544e 100%)"
                  : "#ffffff",
                color: isActive ? "#fff" : "#444",
                borderRadius: "20px",
                px: 2,
                py: 1,
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                border: "1px solid",
                borderColor: isActive ? "transparent" : "rgba(0,0,0,0.08)",
                boxShadow: isActive ? "0 4px 12px rgba(253, 84, 78, 0.2)" : "none",
                "&:hover": {
                  background: isActive
                    ? "linear-gradient(135deg, #f78361 0%, #fd544e 100%)"
                    : "#f4f4f4",
                },
              }}
            >
              <Icon size={14} />
              {tab.label}
            </Button>
          );
        })}
      </Box>

      {/* Carousel */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: -10 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            ...phoneFrameStyle,
            transform: "scale(0.85) rotate(-5deg)",
            opacity: { xs: 0, md: 0.3 },
            display: { xs: "none", md: "flex" },
          }}
        >
          <ScreenContent type="search" />
        </Box>

        <motion.div
           animate={{ y: [0, -15, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Box sx={phoneFrameStyle}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <ScreenContent type={tabs[activeTab].id} />
              </motion.div>
            </AnimatePresence>
          </Box>
        </motion.div>

        <Box
          sx={{
            ...phoneFrameStyle,
            transform: "scale(0.85) rotate(5deg)",
            opacity: { xs: 0, md: 0.3 },
            display: { xs: "none", md: "flex" },
          }}
        >
          <ScreenContent type="home" />
        </Box>
      </Box>
    </Box>
  );
};

export default AppShowcase;
