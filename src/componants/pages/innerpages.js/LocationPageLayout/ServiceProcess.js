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

const ServiceProcess = ({ location, serviceType, process = {} }) => {
    const steps = Array.isArray(process) ? process : (process.steps || []);
    const headerTitle = process.title || `How We Deliver Excellence in ${location}`;
    const headerBadge = process.badge || "Our Strategic Process";

    return (
        <Box sx={{ background: "linear-gradient(180deg, #f8fbff 0%, #e6f1fb 100%)", py: { xs: "36px", md: "80px" } }}>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={{ xs: 1.5, md: 2 }} mb={{ xs: 4, md: 8 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Chip
                            label={headerBadge}
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
                        <Typography variant="h3" fontWeight={900} color="#042c53" textAlign="center"
                            sx={{ fontSize: { xs: "22px", sm: "28px", md: "3rem" }, px: { xs: 1, md: 0 } }}>
                            {headerTitle}
                        </Typography>
                    </motion.div>
                </Stack>

                <Grid container spacing={{ xs: 2, md: 4 }}>
                    {steps.map((step, index) => (
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
                                            width: { xs: 60, md: 80 },
                                            height: { xs: 60, md: 80 },
                                            borderRadius: "50%",
                                            background: "#fff",
                                            border: "2px dashed #378add",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mb: 2,
                                            position: "relative",
                                            "&::after": index < steps.length - 1 ? {
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
                                        <Typography variant="h4" fontWeight={900} color="#0c447c"
                                            sx={{ fontSize: { xs: "20px", md: "2.125rem" } }}>
                                            {step.number || `0${index + 1}`}
                                        </Typography>
                                    </Box>

                                    <Typography variant="h6" fontWeight={800} color="#042c53" mb={1}
                                        sx={{ fontSize: { xs: "13px", md: '1rem' } }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" color="#4a5568" lineHeight={1.6}
                                        sx={{ fontSize: { xs: "12px", md: "14px" } }}>
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