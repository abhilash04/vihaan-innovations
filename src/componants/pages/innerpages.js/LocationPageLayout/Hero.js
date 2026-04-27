import React from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Chip,
    Paper,
} from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = ({ location, serviceType, content }) => {
    return (
        <Box
            sx={{
                background: "linear-gradient(135deg, #e6f1fb 0%, #b5d4f4 100%)",
                minHeight: { xs: "auto", md: "90vh" },
                textAlign: "center",
                position: "relative",
                pt: { xs: 10, md: 12 },
                pb: { xs: 6, md: 0 },
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Chip
                        label={content.badge || `${location}'s #1 Tech Partner`}
                        sx={{
                            mb: { xs: 2, md: 3 },
                            background: "rgba(255, 255, 255, 0.5)",
                            backdropFilter: "blur(4px)",
                            color: "#0c447c",
                            border: "1px solid #85b7eb",
                            fontWeight: 600,
                            fontSize: { xs: "12px", md: "13px" },
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "26px", sm: "36px", md: "clamp(32px, 6vw, 56px)" },
                            fontWeight: 900,
                            color: "#042c53",
                            lineHeight: 1.15,
                            px: { xs: 1, md: 0 },
                        }}
                    >
                        {content.title}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            mt: { xs: 1.5, md: 2 },
                            color: "#185fa5",
                            maxWidth: "700px",
                            mx: "auto",
                            fontSize: { xs: "14px", md: "1.1rem" },
                            lineHeight: 1.7,
                            px: { xs: 1, md: 0 },
                        }}
                    >
                        {content.subtext}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent="center"
                        sx={{ mt: { xs: 2.5, md: 2 }, px: { xs: 2, md: 0 } }}
                    >
                        <Button
                            variant="contained"
                            fullWidth={false}
                            sx={{
                                background: "#0c447c",
                                color: "#fff",
                                borderRadius: "12px",
                                px: { xs: 3, md: 4 },
                                py: { xs: 1.4, md: 1.8 },
                                fontSize: { xs: "14px", md: "1rem" },
                                textTransform: "none",
                                fontWeight: 700,
                                boxShadow: "0 10px 20px rgba(12, 68, 124, 0.2)",
                                "&:hover": {
                                    background: "#0a3a69",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            Get Started Free ↗
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: "#0c447c",
                                color: "#0c447c",
                                borderRadius: "12px",
                                px: { xs: 3, md: 4 },
                                py: { xs: 1.4, md: 1.8 },
                                fontSize: { xs: "14px", md: "1rem" },
                                textTransform: "none",
                                fontWeight: 700,
                                "&:hover": {
                                    borderColor: "#0a3a69",
                                    background: "rgba(12, 68, 124, 0.05)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            View Portfolio
                        </Button>
                    </Stack>
                </motion.div>

                {/* Stats */}
                <Box sx={{ mt: { xs: 4, md: 6 }, pb: { xs: 1, md: 0 } }}>
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        gap={{ xs: 1.5, md: 4 }}
                    >
                        {(content.stats || [
                            { value: "500+", label: `${location} Clients` },
                            { value: "99%", label: "Local Success Rate" },
                            { value: "24/7", label: "Direct Support" },
                        ]).map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        background: "rgba(255, 255, 255, 0.4)",
                                        backdropFilter: "blur(10px)",
                                        p: { xs: 1.5, md: 2 },
                                        minWidth: { xs: "100px", md: "140px" },
                                        borderRadius: "16px",
                                        border: "1px solid rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 800,
                                            color: "#0c447c",
                                            fontSize: { xs: "22px", md: "2.125rem" },
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: "#378add",
                                            fontWeight: 600,
                                            fontSize: { xs: "11px", md: "12px" },
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;