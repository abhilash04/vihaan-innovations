import React, { useState } from "react";
import { Grid, Typography, Box, Button, useMediaQuery, useTheme } from "@mui/material";
import img from "../../../../assets/Home-banner-img 1.png";
import banner from "../../../../assets/EcommerceBannerimg.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PopUps from "../../../common/PopUps";

const EcommerceBanner = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        pt: isMobile ? 10 : 13,
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        minHeight: "550px",
      }}
    >
      <Box sx={{ maxWidth: "1250px", mx: "auto", px: isMobile ? 2 : 0 }}>
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
                  fontSize: isMobile ? "14px" : "18px",
                  lineHeight: "24px",
                  color: "#333",
                  textTransform: "uppercase",
                  mb: 2,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Simplify Your E-Commerce Operations with
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: isMobile ? "34px" : "58px",
                  lineHeight: isMobile ? "40px" : "54px",
                  fontFamily: "Fira Sans",
                  marginBottom: 3,
                  color: "#333",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                India's #1 <br />
                <span style={{ color: "#4da6ff" }}>ECommerce Website</span>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 700,
                    fontSize: isMobile ? "34px" : "58px",
                    lineHeight: isMobile ? "40px" : "54px",
                    fontFamily: "Fira Sans",
                    marginBottom: 3,
                    color: "#333",
                  }}
                >
                  for a Single Vendor <br />
                </Typography>
              </Typography>

              {/* Image shown only on mobile — after the title */}
              {isMobile && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                    mb: 3,
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt="E-Commerce Banner"
                    sx={{
                      width: "90%",
                      maxWidth: "400px",
                      height: "auto",
                      objectFit: "contain",
                      borderRadius: "12px",
                    }}
                  />
                </Box>
              )}

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  fontSize: isMobile ? "15px" : "18px",
                  lineHeight: "25px",
                  color: "#333",
                  width: isMobile ? "100%" : "600px",
                  textAlign: isMobile ? "center" : "justify",
                }}
              >
                Streamline your workflow with a powerful CRM built for a single vendor ecommerce
                website. Manage inventory, warehouse, orders, and returns-all in one place.
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  fontSize: isMobile ? "15px" : "18px",
                  lineHeight: "25px",
                  color: "#333",
                  width: isMobile ? "100%" : "600px",
                  mt: 2,
                  textAlign: isMobile ? "center" : "justify",
                }}
              >
                Boost efficiency by tracking products, managing customers, and reducing manual work.
                Grow your single vendor ecommerce website faster with an all-in-one solution.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  justifyContent: isMobile ? "center" : "flex-start",
                  alignItems: "center",
                  mt: 6,
                  mb: isMobile ? 4 : 0,
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => setOpenPopup(true)}
                  endIcon={<DoubleArrowIcon />}
                  sx={{
                    px: 3,
                    py: 1.2,
                    fontSize: isMobile ? "15px" : "18px",
                    fontWeight: 600,
                    borderRadius: 2,
                    color: "#036",
                    borderColor: "#036",
                    textTransform: "none",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      color: "white",
                      borderColor: "#4da6ff",
                      backgroundColor: "#4da6ff",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 25px -5px rgba(54, 183, 244, 0.4)",
                    },
                    "&:active": {
                      transform: "translateY(0px)",
                      boxShadow: "0 5px 15px -3px rgba(60, 182, 239, 0.4)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 0,
                      height: 0,
                      borderRadius: "50%",
                      background: "rgba(6, 180, 254, 0.3)",
                      transform: "translate(-50%, -50%)",
                      transition: "width 0.6s, height 0.6s",
                    },
                    "&:hover::after": {
                      width: "300px",
                      height: "300px",
                    },
                  }}
                >
                  Start Your Free Demo
                </Button>
              </Box>
            </Box>
          </Grid>
          {/* Right column image — shown only on desktop now */}
          {!isMobile && (
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                mt: 2.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={img}
                alt="E-Commerce Banner"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Grid>
          )}
        </Grid>
      </Box>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default EcommerceBanner;
