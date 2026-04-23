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
import Close from "@mui/icons-material/Close";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
            width: isMobile ? "95%" : "400px",
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
          <Close fontSize={isMobile ? "small" : "large"} />
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
              sx={{
                color: "#007b9f",
                fontSize: isMobile ? "16px" : "24px",
                fontWeight: 600,
                textAlign: "center",
                mt: isMobile ? 0.2 : 1
              }}
            >
              Start Your Journey
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box sx={{ padding: isMobile ? "0 15px" : "0 20px", mt: isMobile ? 1.2 : 2 }}>
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
                    "& input": {
                      padding: isMobile ? "10px" : "12px",
                      fontSize: isMobile ? "13px" : "inherit"
                    },
                  }}
                />
              ))}

              <FormControl fullWidth sx={{ marginBottom: isMobile ? "10px" : "15px" }}>
                <Select
                  name="service"
                  displayEmpty
                  required
                  value={formData.service || ""}
                  onChange={handleInputChange}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        "& .MuiMenuItem-root": {
                          paddingTop: isMobile ? "4px" : "inherit",
                          paddingBottom: isMobile ? "4px" : "inherit",
                          minHeight: isMobile ? "32px" : "inherit",
                        },
                      },
                    },
                  }}
                  sx={{
                    height: isMobile ? "36px" : "auto",
                    fontSize: isMobile ? "12px" : "inherit",
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
                  <MenuItem value="" disabled sx={{ fontSize: isMobile ? "12px" : "inherit" }}>
                    Choose Category
                  </MenuItem>
                  <MenuItem value="Products" sx={{ fontSize: isMobile ? "12px" : "inherit" }}>Ready Products</MenuItem>
                  <MenuItem value="Services" sx={{ fontSize: isMobile ? "12px" : "inherit" }}>Services</MenuItem>
                  <MenuItem value="Training" sx={{ fontSize: isMobile ? "12px" : "inherit" }}>Training</MenuItem>
                  <MenuItem value="Others" sx={{ fontSize: isMobile ? "12px" : "inherit" }}>Others</MenuItem>
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
                }}
                sx={{
                  mb: isMobile ? 1.2 : 2,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ccc" },
                    "&:hover fieldset": { borderColor: "#00a0c8" },
                    "&.Mui-focused fieldset": { borderColor: "#00a0c8" },
                  },
                  "& input": {
                    padding: isMobile ? "10px" : "12px",
                    fontSize: isMobile ? "13px" : "inherit"
                  },
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
                sx={{
                  mb: isMobile ? 1.2 : 2,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ccc" },
                    "&:hover fieldset": { borderColor: "#00a0c8" },
                    "&.Mui-focused fieldset": { borderColor: "#00a0c8" },
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: isMobile ? "13px" : "inherit"
                  },
                }}
              />
            </Box>

            <DialogActions sx={{ justifyContent: "center" }}>
              <Button
                type="submit"
                sx={{
                  fontSize: isMobile ? "13px" : "16px",
                  padding: isMobile ? "6px 18px" : "8px 24px",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  background:
                    "linear-gradient(90deg, #00a0c8 0%, #007b9f 100%)",
                  color: "#fff",
                  fontWeight: 600,
                  boxShadow: isMobile ? "0 6px 15px rgba(0, 160, 200, 0.4)" : "0 8px 20px rgba(0, 160, 200, 0.4)",
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
    </>
  );
};

export default PopUps;
