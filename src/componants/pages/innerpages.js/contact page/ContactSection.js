import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
  IconButton as MuiIconButton
} from "@mui/material";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Send, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      value: "+91 99648 48414",
      subValue: "Mon-Sat (09:00 AM-07:00 PM)",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      value: "contact@vihaaninnovations.com",
      subValue: "Response within 24 hours",
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      value: "26, 2nd Main Rd, Kodichikknahalli",
      subValue: "Bommanahalli, Bengaluru, Karnataka 560076",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", color: "#1877F2" },
    { icon: <Twitter size={20} />, href: "#", color: "#1DA1F2" },
    { icon: <Instagram size={20} />, href: "#", color: "#E4405F" },
    { icon: <Linkedin size={20} />, href: "#", color: "#0A66C2" },
  ];

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      
      {/* --- Minimalist Modern Hero --- */}
      <Box 
        sx={{ 
          pt: { xs: 15, md: 20 }, 
          pb: { xs: 8, md: 10 }, 
          position: "relative",
          background: "radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.03) 0%, transparent 50%)"
        }}
      >
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}
          >
            <Typography
              sx={{
                color: "#7c3aed",
                fontWeight: 800,
                fontSize: "14px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                mb: 3,
                display: "inline-block",
                px: 2,
                py: 0.5,
                bgcolor: "rgba(124, 58, 237, 0.05)",
                borderRadius: "50px"
              }}
            >
              Get In Touch
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2.8rem", md: "4.5rem" },
                color: "#0f172a",
                lineHeight: 1.1,
                mb: 3,
                fontFamily: "'Syne', sans-serif"
              }}
            >
              Let's build your <br />
              <Box component="span" sx={{ color: "#7c3aed" }}>digital future.</Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                color: "#475569",
                lineHeight: 1.6,
                maxWidth: "600px",
                mx: "auto",
                fontWeight: 500
              }}
            >
              Whether you have a specific project in mind or just want to explore possibilities, we're here to help you scale.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* --- Main Content Section --- */}
      <Container maxWidth="lg" sx={{ pb: 15, position: "relative", zIndex: 2 }}>
        <Grid container spacing={8}>
          
          {/* Left Side: Contact Information Cards */}
          <Grid item xs={12} md={5}>
            <Stack spacing={4}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", mb: 3, fontFamily: "'Syne', sans-serif" }}>
                  Connect with experts
                </Typography>
                <Typography sx={{ color: "#64748b", mb: 5, fontSize: "1.1rem", lineHeight: 1.6 }}>
                  Reach out through any channel. We guarantee a response from our engineering leads within 24 hours.
                </Typography>

                <Stack spacing={3}>
                  {contactInfo.map((item, index) => (
                    <Box
                      key={index}
                      component={motion.div}
                      whileHover={{ x: 10 }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 3,
                        bgcolor: "#f8fafc",
                        borderRadius: "24px",
                        border: "1px solid rgba(15, 23, 42, 0.05)",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <Box
                        sx={{
                          width: "54px",
                          height: "54px",
                          borderRadius: "16px",
                          bgcolor: "rgba(124, 58, 237, 0.1)",
                          color: "#7c3aed",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 3,
                          flexShrink: 0
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1e293b", mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ color: "#475569", fontWeight: 600 }}>{item.value}</Typography>
                        <Typography variant="caption" sx={{ color: "#94a3b8" }}>{item.subValue}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>

                {/* Social Section */}
                <Box sx={{ mt: 6 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#94a3b8", mb: 3, textTransform: "uppercase", letterSpacing: 2 }}>
                    Follow our journey
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {socialLinks.map((link, idx) => (
                      <MuiIconButton
                        key={idx}
                        sx={{
                          width: 48,
                          height: 48,
                          bgcolor: "#f8fafc",
                          color: "#64748b",
                          border: "1px solid rgba(0,0,0,0.05)",
                          "&:hover": { color: link.color, bgcolor: "white", transform: "translateY(-5px)", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" },
                          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                        }}
                      >
                        {link.icon}
                      </MuiIconButton>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Right Side: Clean Modern Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              sx={{
                p: { xs: 4, md: 8 },
                borderRadius: "40px",
                bgcolor: "#ffffff",
                border: "1px solid #f1f5f9",
                boxShadow: "0 40px 80px -20px rgba(15, 23, 42, 0.08)"
              }}
            >
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", mb: 2, fontFamily: "'Syne', sans-serif" }}>
                  Send a message
                </Typography>
                <Typography sx={{ color: "#64748b" }}>
                  Fill in the details below and we'll connect you with the right department lead.
                </Typography>
              </Box>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField placeholder="Full Name" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField placeholder="Email Address" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField placeholder="Phone Number" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField placeholder="Interested in" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField placeholder="How can we help you?" fullWidth multiline rows={5} />
                </Grid>
                <Grid item xs={12} sx={{ pt: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={<ArrowRight size={20} />}
                    sx={{
                      bgcolor: "#7c3aed",
                      color: "white",
                      fontWeight: 800,
                      py: 2.2,
                      borderRadius: "18px",
                      textTransform: "none",
                      fontSize: "1.1rem",
                      boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.4)",
                      "&:hover": {
                        bgcolor: "#6d28d9",
                        transform: "translateY(-3px)",
                        boxShadow: "0 25px 50px -10px rgba(124, 58, 237, 0.5)"
                      },
                      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                    }}
                  >
                    Start Project Now
                  </Button>
                </Grid>
              </Grid>

              <Box sx={{ mt: 5, display: "flex", alignItems: "center", justifyContent: "center", gap: 1, opacity: 0.6 }}>
                 <CheckCircle2 size={16} color="#10b981" />
                 <Typography variant="caption" sx={{ fontWeight: 600, color: "#475569" }}>We value your privacy. No spam, ever.</Typography>
              </Box>
            </Paper>
          </Grid>

        </Grid>
      </Container>

      {/* --- Immersive Map Section --- */}
      <Box 
        sx={{ 
          width: "100%", 
          height: { xs: "400px", md: "500px" }, 
          overflow: "hidden", 
          mb: 0,
          opacity: 0.8,
          filter: "grayscale(100%) invert(90%) contrast(90%) brightness(100%)",
          transition: "all 0.5s ease",
          "&:hover": { opacity: 1, filter: "grayscale(0%) invert(0%)" }
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.1292890259033!2d77.61608037413626!3d12.899691016452715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14d10c31c9a1%3A0x4f51c10549606b0b!2sSELF%20DRIVE%20CARS%20RENTAL%20TRAVEL%20GO%20MOTORS!5e1!3m2!1sen!2sin!4v1758111024662!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>

    </Box>
  );
};

// --- Modern Minimalist TextField ---
const CustomTextField = (props) => (
  <TextField
    {...props}
    variant="outlined"
    sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: "16px",
        bgcolor: "#fcfdfe",
        fontSize: "1rem",
        fontWeight: 500,
        "& fieldset": { borderColor: "rgba(15, 23, 42, 0.08)" },
        "&.Mui-focused fieldset": { borderColor: "#7c3aed", borderWeight: "2px" },
      },
      ...props.sx
    }}
  />
);

export default ContactUs;

