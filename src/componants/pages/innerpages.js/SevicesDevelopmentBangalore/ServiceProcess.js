import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Chip,
    Grid,
    Paper,
    Stack,
} from "@mui/material";

const steps = [
    { num: 1, title: "Discovery", desc: "Goals, scope & stakeholder alignment" },
    { num: 2, title: "Strategy", desc: "Roadmap, tech architecture & timeline" },
    { num: 3, title: "Design", desc: "Wireframes, prototypes & brand UI" },
    { num: 4, title: "Development", desc: "Agile sprints with daily standups" },
    { num: 5, title: "QA & Launch", desc: "Testing, CI/CD pipeline & go-live" },
    { num: 6, title: "Support", desc: "Monitor, optimize & continuously improve" },
];

const ProcessSection = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <Box sx={{ background: "#e6f1fb", py: "56px" }}>
            {/* Keyframes */}
            <style>
                {`
          @keyframes slideRight {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes moveDot {
            0% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }
        `}
            </style>

            <Container maxWidth="md">
                {/* Header */}
                <Stack alignItems="center" spacing={2} mb={6}>
                    <Chip
                        label="Our Process"
                        sx={{
                            background: "#b5d4f4",
                            color: "#0c447c",
                            borderRadius: "999px",
                        }}
                    />

                    <Typography variant="h4" fontWeight={800} color="#042c53">
                        How We Deliver Excellence
                    </Typography>

                    <Typography color="#378add" textAlign="center">
                        A proven 6-step sprint cycle — transparent, agile, and results-driven
                        for Bangalore businesses
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

                {/* Steps Grid */}
                <Grid container spacing={1.5}>
                    {steps.map((step, index) => (
                        <Grid item xs={6} sm={4} md={2} key={index}>
                            <Paper
                                sx={{
                                    textAlign: "center",
                                    background: "#fff",
                                    border: "1px solid #b5d4f4",
                                    borderRadius: "18px",
                                    p: "20px 14px",
                                    animation: show
                                        ? `slideRight 0.5s ease forwards ${index * 0.1}s`
                                        : "none",
                                    opacity: 0,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0 8px 24px rgba(55,138,221,0.13)",
                                    },
                                }}
                            >
                                {/* Number */}
                                <Box
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: "50%",
                                        background: "#0c447c",
                                        color: "#e6f1fb",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "14px",
                                        fontWeight: 800,
                                        mx: "auto",
                                        mb: 1.5,
                                    }}
                                >
                                    {step.num}
                                </Box>

                                {/* Title */}
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        fontWeight: 700,
                                        color: "#042c53",
                                    }}
                                >
                                    {step.title}
                                </Typography>

                                {/* Desc */}
                                <Typography
                                    sx={{
                                        fontSize: "11px",
                                        color: "#378add",
                                        lineHeight: 1.5,
                                        mt: 0.5,
                                    }}
                                >
                                    {step.desc}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Flow Connector */}
                <Box mt={6}>
                    <Stack direction="row" alignItems="center">
                        {[...Array(6)].map((_, i) => (
                            <React.Fragment key={i}>
                                {/* Dot */}
                                <Box
                                    sx={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: "50%",
                                        background: "#378add",
                                    }}
                                />

                                {/* Line */}
                                {i < 5 && (
                                    <Box
                                        sx={{
                                            flex: 1,
                                            height: "2px",
                                            background: "#b5d4f4",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* Moving Dot */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                width: "30px",
                                                height: "2px",
                                                background: "#378add",
                                                animation: `moveDot 2s linear infinite`,
                                                animationDelay: `${i * 0.3}s`,
                                            }}
                                        />
                                    </Box>
                                )}
                            </React.Fragment>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default ProcessSection;