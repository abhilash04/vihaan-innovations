import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Avatar,
    Stack,
} from "@mui/material";

const testimonials = [
    {
        name: "Rahul Kumar",
        role: "CEO, PayFast Bengaluru",
        quote:
            "Their team delivered beyond expectations. The performance and scalability improvements were outstanding.",
    },
    {
        name: "Sowmya Patel",
        role: "Founder, StyleVault HSR Layout",
        quote:
            "Amazing experience! The design and development quality helped us significantly boost conversions.",
    },
    {
        name: "Arjun Mehta",
        role: "CTO, SwiftLog Whitefield",
        quote:
            "Highly professional and reliable. Their technical expertise helped us scale our platform efficiently.",
    },
];

// Helper to get initials
const getInitials = (name) =>
    name
        .split(" ")
        .map((n) => n[0])
        .join("");

const TestimonialsSection = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <Box sx={{ background: "#fff", py: "56px" }}>
            {/* Keyframes */}
            <style>
                {`
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.85); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
            </style>

            <Container maxWidth="md">
                <Grid container spacing={2}>
                    {testimonials.map((item, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    background: "#e6f1fb",
                                    border: "1px solid #b5d4f4",
                                    borderRadius: "18px",
                                    p: 3,
                                    animation: show
                                        ? `scaleIn 0.5s ease forwards ${index * 0.15}s`
                                        : "none",
                                    opacity: 0,
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {/* Quote Icon */}
                                <Typography
                                    sx={{
                                        fontSize: "32px",
                                        color: "#b5d4f4",
                                        lineHeight: 1,
                                    }}
                                >
                                    “
                                </Typography>

                                {/* Stars */}
                                <Typography
                                    sx={{
                                        color: "#378add",
                                        letterSpacing: "2px",
                                        fontSize: "14px",
                                        mt: 1,
                                    }}
                                >
                                    ★★★★★
                                </Typography>

                                {/* Quote */}
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        color: "#042c53",
                                        fontStyle: "italic",
                                        lineHeight: 1.75,
                                        mt: 1.5,
                                    }}
                                >
                                    {item.quote}
                                </Typography>

                                {/* User */}
                                <Stack direction="row" alignItems="center" spacing={1.5} mt={3}>
                                    <Avatar
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            background: "#0c447c",
                                            color: "#e6f1fb",
                                            fontSize: "13px",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {getInitials(item.name)}
                                    </Avatar>

                                    <Box>
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: "13px",
                                                color: "#042c53",
                                            }}
                                        >
                                            {item.name}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: "11px",
                                                color: "#378add",
                                            }}
                                        >
                                            {item.role}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TestimonialsSection;