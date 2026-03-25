import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import icon1 from "../../assets/branding.svg";
import icon2 from "../../assets/development.svg";
import icon3 from "../../assets/app.svg";

// Services data array
const services = [
  {
    icon: icon1,
    title: "Website Development",
    description: "Create fast, modern websites that work on any device.",
    link: "#",
  },
  {
    icon: icon2,
    title: "App Development",
    description: "Develop custom mobile apps for both iOS and Android.",
    link: "#",
  },
  {
    icon: icon3,
    title: "Digital Marketing",
    description: "Grow your online presence with SEO, ads, and social media.",
    link: "#",
  },
  {
    icon: icon3,
    title: "E-commerce Solutions",
    description: "Set up secure and scalable online stores with ease.",
    link: "#",
  },
  {
    icon: icon2,
    title: "Branding Service",
    description: "Build strong brand identities with meaningful visuals.",
    link: "#",
  },
  {
    icon: icon1,
    title: "UI/UX Design",
    description: "Design user-friendly interfaces that improve experience.",
    link: "#",
  },
  {
    icon: icon2,
    title: "Content Creation",
    description: "Produce engaging content that attracts and informs users.",
    link: "#",
  },
  {
    icon: icon3,
    title: "DevOps Services",
    description: "Improve deployment speed and ensure smooth cloud operations.",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom,#e2f3ff 0, #f0f4f8ff 100%)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", py: 8, px: 2 }}>
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
              fontWeight: 400,
              mb: 2,
              fontSize: "16px",
              color: "#e60072",
              textTransform: "uppercase",
              letterSpacing: ".5px",
              lineHeight: "26px",
            }}
          >
            Our Service
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              mb: 4,
              fontSize: "40px",
              color: "#050748",
              lineHeight: "52px",
            }}
          >
            Specialized Digital Solutions by Vihaan Innovations
          </Typography>
        </Box>

        {/* 🔥 Fixed Grid Layout */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: "5px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={service.icon}
                  alt="icon"
                  sx={{
                    width: 85,
                    height: 90,
                    marginY: 2.5,
                  }}
                />

                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      lineHeight: "26px",
                      fontWeight: 600,
                      width: 200,
                      mb: 1,
                      color: "#050748",
                      textAlign: "center",
                      mx: "auto",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      color: "#6a6a8e",
                      width: 250,
                      lineHeight: "24px",
                      mb: 1,
                      mx: "auto",
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Typography
                    component="a"
                    href={service.link}
                    sx={{
                      textDecoration: "none",
                      color: "#6a6a8e",
                      fontSize: "17px",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      "&:hover": {
                        color: "#ff1f8e",
                      },
                      //   mb: 1,
                    }}
                  >
                    Learn More &gt;
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesSection;
