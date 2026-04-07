import React, { useEffect, useState, useRef } from "react";
import {
    Box,
    Container,
    Typography,
    Chip,
    Paper,
    Stack,
} from "@mui/material";

const services = [
    { icon: "🎨", title: "UI / UX Design", desc: "Human-centered design that converts. Wireframes, prototypes and pixel-perfect interfaces.", tags: ["Figma", "Prototyping", "User Research"] },
    { icon: "💻", title: "Web Design & Development", desc: "Responsive, SEO-ready websites built with modern stacks for Bangalore's market.", tags: ["React", "Next.js", "Node.js"] },
    { icon: "📱", title: "Mobile App Development", desc: "Cross-platform iOS & Android apps that delight users and drive engagement.", tags: ["Flutter", "React Native", "Swift"] },
    { icon: "⚙️", title: "Custom Application Development", desc: "Bespoke software for your business workflows. Scalable, secure and maintainable.", tags: ["Python", "Java", "Microservices"] },
    { icon: "☁️", title: "Cloud-Based Development", desc: "Build, deploy and scale on AWS, Azure or GCP with cloud-native architecture.", tags: ["AWS", "Azure", "GCP", "K8s"] },
    { icon: "🔄", title: "DevOps & Automation", desc: "CI/CD pipelines, container orchestration and infrastructure-as-code.", tags: ["Docker", "Terraform", "Jenkins"] },
    { icon: "📊", title: "Data Science & Big Data", desc: "Analytics, dashboards and ML pipelines that unlock real business value.", tags: ["Spark", "Power BI", "Tableau"] },
    { icon: "🛒", title: "Ecommerce Development", desc: "High-converting online stores with payment gateways and seamless checkout.", tags: ["Shopify", "Magento", "WooCommerce"] },
    { icon: "🤖", title: "AI / ML & Automation", desc: "Chatbots, recommendation engines and predictive analytics powered by AI.", tags: ["TensorFlow", "LLMs", "NLP"] },
    { icon: "🛡️", title: "Maintenance & Support", desc: "24/7 monitoring, security patching and performance optimization.", tags: ["24/7 SLA", "Security", "Monitoring"] }
];

const ServicesSection = () => {
    const scrollRef = useRef();

    return (
        <Box sx={{ background: "#f0f8ff", py: "50px" }}>
            <Container maxWidth="lg">

                {/* Header */}
                <Stack alignItems="center" spacing={2} mb={6}>
                    <Chip
                        label="Our Services"
                        sx={{
                            background: "#b5d4f4",
                            color: "#0c447c",
                            borderRadius: "999px",
                        }}
                    />

                    <Typography variant="h4" fontWeight={800} color="#042c53">
                        Everything Your Business Needs
                    </Typography>

                    <Typography color="#378add">
                        Scalable solutions tailored for your growth
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

                {/* Scroll Container */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: "flex",
                        gap: "18px",
                        overflowX: "auto",
                        scrollSnapType: "x mandatory",
                        pb: 2,
                        "&::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {services.map((service, index) => (
                        <Paper
                            key={index}
                            sx={{
                                minWidth: {
                                    xs: "100%",
                                    sm: "48%",
                                    md: "32%", // 👈 shows 3 cards
                                },
                                scrollSnapAlign: "start",
                                background: "#fff",
                                border: "1px solid #b5d4f4",
                                borderRadius: "20px",
                                p: 3,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    borderColor: "#378add",
                                    boxShadow: "0 12px 36px rgba(55,138,221,0.14)",
                                },
                            }}
                        >
                            {/* Icon */}
                            <Box
                                sx={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: "14px",
                                    background: "#e6f1fb",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "22px",
                                    mb: 2,
                                }}
                            >
                                {service.icon}
                            </Box>

                            {/* Title */}
                            <Typography fontWeight={700} color="#042c53" mb={1}>
                                {service.title}
                            </Typography>

                            {/* Description */}
                            <Typography fontSize="13px" color="#185fa5" lineHeight={1.6}>
                                {service.desc}
                            </Typography>

                            {/* Tags */}
                            <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
                                {service.tags.map((tag, i) => (
                                    <Chip
                                        key={i}
                                        label={tag}
                                        size="small"
                                        sx={{
                                            background: "#e6f1fb",
                                            color: "#185fa5",
                                            border: "1px solid #b5d4f4",
                                            fontSize: "11px",
                                        }}
                                    />
                                ))}
                            </Stack>

                            {/* Link */}
                            <Typography
                                mt={2}
                                fontSize="12px"
                                fontWeight={700}
                                color="#185fa5"
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": { color: "#0c447c" },
                                }}
                            >
                                Explore service →
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ServicesSection;