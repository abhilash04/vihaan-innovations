import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const HubQuickNav = ({ activeSection, navigationItems, themeColor = "#2563eb" }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      sx={{
        width: "100%",
        bgcolor: "rgba(255, 255, 255, 0.8)",
        borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
        backdropFilter: "blur(20px)",
        py: 1.5,
        position: "sticky",
        top: { xs: 64, md: 80 },
        zIndex: 1000,
        overflowX: "auto",
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          px: 4,
          minWidth: "max-content",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        {navigationItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <Box
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 3,
                py: 1,
                borderRadius: "100px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: isActive
                  ? `linear-gradient(90deg, ${themeColor}, #8b5cf6)`
                  : "rgba(15, 23, 42, 0.03)",
                color: isActive ? "white" : "#64748b",
                boxShadow: isActive ? `0 10px 20px -5px ${themeColor}40` : "none",
                border: isActive ? "none" : "1px solid rgba(15, 23, 42, 0.05)",
                "&:hover": {
                  background: isActive 
                    ? `linear-gradient(90deg, ${themeColor}, #8b5cf6)` 
                    : "rgba(15, 23, 42, 0.08)",
                  color: isActive ? "white" : "#0f172a",
                },
              }}
            >
              {isActive && (
                <Box
                  component={motion.div}
                  layoutId="pulse-training"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "white",
                  }}
                />
              )}
              <Icon size={16} />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default HubQuickNav;
