import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Chip,
    Grid,
    Paper,
    Stack,
} from "@mui/material";

const metrics = [
    { num: 200, unit: "+", label: "Projects Delivered", progress: 88 },
    { num: 98, unit: "%", label: "Client Satisfaction Score", progress: 98 },
    { num: 50, unit: "+", label: "Expert Engineers & Designers", progress: 70 },
    { num: 8, unit: "yr", label: "Years of Excellence", progress: 55 },
];

const CounterCard = ({ item, index }) => {
    const ref = useRef();
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Counter animation
    useEffect(() => {
        if (!visible) return;

        let start = 0;
        const duration = 1500;
        const increment = item.num / (duration / 30);

        const timer = setInterval(() => {
            start += increment;
            if (start >= item.num) {
                setCount(item.num);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 30);

        return () => clearInterval(timer);
    }, [visible, item.num]);

    return (
        <Paper
            ref={ref}
            sx={{
                textAlign: "center",
                background: "#fff",
                border: "1px solid #b5d4f4",
                borderRadius: "18px",
                p: "22px 18px",
                transform: visible ? "scale(1)" : "scale(0.85)",
                opacity: visible ? 1 : 0,
                transition: `all 0.5s ease ${index * 0.1}s`,
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 24px rgba(55,138,221,0.12)",
                },
            }}
        >
            {/* Number */}
            <Typography
                sx={{
                    fontSize: "36px",
                    fontWeight: 800,
                    color: "#0c447c",
                }}
            >
                {count}
                <Box component="span" sx={{ fontSize: "18px", color: "#378add" }}>
                    {item.unit}
                </Box>
            </Typography>

            {/* Label */}
            <Typography
                sx={{
                    fontSize: "12px",
                    color: "#185fa5",
                    fontWeight: 500,
                    mt: 1,
                }}
            >
                {item.label}
            </Typography>

            {/* Progress Bar */}
            <Box
                sx={{
                    mt: 2,
                    height: "4px",
                    borderRadius: "999px",
                    background: "#e6f1fb",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        width: visible ? `${item.progress}%` : "0%",
                        background: "#378add",
                        transition: "width 1.5s ease",
                    }}
                />
            </Box>
        </Paper>
    );
};

const MetricsSection = () => {
    return (
        <Box sx={{ background: "#e6f1fb", py: "56px" }}>
            <Container maxWidth="md">
                {/* Header */}
                <Stack alignItems="center" spacing={2} mb={6}>
                    <Chip
                        label="Our Impact"
                        sx={{
                            background: "#b5d4f4",
                            color: "#0c447c",
                            borderRadius: "999px",
                        }}
                    />

                    <Typography variant="h4" fontWeight={800} color="#042c53">
                        Numbers That Speak Louder
                    </Typography>

                    <Typography color="#378add" textAlign="center">
                        Proven results that reflect our commitment to excellence
                    </Typography>

                    <Box
                        sx={{
                            width: "52px",
                            height: "3.5px",
                            background: "#378add",
                            borderRadius: "999px",
                        }}
                    />
                </Stack>

                {/* Grid */}
                <Grid container spacing={2}>
                    {metrics.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <CounterCard item={item} index={index} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MetricsSection;