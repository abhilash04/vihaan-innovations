import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { 
  Search, MousePointer2, Share2, FileEdit, Mail, 
  BarChart3, Youtube, Users, Zap, Award 
} from "lucide-react";

const services = [
  { id: 1, name: "SEO", icon: Search, href: "seo" },
  { id: 2, name: "SEM/PPC", icon: MousePointer2, href: "sem" },
  { id: 3, name: "Social Media", icon: Share2, href: "smm" },
  { id: 4, name: "Content", icon: FileEdit, href: "content-marketing" },
  { id: 5, name: "Email", icon: Mail, href: "email-marketing" },
  { id: 6, name: "Analytics", icon: BarChart3, href: "analytics" },
  { id: 7, name: "Video", icon: Youtube, href: "video-marketing" },
  { id: 8, name: "Influencer", icon: Users, href: "influencer" },
];

const QuickNav = ({ activeSection }) => {
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
        {services.map((service) => {
          const isActive = activeSection === service.id;
          const Icon = service.icon;

          return (
            <Box
              key={service.id}
              onClick={() => scrollToSection(service.href)}
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
                  ? "linear-gradient(90deg, #2563eb, #f59e0b)"
                  : "rgba(15, 23, 42, 0.03)",
                color: isActive ? "white" : "#64748b",
                boxShadow: isActive ? "0 10px 20px -5px rgba(37, 99, 235, 0.3)" : "none",
                border: isActive ? "none" : "1px solid rgba(15, 23, 42, 0.05)",
                "&:hover": {
                  background: isActive 
                    ? "linear-gradient(90deg, #2563eb, #f59e0b)" 
                    : "rgba(15, 23, 42, 0.08)",
                  color: isActive ? "white" : "#0f172a",
                },
              }}
            >
              {isActive && (
                <Box
                  component={motion.div}
                  layoutId="pulse-marketing"
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
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {service.name}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default QuickNav;
