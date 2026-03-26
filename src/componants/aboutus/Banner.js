import React, { useRef, useEffect, useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Chip
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Banner() {

    /* ---------- fade logic inside same component ---------- */
    const useFadeIn = () => {
        const ref = useRef(null);
        const [visible, setVisible] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setVisible(true);
                },
                { threshold: 0.2 }
            );

            if (ref.current) observer.observe(ref.current);

            return () => observer.disconnect();
        }, []);

        return [ref, visible];
    };

    const FadeSection = ({ children, delay = 0 }) => {
        const [ref, visible] = useFadeIn();

        return (
            <Box
                ref={ref}
                sx={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(36px)",
                    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
                }}
            >
                {children}
            </Box>
        );
    };

    /* ---------- Banner UI ---------- */
    return (
        <Box
            sx={{
                background:
                    "linear-gradient(135deg, #060D1A 0%, #0A1628 45%, #0E2952 100%)",
                pt: 14,
                minHeight: "92vh",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5} alignItems="center" sx={{ minHeight: "70vh" }}>

                    {/* LEFT SIDE */}
                    <Grid item xs={12} md={6}>
                        <FadeSection>
                            <Chip
                                label="✦ Who We Are"
                                sx={{
                                    background: "rgba(245,158,11,0.15)",
                                    border: "1px solid rgba(245,158,11,0.35)",
                                    color: "#F59E0B",
                                    fontSize: "10px",
                                    mb: 2
                                }}
                            />

                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: "36px", md: "52px" },
                                    color: "#fff",
                                    mb: 2
                                }}
                            >
                                We <span style={{ color: "#F59E0B" }}>Build, Train</span> &
                                Transform Businesses
                            </Typography>

                            <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}>
                                Delivering end-to-end services, training programmes and software
                                products that help organisations grow confidently.
                            </Typography>

                            <Button
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    background: "#F59E0B",
                                    color: "#0A1628",
                                    fontWeight: 700,
                                    textTransform: "none",
                                    "&:hover": { background: "#E08C00" }
                                }}
                            >
                                Explore Our Work
                            </Button>
                        </FadeSection>
                    </Grid>

                    {/* RIGHT SIDE */}
                    <Grid item xs={12} md={6}>
                        <FadeSection delay={0.2}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                {[
                                    { title: "End-to-End Services", desc: "Consulting · Implementation · Support" },
                                    { title: "Training Programmes", desc: "Certifications · Workshops · E-Learning" },
                                    { title: "Our Flagship Product", desc: "SaaS Platform · 500+ Clients" }
                                ].map((item, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            background: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "12px",
                                            p: 2
                                        }}
                                    >
                                        <Typography sx={{ color: "#fff", fontWeight: 600 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </FadeSection>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}