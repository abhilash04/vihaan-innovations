import React from "react";
import {
    Box,
    Container,
    Typography,
    Chip,
    Paper,
    Stack,
    Grid,
} from "@mui/material";
import { motion } from "framer-motion";

const ServicesSection = ({ location, serviceType, services = [] }) => {
    return (
        <Box sx={{ background: "#f8fbff", py: "80px" }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Stack alignItems="center" spacing={2} mb={8}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Chip
                            label="Specialized Services"
                            sx={{
                                background: "#e6f1fb",
                                color: "#0c447c",
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
                            Comprehensive {serviceType} in {location}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Typography color="#378add" textAlign="center" sx={{ maxWidth: "700px", fontSize: "1.1rem" }}>
                            We provide end-to-end digital excellence tailored for businesses in {location}. 
                            Our solutions are designed to scale and succeed.
                        </Typography>
                    </motion.div>
                </Stack>

                {/* Services Grid */}
                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        background: "#fff",
                                        border: "1px solid #e0e0e0",
                                        borderRadius: "24px",
                                        p: 4,
                                        height: "100%",
                                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "relative",
                                        overflow: "hidden",
                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            borderColor: "#185fa5",
                                            boxShadow: "0 20px 40px rgba(24, 95, 165, 0.1)",
                                            "& .icon-box": {
                                                background: "#0c447c",
                                                color: "#fff",
                                            }
                                        },
                                    }}
                                >
                                    <Box sx={{ position: "relative", zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        {/* Icon */}
                                        <Box
                                            className="icon-box"
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: "16px",
                                                background: "#e6f1fb",
                                                color: "#0c447c",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "28px",
                                                mb: 3,
                                                transition: "all 0.3s",
                                            }}
                                        >
                                            {service.icon}
                                        </Box>

                                        {/* Title */}
                                        <Typography variant="h5" fontWeight={800} color="#042c53" mb={2}>
                                            {service.title}
                                        </Typography>

                                        {/* Description */}
                                        <Typography fontSize="14px" color="#4a5568" lineHeight={1.6} mb={3}>
                                            {service.desc}
                                        </Typography>

                                        {/* Tags */}
                                        <Stack direction="row" flexWrap="wrap" gap={1} mt="auto">
                                            {service.tags && service.tags.map((tag, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        background: "rgba(24, 95, 165, 0.05)",
                                                        color: "#185fa5",
                                                        border: "1px solid rgba(24, 95, 165, 0.1)",
                                                        fontSize: "10px",
                                                        fontWeight: 600,
                                                    }}
                                                />
                                            ))}
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

export default ServicesSection;