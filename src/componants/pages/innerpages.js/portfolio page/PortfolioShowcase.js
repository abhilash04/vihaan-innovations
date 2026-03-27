import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Chip,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const projects = [
  {
    id: 1,
    category: "Products",
    title: "Hospital Management System",
    desc: "A comprehensive solution for patients, doctors, and real-time billing automation.",
    img: "https://img.freepik.com/free-vector/hospital-management-system-concept_23-2148622974.jpg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    category: "Products",
    title: "E-Commerce Platform",
    desc: "Enterprise-grade online shopping experience with seamless payment integration.",
    img: "https://img.freepik.com/free-vector/online-shopping-concept_23-2148626524.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: 3,
    category: "Services",
    title: "ERP / CRM Solution",
    desc: "Transforming business operations with automated HR, sales, and lead tracking.",
    img: "https://img.freepik.com/free-vector/crm-concept-illustration_114360-1305.jpg",
    tags: ["Angular", "Django", "MySQL"],
  },
  {
    id: 4,
    category: "Training",
    title: "LMS Console",
    desc: "A dynamic learning management system built for high-scale educational institutions.",
    img: "https://img.freepik.com/free-vector/distance-learning-concept-illustration_114360-3165.jpg",
    tags: ["Vite", "Firebase", "AWS"],
  },
  {
    id: 5,
    category: "Services",
    title: "PropTech Portal",
    desc: "Modernizing real estate with 3D tours, virtual bookings, and transparent listings.",
    img: "https://img.freepik.com/free-vector/real-estate-searching-concept_23-2148651478.jpg",
    tags: ["React Native", "PHP", "SQLite"],
  },
  {
    id: 6,
    category: "Training",
    title: "EduTech Hub",
    desc: "Interactive coding environments and video streaming for the next-gen learners.",
    img: "https://img.freepik.com/free-vector/education-concept-illustration_114360-2521.jpg",
    tags: ["TypeScript", "WebRTC", "Redis"],
  },
];

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Products", "Services", "Training"];

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#f8fafc" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              color: "#00b4d8",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Our Work
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "32px", md: "48px" },
              color: "#1e293b",
              mb: 2,
            }}
          >
            Digital Success Stories
          </Typography>
          <Typography
            sx={{
              color: "#64748b",
              maxWidth: "600px",
              mx: "auto",
              fontSize: "18px",
            }}
          >
            From startups to enterprises, we've built solutions that scale and solve real-world problems.
          </Typography>
        </Box>

        {/* Filter Navigation */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 8,
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveTab(cat)}
              sx={{
                px: 4,
                py: 1,
                borderRadius: "30px",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "15px",
                background: activeTab === cat ? "#00b4d8" : "transparent",
                color: activeTab === cat ? "#ffffff" : "#64748b",
                border: "1px solid",
                borderColor: activeTab === cat ? "#00b4d8" : "#e2e8f0",
                "&:hover": {
                  background: activeTab === cat ? "#0077b6" : "rgba(0,180,216,0.05)",
                  borderColor: "#00b4d8",
                },
                transition: "all 0.3s ease",
              }}
            >
              {cat}
            </Button>
          ))}
        </Box>

        {/* Project Grid */}
        <Grid container spacing={4}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={project.id}
                component={motion.div}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    "&:hover": {
                      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                      "& .project-img": { transform: "scale(1.1)" },
                      "& .overlay-cta": { opacity: 1 },
                    },
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Box sx={{ position: "relative", height: "240px", overflow: "hidden" }}>
                    <Box
                      component="img"
                      src={project.img}
                      className="project-img"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <Box
                      className="overlay-cta"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(15,23,42,0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        zIndex: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          background: "#ffffff",
                          color: "#1e293b",
                          fontWeight: 700,
                          borderRadius: "30px",
                          px: 3,
                          py: 1,
                          textTransform: "none",
                          "&:hover": { background: "#f8fafc" },
                        }}
                      >
                        Case Study
                      </Button>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Typography
                      sx={{
                        color: "#00b4d8",
                        fontWeight: 700,
                        fontSize: "12px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        mb: 1.5
                      }}
                    >
                      {project.category}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 800, color: "#1e293b", mb: 2, fontSize: "1.25rem" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography sx={{ color: "#64748b", mb: 3, fontSize: "15px", lineHeight: 1.6 }}>
                      {project.desc}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            background: "#f1f5f9",
                            color: "#64748b",
                            fontWeight: 600,
                            borderRadius: "6px",
                            fontSize: "11px",
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioShowcase;
