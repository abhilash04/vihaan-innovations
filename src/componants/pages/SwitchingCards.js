import React, { useState } from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { FavoriteBorder, Html, Widgets, Folder } from "@mui/icons-material";
import Security from "@mui/icons-material/Security";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/SwitchingCardsimg1.jpeg";
import img2 from "../../assets/SwitchingCardsimg2.jpeg";
import img3 from "../../assets/SwitchingCardsimg3.jpeg";

const sections = [
  {
    id: 1,
    title: "Website Development",
    subtitle: "Create Fast, Scalable, and User-Friendly Websites",
    description:
      "At Vihaan Innovations, we design and develop modern websites that are responsive, secure, and optimized for performance.",
    button: "Start Building",
    icons: [
      { icon: <FavoriteBorder sx={{ color: "#00b4d8" }} />, label: "Modern Responsive Design" },
      { icon: <Html sx={{ color: "#00b4d8" }} />, label: "One Page HTML Layout" },
      { icon: <Widgets sx={{ color: "#00b4d8" }} />, label: "Freeform Widgets Integration" },
      { icon: <Folder sx={{ color: "#00b4d8" }} />, label: "Sass Section Support" },
      { icon: <Security sx={{ color: "#00b4d8" }} />, label: "Secure Access" },
      { icon: <RocketLaunch sx={{ color: "#00b4d8" }} />, label: "Fast Deployment" },
    ],
    image: img1,
  },
  {
    id: 2,
    title: "SEO Optimization",
    subtitle: "Boost Your Website's Reach with Smart SEO Strategies",
    description:
      "Vihaan Innovations helps businesses increase their search engine visibility with advanced SEO strategies.",
    button: "Improve Ranking",
    icons: [
      { icon: <FavoriteBorder sx={{ color: "#00b4d8" }} />, label: "Keyword Research & Optimization" },
      { icon: <Html sx={{ color: "#00b4d8" }} />, label: "On-Page SEO Improvements" },
      { icon: <Widgets sx={{ color: "#00b4d8" }} />, label: "OFF-Page SEO Optimization" },
      { icon: <Folder sx={{ color: "#00b4d8" }} />, label: "Performance Monitoring" },
      { icon: <Security sx={{ color: "#00b4d8" }} />, label: "Secure Website Structure" },
      { icon: <RocketLaunch sx={{ color: "#00b4d8" }} />, label: "Fast Deployment" },
    ],
    image: img2,
    reverse: true,
  },
  {
    id: 3,
    title: "Digital Marketing",
    subtitle: "Grow Your Brand with Data-Driven Digital Marketing",
    description:
      "At Vihaan Innovations, we create targeted digital marketing campaigns that increase brand awareness, engagement, and conversions.",
    button: "Start Campaign",
    icons: [
      { icon: <FavoriteBorder sx={{ color: "#00b4d8" }} />, label: "Social Media Marketing" },
      { icon: <Html sx={{ color: "#00b4d8" }} />, label: "Paid Advertising Campaigns" },
      { icon: <Widgets sx={{ color: "#00b4d8" }} />, label: "Content Marketing Strategies" },
      { icon: <Folder sx={{ color: "#00b4d8" }} />, label: "Audience Targeting" },
      { icon: <Security sx={{ color: "#00b4d8" }} />, label: "Analytics & Performance Tracking" },
      { icon: <RocketLaunch sx={{ color: "#00b4d8" }} />, label: "Campaign Optimization" },
    ],
    image: img3,
  },
];

export default function SwitchingCards() {
  const [activeSection, setActiveSection] = useState(1);
  const current = sections.find((s) => s.id === activeSection);

  return (
    <Box sx={{ backgroundColor: "#f4f2f9" }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", px: { xs: 2, md: 3 }, py: { xs: 4, md: 6 } }}>

        {/* ── Header ── */}
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" pb={{ xs: 3, md: 6 }}>
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "1.8rem", md: "2.6rem" },
              fontWeight: 600,
              lineHeight: 1.3,
              color: "#313845",
              fontFamily: "Gilroy-bold",
              mb: "15px",
            }}
          >
            Ready Products
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16.5px" },
              fontWeight: 500,
              lineHeight: 1.4,
              color: "rgba(49, 56, 69, 0.7)",
              fontFamily: "lato",
              mb: "15px",
              maxWidth: "600px",
              width: "100%",
              "&:hover": { color: "#0B70E1" },
            }}
          >
            Discover ready-to-use digital solutions that help you build, optimize, and promote your website faster.
          </Typography>
        </Box>

        {/* ── Switch Buttons ── */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 4, md: 8 },
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {sections.map((s) => (
            <Button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              sx={{
                textTransform: "none",
                px: { xs: 2.5, md: 6 },
                py: { xs: 0.8, md: 1 },
                fontSize: { xs: "13px", md: "18px" },
                fontWeight: 500,
                color: activeSection === s.id ? "#fff" : "#333",
                background:
                  activeSection === s.id
                    ? "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)"
                    : "transparent",
                border:
                  activeSection === s.id
                    ? "none"
                    : "1px solid #dee2e6",
                borderBottom: activeSection === s.id ? "none" : "1px solid #c4c0c0ff",
                boxShadow:
                  activeSection === s.id
                    ? "0px 4px 10px rgba(0,0,0,0.15)"
                    : "none",
                borderRadius: "6px",
                transition: "all 0.3s ease",
                minWidth: { xs: "100px", md: "auto" },
              }}
            >
              {s.button}
            </Button>
          ))}
        </Box>

        {/* ── Section Content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: current.reverse ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: current.reverse ? 40 : -40 }}
            transition={{ duration: 0.4 }}
          >
            <Grid
              container
              spacing={{ xs: 3, md: 6 }}
              direction={current.reverse ? "row-reverse" : "row"}
              alignItems="center"
            >
              {/* ── Text + Icons ── */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "13px", md: "1.1rem" },
                    fontWeight: 600,
                    lineHeight: "26px",
                    color: "black",
                    mb: "10px",
                  }}
                >
                  {current.title}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.6rem", md: "2.6rem" },
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
                  sx={{ mb: 2, color: "#495057", fontSize: { xs: "14px", md: "16px" } }}
                >
                  {current.description}
                </Typography>

                <Paper
                  sx={{
                    p: { xs: 2, md: 3 },
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: { xs: 2, md: 3 },
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
                        gap: 1.5,
                        "&:hover svg": {
                          transform: "rotate(-45deg)",
                          transition: "transform 0.3s ease",
                        },
                      }}
                    >
                      {item.icon}
                      <Typography sx={{ fontSize: { xs: "11px", md: "12px" }, fontWeight: 500, color: "#444a56" }}>
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </Grid>

              {/* ── Image ── */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={current.image}
                  alt={current.subtitle}
                  sx={{
                    width: "100%",
                    height: { xs: "220px", sm: "300px", md: "400px" },
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 21px 81px 0 #18124d40",
                    animation: "float 3s ease-in-out infinite",
                    "@keyframes float": {
                      "0%": { transform: "translateY(0px)" },
                      "50%": { transform: "translateY(-12px)" },
                      "100%": { transform: "translateY(0px)" },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
