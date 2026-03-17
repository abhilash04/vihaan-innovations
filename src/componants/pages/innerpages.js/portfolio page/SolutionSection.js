import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../../../assets/p1.png";
import img2 from "../../../../assets/p2.png";
import img3 from "../../../../assets/p3.png";
import img4 from "../../../../assets/p4.png";
import img5 from "../../../../assets/p5.png";
import img6 from "../../../../assets/p6.png";
import img7 from "../../../../assets/p2.png";
import img8 from "../../../../assets/p12.png";
import img9 from "../../../../assets/p13.png";
import img10 from "../../../../assets/p14.png";

const solutions = [
  {
    id: 1,
    category: "IOT",
    title: "Smart Factory",
    desc1:
      "The Smart Factory involves a complete Digital Life Cycle Management with Quality Assurance and Production Management.",
    desc2:
      "Currently over 250 stations are connected, over 2 Million products are being tracked.",
    image: img1,
    link: "#",
  },
  {
    id: 2,
    category: "IOT",
    title: "Energy Monitoring System",
    desc1:
      "Multiple energy monitoring and billing systems are deployed at customer locations with support for BacNet, Modbus, and MBUs.",
    desc2:
      "Currently more than 20,000 meters are connected across different cities in India. Over 12% Energy saved every month.",
    image: img2,
    link: "#",
  },
  {
    id: 3,
    category: "Digital Transformation",
    title: "Process Automation",
    desc1:
      "Transform manual workflows into fully automated processes with intelligent bots and analytics.",
    desc2:
      "Helps reduce cost and increase efficiency by more than 40% for enterprises.",
    image: img3,
    link: "#",
  },
  {
    id: 4,
    category: "Digital Transformation",
    title: "Data Analytics Platform",
    desc1:
      "Enables enterprises to leverage big data for actionable insights using AI-driven dashboards.",
    desc2: "Trusted by 100+ enterprises worldwide.",
    image: img4,
    link: "#",
  },
  {
    id: 5,
    category: "Mobile Apps",
    title: "Employee Engagement App",
    desc1:
      "Mobile-first engagement solution to connect employees, track productivity, and improve collaboration.",
    desc2: "Available on Android and iOS with real-time updates.",
    image: img5,
    link: "#",
  },
  {
    id: 6,
    category: "Mobile Apps",
    title: "Customer Self-Service App",
    desc1:
      "Allow customers to raise tickets, track requests, and manage accounts easily.",
    desc2: "Deployed by multiple service providers worldwide.",
    image: img6,
    link: "#",
  },
  {
    id: 7,
    category: "Others",
    title: "Cyber Security Solutions",
    desc1:
      "Comprehensive security stack including SIEM, endpoint protection, and cloud security.",
    desc2: "Protects enterprises from evolving cyber threats.",
    image: img7,
    link: "#",
  },
  {
    id: 8,
    category: "Others",
    title: "Cloud Migration Services",
    desc1:
      "Migrate workloads seamlessly to cloud providers like AWS, Azure, and GCP.",
    desc2: "Ensures cost-optimized and secure migration.",
    image: img8,
    link: "#",
  },
  {
    id: 9,
    category: "Others",
    title: "Consulting Services",
    desc1:
      "Advisory services to define IT roadmap and achieve business objectives faster.",
    desc2: "Trusted by leading Fortune 500 clients.",
    image: img9,
    link: "#",
  },
  {
    id: 10,
    category: "Others",
    title: "Managed IT Services",
    desc1:
      "Comprehensive management of IT infrastructure including monitoring and support.",
    desc2: "24/7 support with global delivery model.",
    image: img10,
    link: "#",
  },
];

const SolutionSection = () => {
  const [category, setCategory] = useState("All");
  const [hovered, setHovered] = useState(false);

  const handleCategoryChange = (_, newCategory) => {
    if (newCategory !== null) setCategory(newCategory);
  };

  const filteredSolutions =
    category === "All"
      ? solutions
      : solutions.filter((item) => item.category === category);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 8 }}>
      {/* Toggle Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <ToggleButtonGroup
          value={category}
          exclusive
          onChange={handleCategoryChange}
        >
          {[
            "All",
            "IOT",
            "Digital Transformation",
            "Mobile Apps",
            "Others",
          ].map((cat) => (
            <ToggleButton
              key={cat}
              value={cat}
              sx={{
                textTransform: "none",
                px: 3,
                py: 1,
                borderRadius: "20px",
                border: "1px solid #007abf",
                color: category === cat ? "#fff" : "#007abf",
                backgroundColor: category === cat ? "#007abf" : "#fff",
                "&:hover": {
                  backgroundColor:
                    category === cat ? "#0063a1" : "rgba(0,122,191,0.1)",
                },
              }}
            >
              {cat}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      {/* Cards Grid with AnimatePresence */}
      <Grid container spacing={3} sx={{ my: 2, rowGap: 6 }}>
        <AnimatePresence mode="wait">
          {filteredSolutions.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <Paper
                  elevation={0}
                  sx={{
                    padding: "24px 24px 10px 24px",
                    borderRadius: "16px",
                    background:
                      "linear-gradient(to bottom, #87baf5ff 0%, #c8e7f9 100%)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxShadow: "2px 6px 20px rgba(0, 128, 195, 0.25)",
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.01)",
                    },
                  }}
                >
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        maxWidth: "80%",
                        height: "90%",
                        borderRadius: "8px",
                        transition: "transform 0.3s ease",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#050748",
                      mb: 1,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#000000ff",
                      lineHeight: 1.6,
                      mb: 2,
                      textAlign: "center",
                    }}
                  >
                    {item.desc1}
                  </Typography>

                  <Box
                    component="a"
                    href={item.link}
                    aria-label="Consult Now"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    sx={{
                      display: "inline-flex",
                      mt: "auto",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 16px",
                      background: "linear-gradient(to right, #025170, #5699c1)",
                      color: "#fff",
                      fontWeight: 500,
                      borderRadius: "25px",
                      textDecoration: "none",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        zIndex: 1,
                        transition: "text-transform 0.3s ease",
                      }}
                    >
                      Consult Now
                    </Typography>

                    <Box
                      sx={{
                        position: "relative",
                        width: "30px",
                        height: "30px",
                        marginLeft: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: hovered ? "-100%" : "0%",
                          left: 0,
                          opacity: hovered ? 0 : 1,
                          transform: "rotate(30deg)",
                          transition: "all 0.3s ease",
                          backgroundColor: "#fff",
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <ArrowUpwardIcon
                          sx={{ fontSize: "18px", color: "#000" }}
                        />
                      </Box>

                      <Box
                        sx={{
                          position: "absolute",
                          top: hovered ? "0%" : "100%",
                          left: 0,
                          opacity: hovered ? 1 : 0,
                          transform: "rotate(30deg)",
                          transition: "all 0.3s ease",
                          backgroundColor: "#e6f0f5ff",
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <ArrowUpwardIcon
                          sx={{ fontSize: "18px", color: "black" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  );
};

export default SolutionSection;
