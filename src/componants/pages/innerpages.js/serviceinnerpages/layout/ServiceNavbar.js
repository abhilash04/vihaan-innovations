import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, useScrollTrigger, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled, keyframes } from "@mui/system";

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const NavLink = styled(Typography)(({ theme, active }) => ({
  fontSize: "15px",
  fontWeight: 500,
  color: active ? "#ffffff" : "rgba(255, 255, 255, 0.8)",
  cursor: "pointer",
  transition: "all 0.2s ease",
  position: "relative",
  fontFamily: "Inter, sans-serif",
  "&:hover": {
    color: "#ffffff",
  },
  "&::after": active ? {
    content: '""',
    position: "absolute",
    bottom: "-5px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    backgroundColor: "#06b6d4",
  } : {},
}));

const ServiceNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: trigger ? "rgba(10, 22, 40, 0.85)" : "#0a1628",
        backdropFilter: trigger ? "blur(20px)" : "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        transition: "all 0.3s ease",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", height: "70px", px: { xs: 2, md: 6 } }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: "#ffffff", fontFamily: "Urbanist, sans-serif" }}>
            Vihaan
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 800, color: "#06b6d4", ml: 0.5, fontFamily: "Urbanist, sans-serif" }}>
            Innovations
          </Typography>
        </Box>

        {/* Desktop Nav Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {navItems.map((item, index) => (
            <NavLink key={item} active={index === 1 ? 1 : 0}>
              {item}
            </NavLink>
          ))}
        </Box>

        {/* Right Action */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #2563eb, #06b6d4)",
              color: "#ffffff",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "50px",
              px: 3,
              py: 1,
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(37, 99, 235, 0.15)",
              transition: "transform 0.2s ease",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                animation: `${shimmer} 4s infinite`,
              },
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            Get a Quote
          </Button>
        </Box>

        {/* Mobile Menu Toggle */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#ffffff" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            bgcolor: "#0a1628",
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 20, right: 20, color: "#ffffff" }}
          onClick={() => setMobileOpen(false)}
        >
          <CloseIcon />
        </IconButton>
        <List sx={{ width: "100%", textAlign: "center" }}>
          {navItems.map((item) => (
            <ListItem key={item} onClick={() => setMobileOpen(false)} sx={{ justifyContent: "center", py: 2 }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: { fontSize: "24px", fontWeight: 600, color: "#ffffff", fontFamily: "Urbanist, sans-serif" },
                }}
              />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #2563eb, #06b6d4)",
            color: "#ffffff",
            fontWeight: 600,
            borderRadius: "50px",
            px: 4,
            py: 1.5,
            mt: 4,
            width: "80%",
          }}
        >
          Get a Quote
        </Button>
      </Drawer>
    </AppBar>
  );
};

export default ServiceNavbar;
