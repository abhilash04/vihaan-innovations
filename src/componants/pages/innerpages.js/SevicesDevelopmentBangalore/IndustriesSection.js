import React, { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
} from "@mui/material";

const industries = [
    { name: "Fintech", icon: "💰" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Edtech", icon: "🎓" },
    { name: "Retail", icon: "🛒" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Logistics", icon: "🚚" },
    { name: "Travel", icon: "✈️" },
    { name: "Media", icon: "🎬" },
];

const IndustriesSection = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <Box sx={{ background: "#f0f8ff", py: "56px" }}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    {industries.map((item, index) => {
                        const isHover = hovered === index;

                        return (
                            <Grid item xs={6} sm={3} md={1.5} key={index}>
                                <Paper
                                    onMouseEnter={() => setHovered(index)}
                                    onMouseLeave={() => setHovered(null)}
                                    sx={{
                                        background: isHover ? "#0c447c" : "#fff",
                                        border: "1px solid",
                                        borderColor: isHover ? "#0c447c" : "#b5d4f4",
                                        borderRadius: "16px",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        py: 3,
                                        transition: "all 0.22s ease",
                                        transform: isHover ? "translateY(-5px)" : "none",
                                    }}
                                    elevation={0}
                                >
                                    {/* Icon Box */}
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            mx: "auto",
                                            mb: 1.5,
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "22px",
                                            background: isHover
                                                ? "rgba(255,255,255,0.12)"
                                                : "#e6f1fb",
                                            transition: "all 0.22s ease",
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    {/* Name */}
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            fontWeight: 600,
                                            color: isHover ? "#e6f1fb" : "#042c53",
                                            transition: "all 0.22s ease",
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default IndustriesSection;