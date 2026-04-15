import React from "react";
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Avatar,
    Stack,
    Rating,
} from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Rahul Kumar",
        role: "CEO, PayFast",
        quote: "Their team delivered beyond expectations. The performance and scalability improvements were outstanding.",
        rating: 5,
    },
    {
        name: "Sowmya Patel",
        role: "Founder, StyleVault",
        quote: "Amazing experience! The design and development quality helped us significantly boost conversions.",
        rating: 5,
    },
    {
        name: "Arjun Mehta",
        role: "CTO, SwiftLog",
        quote: "Highly professional and reliable. Their technical expertise helped us scale our platform efficiently.",
        rating: 5,
    },
];

const getInitials = (name) =>
    name
        .split(" ")
        .map((n) => n[0])
        .join("");

const TestimonialsSection = ({ location, serviceType, customTestimonials }) => {
    const displayTestimonials = customTestimonials?.items && customTestimonials.items.length > 0 
        ? customTestimonials.items.map(i => ({ name: i.author, role: i.role, quote: i.text, rating: 5 })) 
        : testimonials;

    return (
        <Box sx={{ background: "#ffffff", py: "80px" }}>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={2} mb={8}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box sx={{
                            display: 'flex',
                            gap: 1,
                            color: '#fbbf24',
                            mb: 1
                        }}>
                            {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                        </Box>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Typography variant="h3" fontWeight={900} color="#042c53" textAlign="center">
                            {customTestimonials?.title ? customTestimonials.title : `What Clients In ${location} Say`}
                        </Typography>
                    </motion.div>
                </Stack>

                <Grid container spacing={4}>
                    {displayTestimonials.map((item, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        background: "#f8fbff",
                                        border: "1px solid #e6f1fb",
                                        borderRadius: "32px",
                                        p: 4,
                                        height: "100%",
                                        position: "relative",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            background: "#fff",
                                            boxShadow: "0 20px 40px rgba(12, 68, 124, 0.08)",
                                            borderColor: "#185fa5",
                                        },
                                    }}
                                >
                                    {/* Quote Icon */}
                                    <Typography
                                        sx={{
                                            fontSize: "64px",
                                            color: "rgba(24, 95, 165, 0.1)",
                                            position: "absolute",
                                            top: 20,
                                            left: 20,
                                            lineHeight: 1,
                                            fontFamily: "serif",
                                        }}
                                    >
                                        “
                                    </Typography>

                                    <Box sx={{ position: "relative", zIndex: 1 }}>
                                        <Rating value={item.rating} readOnly size="small" sx={{ color: '#185fa5', mb: 2 }} />
                                        
                                        <Typography
                                            sx={{
                                                fontSize: "1.05rem",
                                                color: "#042c53",
                                                fontStyle: "italic",
                                                lineHeight: 1.8,
                                                mb: 4,
                                            }}
                                        >
                                            {item.quote}
                                        </Typography>

                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <Avatar
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    background: "linear-gradient(135deg, #0c447c 0%, #185fa5 100%)",
                                                    color: "#fff",
                                                    fontWeight: 800,
                                                }}
                                            >
                                                {getInitials(item.name)}
                                            </Avatar>

                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 800,
                                                        fontSize: "1rem",
                                                        color: "#042c53",
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontSize: "0.85rem",
                                                        color: "#378add",
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {item.role}, {location}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TestimonialsSection;