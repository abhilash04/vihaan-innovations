import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Link,
  IconButton,
  Card,
  CardContent,
  Typography,
  Paper,
  Breadcrumbs,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Header from "../common/Header";
import HeaderSec from "../common/HeaderSec";
import Footer from "../common/Footer";
import bgImage from "../../assets/breadcrumb-bg.webp";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InnerPageBanner from "./sections/InnerPageBanner";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Header /> */}
      <HeaderSec />
      <InnerPageBanner />

      {/* Main Content */}
      <Box sx={{ backgroundColor: "#f4f2f9" }}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {/* Left Column - Contact Info */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{ p: "55px 40px 30px 40px", borderRadius: "8px" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    mb: 3,
                    color: "#2b2b2bff",
                    position: "relative",
                    maxWidth: "30rem",
                  }}
                >
                  Take control over your business by deploying an all in one
                  business data monitoring solution. Take control over your
                  business deploying an all in one business data monitoring
                  solution. over your business an all in one business data.
                </Typography>

                <Typography 
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    mb: 3,
                    color: "#2b2b2bff",
                    position: "relative",
                    maxWidth: "30rem",
                  }}
                >
                  Take control over your business by deploying an all in one
                  business data monitoring solution. It's your business by
                  deploying an all in one business data control over.
                </Typography>

                {/* Contact Cards */}
                <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
                  <Grid container spacing={4} alignItems="stretch">
                    {/* ===== Left Side (Contact Info) ===== */}
                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Stack spacing={2}>
                          {/* Phone */}
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1.5}
                          >
                            <PhoneIcon sx={{ color: "#313845" }} />
                            <Typography
                              sx={{ fontWeight: 500, color: "#313845" }}
                            >
                              +1 234 567 890
                            </Typography>
                          </Stack>

                          {/* Email */}
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1.5}
                          >
                            <EmailIcon sx={{ color: "#313845" }} />
                            <Typography
                              sx={{ fontWeight: 500, color: "#313845" }}
                            >
                              support@example.com
                            </Typography>
                          </Stack>

                          {/* Address */}
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1.5}
                          >
                            <LocationOnIcon sx={{ color: "#313845" }} />
                            <Typography
                              sx={{ fontWeight: 500, color: "#313845" }}
                            >
                              123 Main Street, New York, USA
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>

                    {/* ===== Right Side (Map) ===== */}
                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          height: "100%",
                          borderRadius: "12px",
                          overflow: "hidden",
                          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                        }}
                      >
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d281.3500368448373!2d77.61853052343238!3d12.899707730044824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14eec814197d%3A0xcf0ad378f26271e9!2sBommanahalli%2C%20Bengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1753959922729!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>

            {/* Right Column - Contact Form */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 2.5,
                    color: "#313845",
                    fontSize: "2rem",
                    lineHeight: "36px",
                  }}
                >
                  Drop Us A{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(45deg, #e3335f, #3b2c73)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    Message
                  </Box>
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{ color: "#313845", mb: 1, fontWeight: 600 }}
                    >
                      Whats your name ?
                    </Typography>
                    <TextField
                      fullWidth
                      label="Your name"
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{ color: "#313845", mb: 1, fontWeight: 600 }}
                    >
                      Your email
                    </Typography>
                    <TextField
                      fullWidth
                      label="Your email"
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      sx={{ color: "#313845", mb: 1, fontWeight: 600 }}
                    >
                      Your message
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        background: "linear-gradient(45deg, #e3335f, #3b2c73)",
                        width: "200px",
                        color: "#fff",
                        p: "12px 24px",
                        borderRadius: "5px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        textTransform: "none",
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default ContactUs;
