import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
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
} from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PhoneIcon from "@mui/icons-material/Phone";
import EventIcon from "@mui/icons-material/Event";

const PopUps = ({ open, handleClose }) => {
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
    if (handleClose) {
      handleClose();
    }
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
    console.log("Form submitted:", formData);
    handleClosePopup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isDialogOpen = open !== undefined ? open : showPopup;

  return (
    <>
      {/* Appointment Dialog */}
      <Dialog
        open={isDialogOpen}
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
              Start Your Journey
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
                  <MenuItem value="Others">Others</MenuItem>
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
                Get In Touch
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Floating Action Buttons */}
      <>
        {/* Phone — mobile only */}
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

        {/* WhatsApp — mobile only */}
        <Box
          component="a"
          href="https://wa.me/919964848414"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          sx={{
            position: "fixed",
            bottom: visible ? "176px" : "108px",
            right: "40px",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            zIndex: 99999,
            cursor: "pointer",
            backgroundColor: "#128c7e",
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(18, 140, 126, 0.45)",
            transition: "transform 0.3s ease, bottom 0.3s ease",
            textDecoration: "none",
            "&:hover": { transform: "translateY(-5px)" },
          }}
        >
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
    </>
  );
};

export default PopUps;
