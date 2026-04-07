import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Chip,
    Stack,
} from "@mui/material";

const techGroups = [
    {
        label: "Frontend",
        items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Figma"],
    },
    {
        label: "Backend",
        items: ["Node.js", "Python", "Django", "FastAPI", "Java Spring", "GraphQL"],
    },
    {
        label: "Mobile",
        items: ["Flutter", "React Native", "Swift", "Kotlin"],
    },
    {
        label: "Cloud & DevOps",
        items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    },
    {
        label: "Data & AI",
        items: ["TensorFlow", "PyTorch", "Apache Spark", "Power BI", "PostgreSQL", "MongoDB"],
    },
    {
        label: "Ecommerce",
        items: ["Shopify", "Magento", "WooCommerce", "Stripe", "Razorpay"],
    },
];

const TechStackSection = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Box sx={{ background: "#fff", py: "56px" }} ref={ref}>
            {/* Keyframes */}
            <style>
                {`
          @keyframes slideRight {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
            </style>

            <Container maxWidth="md">
                {/* Header */}
                <Stack alignItems="center" spacing={2} mb={6}>
                    <Chip
                        label="Tech Stack"
                        sx={{
                            background: "#b5d4f4",
                            color: "#0c447c",
                            borderRadius: "999px",
                        }}
                    />

                    <Typography variant="h4" fontWeight={800} color="#042c53">
                        Technologies We Master
                    </Typography>

                    <Typography color="#378add" textAlign="center">
                        Battle-tested tools used by Bangalore's best engineering teams — hover to explore
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

                {/* Groups */}
                {techGroups.map((group, index) => (
                    <Box
                        key={index}
                        sx={{
                            mb: 3,
                            opacity: visible ? 1 : 0,
                            animation: visible
                                ? `slideRight 0.5s ease forwards ${index * 0.08}s`
                                : "none",
                        }}
                    >
                        {/* Group Label */}
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#0c447c",
                                letterSpacing: "0.8px",
                                textTransform: "uppercase",
                                mb: 1,
                                pl: "4px",
                            }}
                        >
                            {group.label}
                        </Typography>

                        {/* Chips */}
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "8px",
                            }}
                        >
                            {group.items.map((item, i) => (
                                <Chip
                                    key={i}
                                    label={item}
                                    sx={{
                                        background: "#e6f1fb",
                                        color: "#185fa5",
                                        border: "1px solid #b5d4f4",
                                        borderRadius: "999px",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        px: 1.5,
                                        py: 1,
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            background: "#0c447c",
                                            color: "#e6f1fb",
                                            borderColor: "#0c447c",
                                            transform: "scale(1.07)",
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default TechStackSection;