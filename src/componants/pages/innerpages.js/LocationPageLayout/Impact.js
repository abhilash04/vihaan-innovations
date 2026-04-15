import React from "react";
import {
    Box,
    Container,
    Typography,
    Chip,
    Grid,
    Paper,
    Stack,
} from "@mui/material";
import { motion } from "framer-motion";

const metrics = [
    { num: "200+", label: "Projects Delivered", progress: 88, icon: "🚀" },
    { num: "98%", label: "Client Satisfaction", progress: 98, icon: "⭐" },
    { num: "50-", label: "Expert Engineers", progress: 70, icon: "👨‍💻" },
    { num: "8yr+", label: "Market Excellence", progress: 85, icon: "🏆" },
];

const ImpactSection = ({ location }) => {
    return (
        <Box sx={{ background: "#e6f1fb", py: "60px" }}>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={2} mb={4}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Chip
                            label="Our Global Impact"
                            sx={{
                                background: "#0c447c",
                                color: "#fff",
                                fontWeight: 700,
                                borderRadius: "8px",
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Typography variant="h3" fontWeight={900} color="#042c53" textAlign="center">
                            Proven Success in {location} & Beyond
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Typography color="#378add" textAlign="center" sx={{ maxWidth: "700px", fontSize: "1.1rem" }}>
                            Our track record of delivering high-impact digital solutions speaks for itself.
                        </Typography>
                    </motion.div>
                </Stack>

                <Grid container spacing={4}>
                    {metrics.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: "100%",
                                        borderRadius: "24px",
                                        background: "rgba(255, 255, 255, 0.7)",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(133, 183, 235, 0.3)",
                                        textAlign: "center",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            background: "#fff",
                                            boxShadow: "0 20px 40px rgba(12, 68, 124, 0.1)",
                                        }
                                    }}
                                >
                                    <Box sx={{ fontSize: "40px", mb: 2 }}>{item.icon}</Box>
                                    <Typography variant="h3" sx={{ fontWeight: 900, color: "#0c447c", mb: 1 }}>
                                        {item.num}
                                    </Typography>
                                    <Typography sx={{ color: "#378add", fontWeight: 700, fontSize: "0.9rem", mb: 3 }}>
                                        {item.label}
                                    </Typography>

                                    <Box sx={{ height: 6, width: "100%", background: "#e6f1fb", borderRadius: 3, overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                            style={{ height: "100%", background: "#185fa5" }}
                                        />
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

export default ImpactSection;