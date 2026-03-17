import React, { useState, useEffect } from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
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
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <SwipeableViews index={index} disabled>
            {announcements.map((text, i) => (
              <Box
                key={i}
                role="region"
                aria-label={`Announcement ${i + 1} of ${announcements.length}`}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "1rem",
                    fontFamily: "var(--font-heading-family)",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </SwipeableViews>
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
