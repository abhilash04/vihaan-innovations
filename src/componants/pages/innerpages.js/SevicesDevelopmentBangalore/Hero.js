import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Chip,
    Paper,
} from "@mui/material";

const HeroSection = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <Box
            sx={{
                background: "#e6f1fb",
                minHeight: "90vh",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Keyframes */}
            <style>
                {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
            </style>

            <Container maxWidth="md" sx={{ pt: 10 }}>
                {/* Floating Badge */}
                <Chip
                    label="Bengaluru's #1 Tech Partner"
                    sx={{
                        mb: 3,
                        background: "#b5d4f4",
                        color: "#0c447c",
                        border: "1px solid #85b7eb",
                        animation: "float 3s ease-in-out infinite",
                    }}
                />

                {/* Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: "clamp(28px, 5.5vw, 48px)",
                        fontWeight: 800,
                        color: "#042c53",
                        animation: show ? "fadeUp 0.7s ease" : "none",
                    }}
                >
                    We Build Digital Products That{" "}
                    <Box component="span" sx={{ color: "#185fa5" }}>
                        Grow
                    </Box>{" "}
                    Your{" "}
                    <Box component="span" sx={{ color: "#378add" }}>
                        Business
                    </Box>
                </Typography>

                {/* Subtext */}
                <Typography
                    variant="body1"
                    sx={{
                        mt: 3,
                        color: "#185fa5",
                        maxWidth: "560px",
                        mx: "auto",
                        lineHeight: 1.75,
                        animation: show ? "fadeUp 0.9s ease" : "none",
                    }}
                >
                    We create scalable, high-performance digital solutions tailored to your
                    business goals. From design to development, we help you grow faster.
                </Typography>

                {/* Buttons */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="center"
                    sx={{ mt: 4 }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            background: "#0c447c",
                            color: "#e6f1fb",
                            borderRadius: "999px",
                            px: 4,
                            py: 1.5,
                            textTransform: "none",
                            fontWeight: 600,
                            "&:hover": {
                                transform: "scale(1.04)",
                                background: "#0c447c",
                            },
                        }}
                    >
                        Free Consultation ↗
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "#85b7eb",
                            color: "#185fa5",
                            borderRadius: "999px",
                            px: 4,
                            py: 1.5,
                            textTransform: "none",
                            fontWeight: 600,
                        }}
                    >
                        View Our Work
                    </Button>
                </Stack>

                {/* Stats */}
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    spacing={2}
                    sx={{ mt: 6 }}
                >
                    {[
                        { value: "200+", label: "Projects" },
                        { value: "8yr", label: "Bangalore" },
                        { value: "50+", label: "Team" },
                        { value: "98%", label: "Satisfaction" },
                        { value: "24/7", label: "Support" },
                    ].map((item, i) => (
                        <Paper
                            key={i}
                            sx={{
                                background: "#fff",
                                border: "1px solid #b5d4f4",
                                borderRadius: "16px",
                                px: 3,
                                py: 2,
                                minWidth: "120px",
                            }}
                            elevation={0}
                        >
                            <Typography
                                sx={{
                                    fontSize: "36px",
                                    fontWeight: 800,
                                    color: "#0c447c",
                                }}
                            >
                                {item.value}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "11px",
                                    color: "#378add",
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Paper>
                    ))}
                </Stack>
            </Container>

            {/* Bottom Wave */}
            <Box
                component="svg"
                viewBox="0 0 1440 120"
                sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                }}
            >
                <path
                    fill="#f0f8ff"
                    d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96V120H0Z"
                />
            </Box>
        </Box>
    );
};

export default HeroSection;