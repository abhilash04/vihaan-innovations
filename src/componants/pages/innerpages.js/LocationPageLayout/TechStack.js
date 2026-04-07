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

const TechStackSection = ({ location, serviceType, techStack = [] }) => {
    return (
        <Box sx={{ background: "#ffffff", py: "80px" }}>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={2} mb={8}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Chip
                            label="Our Tech Stack"
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
                            Powering {location} with Modern Tools
                        </Typography>
                    </motion.div>
                </Stack>

                <Grid container spacing={3} justifyContent="center">
                    {techStack.map((tech, index) => (
                        <Grid item xs={6} sm={4} md={2} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        textAlign: "center",
                                        background: "#f8fbff",
                                        borderRadius: "20px",
                                        border: "1px solid #e6f1fb",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            background: "#fff",
                                            transform: "translateY(-5px)",
                                            boxShadow: "0 10px 20px rgba(12, 68, 124, 0.05)",
                                            borderColor: "#185fa5",
                                        },
                                    }}
                                >
                                    <Box sx={{ fontSize: "32px", mb: 1 }}>{tech.icon}</Box>
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 800,
                                            color: "#0c447c",
                                        }}
                                    >
                                        {tech.name}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TechStackSection;