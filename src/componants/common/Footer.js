import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  useMediaQuery,
  useTheme,
  FormControl,
  Select,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import {
  Close,
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import logo from "../../assets/SN (1).894d8a0c22e4885edea1.png";
// import logo from "../../assets/vihaan-logo.png";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PhoneIcon from "@mui/icons-material/Phone";
import EventIcon from "@mui/icons-material/Event";
const FooterAndPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Auto-show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    setVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your API call here
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Grid>
      {/* Popup */}
      <Dialog
        open={showPopup}
        onClose={handleClosePopup}
        fullWidth={false}
        maxWidth="sm"
        PaperProps={{
          sx: {
            width: isMobile ? "90%" : "400px",
            margin: "auto",
            borderRadius: "10px",
          },
        }}
      >
        <IconButton
          onClick={handleClosePopup}
          sx={{
            position: "absolute",
            top: "8px",
            right: "8px",
            color: "#fff",
            zIndex: 1,
          }}
        >
          <Close fontSize="large" />
        </IconButton>

        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ color: "#007b9f", fontSize: "24px", fontWeight: 600 }}
            >
              Book an Appointment
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box sx={{ padding: "0 20px", mt: 2 }}>
              {[
                { name: "name", type: "text", placeholder: "Your Name" },
                { name: "phone", type: "tel", placeholder: "Phone Number" },
              ].map((field) => (
                <TextField
                  key={field.name}
                  fullWidth
                  required
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    marginBottom: "10px",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "6px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#ccc" },
                      "&:hover fieldset": { borderColor: "#00a0c8" },
                      "&.Mui-focused fieldset": { borderColor: "#00a0c8" },
                    },
                    "& input": { padding: "12px" },
                  }}
                />
              ))}

              {/* Choose Category dropdown */}
              <FormControl fullWidth sx={{ marginBottom: "15px" }}>
                <Select
                  name="service"
                  displayEmpty
                  required
                  value={formData.service || ""}
                  onChange={handleInputChange}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "6px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ccc",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00a0c8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00a0c8",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Choose Category
                  </MenuItem>
                  <MenuItem value="Products">Ready Products</MenuItem>
                  <MenuItem value="Services">Services</MenuItem>
                  <MenuItem value="Training">Training</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Select Date"
                type="date"
                variant="outlined"
                fullWidth
                required
                name="date"
                value={formData.date}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon color="action" />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: "8px",
                  },
                }}
                sx={{ mb: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                label="Your Message Here"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                sx={{ mb: 2 }}
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                  },
                }}
              />
            </Box>

            <DialogActions sx={{ justifyContent: "center" }}>
              <Button
                type="submit"
                sx={{
                  fontSize: "16px",
                  padding: "8px 24px",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  background:
                    "linear-gradient(90deg, #00a0c8 0%, #007b9f 100%)",
                  color: "#fff",
                  fontWeight: 600,
                  boxShadow: "0 8px 20px rgba(0, 160, 200, 0.4)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #007b9f 0%, #005f80 100%)",
                    boxShadow: "0 6px 15px rgba(0, 95, 128, 0.4)",
                  },
                  "&:active": {
                    transform: "scale(0.96)",
                  },
                }}
              >
                Book an Appointment
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#fcfdff",
          color: "#333",
          position: "relative",
          overflow: "hidden",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          boxShadow: "0 -10px 30px rgba(0,0,0,0.03)",
          zIndex: 1,
        }}
      >
        {/* Top Gradient Line */}
        <Box
          sx={{
            height: "5px",
            background: "linear-gradient(90deg, #0cebeb 0%, #0087ca 30%, #9b51e0 70%, #ff2a85 100%)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />

        {/* Background Waves */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: 0.6,
            pointerEvents: "none",
            background: "radial-gradient(ellipse at 80% 100%, rgba(255,42,133,0.08) 0%, transparent 40%), radial-gradient(ellipse at 20% 100%, rgba(0,210,255,0.12) 0%, transparent 50%)"
          }}
        >
          <svg viewBox="0 0 1440 320" style={{ position: "absolute", bottom: 0, width: "100%", height: "auto" }}>
            <path fill="rgba(88, 130, 240, 0.05)" d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,213.3C672,213,768,235,864,240C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fill="rgba(255, 42, 133, 0.03)" d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,256C672,256,768,224,864,218.7C960,213,1056,235,1152,245.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </Box>

        <Box sx={{ padding: "60px 0 20px 0", position: "relative", zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
            <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
              {/* Brand Column */}
              <Grid item xs={12} md={3.5}>
                <img
                  src={logo}
                  alt="Vihaan Innovations Logo"
                  style={{
                    height: "80px",
                    width: "auto",
                    marginBottom: "20px",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    lineHeight: "1.6",
                    marginBottom: "25px",
                    fontWeight: 500,
                    pr: 2,
                  }}
                >
                  Trusted IT consulting and solutions partner delivering innovative, scalable, and future-ready technology.
                  We empower businesses to grow, transform, and stay ahead in the digital world.                </Typography>

                {/* Email Subscription Box */}
                <Box sx={{ display: "flex", mb: { xs: 4, md: 3 }, boxShadow: "0 4px 15px rgba(0,0,0,0.06)", borderRadius: "25px", overflow: "hidden", width: "100%", maxWidth: { xs: "100%", sm: "350px" }, backgroundColor: "#fff", border: "1px solid #eaeaea" }}>
                  <Box component="input" placeholder="Enter your email address" sx={{ width: "100%", flex: 1, border: "none", outline: "none", padding: "12px 15px", fontSize: "14px", backgroundColor: "#fff", color: "#333", "&::placeholder": { color: "#999" } }} />
                  <Button sx={{ background: "linear-gradient(90deg, #3a7bd5 0%, #a450e1 100%)", color: "#fff", padding: { xs: "10px 15px", md: "10px 20px" }, textTransform: "none", fontWeight: 600, borderRadius: "0 25px 25px 0", minWidth: { xs: "80px", md: "100px" }, "&:hover": { background: "linear-gradient(90deg, #2b5ca5 0%, #8736c2 100%)" } }}>
                    Subscribe
                  </Button>
                </Box>

                {/* Social Icons */}
                <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap", mb: { xs: 4, md: 0 } }}>
                  {[
                    { icon: <LinkedIn fontSize="small" />, color: "#0077b5", url: "https://www.linkedin.com/company//" },
                    { icon: <Twitter fontSize="small" />, color: "#1da1f2", url: "https://twitter.com/" },
                    { icon: <Facebook fontSize="small" />, color: "#4267B2", url: "https://www.facebook.com/profile.php?id=" },
                    { icon: <Instagram fontSize="small" />, color: "#E1306C", url: "https://www.instagram.com//" },
                    { icon: <YouTube fontSize="small" />, color: "#FF0000", url: "https://www.youtube.com/@" },
                  ].map((social, idx) => (
                    <Box
                      key={idx}
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "8px",
                        backgroundColor: "#eef2f6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: social.color,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: social.color,
                          color: "#fff",
                          transform: "translateY(-2px)"
                        }
                      }}
                    >
                      {social.icon}
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* Right Side Container */}
              <Grid item xs={12} md={8.5}>
                <Grid container spacing={4}>
                  {/* Our Products Column */}
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", borderBottom: "1px solid #eaeaea", paddingBottom: "10px", marginBottom: "20px" }}
                    >
                      Our Products
                    </Typography>
                    <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        { name: "Real Estate Portal", path: "/ready-products/real-estate-portal" },
                        { name: "Education CRM", path: "/ready-products/education-crm" },
                        { name: "Matrimony CRM", path: "/ready-products/matrimony-crm" },
                        { name: "Listing Platform", path: "/ready-products/listing-platform" },
                        { name: "LMS Platform", path: "/ready-products/lms-platform" },
                        { name: "Cab Booking App", path: "/ready-products/cab-booking-app" },
                        { name: "Hospital Management System", path: "/ready-products/hospital-management-system" },
                      ].map((product) => (
                        <li key={product.name} style={{ marginBottom: "12px" }}>
                          <Link
                            href={product.path}
                            sx={{ color: "#555", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.3s ease", display: "flex", alignItems: "center", "&:hover": { color: "#00b4d8" } }}
                          >
                            <span style={{ color: "#00b4d8", marginRight: "8px", fontSize: "16px", fontWeight: "bold" }}>›</span>
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </Box>
                  </Grid>

                  {/* Services Column */}
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", borderBottom: "1px solid #eaeaea", paddingBottom: "10px", marginBottom: "20px" }}
                    >
                      Services
                    </Typography>
                    <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        { name: "SEO", path: "/services/seo" },
                        { name: "UI Ux Design", path: "/services/ui-ux-design" },
                        { name: "Web Development", path: "/services/web-development" },
                        { name: "Social Media Marketing", path: "/services/social-media-marketing" },
                        { name: "Mobile App Development", path: "/services/mobile-app-development" },
                        { name: "Ecommerce Development", path: "/services/ecommerce-software-development" },
                        { name: "Maintenance & Support", path: "/services/maintenance-and-support" },
                      ].map((service) => (
                        <li key={service.name} style={{ marginBottom: "12px" }}>
                          <Link
                            href={service.path}
                            sx={{ color: "#555", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.3s ease", display: "flex", alignItems: "center", "&:hover": { color: "#00b4d8" } }}
                          >
                            <span style={{ color: "#00b4d8", marginRight: "8px", fontSize: "16px", fontWeight: "bold" }}>›</span>
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </Box>
                  </Grid>

                  {/* Training Column */}
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", borderBottom: "1px solid #eaeaea", paddingBottom: "10px", marginBottom: "20px" }}
                    >
                      Training
                    </Typography>
                    <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        { name: "SEO", path: "/training/seo" },
                        { name: "Java", path: "/training/java" },
                        { name: "Python", path: "/training/python" },
                        { name: "2D Animation", path: "/training/2d-animation" },
                        { name: "3D Animation", path: "/training/3d-animation" },
                        { name: "Web Development", path: "/training/web-designing-react" },
                        { name: "Social Media Marketing", path: "/training/social-media-marketing" },
                      ].map((training) => (
                        <li key={training.name} style={{ marginBottom: "12px" }}>
                          <Link
                            href={training.path}
                            sx={{ color: "#555", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.3s ease", display: "flex", alignItems: "center", "&:hover": { color: "#00b4d8" } }}
                          >
                            <span style={{ color: "#00b4d8", marginRight: "8px", fontSize: "16px", fontWeight: "bold" }}>›</span>
                            {training.name}
                          </Link>
                        </li>
                      ))}
                    </Box>
                  </Grid>

                  {/* Quick Links Column */}
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", borderBottom: "1px solid #eaeaea", paddingBottom: "10px", marginBottom: "20px" }}
                    >
                      Quick Links
                    </Typography>
                    <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        { name: "About Us", path: "/about-us" },
                        { name: "Careers", path: "/career" },
                        { name: "Blog", path: "/articles" },
                        { name: "Terms & Conditions", path: "/terms-and-conditions" },
                        { name: "Privacy Policy", path: "/privacy-policy" },
                        { name: "Refund Policy", path: "/refund-policy" },
                        { name: "Cancellation Policy", path: "/cancellation-policy" },
                      ].map((link) => (
                        <li key={link.name} style={{ marginBottom: "12px" }}>
                          <Link
                            href={link.path}
                            sx={{ color: "#555", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.3s ease", display: "flex", alignItems: "center", "&:hover": { color: "#00b4d8" } }}
                          >
                            <span style={{ color: "#00b4d8", marginRight: "8px", fontSize: "16px", fontWeight: "bold" }}>›</span>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </Box>
                  </Grid>
                </Grid>

                {/* Contact Details Row */}
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", md: "center" }, mt: { xs: 2, md: 4 }, pt: { xs: 3, md: 4 }, borderTop: "1px solid #eaeaea", gap: { xs: 3, md: 3 } }}>
                  {/* Email */}
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'flex-start', gap: "12px", width: "100%" }}>
                    <Box sx={{ width: "40px", height: "40px", minWidth: "40px", borderRadius: "50%", backgroundColor: "#eef2f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Email sx={{ fontSize: "20px", color: "#444" }} />
                    </Box>
                    <Link href="mailto:contact@vihaaninnovations.com" sx={{ color: "#555", textDecoration: "none", fontSize: { xs: "14px", sm: "15px" }, fontWeight: 600, wordBreak: "break-word", "&:hover": { color: "#00b4d8" }, whiteSpace: 'nowrap' }}>
                      contact@vihaaninnovations.com
                    </Link>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: "12px", width: "100%" }}>
                    <Box sx={{ width: "40px", height: "40px", minWidth: "40px", borderRadius: "50%", backgroundColor: "#eef2f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Phone sx={{ fontSize: "20px", color: "#444" }} />
                    </Box>
                    <Link href="tel:+919964848414" sx={{ color: "#555", textDecoration: "none", fontSize: { xs: "14px", sm: "15px" }, fontWeight: 600, "&:hover": { color: "#00b4d8" } }}>
                      +91 99648 48414
                    </Link>
                  </Box>

                  {/* Location */}
                  <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: 'center', gap: "12px", width: "100%" }}>
                    <Box sx={{ width: "40px", height: "40px", minWidth: "40px", borderRadius: "50%", backgroundColor: "#eef2f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <LocationOn sx={{ fontSize: "20px", color: "#444" }} />
                    </Box>
                    <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "14px", sm: "15px" }, fontWeight: 600, mt: 1 }}>
                      Bangalore, India
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Bottom Bar */}
        <Box sx={{ borderTop: "1px solid rgba(0,0,0,0.06)", padding: "20px 0", position: "relative", zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="body2" sx={{ color: "#666", fontSize: "14px", fontWeight: 600, textAlign: 'center' }}>
                © 2025 Vihaan Innovations. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Fixed Floating Action Buttons */}
      <>
        {/* Phone — visible on mobile screens only */}
        <Box
          component="a"
          href="tel:+919964848414"
          aria-label="Call us"
          sx={{
            position: "fixed",
            bottom: visible ? "108px" : "40px",
            right: "40px",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            zIndex: 99999,
            cursor: "pointer",
            backgroundColor: "#25d366",
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(37, 211, 102, 0.45)",
            transition: "transform 0.3s ease, bottom 0.3s ease",
            textDecoration: "none",
            "&:hover": { transform: "translateY(-5px)" },
          }}
        >
          <PhoneIcon sx={{ fontSize: 24, color: "#fff" }} />
        </Box>

        {/* WhatsApp — visible on all screens */}
        <Box
          component="a"
          href="https://wa.me/919964848414"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          sx={{
            position: "fixed",
            bottom: visible ? { xs: "176px", md: "108px" } : { xs: "108px", md: "40px" },
            right: "40px",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            zIndex: 99999,
            cursor: "pointer",
            backgroundColor: "#128c7e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(18, 140, 126, 0.45)",
            transition: "transform 0.3s ease, bottom 0.3s ease",
            textDecoration: "none",
            "&:hover": { transform: "translateY(-5px)" },
          }}
        >
          {/* WhatsApp SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="#fff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Box>

        {/* Scroll to Top */}
        {visible && (
          <Box
            onClick={handleClick}
            className="pxl-scroll-top"
            sx={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              zIndex: 99999,
              cursor: "pointer",
              backgroundColor: "#16c2d5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 20px rgba(0, 180, 216, 0.4)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <ArrowUpwardIcon sx={{ fontSize: 24, color: "#fff" }} />
          </Box>
        )}
      </>
    </Grid>
  );
};

export default FooterAndPopup;
