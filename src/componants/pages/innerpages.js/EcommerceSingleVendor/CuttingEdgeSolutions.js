import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
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
  return (
    <Box>
      <Box sx={{ maxWidth: 1200, mx: "auto", py: 6, px: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              mb: 3.5,
              fontSize: "38px",
              color: "#333",
              letterSpacing: ".5px",
              lineHeight: "26px",
            }}
          >
            Powerful Solutions to Streamline Your  <span style={{ color: "#4da6ff" }}>E-Commerce Operations</span>
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              mb: 4,
              fontSize: "18px",
              textAlign: "center",
              width: 800,
              color: "#333",
            }}
          >
            Our advanced tools are built for a single vendor ecommerce
            iOS experience, helping you automate processes, manage operations efficiently,
            and deliver better customer experiences.
          </Typography>
        </Box>

        {/* 🔥 Fixed Grid Layout */}
        <Grid container rowSpacing={8} columnSpacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
              <Card
                sx={{
                  borderRadius: "24px", // Even more premium
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  background: service.bgcolor,
                  textAlign: "center",
                  width: "100%", // Ensure it fills grid item
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  pb: 3, // Reduced bottom space
                  border: "1px solid rgba(0,0,0,0.05)", // More visible border
                  "&:hover": {
                    boxShadow: "0 25px 50px rgba(0,123,255,0.2)",
                    background: service.bghoverColor,
                    transform: "scale(1.04)",
                    "& .learn-more": {
                      backgroundColor: "#ffffff",
                      color: "#007bff",
                      boxShadow: "0 8px 20px rgba(255,255,255,0.4)",
                    },
                    "& .icon-wrapper": {
                      transform: "scale(1.1) rotate(5deg)",
                    },
                    "& *": {
                      color: "white",
                    },
                  },
                }}
              >
                <Box
                  className="icon-wrapper"
                  sx={{
                    width: 85,
                    height: 70,
                    mt: 2.5,
                    mb: 1,
                    transition: "all 0.4s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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

                <CardContent
                  sx={{
                    p: 0,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1, // Push content to fill card
                    alignItems: "center"
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      lineHeight: "28px",
                      fontWeight: 700,
                      px: 3,
                      my: 2,
                      color: "#1a1a1a",
                      textAlign: "center",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "15px",
                      color: "#555",
                      px: 3,
                      mb: 3,
                      lineHeight: 1.4,
                      textAlign: "justify",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
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
