import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Stack,
    Divider,
} from "@mui/material";
import { motion } from "framer-motion";

const SeoContent = ({ location, serviceType, content }) => {
    return (
        <Box sx={{ background: "#ffffff", py: "60px" }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="h4" fontWeight={900} color="#042c53" mb={4}>
                                {content.heading}
                            </Typography>

                            {content.paragraphs.map((para, i) => (
                                <Typography
                                    key={i}
                                    sx={{
                                        color: "#4a5568",
                                        lineHeight: 1.8,
                                        fontSize: "1.1rem",
                                        mb: 2
                                    }}
                                >
                                    {para}
                                </Typography>
                            ))}

                            <Box sx={{ mt: 5, p: 4, background: '#f8fbff', borderRadius: '24px', borderLeft: '6px solid #185fa5' }}>
                                <Typography variant="h6" fontWeight={800} color="#0c447c" mb={2}>
                                    {content.highlight?.title || `The Competitive Edge in ${location}`}
                                </Typography>
                                <Typography sx={{ color: '#4a5568', lineHeight: 1.7 }}>
                                    {content.highlight?.text || `In a bustling hub like ${location}, standing out requires more than just a digital presence.
                                    Our ${serviceType.toLowerCase()} are engineered to bridge the gap between your brand
                                    and your ${location} audience through technical excellence and creative storytelling.`}
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 5,
                                    background: "#0c447c",
                                    color: "#fff",
                                    borderRadius: "32px",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                            >
                                <Box sx={{ position: 'relative', zIndex: 1 }}>
                                    <Typography variant="h5" fontWeight={900} mb={3}>
                                        {content.sidebar?.title || `Localized Strategy for ${location}`}
                                    </Typography>

                                    <Stack spacing={3}>
                                        {(content.sidebar?.items || [
                                            { t: "Deep Local Research", d: "Content tailored to local search intent." },
                                            { t: "Technical Optimization", d: "Fast results with localized server logic." },
                                            { t: "Performance Driven", d: "Focus on ROI and high conversion rates." },
                                            { t: "Ethical & Quality", d: "Zero-plagiarism, human-centric approach." }
                                        ]).map((item, i, arr) => (
                                            <Box key={i}>
                                                <Typography fontWeight={800} sx={{ color: '#378add', mb: 0.5 }}>
                                                    {typeof item === 'string' ? item : item.t}
                                                </Typography>
                                                {typeof item !== 'string' && item.d && <Typography variant="body2" sx={{ opacity: 0.8 }}>{item.d}</Typography>}
                                                {i < arr.length - 1 && <Divider sx={{ mt: 2, background: 'rgba(255,255,255,0.1)' }} />}
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>

                                {/* Decorative Background Circle */}
                                <Box sx={{
                                    position: 'absolute', top: '-10%', right: '-10%',
                                    width: '200px', height: '200px',
                                    background: 'rgba(55,138,221,0.2)',
                                    borderRadius: '50%', filter: 'blur(40px)'
                                }} />
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SeoContent;
