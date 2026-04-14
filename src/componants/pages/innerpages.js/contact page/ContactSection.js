import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import bgImage from "../../../../assets/img1.png"; // Matches About Us style but different image

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: "Call Us",
      value: "+91 99648 48414",
      subValue: "Mon-Sat (09:00 AM-07:00 PM)",
    },
    {
      icon: <EmailIcon />,
      title: "Email Us",
      value: "contact@vihaninnovations.com",
      subValue: "Support available 24/7",
    },
    {
      icon: <LocationOnIcon />,
      title: "Visit Us",
      value: "26, 2nd Main Rd, Kodichikknahalli",
      subValue: "Bommanahalli, Bengaluru, Karnataka 560076",
    },
    {
      icon: <AccessTimeIcon />,
      title: "Business Hours",
      value: "Mon-Sat: 9AM - 7PM",
      subValue: "Sunday: Closed",
    },
  ];

  return (
    <Box sx={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      {/* Premium Hero Banner - Matches About Us Style */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "60vh", md: "70vh" },
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.6) 100%)",
            zIndex: 1,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, pt: { xs: 8, md: 10 } }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ maxWidth: "750px" }}
          >
            <Typography
              sx={{
                display: "inline-block",
                color: "#00b4d8",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                mb: 2,
                px: 2,
                py: 0.5,
                border: "1px solid rgba(0, 180, 216, 0.3)",
                background: "rgba(0, 180, 216, 0.1)",
                borderRadius: "50px",
              }}
            >
              Get In Touch
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "36px", sm: "48px", md: "64px" },
                color: "#ffffff",
                lineHeight: 1.15,
                mb: 3,
              }}
            >
              Let's <span style={{ color: "#00b4d8" }}>Connect</span> <br /> & Build Something Great.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#cbd5e1",
                lineHeight: 1.7,
                mb: 4,
                maxWidth: "600px"
              }}
            >
              Have a question, an idea, or a complex challenge? Our team of experts is ready to help you navigate your digital transformation journey with innovative technology solutions.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            {/* Left Column - Contact Info */}
            <Grid item xs={12} md={5}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 2.5,
                    color: "#0f172a",
                    fontSize: { xs: "28px", md: "36px" }
                  }}
                >
                  Contact Information
                </Typography>
                <Typography
                  sx={{
                    color: "#64748b",
                    mb: 3.5,
                    lineHeight: 1.4,
                    fontSize: "1.05rem",
                  }}
                >
                  Reach out to us through any of these channels. We're dedicated to providing exceptional support and strategic guidance for your business needs.
                </Typography>

                <Grid container spacing={3}>
                  {contactInfo.map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Box
                        component={motion.div}
                        whileHover={{ x: 10 }}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 1.5,
                          p: 2,
                          background: "#fff",
                          borderRadius: "16px",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                          borderLeft: "4px solid #00b4d8",
                          transition: "all 0.3s ease"
                        }}
                      >
                        <Box
                          sx={{
                            background: "rgba(0, 180, 216, 0.1)",
                            color: "#00b4d8",
                            borderRadius: "12px",
                            p: 1.5,
                            mr: 3,
                            display: "flex",
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: "#1e293b", mb: 0.5, fontSize: "1.1rem" }}>
                            {item.title}
                          </Typography>
                          <Typography sx={{ color: "#334155", fontWeight: 500 }}>{item.value}</Typography>
                          <Typography variant="body2" sx={{ color: "#64748b", mt: 0.5 }}>{item.subValue}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>


              </Box>
            </Grid>

            {/* Right Column - Contact Form */}
            <Grid item xs={12} md={7}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: "24px",
                  background: "#ffffff",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.05)"
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    color: "#0f172a",
                    fontSize: { xs: "24px", md: "32px" }
                  }}
                >
                  Send a Message
                </Typography>
                <Typography sx={{ color: "#64748b", mb: 5 }}>
                  Fill out the form below and one of our experts will get back to you within 24 hours.
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      multiline
                      rows={6}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)",
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "16px",
                        py: 2,
                        borderRadius: "12px",
                        textTransform: "none",
                        boxShadow: "0 10px 20px rgba(0, 180, 216, 0.3)",
                        "&:hover": {
                          background: "linear-gradient(90deg, #0077b6 0%, #023e8a 100%)",
                          boxShadow: "0 15px 25px rgba(0, 180, 216, 0.4)",
                          transform: "translateY(-2px)"
                        },
                        transition: "all 0.3s ease"
                      }}
                    >
                      Send Message Now
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#1e293b", mb: 2.5 }}>
              Connect with Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {[
                { icon: <FacebookIcon />, color: "#1877F2" },
                { icon: <TwitterIcon />, color: "#1DA1F2" },
                { icon: <InstagramIcon />, color: "#E4405F" },
                { icon: <LinkedInIcon />, color: "#0A66C2" }
              ].map((social, idx) => (
                <IconButton
                  key={idx}
                  sx={{
                    background: "#fff",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    color: social.color,
                    "&:hover": { background: social.color, color: "#fff", transform: "translateY(-5px)" },
                    transition: "all 0.3s ease",
                    width: 50,
                    height: 50
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Google Map Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ width: "100%", height: "500px", overflow: "hidden", position: "relative" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.1292890259033!2d77.61608037413626!3d12.899691016452715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14d10c31c9a1%3A0x4f51c10549606b0b!2sSELF%20DRIVE%20CARS%20RENTAL%20TRAVEL%20GO%20MOTORS!5e1!3m2!1sen!2sin!4v1758111024662!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Vihan Innovations Office Map"
        ></iframe>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#fff",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "42px" }, mb: 3 }}
          >
            Ready to Accelerate Your <span style={{ color: "#00b4d8" }}>Growth?</span>
          </Typography>
          <Typography
            sx={{ color: "#94a3b8", fontSize: "18px", mb: 5, lineHeight: 1.6 }}
          >
            Join dozens of successful brands powered by Vihan Innovations. Let's discuss your next breakthrough project.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexDirection: { xs: "column", sm: "row" }
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "#00b4d8",
                color: "#fff",
                px: 6,
                py: 2,
                borderRadius: "50px",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { background: "#0077b6", transform: "translateY(-3px)" },
                transition: "all 0.3s ease"
              }}
            >
              Start Your Project
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "#fff",
                px: 6,
                py: 2,
                borderRadius: "50px",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { borderColor: "#fff", background: "rgba(255,255,255,0.1)", transform: "translateY(-3px)" },
                transition: "all 0.3s ease"
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUs;

