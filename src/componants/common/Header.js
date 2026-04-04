import React, { useState, useEffect } from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const announcements = [
  <span>
    <strong>Tradition Taste</strong> - Is the trade name and{" "}
    <strong>Ajji's Recipe</strong> is the brand name.
  </span>,
  <span>
    <strong>Tradition Taste</strong> — Inspired by cherished recipes of our
    beloved grandmother, Jayashree Ajji.
  </span>,
];

const Header = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ background: "#eb6800", color: "#fff", py: 1 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box 
          sx={{ 
            flexGrow: 1, 
            textAlign: "center", 
            position: "relative",
            height: "1.5rem", // Set height to avoid layout shift
            overflow: "hidden"
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                width: "100%",
                left: 0,
                top: 0
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontSize: "1rem",
                  fontFamily: "var(--font-heading-family)",
                }}
              >
                {announcements[index]}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>
        {/* Profile Icon and Login/Register Button */}
        <Box sx={{ display: "flex", alignItems: "right", width: 230, }}>
          <IconButton color="inherit">
            <AccountCircleIcon fontSize="medium" />
          </IconButton>
          <Button
            sx={{
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,

              fontSize: "1rem",
              fontFamily: "var(--font-heading-family)",
              // borderBottom: "1px solid #fff",
              "&:hover": {
                background: "transparent",
                // borderBottom: "1px solid #ccc",
              },
            }}
            onClick={() => navigate("/login")}
          >
            Login / Register
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
