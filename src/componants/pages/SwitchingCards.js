import React, { useState } from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { FavoriteBorder, Html, Widgets, Folder } from "@mui/icons-material";
import Security from "@mui/icons-material/Security";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import img1 from "../../assets/SwitchingCardsimg1.jpeg";
import img2 from "../../assets/SwitchingCardsimg2.jpeg";
import img3 from "../../assets/SwitchingCardsimg3.jpeg";
const sections = [
  {
    id: 1,
    title: "Website Development",
    subtitle: "Create Fast, Scalable, and User-Friendly Websites",
    description:
      "We build responsive, high-performance websites tailored to your brand and business needs - from corporate sites to full e-commerce platforms.",
    button: "Start Building",
    icons: [
      {
        icon: <FavoriteBorder sx={{ color: "#F42222" }} />,
        label: "Designed For One",
      },
      {
        icon: <Html sx={{ color: "#F42222" }} />,
        label: "Page HTML",
      },
      {
        icon: <Widgets sx={{ color: "#F42222" }} />,
        label: "Freeform Widgets",
      },
      {
        icon: <Folder sx={{ color: "#F42222" }} />,
        label: "Sass Section",
      },
      {
        icon: <Security sx={{ color: "#F42222" }} />,
        label: "Secure Access",
      },
      {
        icon: <RocketLaunch sx={{ color: "#F42222" }} />,
        label: "Fast Deployment",
      },
    ],
    image: img1,
  },
  {
    id: 2,
    title: "SEO Optimization",
    subtitle: "Boost Your Website’s Reach with Smart SEO Strategies",
    description:
      "We help your site rank higher, attract the right audience, and grow organically with proven SEO techniques.",
    button: "Improve Ranking",
    icons: [
      {
        icon: <FavoriteBorder sx={{ color: "#F42222" }} />,
        label: "Designed For One",
      },
      {
        icon: <Html sx={{ color: "#F42222" }} />,
        label: "Page HTML",
      },
      {
        icon: <Widgets sx={{ color: "#F42222" }} />,
        label: "Freeform Widgets",
      },
      {
        icon: <Folder sx={{ color: "#F42222" }} />,
        label: "Sass Section",
      },
      {
        icon: <Security sx={{ color: "#F42222" }} />,
        label: "Secure Access",
      },
      {
        icon: <RocketLaunch sx={{ color: "#F42222" }} />,
        label: "Fast Deployment",
      },
    ],
    image: img2,
    reverse: true,
  },
  {
    id: 3,
    title: "Digital Marketing",
    subtitle: "Grow Your Brand with Data-Driven Digital Marketing",
    description:
      "We create targeted campaigns that boost reach, increase engagement, and drive measurable results across all digital platforms.",
    button: "Start Campaign",
    icons: [
      {
        icon: <FavoriteBorder sx={{ color: "#F42222" }} />,
        label: "Designed For One",
      },
      {
        icon: <Html sx={{ color: "#F42222" }} />,
        label: "Page HTML",
      },
      {
        icon: <Widgets sx={{ color: "#F42222" }} />,
        label: "Freeform Widgets",
      },
      {
        icon: <Folder sx={{ color: "#F42222" }} />,
        label: "Sass Section",
      },
      {
        icon: <Security sx={{ color: "#F42222" }} />,
        label: "Secure Access",
      },
      {
        icon: <RocketLaunch sx={{ color: "#F42222" }} />,
        label: "Fast Deployment",
      },
    ],
    image: img3,
  },
];

export default function SwitchingCards() {
  const [activeSection, setActiveSection] = useState(1);

  const current = sections.find((s) => s.id === activeSection);

  return (
    <Box sx={{ backgroundColor: "#f4f2f9" }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", px: 2, py: 6 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          pb={6}
        >
          <Typography
            gutterBottom
            sx={{
              fontSize: "2.6rem",
              fontWeight: 600,
              lineHeight: 1.3,
              color: "313845",
              fontFamily: "Gilroy-bold",
              fontStyle: "normal",
              mb: "15px",
            }}
          >
            Ready Products
          </Typography>
          <Typography
            width="600px"
            sx={{
              fontSize: "16.5px",
              fontWeight: 500,
              lineHeight: 1.4,
              color: "rgba(49, 56, 69, 0.7)",
              fontFamily: "lato",
              mb: "15px",
              "&:hover": { color: "#0B70E1" },
            }}
          >
            Discover ready-to-use products that help you build and launch websites faster.
          </Typography>
        </Box>
        {/* Switch Buttons */}
        <Box
          sx={{ display: "flex", justifyContent: "center", mb: 8, gap: 1.5 }}
        >
          {sections.map((s) => (
            <Button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              sx={{
                textTransform: "none",
                px: 6,
                py: 1,
                fontSize: "18px",
                borderBottom: "1px solid #c4c0c0ff",
                fontWeight: 500,
                color: activeSection === s.id ? "#fff" : "#333",
                background:
                  activeSection === s.id
                    ? "linear-gradient(45deg, #e3335f, #3b2c73)"
                    : "transparent",
                border:
                  activeSection === s.id
                    ? "none"
                    : "1px solid #dee2e6 #dee2e6 #fff",
                boxShadow:
                  activeSection === s.id
                    ? "0px 4px 10px rgba(0,0,0,0.15)"
                    : "none",
                transition: "all 0.3s ease",
              }}
            >
              {s.button}
            </Button>
          ))}
        </Box>
        {/* Section Content */}
        <Grid
          container
          spacing={6}
          direction={current.reverse ? "row-reverse" : "row"}
          alignItems="center"
        >
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
                lineHeight: "26px",
                color: "black",
                mb: "15px",
              }}
            >
              {current.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "2.6rem",
                fontWeight: "bold",
                mb: 2,
                lineHeight: 1.3,
                color: "#313845",
              }}
            >
              {current.subtitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, color: "#495057", fontSize: "16px" }}
            >
              {current.description}
            </Typography>

            <Paper
              sx={{
                p: 3,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 3,
                borderRadius: "8px",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              {current.icons.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // color:'#F42222',
                    gap: 1.5,
                    "&:hover svg": {
                      transform: "rotate(-45deg)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  {item.icon}
                  <Typography
                    sx={{ fontSize: "16px", fontWeight: 500, color: "#444a56" }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={current.image}
              alt={current.subtitle}
              sx={{
                width: "100%",
                height: "400px",
                borderRadius: "10px",
                boxShadow: "0 21px 81px 0 #18124d40",
                //   "&:hover": {
                animation: "float 3s ease-in-out infinite",
                "@keyframes float": {
                  "0%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-12px)" },
                  "100%": { transform: "translateY(0px)" },
                },
                //   },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
