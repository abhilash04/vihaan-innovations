import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import img from "../../../../assets/Home-banner-img 1.png";
import banner from "../../../../assets/EcommerceBannerimg.png";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const EcommerceBanner = () => {
  return (
    <Box
      sx={{
        pt: 13,
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        minHeight: "550px",
      }}
    >
      <Box sx={{ maxWidth: "1250px", mx: "auto" }}>
        <Grid container>
          {/* Left Content */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 3.5,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#333",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Simplify Your E-Commerce Operations with
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: "58px",
                  lineHeight: "54px",
                  fontFamily: "Fira Sans",
                  marginBottom: 3,
                  color: '#333'
                }}
              >
                India's #1 E-Commerce{" "} <br />
                <span style={{ color: "#4da6ff" }}>CRM Software</span>
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#333",
                  width: "600px",
                  textAlign: 'justify',
                }}
              >
                Streamline your entire e-commerce workflow with a powerful CRM platform designed to manage <b>inventory, warehouse logistics, customer communication, order processing, team tasks, and hassle-free returns</b> in one place.
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#333",
                  width: "600px",
                  mt: 2,
                  textAlign: 'justify'
                }}
              >
                Our smart E-Commerce CRM helps you track products, manage orders, and improve customer relationships-saving time and helping your business grow faster.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mt: 6,
                }}
              >

                <Button
                  variant="outlined"
                  endIcon={<DoubleArrowIcon />}
                  sx={{
                    px: 3,
                    py: 1.2,
                    fontSize: '18px',
                    fontWeight: 600,
                    borderRadius: 2,
                    color: '#036',
                    borderColor: '#036',
                    textTransform: "none",
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      color: 'white',
                      borderColor: '#4da6ff', // sky blue
                      backgroundColor: '#4da6ff', // sky blue
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 25px -5px rgba(54, 183, 244, 0.4)',
                    },
                    '&:active': {
                      transform: 'translateY(0px)',
                      boxShadow: '0 5px 15px -3px rgba(60, 182, 239, 0.4)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: 0,
                      height: 0,
                      borderRadius: '50%',
                      background: 'rgba(6, 180, 254, 0.3)',
                      transform: 'translate(-50%, -50%)',
                      transition: 'width 0.6s, height 0.6s',
                    },
                    '&:hover::after': {
                      width: '300px',
                      height: '300px',
                    },
                  }}
                >
                  Start Your Free Demo
                </Button>
              </Box>
            </Box>
          </Grid>
          {/* Right column (empty to keep background aligned) */}
          <Grid item xs={12} md={5} sx={{ mt: 2.5 }}>
            <Box
              component="img"
              src={img}
              alt="IT Consultation"
              sx={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>{" "}
        </Grid>
      </Box>
    </Box>
  );
};

export default EcommerceBanner;
