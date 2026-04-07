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

const IndustriesSection = ({ location, serviceType, industriesList = [] }) => {
    return (
        <Box sx={{ background: "#f8fbff", py: "80px" }}>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={2} mb={8}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Chip
                            label="Industries We Serve"
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
                            Empowering Diverse Sectors in {location}
                        </Typography>
                    </motion.div>
                </Stack>

                <Grid container spacing={3}>
                    {industriesList.map((item, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        background: "#fff",
                                        border: "1px solid #e6f1fb",
                                        borderRadius: "20px",
                                        p: 4,
                                        height: "100%",
                                        textAlign: "center",
                                        transition: "all 0.3s",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        "&:hover": {
                                            background: "linear-gradient(135deg, #0c447c 0%, #185fa5 100%)",
                                            transform: "scale(1.05)",
                                            "& .icon-text": { color: "#fff" },
                                            "& .icon-bg": { background: "rgba(255,255,255,0.15)" }
                                        },
                                    }}
                                >
                                    <Box
                                        className="icon-bg"
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            mb: 2,
                                            borderRadius: "16px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "32px",
                                            background: "#e6f1fb",
                                            transition: "0.3s"
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Typography
                                        className="icon-text"
                                        sx={{
                                            fontSize: "1rem",
                                            fontWeight: 800,
                                            color: "#042c53",
                                            transition: "0.3s"
                                        }}
                                    >
                                        {item.name}
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

export default IndustriesSection;