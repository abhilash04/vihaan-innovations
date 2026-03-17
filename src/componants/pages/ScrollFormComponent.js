import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Divider,
  Paper,
  styled,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ScrollFormComponent = () => {
  const scrollRef = useRef(null);
  const [pauseScroll, setPauseScroll] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollItems = [
    {
      number: "01.",
      title: "IT Solution ",
      title2: "That Drive Your Business Forward",
      subtitle:
        "We provide intelligent, reliable, and cutting-edge IT solutions so that your business can grow with confidence.",
      services: [
        {
          label: "Professional Services",
          icon: BusinessCenterIcon,
          color: "#34D399",
        },
        {
          label: "Managed IT Solution",
          icon: SettingsIcon,
          color: "#EC4899",
        },
        {
          label: "Cyber & IT Security",
          icon: SecurityIcon,
          color: "#6366F1",
        },
      ],
    },
    {
      number: "02.",
      title: "Turning Big Ideas",
      title2: "into Smart Digital Solutions",
      subtitle:
        "We provide intelligent, reliable, and cutting-edge IT solutions so that your business can grow with confidence.",
      services: [
        {
          label: "Professional Services",
          icon: BusinessCenterIcon,
          color: "#34D399",
        },
        {
          label: "Managed IT Solution",
          icon: SettingsIcon,
          color: "#EC4899",
        },
        {
          label: "Cyber & IT Security",
          icon: SecurityIcon,
          color: "#6366F1",
        },
      ],
    },
    {
      number: "03.",
      title: "Building Strong Technology",
      title2: "for a Changing World",
      subtitle:
        "We provide intelligent, reliable, and cutting-edge IT solutions so that your business can grow with confidence.",
      services: [
        {
          label: "Professional Services",
          icon: BusinessCenterIcon,
          color: "#34D399",
        },
        {
          label: "Managed IT Solution",
          icon: SettingsIcon,
          color: "#EC4899",
        },
        {
          label: "Cyber & IT Security",
          icon: SecurityIcon,
          color: "#6366F1",
        },
      ],
    },
  ];

  const IconContainer = styled(Box)(({ color }) => ({
    width: "42px",
    height: "42px",
    borderRadius: "14px",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: `0 8px 25px ${color}30`,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseScroll) {
        setScrollIndex((prev) => (prev + 1) % scrollItems.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [pauseScroll]);

  const handleMouseDown = () => setPauseScroll(true);
  const handleMouseUp = () => setPauseScroll(false);

  const handlePrev = () =>
    setScrollIndex(
      (prev) => (prev - 1 + scrollItems.length) % scrollItems.length
    );
  const handleNext = () =>
    setScrollIndex((prev) => (prev +     1) % scrollItems.length);

  const item = scrollItems[scrollIndex];

  return (
    <Box sx={{ backgroundColor: "#f7f8fd", py: 6, mt: 8.5 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Grid container justifyContent="space-between">
          {/* Scrollable Section */}
          <Grid
            item
            xs={12}
            md={6}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{
              overflow: "hidden",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box ref={scrollRef} style={{ width: "100%" }}>
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                marginBottom={2}
                sx={{ mt: 10 }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "24px",
                  }}
                >
                  {item.number}
                </Typography>
                <Box
                  sx={{
                    width: "80px",
                    height: "2px",
                    backgroundColor: "#5C6BC0",
                  }}
                />
              </Box>

              <Typography
                variant="h3"
                style={{
                  fontWeight: 700,
                  fontSize: "60px",
                  lineHeight: "65px",
                  fontFamily: "Fira Sans",
                  marginBottom: 10,
                }}
              >
                {item.title}
                <span style={{ color: "#067eceff" }}>{item.title2}</span>
              </Typography>

              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "32px",
                  color: "rgb(106, 107, 126)",
                  fontFamily: "Roboto",
                  width: "480px",
                }}
              >
                {item.subtitle}
              </Typography>

              <Grid container spacing={2} sx={{ mt: 1.5 }}>
                {item.services.map((service, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Box
                      component={Paper}
                      elevation={3}
                      sx={{
                        background: "white",
                        borderRadius: "12px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        mb: 6,
                        color: "#006cff",
                        gap: 1,
                        // "&:hover": {
                        //   backgroundColor: "#006cff",
                        //   cursor: "pointer",
                        //   color: "white",
                        // },
                      }}
                    >
                      <IconContainer color={service.color}>
                        <service.icon
                          size={20}
                          style={{ color: "white", strokeWidth: 2 }}
                        />
                      </IconContainer>

                      <Typography
                        sx={{
                          color: "#5f5858ff",
                        }}
                      >
                        |
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          width: "100px",
                          textAlign: "left",
                          color: "#181f44",
                          fontSize: "14px",
                          lineHeight: "18px",
                        }}
                      >
                        {service.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Arrow Navigation */}
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <IconButton
                  sx={{
                    border: "2px solid #006cff",
                    borderRadius: "50%",
                    padding: "10px",
                    color: "#006cff",
                  }}
                  onClick={handlePrev}
                >
                  <ArrowBackIcon />
                </IconButton>

                <IconButton
                  sx={{
                    border: "2px solid #006cff",
                    borderRadius: "50%",
                    padding: "10px",
                    color: "#006cff",
                  }}
                  onClick={handleNext}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Static Form Section */}
          <Grid
            item
            xs={12}
            md={4.5}
            component={Paper}
            elevation={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "16px",
              maxWidth: "450px",
              margin: "0 auto",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 1.5,
                textAlign: "center",
                fontWeight: 700,
                fontSize: "24px",
                color: "#0a0a0a",
              }}
            >
              Schedule Your Free IT Consultation
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mb: 1.5,
                textAlign: "center",
                fontWeight: 500,
                fontSize: "16px",
                color: "#454545",
              }}
            >
              Trusted by businesses to deliver reliable IT solutions
            </Typography>

            <TextField
              label="Name"
              variant="filled"
              fullWidth
              sx={{ mb: 1.5 }}
              InputProps={{
                sx: {
                  borderRadius: "8px",
                  backgroundColor: "#f8f9fa",
                  "&:hover": {
                    backgroundColor: "#f1f3f4",
                  },
                },
              }}
            />

            <TextField
              label="Email"
              variant="filled"
              fullWidth
              sx={{ mb: 1.5 }}
              InputProps={{
                sx: {
                  borderRadius: "8px",
                  backgroundColor: "#f8f9fa",
                  "&:hover": {
                    backgroundColor: "#f1f3f4",
                  },
                },
              }}
            />

            <TextField
              label="Phone Number"
              variant="filled"
              fullWidth
              sx={{ mb: 1.5 }}
              InputProps={{
                sx: {
                  borderRadius: "8px",
                  backgroundColor: "#f8f9fa",
                  "&:hover": {
                    backgroundColor: "#f1f3f4",
                  },
                },
              }}
            />

            <TextField
              label="Your Message Here"
              variant="filled"
              fullWidth
              multiline
              rows={2}
              sx={{ mb: 1.5 }}
              InputProps={{
                sx: {
                  borderRadius: "8px",
                  backgroundColor: "#f8f9fa",
                  "&:hover": {
                    backgroundColor: "#f1f3f4",
                  },
                },
              }}
            />

            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "8px",
                padding: "8px",
                fontSize: "16px",
                width: "250px",
                alignSelf: "center",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ScrollFormComponent;
