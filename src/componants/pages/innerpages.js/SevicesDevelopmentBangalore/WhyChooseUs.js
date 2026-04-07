import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Chip,
    Stack,
} from "@mui/material";

const features = [
    { title: "Local Presence", icon: "📍", desc: "Strong presence in Bangalore with deep market understanding" },
    { title: "Rapid Delivery", icon: "⚡", desc: "Fast execution with agile workflows and quick turnaround time" },
    { title: "Secure & Quality", icon: "🔒", desc: "High-quality solutions with strong security best practices" },
    { title: "AI-First", icon: "💡", desc: "Leverage AI-driven solutions to stay ahead in the market" },
    { title: "Startup Friendly", icon: "💰", desc: "Affordable and scalable solutions tailored for startups" },
    { title: "Global Standards", icon: "🌐", desc: "We follow international standards for performance and quality" },
];

const WhyUsSection = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <Box sx={{ background: "#0c447c", py: "56px" }}>
            {/* Keyframes */}
            <style>
                {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
            </style>

            <Container maxWidth="md">
                {/* Header */}
                <Stack alignItems="center" spacing={2} mb={6}>
                    <Chip
                        label="Why Choose Us"
                        sx={{
                            background: "rgba(181,212,244,0.2)",
                            color: "#b5d4f4",
                            borderRadius: "999px",
                        }}
                    />

                    <Typography variant="h4" fontWeight={800} color="#e6f1fb">
                        Why Businesses Trust Us
                    </Typography>

                    <Typography color="#85b7eb" textAlign="center">
                        We deliver scalable, secure, and innovative solutions tailored for modern businesses
                    </Typography>

                    <Box
                        sx={{
                            width: "52px",
                            height: "3.5px",
                            background: "#85b7eb",
                            borderRadius: "999px",
                        }}
                    />
                </Stack>

                {/* Cards */}
                <Grid container spacing={2}>
                    {features.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    background: "rgba(230,241,251,0.1)",
                                    border: "1px solid rgba(181,212,244,0.25)",
                                    borderRadius: "18px",
                                    p: 3,
                                    transition: "all 0.22s ease",
                                    animation: show
                                        ? `fadeUp 0.5s ease forwards ${index * 0.12}s`
                                        : "none",
                                    opacity: 0,
                                    "&:hover": {
                                        background: "rgba(230,241,251,0.18)",
                                        transform: "translateY(-5px)",
                                    },
                                }}
                            >
                                {/* Icon */}
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "12px",
                                        background: "rgba(55,138,221,0.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "20px",
                                        mb: 2,
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                {/* Title */}
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        color: "#e6f1fb",
                                        fontWeight: 600,
                                        mb: 1,
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                {/* Description */}
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: "#85b7eb",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyUsSection;