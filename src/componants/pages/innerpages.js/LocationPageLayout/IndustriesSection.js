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
    const isArray = Array.isArray(industriesList);
    const displayList = isArray ? industriesList : (industriesList.list || []);
    const headerTitle = industriesList.title || `Empowering Diverse Sectors in ${location}`;
    const headerBadge = industriesList.badge || "Industries We Serve";

    return (
        <Box sx={{ background: "#f8fbff", py: { xs: "36px", md: "80px" } }}>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={{ xs: 1.5, md: 2 }} mb={{ xs: 4, md: 8 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
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

                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {displayList.map((item, index) => (
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
                                        p: { xs: 2, md: 4 },
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
                                            width: { xs: 48, md: 64 },
                                            height: { xs: 48, md: 64 },
                                            mb: { xs: 1.5, md: 2 },
                                            borderRadius: "14px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: { xs: "24px", md: "32px" },
                                            background: "#e6f1fb",
                                            transition: "0.3s"
                                        }}
                                    >
                                        {item.icon || "🏢"}
                                    </Box>
                                    <Typography
                                        className="icon-text"
                                        sx={{
                                            fontSize: { xs: "13px", md: "1rem" },
                                            fontWeight: 800,
                                            color: "#042c53",
                                            transition: "0.3s"
                                        }}
                                    >
                                        {item.name || item}
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