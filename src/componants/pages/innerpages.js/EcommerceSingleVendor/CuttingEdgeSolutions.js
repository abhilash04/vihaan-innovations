import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Grid, useMediaQuery, useTheme } from "@mui/material";
import icon1 from "../../../../assets/edge1.svg";
import icon2 from "../../../../assets/edge2.svg";
import icon3 from "../../../../assets/edge3.svg";
import icon4 from "../../../../assets/edge4.svg";
import icon5 from "../../../../assets/edge5.svg";
import icon6 from "../../../../assets/edge6.svg";
import PopUps from "../../../common/PopUps";

// Services data array
const services = [
  {
    icon: icon1,
    title: "Professional Online Store Design",
    description:
      "Get a modern, mobile-friendly, and conversion-focused e-commerce website designed to showcase your products beautifully and attract more customers.",
    link: "#",
    bgcolor: "linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)",
    bghoverColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
  },
  {
    icon: icon2,
    title: "Smart Product Management",
    description:
      "Easily add, update, and organize products while tracking inventory in real time to ensure accurate stock availability and smooth order management.",
    link: "#",
    bgcolor: "linear-gradient(135deg, #e1f5fe 0%, #ffffff 100%)",
    bghoverColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
  },
  {
    icon: icon3,
    title: "Secure Payment Integration",
    description:
      "Accept payments effortlessly with secure integrations such as UPI, credit cards, debit cards, and online payment gateways for a smooth checkout experience.",
    link: "#",
    bgcolor: "linear-gradient(135deg, #f3e5f5 0%, #ffffff 100%)",
    bghoverColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
  },
  {
    icon: icon4,
    title: "Order & Delivery Management",
    description:
      "Track orders, manage shipping details, and keep customers updated about their order status to deliver a seamless shopping experience.",
    link: "#",
    bgcolor: "linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%)",
    bghoverColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
  },
  {
    icon: icon5,
    title: "Mobile-Friendly Experience",
    description:
      "Your e-commerce website is fully optimized for mobile, tablet, and desktop devices, ensuring customers can shop anytime from anywhere.",
    link: "#",
    bgcolor: "linear-gradient(135deg, #fff3e0 0%, #ffffff 100%)",
    bghoverColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
  },
  {
    icon: icon6,
    title: "Sales Analytics & Insights",
    description:
      "Monitor your store performance with detailed reports on sales, customers, and product trends, helping you make smarter business decisions.",
    link: "#",
    bgcolor: "linear-gradient(135deg, #fce4ec 0%, #ffffff 100%)",
    bghoverColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
  },
];

const CuttingEdgeSolutions = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box sx={{ maxWidth: 1200, mx: "auto", py: 6, px: isMobile ? 2 : 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: isMobile ? 1 : 0,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              mb: 3.5,
              fontSize: isMobile ? "24px" : "38px",
              color: "#333",
              letterSpacing: ".5px",
              lineHeight: isMobile ? "34px" : "26px",
            }}
          >
            Powerful Solutions to Streamline Your{" "}
            <span style={{ color: "#4da6ff" }}>E-Commerce Operations</span>
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              mb: 4,
              fontSize: isMobile ? "15px" : "18px",
              textAlign: "center",
              width: isMobile ? "100%" : 800,
              color: "#333",
            }}
          >
            Our advanced tools are built for a single vendor ecommerce iOS experience, helping you
            automate processes, manage operations efficiently, and deliver better customer
            experiences.
          </Typography>
        </Box>

        {/* Fixed Grid Layout */}
        <Grid container rowSpacing={isMobile ? 4 : 8} columnSpacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
              <Card
                sx={{
                  borderRadius: "24px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  background: service.bgcolor,
                  textAlign: isMobile ? "left" : "center",
                  width: "100%",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  p: isMobile ? 2.5 : 3,
                  border: "1px solid rgba(0,0,0,0.05)",
                  "&:hover": {
                    boxShadow: "0 25px 50px rgba(0,123,255,0.2)",
                    background: service.bghoverColor,
                    transform: "scale(1.04)",
                    "& .icon-wrapper": {
                      transform: isMobile ? "scale(1.1)" : "scale(1.1) rotate(5deg)",
                    },
                    "& *": {
                      color: "white",
                    },
                  },
                }}
              >
                {/* Header: Icon and Title Container */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "row" : "column",
                    alignItems: "center",
                    gap: isMobile ? 2 : 0,
                    mb: isMobile ? 1.5 : 0,
                  }}
                >
                  <Box
                    className="icon-wrapper"
                    sx={{
                      width: isMobile ? 50 : 85,
                      height: isMobile ? 50 : 70,
                      transition: "all 0.4s ease-in-out",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={service.icon}
                      alt="icon"
                      sx={{
                        width: "100%",
                        height: "100%",
                        filter: "none",
                        transition: "filter 0.3s ease-in-out",
                        ".MuiCard-root:hover &": {
                          filter: "brightness(0) invert(1)",
                        },
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: isMobile ? "17px" : "20px",
                      lineHeight: isMobile ? "24px" : "28px",
                      fontWeight: 700,
                      my: isMobile ? 0 : 2,
                      color: "#1a1a1a",
                      textAlign: isMobile ? "left" : "center",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14.5px",
                      color: "#555",
                      lineHeight: 1.6,
                      textAlign: isMobile ? "justify" : "justify",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default CuttingEdgeSolutions;
