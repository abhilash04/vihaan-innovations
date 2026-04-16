import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Chip,
    Stack,
    Paper,
} from "@mui/material";
import { motion } from "framer-motion";

const ServiceProcess = ({ location, serviceType, process = [] }) => {
    return (
        <Box sx={{ background: "linear-gradient(180deg, #f8fbff 0%, #e6f1fb 100%)", py: "60px" }}>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={2} mb={4}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Chip
                            label="Our Strategic Process"
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
                            How We Deliver Excellence in {location}
                        </Typography>
                    </motion.div>
                </Stack>

                <Grid container spacing={4}>
                    {process.map((step, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        background: "transparent",
                                        textAlign: "center",
                                        p: 2,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: "50%",
                                            background: "#fff",
                                            border: "2px dashed #378add",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mb: 2,
                                            position: "relative",
                                            "&::after": index < process.length - 1 ? {
                                                content: '""',
                                                position: "absolute",
                                                right: -40,
                                                top: "50%",
                                                width: 40,
                                                height: 2,
                                                background: "#378add",
                                                display: { xs: "none", lg: "block" }
                                            } : {}
                                        }}
                                    >
                                        <Typography variant="h4" fontWeight={900} color="#0c447c">
                                            {step.number}
                                        </Typography>
                                    </Box>

                                    <Typography variant="h6" fontWeight={800} color="#042c53" mb={1} sx={{ fontSize: '1rem' }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" color="#4a5568" lineHeight={1.6}>
                                        {step.desc}
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

export default ServiceProcess;