import React, { useState } from "react";
import { Box, Grid, Typography, Button, Tabs, Tab, Stack } from "@mui/material";
import PopUps from "../common/PopUps";
import { motion } from "framer-motion";
import img1 from "../../assets/first page.png";
import img2 from "../../assets/first page 1.png";
import img3 from "../../assets/first page 2.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ITServiceSection = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        my: 5,
        p: 2,
      }}
    >
      <Grid container spacing={4}>
        {/* Left Grid - Images */}
        <Grid item xs={12} md={5.5}>
          <Box component={motion.div} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Grid container spacing={2}>
              {[img1, img2, img3, "content"].map((item, index) => (
                <Grid item xs={6} key={index}>
                  {item === "content" ? (
                    <Box
                      sx={{
                        width: "72.8%",
                        height: "68%",
                        borderRadius: "10px",
                        backgroundColor: "#005885ff",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        p: 4.7,
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight={700}
                        sx={{
                          fontSize: "60px",
                          lineHeight: "90px",
                          color: "transparent",
                          WebkitTextStroke: "1px white",
                        }}
                      >
                        20
                        <span
                          style={{
                            fontSize: "18px",
                            lineHeight: "28px",
                            fontWeight: 400,
                            verticalAlign: "middle",
                            marginLeft: "8px",
                            WebkitTextStroke: "0",
                            color: "white",
                          }}
                        >
                          + years
                        </span>
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{ mt: 1, fontSize: "21px", lineHeight: "31px" }}
                      >
                        Powering growth through modern tech.
                      </Typography>
                    </Box>
                  ) : (
                    <Box
                      component="img"
                      src={item}
                      alt={`dummy-${index}`}
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Right Grid - Content */}
        <Grid item xs={12} md={6.5}>
          <Box component={motion.div} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            {/* About Us Label + Icon */}
            <Box display="flex" alignItems="center" gap={2} mt={1} mb={3}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{
                  fontSize: "18px",
                  lineHeight: 1,
                  fontWeight: 700,
                  color: "#0f67f7",
                }}
              >
                About Us
              </Typography>
              <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 33 21"
                sx={{
                  width: "33px",
                  height: "21px",
                  display: "inline-block",
                }}
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#006cff" />
                    <stop offset="100%" stopColor="#1227b8" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="url(#grad)" strokeWidth="3">
                  <path d="M0,8.9 H27.036 C32.114,5.827 27.036,2.754 27.036,2.754" />
                  <path d="M0,14.594 H17.352 C22.466,17.621 17.352,20.7 17.352,20.7" />
                </g>
              </Box>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "42px",
                lineHeight: "1",
                width: "600px",
              }}
            >
              Your Trusted Partner {" "}
              <span style={{ color: "#0087c9" }}>
                for IT Services <span style={{ color: "black" }}> & </span>Digital
                Innovation
              </span>
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              Vihaan Innovations helps businesses grow with smart websites,
              scalable apps, and reliable digital solutions built for long-term success.
            </Typography>

            {/* Tabs */}
            <Tabs
              value={tabValue}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              sx={{ mt: 2, mb: 2 }}
            >
              <Tab label="Our Mission" />
              <Tab label="Our Vision" />
              <Tab label="Our Value" />
            </Tabs>

            {/* Tab Content */}
            {tabValue === 0 && (
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Our mission is to help businesses grow faster through modern technology,
                creative strategy, and result-driven digital solutions.
              </Typography>
            )}
            {tabValue === 1 && (
              <Typography sx={{ color: "text.secondary", mb: 2 }}>
                Our vision is to become a trusted innovation partner for brands seeking
                digital growth, better systems, and future-ready success.
              </Typography>
            )}
            {tabValue === 2 && (
              <Typography sx={{ color: "text.secondary", mb: 2 }}>
                We believe in honesty, quality, performance, and client-first
                service that creates real value for every project.
              </Typography>
            )}

            <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
              {[
                "IT Consulting",
                "Product Development",
                "Digital Marketing",
                "Technical Support",
              ].map((feature, index) => (
                <Grid item xs={6} key={index}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CheckCircleIcon sx={{ color: "#0087c9" }} />
                    <Typography sx={{ color: "text.secondary" }}>
                      {feature}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            {/* Contact & Call Section */}
            <Stack direction="row" spacing={5} alignItems="center" mt={6}>
              <Button
                variant="contained"
                onClick={() => setOpenPopup(true)}
                sx={{
                  backgroundColor: "#0087c9",
                  borderRadius: "20px",
                  width: "180px",
                  height: "45px",
                  textTransform: "none",
                  fontSize: "18px",

                  lineHeight: "23px",
                  px: 2.5,
                  py: 1.5,
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    backgroundColor: "#1f3fe0",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <Typography sx={{ marginRight: "auto" }}>Contact Us</Typography>

                  {/* Default Arrow */}
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      right: 24,
                      transition: "transform 0.3s ease, opacity 0.3s ease",
                      transform: "translateX(0)",
                      opacity: 1,
                      ".MuiButton-root:hover &": {
                        transform: "translateX(20px)",
                        opacity: 0,
                      },
                    }}
                  >
                    →
                  </Box>

                  {/* Hover Arrow */}
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      right: 24,
                      transition:
                        "transform 0.3s ease 0.05s, opacity 0.3s ease 0.05s",
                      transform: "translateX(-20px)",
                      opacity: 0,
                      ".MuiButton-root:hover &": {
                        transform: "translateX(0)",
                        opacity: 1,
                      },
                    }}
                  >
                    →
                  </Box>
                </Box>
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default ITServiceSection;
