import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { 
  Palette, Layout, Smartphone, Code, Cloud, 
  Workflow, Database, Boxes, Bot, LifeBuoy 
} from "lucide-react";

const services = [
  { id: 1, name: "UI/UX Design", icon: Palette, href: "ui-ux" },
  { id: 2, name: "Web Development", icon: Layout, href: "web-dev" },
  { id: 3, name: "Mobile Apps", icon: Smartphone, href: "mobile-apps" },
  { id: 4, name: "Custom Apps", icon: Code, href: "custom-apps" },
  { id: 5, name: "Cloud", icon: Cloud, href: "cloud-dev" },
  { id: 6, name: "DevOps", icon: Workflow, href: "devops" },
  { id: 7, name: "Data Science", icon: Database, href: "data-science" },
  { id: 8, name: "Ecommerce", icon: Boxes, href: "ecommerce" },
  { id: 9, name: "AI/ML", icon: Bot, href: "ai-ml" },
  { id: 10, name: "Maintenance", icon: LifeBuoy, href: "maintenance" },
];

const QuickNav = ({ activeSection, setActiveSection }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Height of header + quicknav
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
              onClick={() => {
                scrollToSection(service.href);
                if (setActiveSection) setActiveSection(service.id);
              }}
              onMouseEnter={() => {
                if (setActiveSection) setActiveSection(service.id);
              }}
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
                  ? "linear-gradient(90deg, #2563eb, #06b6d4)"
                  : "rgba(15, 23, 42, 0.03)",
                color: isActive ? "white" : "#64748b",
                boxShadow: isActive ? "0 10px 20px -5px rgba(37, 99, 235, 0.3)" : "none",
                border: isActive ? "none" : "1px solid rgba(15, 23, 42, 0.05)",
                "&:hover": {
                  background: "linear-gradient(90deg, #2563eb, #06b6d4)",
                  color: "white",
                  border: "none",
                },
              }}
            >
              {isActive && (
                <Box
                  component={motion.div}
                  layoutId="pulse"
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
