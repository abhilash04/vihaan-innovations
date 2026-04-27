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

const ServicesSection = ({ location, serviceType, services = [], customServicesHeaders }) => {
    return (
        <Box sx={{ background: "#f8fbff", py: { xs: "36px", md: "50px" } }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Stack alignItems="center" spacing={{ xs: 1.5, md: 2 }} mb={{ xs: 4, md: 8 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Chip
                            label={customServicesHeaders?.badge || "Specialized Services"}
                            sx={{
                                background: "#e6f1fb",
                                color: "#0c447c",
                                fontWeight: 700,
                                borderRadius: "8px",
                                fontSize: { xs: "12px", md: "13px" },
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Typography
                            variant="h3"
                            fontWeight={900}
                            color="#042c53"
                            textAlign="center"
                            sx={{ fontSize: { xs: "22px", sm: "28px", md: "3rem" }, px: { xs: 1, md: 0 } }}
                        >
                            {customServicesHeaders?.title || `Comprehensive ${serviceType} in ${location}`}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Typography
                            color="#378add"
                            textAlign="center"
                            sx={{ maxWidth: "700px", fontSize: { xs: "13px", md: "1.1rem" }, px: { xs: 1, md: 0 } }}
                        >
                            {customServicesHeaders?.description || `We provide end-to-end digital excellence tailored for businesses in ${location}. Our solutions are designed to scale and succeed.`}
                        </Typography>
                    </motion.div>
                </Stack>

                {/* Services Grid */}
                <Grid container spacing={{ xs: 2, md: 4 }} alignItems="stretch">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                style={{ width: "100%" }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        background: "#fff",
                                        border: "1px solid #e0e0e0",
                                        borderRadius: { xs: "16px", md: "24px" },
                                        p: { xs: 2.5, md: 4 },
                                        height: "80%",
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
                                    <Box sx={{ position: "relative", zIndex: 1, display: 'flex', flexDirection: 'column', height: '80%' }}>
                                        {/* Icon */}
                                        <Box
                                            className="icon-box"
                                            sx={{
                                                width: { xs: 48, md: 60 },
                                                height: { xs: 48, md: 60 },
                                                borderRadius: "14px",
                                                background: "#e6f1fb",
                                                color: "#0c447c",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: { xs: "22px", md: "28px" },
                                                mb: { xs: 2, md: 3 },
                                                transition: "all 0.3s",
                                            }}
                                        >
                                            {service.icon}
                                        </Box>

                                        {/* Title */}
                                        <Typography
                                            variant="h5"
                                            fontWeight={800}
                                            color="#042c53"
                                            mb={{ xs: 1, md: 2 }}
                                            sx={{ fontSize: { xs: "16px", md: "1.5rem" } }}
                                        >
                                            {service.title}
                                        </Typography>

                                        {/* Description */}
                                        <Typography
                                            sx={{ fontSize: { xs: "13px", md: "14px" }, color: "#4a5568", lineHeight: 1.6, mb: { xs: 2, md: 3 } }}
                                        >
                                            {service.desc}
                                        </Typography>

                                        {/* Tags */}
                                        <Stack direction="row" flexWrap="wrap" gap={0.8} mt="auto">
                                            {service.tags && service.tags.map((tag, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        background: "rgba(24, 95, 165, 0.05)",
                                                        color: "#185fa5",
                                                        border: "1px solid rgba(24, 95, 165, 0.1)",
                                                        fontSize: { xs: "9px", md: "10px" },
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