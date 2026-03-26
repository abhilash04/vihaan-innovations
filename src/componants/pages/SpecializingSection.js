import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { motion } from "framer-motion";
import icon1 from "../../assets/website-development.png";
import icon2 from "../../assets/app-development.png";
import icon3 from "../../assets/digital-marketing.png";
import icon4 from "../../assets/ecommerce-solutions.png";
import icon5 from "../../assets/branding-service.png";
import icon6 from "../../assets/uiux-design.png";
import icon7 from "../../assets/content-creation.png";
import icon8 from "../../assets/devops.png";

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
    icon: icon4,
    title: "E-commerce Solutions",
    description: "Set up secure and scalable online stores with ease.",
    link: "#",
  },
  {
    icon: icon5,
    title: "Branding Service",
    description: "Build strong brand identities with meaningful visuals.",
    link: "#",
  },
  {
    icon: icon6,
    title: "UI/UX Design",
    description: "Design user-friendly interfaces that improve experience.",
    link: "#",
  },
  {
    icon: icon7,
    title: "Content Creation",
    description: "Produce engaging content that attracts and informs users.",
    link: "#",
  },
  {
    icon: icon8,
    title: "DevOps Services",
    description: "Improve deployment speed and ensure smooth cloud operations.",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom,#f0f4f8ff 0, #e2f3ff 100%)",
        borderTop: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", py: { xs: 8, md: 10 }, px: 2 }}>
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
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ height: "100%" }}
              >
                <Card
                  sx={{
                    borderRadius: "16px",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.02)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                      transform: "translateY(-5px)",
                      borderColor: "rgba(0,0,0,0.1)"
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={service.icon}
                    alt="icon"
                    sx={{
                      width: 100,
                      height: 100,
                      marginY: 2,
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
                        lineHeight: "18px",
                        mb: 3,
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
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesSection;
