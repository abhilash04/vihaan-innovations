import React from "react";
import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    Container,
    Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LaptopIcon from "@mui/icons-material/Laptop";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CloudIcon from "@mui/icons-material/Cloud";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CodeIcon from "@mui/icons-material/Code";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import AppsIcon from "@mui/icons-material/Apps";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import BusinessIcon from "@mui/icons-material/Business";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SchoolIcon from "@mui/icons-material/School";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import StoreIcon from "@mui/icons-material/Store";
import MovieIcon from "@mui/icons-material/Movie";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const icons = [LaptopIcon, SmartphoneIcon, CloudIcon, AutoAwesomeIcon];
const industries = [
    { name: "Healthcare", icon: <LocalHospitalIcon sx={{ fontSize: 30, color: "#ef4444" }} /> },     // red
    { name: "Real Estate", icon: <BusinessIcon sx={{ fontSize: 30, color: "#3b82f6" }} /> },        // blue
    { name: "E-Commerce", icon: <ShoppingCartIcon sx={{ fontSize: 30, color: "#f59e0b" }} /> },     // amber
    { name: "Education", icon: <SchoolIcon sx={{ fontSize: 30, color: "#10b981" }} /> },            // green
    { name: "Manufacturing", icon: <PrecisionManufacturingIcon sx={{ fontSize: 30, color: "#6b7280" }} /> }, // gray
    { name: "Retail", icon: <StoreIcon sx={{ fontSize: 30, color: "#8b5cf6" }} /> },                // purple
    { name: "Media & OTT", icon: <MovieIcon sx={{ fontSize: 30, color: "#06b6d4" }} /> },           // cyan
    { name: "Corporate", icon: <BusinessCenterIcon sx={{ fontSize: 30, color: "#0ea5e9" }} /> },    // sky blue
];

export default function PortfolioSection() {
    return (
        <Box sx={{ width: "100%" }}>

            {/* 🔥 BANNER SECTION ONLY */}
            <Box
                sx={{
                    background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                    py: 5,
                }}
            >
                {/* Floating Icons */}
                {icons.map((Icon, i) => (
                    <Box
                        key={i}
                        component={motion.div}
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4 + i }}
                        sx={{
                            position: "absolute",
                            opacity: 0.2,
                            ...(i === 0 && { top: 40, left: 40 }),
                            ...(i === 1 && { bottom: 40, right: 40 }),
                            ...(i === 2 && { top: 80, right: 80 }),
                            ...(i === 3 && { bottom: 80, left: 80 }),
                        }}
                    >
                        <Icon fontSize="large" />
                    </Box>
                ))}

                <Container>
                    {/* Hero */}
                    <Box textAlign="center" py={8}>
                        <Typography variant="h3" fontWeight="bold">
                            Our Work
                        </Typography>

                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            sx={{
                                background: "linear-gradient(to right,#42a5f5,#ab47bc)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Speaks for Itself
                        </Typography>

                        <Typography color="gray" mt={2}>
                            Our innovation drives careers, connects partners, and defines our identity.
                        </Typography>

                        <Box mt={3} display="flex" justifyContent="center" gap={2}>
                            <Button variant="contained">View Our Projects</Button>
                            <Button
                                variant="outlined"
                                sx={{ color: "white", borderColor: "white" }}
                            >
                                Start Your Project
                            </Button>
                        </Box>
                    </Box>

                    {/* Stats */}
                    <Grid container spacing={3} justifyContent="center">
                        {[
                            { value: "500+", label: "Projects Delivered" },
                            { value: "50+", label: "Products Built" },
                            { value: "200+", label: "Services Delivered" },
                        ].map((item, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <Box component={motion.div} whileHover={{ scale: 1.08 }}>
                                    <Card
                                        sx={{
                                            background: "rgba(255,255,255,0.1)",
                                            backdropFilter: "blur(10px)",
                                            textAlign: "center",
                                        }}
                                    >
                                        <CardContent>
                                            <Typography variant="h5" color="yellow">
                                                {item.value}
                                            </Typography>
                                            <Typography variant="body2">
                                                {item.label}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* 🔥 BELOW SECTION (NO GRADIENT) */}
            <Box sx={{ bgcolor: "#f5f5f5", py: 5 }}>
                <Container>

                    {/* Tabs */}
                    <Box textAlign="center" mb={4}>
                        {[
                            "All (100+)",
                            "Products (12)",
                            "Services (45)",
                            "Training (8)",
                        ].map((tab, index) => (
                            <Chip
                                key={index}
                                label={tab}
                                sx={{
                                    m: 1,
                                    bgcolor: "#e0e0e0",
                                }}
                            />
                        ))}
                    </Box>

                    {/* Title */}
                    <Typography variant="h5" textAlign="center" mb={4}>
                        Featured Projects (Top 3 Spotlight)
                    </Typography>

                    {/* 🔥 SINGLE ROW CARDS */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 3,
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            {
                                title: "Hospital Management System",
                                desc: "Manage patients, doctors, billing and reports efficiently.",
                                img: "https://img.freepik.com/free-vector/hospital-management-system-concept_23-2148622974.jpg",
                                gradient: "linear-gradient(135deg,#00c853,#009688)",
                            },
                            {
                                title: "E-Commerce Platform",
                                desc: "Complete online shopping solution with payments & orders.",
                                img: "https://img.freepik.com/free-vector/online-shopping-concept_23-2148626524.jpg",
                                gradient: "linear-gradient(135deg,#ff9800,#ffc107)",
                            },
                            {
                                title: "ERP / CRM Solution",
                                desc: "Business automation for HR, sales and customer tracking.",
                                img: "https://img.freepik.com/free-vector/crm-concept-illustration_114360-1305.jpg",
                                gradient: "linear-gradient(135deg,#7b1fa2,#512da8)",
                            },
                        ].map((project, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: "280px",
                                    height: "320px", // 🔥 increased for image
                                    display: "flex",
                                }}
                            >
                                {/* Gradient Border */}
                                <Box
                                    component={motion.div}
                                    whileHover={{ scale: 1.05 }}
                                    sx={{
                                        p: "2px",
                                        borderRadius: "20px",
                                        background: project.gradient,
                                        width: "100%",
                                        display: "flex",
                                    }}
                                >
                                    <Card
                                        sx={{
                                            borderRadius: "18px",
                                            background: "#ffffff",
                                            color: "#1a1a1a",
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* 🔥 IMAGE */}
                                        <Box
                                            component="img"
                                            src={project.img}
                                            alt={project.title}
                                            sx={{
                                                width: "100%",
                                                height: "140px",
                                                objectFit: "cover",
                                            }}
                                        />

                                        <CardContent
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                flexGrow: 1,
                                            }}
                                        >
                                            {/* TEXT */}
                                            <Box>
                                                <Typography fontWeight="bold" mb={1}>
                                                    {project.title}
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary">
                                                    {project.desc}
                                                </Typography>
                                            </Box>

                                            {/* BUTTON */}
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                sx={{
                                                    background: "#42a5f5",
                                                    fontWeight: "bold",
                                                    color: "white",
                                                    "&:hover": {
                                                        background: "#1e88e5",
                                                    },
                                                }}
                                            >
                                                Enroll Now
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
            <Box mt={6} textAlign="center">
                <Typography variant="h5" fontWeight={600} mb={5}>
                    Technologies We Work With
                </Typography>

                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    maxWidth="900px"
                    mx="auto"
                    bgcolor="linear-gradient(135deg,#f8fbff,#eef6ff)"
                >
                    {[
                        { name: "HTML", icon: <HtmlIcon sx={{ fontSize: 40, color: "#e44d26" }} /> },
                        { name: "CSS", icon: <CssIcon sx={{ fontSize: 40, color: "#264de4" }} /> },
                        { name: "JavaScript", icon: <JavascriptIcon sx={{ fontSize: 40, color: "#f7df1e" }} /> },
                        { name: "React", icon: <CodeIcon sx={{ fontSize: 40, color: "#61dafb" }} /> },
                        { name: "Angular", icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: "#dd0031" }} /> },
                        { name: "Vue", icon: <WebIcon sx={{ fontSize: 40, color: "#42b883" }} /> },
                        { name: "Node", icon: <StorageIcon sx={{ fontSize: 40, color: "#68a063" }} /> },
                        { name: "Next.js", icon: <AppsIcon sx={{ fontSize: 40 }} /> },
                        { name: "TypeScript", icon: <CodeIcon sx={{ fontSize: 40, color: "#007acc" }} /> },
                        { name: "Bootstrap", icon: <AppsIcon sx={{ fontSize: 40, color: "#7952b3" }} /> },
                    ].map((tech, i) => (
                        <Grid item xs={4} sm={3} md={2} key={i}>
                            <Box
                                sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    border: "1px solid #e5e7eb",
                                    backgroundColor: "#ffffff",
                                    textAlign: "center",
                                    transition: "all 0.25s ease",

                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        borderColor: "#90caf9",
                                        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                                    },
                                }}
                            >
                                {/* ICON */}
                                <Box mb={1}>{tech.icon}</Box>

                                {/* TEXT */}
                                <Typography fontSize="13px" fontWeight={500}>
                                    {tech.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box mt={6} textAlign="center">
                <Typography variant="h5" fontWeight={600} mb={4}>
                    Industries We Have Served
                </Typography>

                {/* Clean container */}
                <Box
                    sx={{
                        maxWidth: 600, // 👈 slightly reduced container
                        mx: "auto",
                        p: 3,
                        border: "1px solid #e5e7eb",
                        borderRadius: 2,
                        backgroundColor: "#ffffff",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: 2, // 👈 reduced gap
                        }}
                    >
                        {industries.map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    height: 70,          // 🔥 reduced height
                                    p: 2,                 // 🔥 less padding
                                    borderRadius: 2,
                                    border: "1px solid #e5e7eb",
                                    backgroundColor: "#fafafa",
                                    textAlign: "center",

                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",

                                    transition: "0.25s",

                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        backgroundColor: "#f1f5f9",
                                        boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
                                    },
                                }}
                            >
                                {/* ICON */}
                                <Box
                                    sx={{
                                        mb: 0.5,
                                        p: 1,
                                        borderRadius: "50%",
                                        background: "#f1f5f9", // light background
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                {/* TEXT */}
                                <Typography fontSize="0.85rem" fontWeight={500}>
                                    {item.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box mt={6} textAlign="center">
                <Typography variant="h5" fontWeight={600} mb={4}>
                    What Our Clients Say
                </Typography>

                {/* 🔥 FLEX ROW */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center", // center align
                        gap: 3,
                        flexWrap: "wrap", // responsive fallback
                    }}
                >
                    {[
                        {
                            name: "Rahul Sharma",
                            date: "Jan 12, 2025",
                            review:
                                "The team delivered an excellent product. Very professional and on time!",
                        },
                        {
                            name: "Priya Reddy",
                            date: "Feb 3, 2025",
                            review:
                                "Great experience! Communication was smooth and the results exceeded expectations.",
                        },
                        {
                            name: "Arjun Mehta",
                            date: "Mar 1, 2025",
                            review:
                                "Highly recommend their services. Quality work and great support.",
                        },
                    ].map((item, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: "300px", // 🔥 fixed width
                                p: 3,
                                textAlign: "left",
                                borderRadius: 2,
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                            }}
                        >
                            {/* ⭐ Rating */}
                            <Box display="flex" mb={1}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <StarIcon key={star} sx={{ color: "#facc15", fontSize: 20 }} />
                                ))}
                            </Box>

                            {/* Review */}
                            <Typography variant="body2" color="text.secondary" mb={2}>
                                "{item.review}"
                            </Typography>

                            {/* Profile */}
                            <Box display="flex" alignItems="center" gap={2}>
                                <Avatar>{item.name.charAt(0)}</Avatar>

                                <Box>
                                    <Typography fontWeight={600} fontSize="14px">
                                        {item.name}
                                    </Typography>

                                    <Typography variant="caption" color="text.secondary">
                                        {item.date}
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    ))}
                </Box>
            </Box>
            <Box
                mt={8}
                sx={{
                    background: "#0f172a",
                    color: "white",
                    py: 4,
                }}
            >
                <Grid container justifyContent="center" spacing={4}>
                    {[
                        { value: "500+", label: "Projects Completed" },
                        { value: "1000+", label: "Students Trained" },
                        { value: "50+", label: "Orders Served" },
                        { value: "8+", label: "Years Experience" },
                    ].map((item, i) => (
                        <Grid item key={i}>
                            <Typography variant="h6" textAlign="center">
                                {item.value}
                            </Typography>
                            <Typography variant="body2" textAlign="center">
                                {item.label}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box mt={12} sx={{ position: "relative" }}>

                {/* 🔥 DARK FOOTER BACKGROUND */}
                <Box
                    sx={{
                        background: "#111827", // softer dark (better than pure blue)
                        py: 10,
                        borderRadius: 3,
                        textAlign: "center",
                        position: "relative",
                    }}
                >
                    <Box maxWidth="1000px" mx="auto" px={3}>

                        {/* Contact Title */}
                        <Typography variant="h6" fontWeight={600} mb={4}>
                            Contact Us
                        </Typography>

                        {/* Contact Details */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: 5,
                                flexWrap: "wrap",
                            }}
                        >
                            <Box display="flex" alignItems="center" gap={1}>
                                <PhoneIcon sx={{ color: "#93c5fd" }} />
                                <Typography color="rgba(255,255,255,0.85)">
                                    +91 99648 48414
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" gap={1}>
                                <EmailIcon sx={{ color: "#93c5fd" }} />
                                <Typography color="rgba(255,255,255,0.85)">
                                    support@yourcompany.com
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" gap={1}>
                                <LocationOnIcon sx={{ color: "#93c5fd" }} />
                                <Typography color="rgba(255,255,255,0.85)">
                                    Bangalore, India
                                </Typography>
                            </Box>
                        </Box>

                        {/* Divider */}
                        <Box mt={5} borderTop="1px solid rgba(255,255,255,0.08)" />

                        {/* Bottom Text */}
                        <Typography
                            variant="body2"
                            mt={3}
                            color="rgba(255,255,255,0.5)"
                        >
                            © 2026 Your Company. All rights reserved.
                        </Typography>
                    </Box>

                    {/* 🔥 FLOATING CTA CARD */}
                    <Box
                        sx={{
                            maxWidth: 520,
                            mx: "auto",
                            p: 4,
                            borderRadius: 3,

                            // softer card color
                            background: "#1f2937",

                            color: "#ffffff",
                            position: "absolute",
                            top: "-70px",
                            left: "50%",
                            transform: "translateX(-50%)",

                            // softer shadow
                            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                        }}
                    >
                        <Typography variant="h5" fontWeight={600} mb={2}>
                            Have a Project in Mind?
                        </Typography>

                        <Typography mb={3} color="rgba(255,255,255,0.7)">
                            Let's build something amazing together 🚀
                        </Typography>

                        <Box display="flex" justifyContent="center" gap={2}>

                            {/* Primary Button */}
                            <Button
                                variant="contained"
                                sx={{
                                    background: "#3b82f6",
                                    textTransform: "none",
                                    px: 3,
                                    "&:hover": {
                                        background: "#2563eb",
                                    },
                                }}
                            >
                                Hire Developers
                            </Button>

                            {/* Secondary Button */}
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "rgba(255,255,255,0.3)",
                                    color: "#ffffff",
                                    textTransform: "none",
                                    px: 3,
                                    "&:hover": {
                                        borderColor: "#3b82f6",
                                        color: "#3b82f6",
                                    },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Box>

                    {/* spacing for floating card */}
                    <Box height="90px" />
                </Box>

            </Box>
        </Box>
    );
}