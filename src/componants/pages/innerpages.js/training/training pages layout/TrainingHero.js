import React, { useState } from "react";
import { Box, Typography, Container, Button, Grid, TextField, MenuItem, Chip, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import bgImage from "../../../../../assets/training-hero-bg.png"; // Using the premium generated background

const TrainingHero = ({ data = {} }) => {
  const {
    title,
    subtitle,
    badgeText,
    buttonText,
    urgencyText,
    secondaryButtonText,
    formTitle,
    formSubtitle,
    namePlaceholder,
    phonePlaceholder,
    coursePlaceholder,
    submitButtonText,
    supportText,
    supportPhone,
    features = [],
    courses = []
  } = data;
  const [formData, setFormData] = useState({ name: "", phone: "", course: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
        py: { xs: 10, md: 0 },
      }}
    >
      {/* Dynamic Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.4) 100%)",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, pt: { xs: 5, md: 8 } }}>
        <Grid container spacing={6} alignItems="center">

          {/* Left Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Chip
                label={badgeText || "🚀 Advanced SEO Academy"}
                sx={{
                  mb: 2.5,
                  bgcolor: "rgba(0,180,216,0.15)",
                  color: "#00d4ff",
                  fontWeight: 800,
                  fontSize: "13px",
                  letterSpacing: "1.5px",
                  borderRadius: "6px",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(0,212,255,0.3)"
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: { xs: "28px", sm: "36px", md: "44px" },
                  color: "#ffffff",
                  lineHeight: 1.05,
                  mb: 3,
                  textShadow: "0 4px 12px rgba(0,0,0,0.3)"
                }}
              >
                {title || (
                  <>
                    Become a Certified <br />
                    <Box component="span" sx={{
                      background: "linear-gradient(90deg, #00d4ff 0%, #0077b6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      SEO Specialist
                    </Box> & Growth Lead.
                  </>
                )}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: "17px", md: "19px" },
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.7,
                  mb: 5,
                  maxWidth: "600px",
                  textShadow: "0 2px 40px rgba(0,0,0,0.2)"
                }}
              >
                {subtitle || "Join our expert-led SEO bootcamp. Master technical search marketing, high-authority link building, and data-driven organic growth with live project experience."}
              </Typography>


              {/* Urgency Alert */}
              <Box sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "14px",
                px: 2.5,
                py: 1.2,
                mb: 5
              }}>
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.25, 1], opacity: [1, 0.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#00d4ff", boxShadow: "0 0 10px #00d4ff" }}
                />
                <Typography sx={{ color: "#ffffff", fontSize: "14px", fontWeight: 700 }}>
                  {urgencyText || "Limited Slots: Next Batch Starts this Monday!"}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #00d4ff 0%, #0077b6 100%)",
                    color: "#ffffff",
                    fontWeight: 800,
                    px: 5,
                    py: 2,
                    borderRadius: "40px",
                    textTransform: "none",
                    fontSize: "17px",
                    boxShadow: "0 10px 30px rgba(0,180,216,0.3)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 15px 40px rgba(0,180,216,0.5)",
                      background: "linear-gradient(135deg, #00e5ff 0%, #00b4d8 100%)",
                    },
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                  }}
                >
                  {buttonText || "Book Your Seat"}
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.4)",
                    color: "#ffffff",
                    fontWeight: 800,
                    px: 5,
                    py: 2,
                    borderRadius: "40px",
                    textTransform: "none",
                    fontSize: "17px",
                    backdropFilter: "blur(4px)",
                    "&:hover": {
                      borderColor: "#ffffff",
                      background: "rgba(255,255,255,0.15)",
                      transform: "translateY(-4px)"
                    },
                    transition: "all 0.4s ease"
                  }}
                >
                  {secondaryButtonText || "Get Brochure"}
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Form - Glassmorphic / White Transparent */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: "32px",
                  background: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "32px",
                    padding: "1px",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.4), transparent, rgba(255,255,255,0.2))",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none"
                  }
                }}
              >
                <Typography sx={{ color: "#ffffff", fontWeight: 900, fontSize: "24px", mb: 1, letterSpacing: "-0.5px" }}>
                  {formTitle || "Start Your Journey"}
                </Typography>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px", mb: 4, fontWeight: 500 }}>
                  {formSubtitle || "Fill the form below and speak with our training advisor."}
                </Typography>

                <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <TextField
                    fullWidth
                    name="name"
                    placeholder={namePlaceholder || "Your Full Name"}
                    variant="outlined"
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#ffffff",
                        borderRadius: "16px",
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        fontSize: "15px",
                        fontWeight: 500,
                        "& fieldset": { borderColor: "rgba(243, 243, 243, 1)" },
                        "&:hover fieldset": { borderColor: "rgba(243, 243, 243, 1)" },
                        "&.Mui-focused fieldset": { borderColor: "#00d4ff", borderWidth: "2px" },
                      },
                      "& input::placeholder": { color: "rgba(243, 243, 243, 1)", opacity: 1 }
                    }}
                  />
                  <TextField
                    fullWidth
                    name="phone"
                    placeholder={phonePlaceholder || "Phone Number"}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#ffffff",
                        borderRadius: "16px",
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        fontSize: "15px",
                        fontWeight: 500,
                        "& fieldset": { borderColor: "rgba(243, 243, 243, 1)" },
                        "&:hover fieldset": { borderColor: "rgba(243, 243, 243, 1)" },
                        "&.Mui-focused fieldset": { borderColor: "#00d4ff", borderWidth: "2px" },
                      },
                      "& input::placeholder": { color: "rgba(243, 243, 243, 1)", opacity: 1 }
                    }}
                  />
                  <TextField
                    select
                    fullWidth
                    name="course"
                    value={formData.course}

                    onChange={handleChange}
                    displayEmpty
                    SelectProps={{
                      renderValue: (selected) => {
                        if (!selected) {
                          return <span style={{ color: "#ffffff", opacity: 0.9 }}>{coursePlaceholder || "Select Desired Course"}</span>;
                        }
                        return <span style={{ color: "#ffffff" }}>{selected}</span>;
                      },
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            bgcolor: "rgba(15, 23, 42, 0.95)",
                            backdropFilter: "blur(10px)",
                            color: "#ffffff",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            "& .MuiMenuItem-root": {
                              py: 1.5,
                              "&:hover": { bgcolor: "rgba(0, 212, 255, 0.1)" },
                              "&.Mui-selected": { bgcolor: "rgba(0, 212, 255, 0.2)" }
                            }
                          }
                        }
                      }
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#ffffff",
                        borderRadius: "16px",
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        fontSize: "15px",
                        fontWeight: 500,
                        "& .MuiSelect-select": { color: "#ffffff" }, // Explicit white for select text
                        "& fieldset": { borderColor: "rgba(255, 255, 255, 0.4)" },
                        "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                        "&.Mui-focused fieldset": { borderColor: "#00d4ff", borderWidth: "2px" },
                      },
                      "& .MuiSelect-icon": { color: "#ffffff" },
                    }}

                  >
                    <MenuItem value="" disabled>
                      {coursePlaceholder || "Select Desired Course"}
                    </MenuItem>

                    {courses.map((c) => (
                      <MenuItem key={c} value={c}>
                        {c}
                      </MenuItem>
                    ))}
                  </TextField>


                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      background: "linear-gradient(90deg, #00d4ff 0%, #0077b6 100%)",
                      color: "#ffffff",
                      fontWeight: 900,
                      py: 2.2,
                      borderRadius: "16px",
                      textTransform: "none",
                      fontSize: "17px",
                      boxShadow: "0 12px 24px rgba(0,212,255,0.25)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 15px 30px rgba(0,212,255,0.4)",
                        background: "linear-gradient(90deg, #00e5ff 0%, #008cc7 100%)",
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    {submitButtonText || "Apply for Early Seat"}
                  </Button>
                </Box>
                <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
                  <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 600 }}>
                    {supportText || "Support: "} <Box component="span" sx={{ color: "#ffffff" }}>{supportPhone || "+91 98765 43210"}</Box>
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TrainingHero;
