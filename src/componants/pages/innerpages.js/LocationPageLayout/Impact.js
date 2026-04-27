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
    { num: "50+", label: "Expert Engineers", progress: 70, icon: "👨‍💻" },
    { num: "8yr+", label: "Market Excellence", progress: 85, icon: "🏆" },
];

const ImpactSection = ({ location, content }) => {
    const displayMetrics = content?.stats || metrics;

    return (
        <Box sx={{ background: "#e6f1fb", py: { xs: "36px", md: "60px" } }}>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={{ xs: 1.5, md: 2 }} mb={{ xs: 3, md: 4 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Chip
                            label={content?.badge || "Our Global Impact"}
                            sx={{
                                background: "#0c447c",
                                color: "#fff",
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
                            {content?.title || `Proven Success in ${location} & Beyond`}
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
                            {content?.description || "Our track record of delivering high-impact digital solutions speaks for itself."}
                        </Typography>
                    </motion.div>
                </Stack>

                <Grid container spacing={{ xs: 2, md: 4 }}>
                    {displayMetrics.map((item, index) => (
                        <Grid item xs={6} sm={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 2, md: 4 },
                                        height: "100%",
                                        borderRadius: { xs: "16px", md: "24px" },
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
                                    <Box sx={{ fontSize: { xs: "28px", md: "40px" }, mb: { xs: 1, md: 2 } }}>
                                        {item.icon || "📈"}
                                    </Box>
                                    <Typography
                                        variant="h3"
                                        sx={{ fontWeight: 900, color: "#0c447c", mb: 0.5, fontSize: { xs: "26px", md: "3rem" } }}
                                    >
                                        {item.num || item.value}
                                    </Typography>
                                    <Typography
                                        sx={{ color: "#378add", fontWeight: 700, fontSize: { xs: "11px", md: "0.9rem" }, mb: { xs: 1.5, md: 3 } }}
                                    >
                                        {item.label}
                                    </Typography>

                                    <Box sx={{ height: 5, width: "100%", background: "#e6f1fb", borderRadius: 3, overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.progress || 90}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                            style={{ height: "100%", background: "#185fa5", borderRadius: 3 }}
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