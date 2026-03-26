import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";

// ✅ Temporary fallback components (to avoid errors if not defined)
const FadeSection = ({ children }) => <>{children}</>;
const SectionLabel = ({ children }) => (
    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#2563EB", mb: 1 }}>
        {children}
    </Typography>
);
const SectionTitle = ({ children }) => (
    <Typography sx={{ fontSize: "24px", fontWeight: 700, mb: 2 }}>
        {children}
    </Typography>
);

function WhoWeAre() {
    const values = [
        {
            icon: <CheckCircleOutlineIcon sx={{ color: "#1D4ED8", fontSize: 20 }} />,
            bg: "#EFF6FF",
            title: "Integrity First",
            desc: "Transparent, honest, and accountable in every interaction with clients, partners, and our team.",
        },
        {
            icon: <StarIcon sx={{ color: "#D97706", fontSize: 20 }} />,
            bg: "#FFFBEB",
            title: "Excellence in Delivery",
            desc: "We raise the bar on every service, training session, and product release — no exceptions.",
        },
        {
            icon: <PeopleIcon sx={{ color: "#059669", fontSize: 20 }} />,
            bg: "#F0FDF4",
            title: "People-Centred Culture",
            desc: "Clients, trainees, and team members all belong at the core of every decision we make.",
        },
    ];

    return (
        <Box sx={{ py: { xs: 8, md: 10 }, background: "#fff" }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="flex-start">

                    <Grid item xs={12} md={6}>
                        <FadeSection>
                            <SectionLabel>Our Story</SectionLabel>
                            <SectionTitle>
                                More Than a Company — A Growth Partner
                            </SectionTitle>

                            <Typography sx={{ color: "#4A5568", fontSize: "14px", lineHeight: 1.82, mb: 2 }}>
                                Founded with a singular belief that technology and knowledge together drive lasting transformation, NexCore has grown into a full-spectrum organisation.
                            </Typography>

                            <Typography sx={{ color: "#4A5568", fontSize: "14px", lineHeight: 1.82 }}>
                                Our work spans consulting services, structured training programmes, and a proprietary SaaS product trusted across industries.
                            </Typography>
                        </FadeSection>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <FadeSection>
                            {values.map((v, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        mb: i < 2 ? 3 : 0,
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: "10px",
                                            background: v.bg,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {v.icon}
                                    </Box>

                                    <Box>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#1a202c", mb: 0.3 }}>
                                            {v.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: "13px", color: "#718096", lineHeight: 1.55 }}>
                                            {v.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </FadeSection>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

export default WhoWeAre;