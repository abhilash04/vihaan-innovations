import React from "react";
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Chip,
    Stack,
} from "@mui/material";
import { motion } from "framer-motion";

const features = [
    { title: "Local Expert Presence", icon: "📍", desc: "Our deep-rooted understanding of the local market ensures your project resonates with your audience." },
    { title: "Rapid Agile Execution", icon: "⚡", desc: "We combine velocity with precision, delivering robust solutions through streamlined agile sprints." },
    { title: "Enterprise Grade Quality", icon: "🔒", desc: "Security, performance, and scalability are at the core of every line of code we write." },
    { title: "AI-First Innovation", icon: "💡", desc: "We integrate the latest AI capabilities to give your business a definitive competitive edge." },
    { title: "Sustainable Scalability", icon: "💰", desc: "Our architectures are built to grow alongside your business, ensuring long-term success." },
    { title: "Global Visionary Standards", icon: "🌐", desc: "We bring international development standards to your local doorstep, ensuring world-class results." },
];

const WhyChooseUsSection = ({ location, serviceType, content }) => {
    return (
        <Box sx={{ background: "linear-gradient(135deg, #0c447c 0%, #185fa5 100%)", py: "100px" }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} lg={5}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Chip
                                label="Why Choose Vihaan Innovations"
                                sx={{
                                    background: "rgba(255, 255, 255, 0.1)",
                                    color: "#fff",
                                    fontWeight: 700,
                                    borderRadius: "8px",
                                    backdropFilter: "blur(4px)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    mb: 3
                                }}
                            />
                            <Typography variant="h3" fontWeight={900} color="#fff" gutterBottom>
                                {content.title || `The Trusted ${serviceType} Partner in ${location}`}
                            </Typography>
                            <Typography sx={{ color: "#b5d4f4", fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}>
                                {content.content}
                            </Typography>
                            
                            <Stack spacing={2}>
                                {["Local Market Experts", "Zero Plagiarism Content", "Technical Excellence"].map((item, i) => (
                                    <Stack key={i} direction="row" spacing={2} alignItems="center">
                                        <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: '#378add', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px' }}>✓</Box>
                                        <Typography sx={{ color: '#fff', fontWeight: 600 }}>{item}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} lg={7}>
                        <Grid container spacing={2}>
                            {features.map((item, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                background: "rgba(255, 255, 255, 0.05)",
                                                backdropFilter: "blur(10px)",
                                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                                borderRadius: "24px",
                                                p: 3,
                                                height: "100%",
                                                transition: "all 0.3s",
                                                "&:hover": {
                                                    background: "rgba(255, 255, 255, 0.1)",
                                                    transform: "translateY(-5px)",
                                                    borderColor: "#fff"
                                                },
                                            }}
                                        >
                                            <Box sx={{ fontSize: "24px", mb: 2 }}>{item.icon}</Box>
                                            <Typography variant="h6" fontWeight={800} color="#fff" mb={1}>{item.title}</Typography>
                                            <Typography variant="body2" sx={{ color: "#b5d4f4", lineHeight: 1.6 }}>{item.desc}</Typography>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyChooseUsSection;