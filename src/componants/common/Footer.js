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
  Pinterest,
} from "@mui/icons-material";
import logo from "../../assets/SN (1).894d8a0c22e4885edea1.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [offset, setOffset] = useState(307.919);
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
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = scrollTop / docHeight;
    const progress = 307.919 * (1 - scrollPercent);

    setOffset(progress);
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
                { name: "email", type: "email", placeholder: "Your Email" },
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

              {/* Choose Services (IT) dropdown */}
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
                    Choose Services (IT)
                  </MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="App Development">App Development</MenuItem>
                  <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
                  <MenuItem value="Cloud Services">Cloud Services</MenuItem>
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
          backgroundColor: "#002b50",
          color: "white",
        }}
      >
        <Box
          sx={{
            padding: "60px 0 40px 0",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {/* Brand Column */}
              <Grid item xs={12} md={3}>
                <img
                  src={logo}
                  alt="CGS Logo"
                  style={{
                    height: "auto",
                    width: "80%",
                    marginBottom: "20px",
                    borderRadius: "8px",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "justify",
                    lineHeight: "1.4",
                    marginBottom: "20px",
                  }}
                >
                  Vihaan Innovations is a trusted IT consulting and solutions
                  partner, offering a complete range of services from custom
                  software and product development to digital marketing and
                  technology support. We help businesses grow by delivering
                  reliable IT services, innovative digital solutions, and
                  user-friendly products tailored to their needs.
                </Typography>
              </Grid>

              {/* Our Products Column */}
              <Grid item xs={12} sm={6} md={2}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: "white",
                  }}
                >
                  Our Products
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {[
                    "Hospital Management",
                    "Real Estate",
                    "E-Commerce",
                    "CRM Software",
                    "OTT Platform",
                    "Listing Site",
                    "Job Portal",
                    "HRM Software",
                  ].map((product) => (
                    <li
                      key={product}
                      style={{
                        marginBottom: "8px",
                      }}
                    >
                      <Link
                        href={`${product.toLowerCase().replace(/\s+/g, "-")}`}
                        sx={{
                          color: "#ccc",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "#2196F3",
                          },
                        }}
                      >
                        {product}
                      </Link>
                    </li>
                  ))}
                </Box>
              </Grid>

              {/* Services Column */}
              <Grid item xs={12} sm={6} md={2}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: "white",
                  }}
                >
                  Services
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {[
                    "Hospital Software",
                    "ERP Development",
                    "CRM Development",
                    "Sales Force Software",
                    "Inventory Management",
                    "Project Software",
                    "Retail Software",
                    "Supplychain Software",
                  ].map((service) => (
                    <li
                      key={service}
                      style={{
                        marginBottom: "8px",
                      }}
                    >
                      <Link
                        href={`${service.toLowerCase().replace(/\s+/g, "-")}`}
                        sx={{
                          color: "#ccc",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "#2196F3",
                          },
                        }}
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </Box>
              </Grid>

              {/* Training Column */}
              <Grid item xs={12} sm={6} md={2}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: "white",
                  }}
                >
                  Training
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {[
                    "Web Designing",
                    "Web Development",
                    "Python",
                    "Java",
                    "React",
                    "Manual Testing",
                    "Automation Testing",
                    "Android Training",
                  ].map((training) => (
                    <li
                      key={training}
                      style={{
                        marginBottom: "8px",
                      }}
                    >
                      <Link
                        href={`${training
                          .toLowerCase()
                          .replace(/\s+/g, "-")}-training`}
                        sx={{
                          color: "#ccc",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "#2196F3",
                          },
                        }}
                      >
                        {training}
                      </Link>
                    </li>
                  ))}
                </Box>
              </Grid>

              {/* Contact Column */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: "white",
                  }}
                >
                  Contact Us
                </Typography>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "15px",
                      gap: "10px",
                    }}
                  >
                    <Email
                      sx={{
                        fontSize: "20px",
                        marginTop: "2px",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#ccc",
                          lineHeight: "1.5",
                        }}
                      >
                        Email:{" "}
                        <Link
                          href="mailto:contact@vihaaninnovations.com"
                          sx={{
                            color: "#ccc",
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                            "&:hover": {
                              color: "#2196F3",
                            },
                          }}
                        >
                          contact@vihaaninnovations.com
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "15px",
                      gap: "10px",
                    }}
                  >
                    <Phone
                      sx={{
                        fontSize: "20px",
                        marginTop: "2px",
                        color: "",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#ccc",
                          lineHeight: "1.5",
                        }}
                      >
                        Phone:{" "}
                        <Link
                          href="tel:+918073979129"
                          sx={{
                            color: "#ccc",
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                            "&:hover": {
                              color: "#2196F3",
                            },
                          }}
                        >
                          +91 80739 79129
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "15px",
                      gap: "10px",
                    }}
                  >
                    <LocationOn
                      sx={{
                        fontSize: "20px",
                        marginTop: "2px",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#ccc",
                          lineHeight: "1.5",
                        }}
                      >
                        Address: 22, 1st Main Rd, near APPOLO MEDICAL,
                        Vijayashree Layout, Kodichikknahalli, Rotary Nagar, BDA
                        Layout BTM 4th Stage, Bengaluru, Karnataka 560068.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box
          sx={{
            border: "none",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.1)",
            margin: "20px 0",
          }}
        ></Box>

        <Box
          sx={{
            padding: "20px 0",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginBottom: "15px",
              }}
            >
              {[
                {
                  name: "Facebook",
                  icon: (
                    <Facebook
                      sx={{
                        width: "30px",
                        height: "30px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  ),
                  url: "https://www.facebook.com/profile.php?id=100084743063935",
                },
                {
                  name: "Twitter",
                  icon: (
                    <Twitter
                      sx={{
                        width: "30px",
                        height: "30px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  ),
                  url: "https://twitter.com/codesightglobal",
                },
                {
                  name: "Instagram",
                  icon: (
                    <Instagram
                      sx={{
                        width: "30px",
                        height: "30px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  ),
                  url: "https://www.instagram.com/codesightglobal/",
                },
                {
                  name: "LinkedIn",
                  icon: (
                    <LinkedIn
                      sx={{
                        width: "30px",
                        height: "30px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  ),
                  url: "https://www.linkedin.com/company/codesightglobalsolutions/",
                },
                {
                  name: "YouTube",
                  icon: (
                    <YouTube
                      sx={{
                        width: "30px",
                        height: "30px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  ),
                  url: "https://www.youtube.com/@codesightglobal",
                },
                {
                  name: "Pinterest",
                  icon: (
                    <Pinterest
                      sx={{
                        width: "30px",
                        height: "30px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  ),
                  url: "https://www.pinterest.com/codesightglobal/",
                },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  {social.icon}
                </Link>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Fixed Action Buttons */}
      {/* <Link
        href="https://wa.me/+917975468634"
        sx={{
          position: "fixed",
          bottom: "100px",
          right: "40px",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          sx={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "#01062e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WhatsApp sx={{ fontSize: 20, color: "#fff" }} />
        </Box>
      </Link>

      <Link
        href="tel:+917975468634"
        sx={{
          position: "fixed",
          bottom: "160px",
          right: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
          textDecoration: "none",
        }}
      >
        <Box
          sx={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "#01062e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Call sx={{ fontSize: 20, color: "#fff" }} />
        </Box>
      </Link> */}

      <>
        {visible && (
          <Box
            onClick={handleClick}
            className="pxl-scroll-top"
            sx={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              zIndex: 99999,
              cursor: "pointer",
              boxShadow: "inset 0 0 0 2px #d4d4d4",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Progress Circle using SVG */}
            <svg
              className="pxl-scroll-progress-circle"
              width="46px"
              height="46px"
              viewBox="0 0 100 100"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                transform: "rotate(-90deg)", // Start progress from top
              }}
            >
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#0087ca"
                strokeWidth="4"
              />

              {/* Foreground Progress Circle */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#01062e"
                strokeWidth="4"
                strokeDasharray="307.919"
                strokeDashoffset={offset}
              />
            </svg>

            {/* Up Arrow Icon */}
            <ArrowUpwardIcon sx={{ fontSize: 20, color: "black", zIndex: 2 }} />
          </Box>
        )}
      </>
    </Grid>
  );
};

export default FooterAndPopup;
